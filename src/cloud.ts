// ============================================================
//  cloud.ts — Capa de nube (Supabase) para la Vitrina v2
//  - Login real (Supabase Auth, verificado en el servidor).
//  - Cargar / guardar la configuración publicada (catálogo, planes, diseño).
//  La anon key es pública (segura de exponer). La seguridad real la dan
//  el login del servidor + las políticas RLS de la tabla vitrina_v2_config.
// ============================================================

const SB_URL = 'https://pcxlhgdpxfuybzfsquem.supabase.co';
const SB_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeGxoZ2RweGZ1eWJ6ZnNxdWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MDIyOTQsImV4cCI6MjA5NjE3ODI5NH0.HJWpFO8TkRsmUx15GtSsUusjvVEhUsi5b_QGoPoPU00';

const SESSION_KEY = 'vitrina_v2_sb_session';

export interface CloudSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: number; // epoch seconds
  email: string;
}

function saveSession(s: CloudSession) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export function getSession(): CloudSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as CloudSession;
    if (!s.accessToken || !s.expiresAt) return null;
    if (s.expiresAt * 1000 < Date.now() + 5000) return null; // vencida
    return s;
  } catch {
    return null;
  }
}

export function signOut() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}

// Login por email + contraseña (Supabase Auth)
export async function signIn(
  email: string,
  password: string
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${SB_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: SB_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.trim(), password }),
    });
    const json = await res.json();
    if (!res.ok || !json.access_token) {
      return { ok: false, error: json.error_description || json.msg || 'Email o clave incorrectos.' };
    }
    const s: CloudSession = {
      accessToken: json.access_token,
      refreshToken: json.refresh_token,
      expiresAt: Math.floor(Date.now() / 1000) + (json.expires_in || 3600),
      email: json.user?.email || email.trim(),
    };
    saveSession(s);
    return { ok: true };
  } catch (e) {
    return { ok: false, error: 'No se pudo conectar. Revisá tu internet.' };
  }
}

// Lee la configuración publicada (pública). Devuelve el objeto data o null.
export async function loadConfig(): Promise<any | null> {
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/vitrina_v2_config?id=eq.main&select=data`,
      { headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` } }
    );
    if (!res.ok) return null;
    const rows = await res.json();
    const data = rows?.[0]?.data;
    if (data && (Array.isArray(data.apps) || Array.isArray(data.pricingPlans))) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}

// ============================================================
//  SOLICITUDES (leads / mensajes de contacto)
// ============================================================

export interface LeadInput {
  businessName?: string;
  ownerName?: string;
  phone?: string;
  email?: string;
  rubro?: string;
  appName?: string;
  notes?: string;
}

export interface CloudLead {
  id: string;
  business_name: string | null;
  owner_name: string | null;
  phone: string | null;
  email: string | null;
  rubro: string | null;
  app_name: string | null;
  notes: string | null;
  is_read: boolean;
  created_at: string;
}

// Guarda una solicitud nueva (pública, cualquier visitante). Devuelve ok.
export async function addLead(lead: LeadInput): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${SB_URL}/rest/v1/vitrina_v2_leads`, {
      method: 'POST',
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        business_name: lead.businessName || null,
        owner_name: lead.ownerName || null,
        phone: lead.phone || null,
        email: lead.email || null,
        rubro: lead.rubro || null,
        app_name: lead.appName || null,
        notes: lead.notes || null,
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      return { ok: false, error: t || 'No se pudo enviar la solicitud.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'No se pudo conectar para enviar la solicitud.' };
  }
}

// Lista las solicitudes (solo admin logueado). Las más nuevas primero.
export async function listLeads(): Promise<CloudLead[]> {
  const s = getSession();
  if (!s) return [];
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/vitrina_v2_leads?select=*&order=created_at.desc`,
      { headers: { apikey: SB_KEY, Authorization: `Bearer ${s.accessToken}` } }
    );
    if (!res.ok) return [];
    const rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

// Marca una solicitud como leída / contactada (solo admin).
export async function markLeadRead(id: string, isRead = true): Promise<boolean> {
  const s = getSession();
  if (!s) return false;
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/vitrina_v2_leads?id=eq.${encodeURIComponent(id)}`,
      {
        method: 'PATCH',
        headers: {
          apikey: SB_KEY,
          Authorization: `Bearer ${s.accessToken}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ is_read: isRead }),
      }
    );
    return res.ok;
  } catch {
    return false;
  }
}

// Elimina una solicitud (solo admin).
export async function deleteLead(id: string): Promise<boolean> {
  const s = getSession();
  if (!s) return false;
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/vitrina_v2_leads?id=eq.${encodeURIComponent(id)}`,
      {
        method: 'DELETE',
        headers: {
          apikey: SB_KEY,
          Authorization: `Bearer ${s.accessToken}`,
          Prefer: 'return=minimal',
        },
      }
    );
    return res.ok;
  } catch {
    return false;
  }
}

// Guarda (publica) la configuración. Requiere sesión de admin válida.
export async function saveConfig(
  data: unknown
): Promise<{ ok: boolean; error?: string }> {
  const s = getSession();
  if (!s) return { ok: false, error: 'Sesión vencida. Volvé a iniciar sesión.' };
  try {
    const res = await fetch(`${SB_URL}/rest/v1/vitrina_v2_config`, {
      method: 'POST',
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${s.accessToken}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify({ id: 'main', data, updated_at: new Date().toISOString() }),
    });
    if (!res.ok) {
      const t = await res.text();
      return { ok: false, error: t || 'No se pudo guardar en la nube.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'No se pudo conectar para guardar.' };
  }
}

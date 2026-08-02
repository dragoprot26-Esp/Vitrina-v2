import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Shield,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Users,
  Headphones,
  DollarSign,
  Layers,
  Sparkles,
  Search,
  Lock,
  Key,
  MessageSquare,
  Palette,
  Check,
  Fingerprint,
  ScanFace,
  User,
  Zap,
  Briefcase,
  Building2,
  Save,
  CheckSquare,
  Square,
  ArrowRight,
  Send,
  Phone,
  Mail,
  ExternalLink,
  Clock,
  ArrowUpRight,
  Download,
  Upload
} from 'lucide-react';
import { AppShowcase, AppCategory, SupportTicket, AppRentalLead, PageModel, PricingPlan, DemoTenant } from '../types';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  apps: AppShowcase[];
  onAddApp: (newApp: AppShowcase) => void;
  onUpdateApp: (updatedApp: AppShowcase) => void;
  onDeleteApp: (appId: string) => void;
  currentModel?: PageModel;
  onModelChange?: (model: PageModel) => void;
  pricingPlans?: PricingPlan[];
  onUpdatePricingPlan?: (updatedPlan: PricingPlan) => void;
  onImportConfig?: (data: { apps?: AppShowcase[]; pricingPlans?: PricingPlan[]; currentModel?: PageModel }) => void;
  onPublish?: () => Promise<{ ok: boolean; error?: string }>;
  onLogout?: () => void;
}


interface PlanConfigEditorProps {
  planId: string;
  defaultPlan: PricingPlan;
  tabLabel: string;
  onSavePlan: (updated: PricingPlan) => void;
}

const PlanConfigEditor: React.FC<PlanConfigEditorProps> = ({
  planId,
  defaultPlan,
  tabLabel,
  onSavePlan,
}) => {
  const [draft, setDraft] = useState<PricingPlan>({ ...defaultPlan });
  const [newFeatureText, setNewFeatureText] = useState<string>('');
  const [savedSuccessMsg, setSavedSuccessMsg] = useState<boolean>(false);

  React.useEffect(() => {
    setDraft({ ...defaultPlan });
  }, [defaultPlan]);

  const handleToggleActive = () => {
    const nextState = !draft.isActive;
    const updated = { ...draft, isActive: nextState };
    setDraft(updated);
    onSavePlan(updated);
    setSavedSuccessMsg(true);
    setTimeout(() => setSavedSuccessMsg(false), 2500);
  };

  const handleToggleHighlight = () => {
    const nextHighlight = !draft.highlight;
    const updated = { ...draft, highlight: nextHighlight };
    setDraft(updated);
    onSavePlan(updated);
  };

  const handleAddFeature = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeatureText.trim()) return;
    setDraft((prev) => ({
      ...prev,
      features: [...prev.features, newFeatureText.trim()],
    }));
    setNewFeatureText('');
  };

  const handleUpdateFeature = (index: number, val: string) => {
    setDraft((prev) => {
      const updated = [...prev.features];
      updated[index] = val;
      return { ...prev, features: updated };
    });
  };

  const handleRemoveFeature = (index: number) => {
    setDraft((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmitSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSavePlan(draft);
    setSavedSuccessMsg(true);
    setTimeout(() => setSavedSuccessMsg(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#1A1C20] p-4 border border-[#C5A059]/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0F1012] border border-[#C5A059] text-[#C5A059] flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-serif font-bold text-white">Configuración: {tabLabel}</h3>
              {draft.isActive ? (
                <span className="px-2.5 py-0.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-wider font-mono flex items-center gap-1">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>Visible con Tilde</span>
                </span>
              ) : (
                <span className="px-2.5 py-0.5 bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold uppercase tracking-wider font-mono">
                  Oculto en Página Pública
                </span>
              )}
            </div>
            <p className="text-xs text-[#F9F6F0]/60 mt-0.5">
              Administrá los datos del plan, precio mensual, viñetas de características y la tilde de visibilidad pública.
            </p>
          </div>
        </div>

        {/* Tilde Checkbox Switch Button */}
        <button
          type="button"
          onClick={handleToggleActive}
          className={`px-4 py-2.5 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border ${
            draft.isActive
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-500/30'
              : 'bg-[#0F1012] text-white/60 border-white/20 hover:text-white'
          }`}
        >
          {draft.isActive ? (
            <>
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span>Con Tilde (Visible en la Web)</span>
            </>
          ) : (
            <>
              <Square className="w-4 h-4 text-white/40" />
              <span>Sin Tilde (Ocultar en la Web)</span>
            </>
          )}
        </button>
      </div>

      {savedSuccessMsg && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono text-center flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>¡Cambios guardados correctamente en la vitrina pública!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Plan Settings Form */}
        <form onSubmit={handleSubmitSave} className="lg:col-span-7 bg-[#1A1C20] p-6 border border-white/10 space-y-4">
          <div className="border-b border-white/10 pb-3 font-serif font-bold text-white text-sm uppercase tracking-wider text-[#C5A059]">
            Editar Datos del Plan
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider font-bold">
                Nombre / Título del Plan
              </label>
              <input
                type="text"
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                className="w-full bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-sans"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider font-bold">
                Etiqueta Badge (Ej: MÁS POPULAR)
              </label>
              <input
                type="text"
                value={draft.badge}
                onChange={(e) => setDraft({ ...draft, badge: e.target.value })}
                className="w-full bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider font-bold">
              Subtítulo / Descripción
            </label>
            <textarea
              rows={2}
              value={draft.description}
              onChange={(e) => setDraft({ ...draft, description: e.target.value })}
              className="w-full bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-sans leading-relaxed"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider font-bold">
                Precio (Monto)
              </label>
              <input
                type="number"
                value={draft.price}
                onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })}
                className="w-full bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono font-bold text-[#C5A059]"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider font-bold">
                Moneda
              </label>
              <input
                type="text"
                value={draft.currency}
                onChange={(e) => setDraft({ ...draft, currency: e.target.value })}
                className="w-full bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider font-bold">
                Período
              </label>
              <input
                type="text"
                value={draft.period}
                onChange={(e) => setDraft({ ...draft, period: e.target.value })}
                className="w-full bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider font-bold">
              Nota o Leyenda bajo el Precio
            </label>
            <input
              type="text"
              value={draft.priceNote || '* Llave en mano en 24hs. Cancelás cuando quieras.'}
              onChange={(e) => setDraft({ ...draft, priceNote: e.target.value })}
              className="w-full bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id={`highlight-${planId}`}
              checked={draft.highlight || false}
              onChange={handleToggleHighlight}
              className="w-4 h-4 accent-[#C5A059] cursor-pointer"
            />
            <label htmlFor={`highlight-${planId}`} className="text-xs text-[#F9F6F0]/90 font-mono cursor-pointer">
              Destacar esta tarjeta con borde dorado grueso (MÁS POPULAR)
            </label>
          </div>

          {/* Features / Bullet Points List Management */}
          <div className="space-y-3 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-[#C5A059] uppercase tracking-wider font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Características / Ítems Incluidos ({draft.features.length})</span>
              </label>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {draft.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#0F1012] p-1.5 border border-white/5">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <input
                    type="text"
                    value={feat}
                    onChange={(e) => handleUpdateFeature(idx, e.target.value)}
                    className="flex-1 bg-transparent text-xs text-white focus:outline-none focus:border-b border-[#C5A059]"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(idx)}
                    className="p-1 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
                    title="Eliminar característica"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add New Feature */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                placeholder="Ej: Soporte Técnico Prioritario SLA 2 horas"
                value={newFeatureText}
                onChange={(e) => setNewFeatureText(e.target.value)}
                className="flex-1 bg-[#0F1012] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-3 py-2 bg-[#1A1C20] border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059]/10 font-bold text-xs uppercase tracking-wider flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Agregar</span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2 shadow-lg mt-4"
          >
            <Save className="w-4 h-4" />
            <span>Guardar Cambios de {tabLabel}</span>
          </button>
        </form>

        {/* Live Preview Card */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-[#F9F6F0]/60 uppercase tracking-wider font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Vista Previa en Vivo (Página Pública)</span>
          </div>

          <div
            className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              draft.highlight
                ? 'bg-[#1A1C20] border-2 border-[#C5A059] shadow-2xl relative'
                : 'bg-[#1A1C20] border border-white/10'
            } ${!draft.isActive ? 'opacity-50 grayscale hover:grayscale-0' : ''}`}
          >
            <div>
              {draft.badge && (
                <span
                  className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-mono mb-4 ${
                    draft.highlight
                      ? 'bg-[#C5A059] text-black font-extrabold'
                      : 'bg-[#0F1012] text-[#C5A059] border border-[#C5A059]/30'
                  }`}
                >
                  {draft.badge}
                </span>
              )}

              <h3 className="text-2xl font-serif font-bold text-[#F9F6F0]">{draft.name}</h3>
              <p className="text-xs text-[#F9F6F0]/70 mt-2 leading-relaxed">
                {draft.description}
              </p>

              <div className="my-6 border-y border-white/10 py-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-[#C5A059]">
                    ${draft.price.toLocaleString('es-AR')}
                  </span>
                  <span className="text-xs text-[#F9F6F0]/60 font-mono">
                    {draft.currency}{draft.period}
                  </span>
                </div>
                <p className="text-[11px] text-[#F9F6F0]/50 mt-1">
                  {draft.priceNote || '* Llave en mano en 24hs. Cancelás cuando quieras.'}
                </p>
              </div>

              <ul className="space-y-3 text-xs text-[#F9F6F0]/80">
                {draft.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-center">
              <span className={`inline-block w-full py-3 px-4 font-bold text-xs uppercase tracking-widest ${
                draft.highlight
                  ? 'bg-[#C5A059] text-black'
                  : 'bg-[#0F1012] text-[#C5A059] border border-[#C5A059]/40'
              }`}>
                Elegir {draft.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  apps,
  onAddApp,
  onUpdateApp,
  onDeleteApp,
  currentModel = 'cyber-dark',
  onModelChange,
  pricingPlans = [],
  onUpdatePricingPlan,
  onImportConfig,
  onPublish,
  onLogout,
}) => {
  if (!isOpen) return null;

  // Security & Authentication Layer for Admin Shield
  // El acceso ya está protegido por el candado (AdminAccessModal) antes de abrir
  // este panel, así que entramos ya autenticados y evitamos pedir clave dos veces.
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [userInput, setUserInput] = useState<string>('admin');
  const [passwordInput, setPasswordInput] = useState<string>('1234');
  const [authError, setAuthError] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'credentials' | 'biometric'>('credentials');
  const [isBiometricScanning, setIsBiometricScanning] = useState<boolean>(false);

  // Active Admin Sub-tab
  const [adminTab, setAdminTab] = useState<'apps' | 'tenants' | 'support' | 'leads' | 'plan-micro' | 'plan-pyme' | 'plan-empresas' | 'themes'>('apps');

  // Ref for the main scrollable admin panel content area
  const contentRef = useRef<HTMLDivElement>(null);

  // Exportar / Importar la configuración (apps + planes + diseño) como JSON
  const importInputRef = useRef<HTMLInputElement>(null);
  const handleExportConfig = () => {
    const data = {
      _tipo: 'vitrina-v2-config',
      version: 2,
      exportadoEl: new Date().toISOString(),
      apps,
      pricingPlans,
      currentModel,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vitrina-v2-config-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!data || (!Array.isArray(data.apps) && !Array.isArray(data.pricingPlans))) {
          alert('El archivo no parece una configuración válida de Vitrina v2.');
          return;
        }
        onImportConfig?.(data);
        alert('Configuración importada. Revisá el catálogo y los planes.');
      } catch {
        alert('El archivo no es un JSON válido.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Publicar (guardar en la nube) la configuración actual
  const [publishing, setPublishing] = useState<boolean>(false);
  const handlePublishClick = async () => {
    if (!onPublish || publishing) return;
    setPublishing(true);
    const r = await onPublish();
    setPublishing(false);
    alert(
      r.ok
        ? '✓ Publicado en la nube. Los visitantes ya ven estos cambios.'
        : 'No se pudo publicar: ' + (r.error || 'error desconocido')
    );
  };

  const microPlanA = pricingPlans.find((p) => p.id === 'micro-a') || pricingPlans.find((p) => p.id === 'micro') || {
    id: 'micro-a',
    name: 'Plan Micro-Emprendedor A',
    price: 10000,
    currency: 'ARS',
    period: '/mes',
    description: 'Ideal para profesionales independientes, manicuristas o masajistas que están comenzando.',
    badge: 'INICIAL',
    priceNote: '* Llave en mano en 24hs. Cancelás cuando quieras.',
    features: [
      '1 App Web Personalizada con Subdominio',
      'Catálogo/Turnero Interactivo Básico',
      'Integración Directa con WhatsApp Business',
      'Página Pública + Panel Admin Exclusivo',
      'Sin comisiones por turno o venta'
    ],
    highlight: false,
    isActive: true
  };

  const microPlanB = pricingPlans.find((p) => p.id === 'micro-b') || {
    id: 'micro-b',
    name: 'Plan Micro-Emprendedor B',
    price: 15000,
    currency: 'ARS',
    period: '/mes',
    description: 'Ideal para profesionales y pequeños locales con gestión de turnos y colaboradores.',
    badge: 'RECOMENDADO',
    priceNote: '* Llave en mano en 24hs. Cancelás cuando quieras.',
    features: [
      '1 App Web Personalizada con Dominio o Subdominio',
      'Página Pública + Panel Admin Exclusivo',
      'Agendamiento de Turnos + Recordatorios',
      'Hasta 2 Colaboradores / Ayudantes por App',
      'Notificaciones sonoras en tiempo real',
      'Soporte Técnico por WhatsApp incluido',
      'Sin comisiones por turno o venta'
    ],
    highlight: false,
    isActive: true
  };

  const microPlanC = pricingPlans.find((p) => p.id === 'micro-c') || {
    id: 'micro-c',
    name: 'Plan Micro-Emprendedor C',
    price: 18000,
    currency: 'ARS',
    period: '/mes',
    description: 'Para emprendedores con catálogo amplio, múltiples servicios y módulo de caja diario.',
    badge: 'COMPLETO',
    priceNote: '* Llave en mano en 24hs. Cancelás cuando quieras.',
    features: [
      'Todo lo del Plan Micro-Emprendedor B',
      'Catálogo Extendido e Imágenes HD',
      'Módulo de Control de Arqueo de Caja Diario',
      'Exportación de datos de clientes a Excel/CSV',
      'Soporte Técnico Preferencial WhatsApp'
    ],
    highlight: false,
    isActive: true
  };

  const pymePlan = pricingPlans.find((p) => p.id === 'pyme') || {
    id: 'pyme',
    name: 'Plan Negocio & Pyme',
    price: 22000,
    currency: 'ARS',
    period: '/mes',
    description: 'Perfecto para barberías, salones de belleza, pet shops y locales gastronómicos con equipo de trabajo.',
    badge: 'MÁS POPULAR',
    priceNote: '* Llave en mano en 24hs. Cancelás cuando quieras.',
    features: [
      'Todo lo del Plan Micro-Emprendedor',
      'Múltiples Colaboradores Ilimitados por App',
      'Asignación de 2do Administrador (Inquilino Co-Admin)',
      'Semáforo de disponibilidad y permisos por rol',
      'Generación de Código de Retiro Único (RET-XXXX)',
      'Notificaciones Push WebSockets en vivo',
      'Estadísticas y Reportes de Recaudación',
      'Soporte Técnico Prioritario SLA 2 horas'
    ],
    highlight: true,
    isActive: true
  };

  const franquiciaPlan = pricingPlans.find((p) => p.id === 'franquicia') || {
    id: 'franquicia',
    name: 'Plan Franquicia & Multi-Local',
    price: 45000,
    currency: 'ARS',
    period: '/mes',
    description: 'Diseñado para marcas con múltiples sucursales, cadenas o franquicias en expansión.',
    badge: 'EMPRESARIAL',
    priceNote: '* Llave en mano en 24hs. Cancelás cuando quieras.',
    features: [
      'Hasta 5 Apps Web para distintas sucursales o rubros',
      'Panel Central de Super-Administrador para franquiciante',
      'Aislamiento total de datos entre sucursales',
      'Desarrollo de campos dinámicos personalizados',
      'Soporte Técnico VIP 24/7 dedicado',
      'Asesoramiento en Marketing Digital e Integraciones'
    ],
    highlight: false,
    isActive: true
  };


  // Form State for Adding / Editing Apps
  const [isAddingApp, setIsAddingApp] = useState<boolean>(false);
  const [editingAppId, setEditingAppId] = useState<string | null>(null);

  // Auto scroll content container to top when changing tabs or toggling forms
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [adminTab, isAddingApp, editingAppId]);

  const [formName, setFormName] = useState('');
  const [formTagline, setFormTagline] = useState('');
  const [formCategory, setFormCategory] = useState<AppCategory>('barberia');
  const [formPrice, setFormPrice] = useState(15000);
  const [formBadge, setFormBadge] = useState('NUEVA APP');
  const [formBanner, setFormBanner] = useState('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');
  const [formFeatures, setFormFeatures] = useState('Turnos online, Control de personal, Notificaciones Push');

  // Mock Support Tickets
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([
    {
      id: 'TCK-101',
      appName: 'PRUEBA-UNO Barbería DiRasche',
      clientName: 'Diego Ariel (Barbería)',
      issue: 'Consulta para vincular la impresora de comandas por Bluetooth.',
      status: 'Resuelto',
      priority: 'Alta',
      createdAt: '31/07/2026 18:20',
    },
    {
      id: 'TCK-102',
      appName: 'Bellas Uñas Spa',
      clientName: 'Carla (Manicuría)',
      issue: 'Solicitud de agregar nueva manicurista a la agenda.',
      status: 'En Proceso',
      priority: 'Media',
      createdAt: '31/07/2026 19:10',
    },
  ]);

  // Mock Rental Leads
  const [leads, setLeads] = useState<AppRentalLead[]>([
    {
      id: 'LD-01',
      businessName: 'Barbería El Clan',
      ownerName: 'Marcos Fernández',
      phone: '+54 9 1144223311',
      email: 'marcos.clan@gmail.com',
      rubro: 'barberia',
      preferredPlan: 'pyme',
      status: 'Nuevo',
      createdAt: '31/07/2026 19:15',
    },
    {
      id: 'LD-02',
      businessName: 'Gourmet Hamburguesas',
      ownerName: 'Gastón Silva',
      phone: '+54 9 1122334455',
      email: 'gaston.burger@gmail.com',
      rubro: 'gastronomia',
      preferredPlan: 'micro',
      status: 'Contactado',
      createdAt: '31/07/2026 17:40',
    },
  ]);

  // Demo Tenants State (Inquilinos probando Demos en vivo)
  const [demoTenants, setDemoTenants] = useState<DemoTenant[]>([
    {
      id: 'DEMO-101',
      tenantName: 'Diego Ariel Rasche',
      businessName: 'Barbería DiRasche & Estilo',
      email: 'diegoariel21980@gmail.com',
      phone: '+54 9 11 5544-3322',
      appId: '1',
      appName: 'PRUEBA-UNO Barbería DiRasche',
      plan: 'pyme',
      status: 'En Prueba',
      trialDaysLeft: 7,
      notes: 'Solicitó acceso para probar el agendamiento de turnos y alertas sonoras.',
      createdAt: '31/07/2026 18:00',
    },
    {
      id: 'DEMO-102',
      tenantName: 'Carla Silveyra',
      businessName: 'Claris Boutique & Moda',
      email: 'carla.boutique@gmail.com',
      phone: '+54 9 11 6677-8899',
      appId: '2',
      appName: 'Boutique & Moda Urbana',
      plan: 'micro',
      status: 'En Prueba',
      trialDaysLeft: 4,
      notes: 'Inquilino probando catálogo de ropa con envío directo de pedidos a WhatsApp.',
      createdAt: '30/07/2026 12:30',
    },
  ]);

  // Demo Tenant Form State
  const [isAddingDemoTenant, setIsAddingDemoTenant] = useState<boolean>(false);
  const [editingDemoTenantId, setEditingDemoTenantId] = useState<string | null>(null);

  const [formTenantName, setFormTenantName] = useState('');
  const [formTenantBusiness, setFormTenantBusiness] = useState('');
  const [formTenantEmail, setFormTenantEmail] = useState('');
  const [formTenantPhone, setFormTenantPhone] = useState('');
  const [formTenantAppId, setFormTenantAppId] = useState('');
  const [formTenantPlan, setFormTenantPlan] = useState<'micro' | 'pyme' | 'franquicia'>('pyme');
  const [formTenantTrialDays, setFormTenantTrialDays] = useState(7);
  const [formTenantNotes, setFormTenantNotes] = useState('');
  const [formTenantStatus, setFormTenantStatus] = useState<'En Prueba' | 'Demo Vencida' | 'En Configuración' | 'Trasladado a Solicitud'>('En Prueba');

  const [transferToast, setTransferToast] = useState<string | null>(null);

  const resetDemoTenantForm = () => {
    setFormTenantName('');
    setFormTenantBusiness('');
    setFormTenantEmail('');
    setFormTenantPhone('');
    setFormTenantAppId(apps[0]?.id || '1');
    setFormTenantPlan('pyme');
    setFormTenantTrialDays(7);
    setFormTenantNotes('');
    setFormTenantStatus('En Prueba');
    setIsAddingDemoTenant(false);
    setEditingDemoTenantId(null);
  };

  const handleStartAddDemoTenant = () => {
    resetDemoTenantForm();
    setFormTenantAppId(apps[0]?.id || '1');
    setIsAddingDemoTenant(true);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const handleStartEditDemoTenant = (tenant: DemoTenant) => {
    setEditingDemoTenantId(tenant.id);
    setFormTenantName(tenant.tenantName);
    setFormTenantBusiness(tenant.businessName);
    setFormTenantEmail(tenant.email);
    setFormTenantPhone(tenant.phone);
    setFormTenantAppId(tenant.appId);
    setFormTenantPlan(tenant.plan);
    setFormTenantTrialDays(tenant.trialDaysLeft);
    setFormTenantNotes(tenant.notes);
    setFormTenantStatus(tenant.status);
    setIsAddingDemoTenant(true);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const handleSaveDemoTenant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTenantName.trim() || !formTenantBusiness.trim()) return;

    const selectedApp = apps.find((a) => a.id === formTenantAppId) || apps[0];
    const appName = selectedApp ? selectedApp.name : 'App Web';

    if (editingDemoTenantId) {
      setDemoTenants(
        demoTenants.map((t) =>
          t.id === editingDemoTenantId
            ? {
                ...t,
                tenantName: formTenantName,
                businessName: formTenantBusiness,
                email: formTenantEmail,
                phone: formTenantPhone,
                appId: formTenantAppId,
                appName,
                plan: formTenantPlan,
                trialDaysLeft: formTenantTrialDays,
                notes: formTenantNotes,
                status: formTenantStatus,
              }
            : t
        )
      );
    } else {
      const newTenant: DemoTenant = {
        id: `DEMO-${Date.now().toString().slice(-3)}`,
        tenantName: formTenantName,
        businessName: formTenantBusiness,
        email: formTenantEmail,
        phone: formTenantPhone,
        appId: formTenantAppId,
        appName,
        plan: formTenantPlan,
        status: formTenantStatus,
        trialDaysLeft: formTenantTrialDays,
        notes: formTenantNotes,
        createdAt:
          new Date().toLocaleDateString('es-AR') +
          ' ' +
          new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
      };
      setDemoTenants([newTenant, ...demoTenants]);
    }

    resetDemoTenantForm();
  };

  const handleDeleteDemoTenant = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este Inquilino Demo?')) {
      setDemoTenants(demoTenants.filter((t) => t.id !== id));
    }
  };

  const handleMoveDemoTenantToLeads = (tenant: DemoTenant) => {
    const selectedApp = apps.find((a) => a.id === tenant.appId);
    const rubro: AppCategory = selectedApp ? selectedApp.category : 'barberia';

    const newLead: AppRentalLead = {
      id: `LD-DEMO-${Date.now().toString().slice(-3)}`,
      businessName: tenant.businessName,
      ownerName: tenant.tenantName,
      phone: tenant.phone,
      email: tenant.email,
      rubro,
      preferredPlan: tenant.plan,
      status: 'Desde Demo',
      createdAt:
        new Date().toLocaleDateString('es-AR') +
        ' ' +
        new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
      notes: `Trasladado desde Inquilino Demo probando App "${tenant.appName}". Notas: ${tenant.notes || 'Sin observaciones'}`,
    };

    setLeads([newLead, ...leads]);
    setDemoTenants(
      demoTenants.map((dt) =>
        dt.id === tenant.id ? { ...dt, status: 'Trasladado a Solicitud' } : dt
      )
    );
    setTransferToast(`Inquilino Demo "${tenant.tenantName} (${tenant.businessName})" pasado con éxito a la Lista de Solicitudes de Alquiler.`);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim().length > 0 && passwordInput.trim().length > 0) {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleBiometricLogin = () => {
    setIsBiometricScanning(true);
    setAuthError(false);
    setTimeout(() => {
      setIsBiometricScanning(false);
      setIsAuthenticated(true);
    }, 800);
  };

  const resetForm = () => {
    setFormName('');
    setFormTagline('');
    setFormCategory('barberia');
    setFormPrice(15000);
    setFormBadge('NUEVA APP');
    setFormBanner('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80');
    setFormFeatures('Turnos online, Control de personal, Notificaciones Push');
    setIsAddingApp(false);
    setEditingAppId(null);
  };

  const handleSaveApp = (e: React.FormEvent) => {
    e.preventDefault();
    const categoryLabels: Record<AppCategory, string> = {
      barberia: 'Barberías & Peluquerías',
      estetica: 'Salón de Uñas & Estética',
      moda: 'Calzado & Boutique',
      gastronomia: 'Gastronomía & Fast Food',
      petshop: 'Pet Shop & Veterinaria',
      masajes: 'Masajes & Spa',
    };

    const newAppObj: AppShowcase = {
      id: editingAppId || `app-${Date.now()}`,
      name: formName || 'Nueva App Comercial',
      tagline: formTagline || 'Aplicación personalizada para tu negocio',
      category: formCategory,
      categoryLabel: categoryLabels[formCategory],
      iconName: 'Sparkles',
      monthlyPrice: Number(formPrice),
      currency: 'ARS',
      badgeText: formBadge || 'PUBLICADO',
      publicViewTitle: `${formName} — Vista Pública`,
      publicViewDescription: 'Agendamiento o catálogo interactivo para tus clientes.',
      adminViewTitle: `Panel Admin — ${formName}`,
      adminViewDescription: 'Control total con soporte multi-ayudante y notificaciones live.',
      keyFeatures: formFeatures.split(',').map((f) => f.trim()),
      bannerUrl: formBanner,
      isActive: true,
      featured: true,
      screenshots: [
        {
          id: `sc-1-${Date.now()}`,
          title: 'Vista Cliente — Página Pública',
          type: 'public',
          url: formBanner,
          description: 'Página de presentación para clientes finales con botón WhatsApp.',
          highlights: ['Optimizado para móviles', 'Carga ultra rápida'],
        },
        {
          id: `sc-2-${Date.now()}`,
          title: 'Vista Panel Admin — Inquilino',
          type: 'admin',
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          description: 'Control de comandas o turnos con asignación de ayudantes.',
          highlights: ['Soporte multi-usuario', 'Reportes de ventas'],
        },
      ],
      demoData: {
        businessName: formName,
        phone: '+54 9 1100000000',
        location: 'Sucursal Central',
        servicesOrProductsName: 'Servicios Principales',
        items: [
          {
            id: 'it-1',
            title: 'Servicio / Producto Principal',
            subtitle: 'Descripción de alta calidad para tus clientes.',
            price: '$15.000 ARS',
            imageUrl: formBanner,
          },
        ],
        collaborators: [
          {
            id: 'col-1',
            name: 'Administrador 1',
            role: 'Dueño Principal',
            email: 'admin@negocio.com',
            isAdmin: true,
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
            activeHours: 'Activo',
          },
        ],
        sampleOrdersOrTurns: [],
      },
    };

    if (editingAppId) {
      onUpdateApp(newAppObj);
    } else {
      onAddApp(newAppObj);
    }

    resetForm();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#1A1C20] border border-[#C5A059] w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl text-[#F9F6F0] my-auto">
        {/* Shield Header Bar */}
        <div className="bg-[#0F1012] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5A059] text-black font-bold flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-serif font-bold text-white">
                  Panel Admin General — Vitrina v2
                </h2>
                <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-bold">
                  Escudo de Seguridad OK
                </span>
              </div>
              <p className="text-xs text-[#F9F6F0]/70">
                Configuración y publicación de nuevas aplicaciones comerciales de alquiler
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onPublish && (
              <button
                onClick={handlePublishClick}
                disabled={publishing}
                title="Guardar y publicar en la nube: los visitantes verán estos cambios"
                className="flex items-center gap-1.5 px-3 h-8 bg-[#C5A059] hover:bg-[#d4b068] text-black text-[11px] font-bold uppercase tracking-wider transition-colors disabled:opacity-60"
              >
                <Save className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{publishing ? 'Publicando…' : 'Guardar y publicar'}</span>
              </button>
            )}
            <button
              onClick={handleExportConfig}
              title="Descargar la configuración actual (apps y planes) como archivo JSON"
              className="flex items-center gap-1.5 px-3 h-8 bg-[#0F1012] hover:bg-[#C5A059] text-[#C5A059] hover:text-black text-[11px] font-bold uppercase tracking-wider transition-colors border border-[#C5A059]/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            <button
              onClick={() => importInputRef.current?.click()}
              title="Cargar una configuración desde un archivo JSON exportado antes"
              className="flex items-center gap-1.5 px-3 h-8 bg-[#0F1012] hover:bg-[#C5A059] text-[#C5A059] hover:text-black text-[11px] font-bold uppercase tracking-wider transition-colors border border-[#C5A059]/40"
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Importar</span>
            </button>
            <input
              ref={importInputRef}
              type="file"
              accept="application/json,.json"
              onChange={handleImportFile}
              className="hidden"
            />
            {onLogout && (
              <button
                onClick={onLogout}
                title="Cerrar sesión de administrador"
                className="flex items-center gap-1.5 px-3 h-8 bg-[#0F1012] hover:bg-red-500/20 text-[#F9F6F0]/70 hover:text-red-300 text-[11px] font-bold uppercase tracking-wider transition-colors border border-white/10"
              >
                <Lock className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 bg-[#0F1012] hover:bg-[#C5A059] text-[#C5A059] hover:text-black flex items-center justify-center transition-colors border border-[#C5A059]/40"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!isAuthenticated ? (
          /* Authentication Screen with Credentials & Biometrics */
          <div className="p-6 sm:p-8 max-w-md w-full mx-auto my-auto space-y-5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-[#0F1012] border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto shadow-lg relative">
                <Shield className="w-8 h-8" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#1A1C20] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Ingreso al Escudo Admin</h3>
              <p className="text-xs text-[#F9F6F0]/70">
                Acceso seguro para administrar aplicaciones comerciales, inquilinos y publicaciones en Vitrina v2.
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-[#0F1012] p-1 border border-white/10 text-xs font-bold font-mono uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setAuthMode('credentials')}
                className={`flex-1 py-2 text-center transition-all flex items-center justify-center gap-1.5 ${
                  authMode === 'credentials'
                    ? 'bg-[#C5A059] text-black shadow'
                    : 'text-[#F9F6F0]/60 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Usuario & Clave</span>
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('biometric')}
                className={`flex-1 py-2 text-center transition-all flex items-center justify-center gap-1.5 ${
                  authMode === 'biometric'
                    ? 'bg-[#C5A059] text-black shadow'
                    : 'text-[#F9F6F0]/60 hover:text-white'
                }`}
              >
                <Fingerprint className="w-3.5 h-3.5" />
                <span>Biometría Rápida</span>
              </button>
            </div>

            {authMode === 'credentials' ? (
              /* User & Password Form */
              <form onSubmit={handleLoginSubmit} className="space-y-3.5 pt-1">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Usuario</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: admin / diegoariel"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="w-full bg-[#0F1012] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[#F9F6F0]/80 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Contraseña</span>
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-[#0F1012] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] font-mono"
                  />
                </div>

                {authError && (
                  <div className="text-xs text-red-400 font-semibold text-center bg-red-500/10 border border-red-500/20 py-2">
                    Ingresá usuario y contraseña válidos para continuar.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Key className="w-4 h-4" />
                  <span>Ingresar al Panel Admin</span>
                </button>

                <div className="pt-2 text-center border-t border-white/5">
                  <button
                    type="button"
                    onClick={handleBiometricLogin}
                    className="text-xs text-[#C5A059] hover:underline flex items-center justify-center gap-1.5 mx-auto font-mono py-1"
                  >
                    <Fingerprint className="w-4 h-4 text-[#C5A059]" />
                    <span>¿Ingresar directo con Huella o Face ID?</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Biometric Access Screen */
              <div className="bg-[#0F1012] p-6 border border-white/10 text-center space-y-4">
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className={`absolute inset-0 border-2 rounded-full transition-all ${
                    isBiometricScanning ? 'border-[#C5A059] animate-ping opacity-75' : 'border-white/10'
                  }`} />
                  <div className="w-16 h-16 bg-[#1A1C20] border border-[#C5A059]/40 rounded-full flex items-center justify-center text-[#C5A059]">
                    <Fingerprint className={`w-8 h-8 ${isBiometricScanning ? 'animate-pulse text-[#C5A059]' : ''}`} />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                    {isBiometricScanning ? 'Autenticando Datos Biométricos...' : 'Identificación Biométrica Lista'}
                  </h4>
                  <p className="text-xs text-[#F9F6F0]/60">
                    Soportado con Huella dactilar, Face ID o sensor Biométrico seguro.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleBiometricLogin}
                  disabled={isBiometricScanning}
                  className="w-full py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2"
                >
                  <ScanFace className="w-4 h-4" />
                  <span>{isBiometricScanning ? 'Verificando Rostro / Huella...' : 'Iniciar Escaneo Biométrico Directo'}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Admin Main View */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navigation Tabs Bar */}
            <div className="bg-[#0F1012] border-b border-white/10 px-3 sm:px-6 py-2.5 sm:py-3 flex overflow-x-auto whitespace-nowrap sm:flex-wrap items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => {
                  setAdminTab('apps');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  adminTab === 'apps'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>1. Configurar Apps Publicadas ({apps.length})</span>
              </button>

              <button
                onClick={() => {
                  setAdminTab('tenants');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 relative ${
                  demoTenants.some((t) => t.status === 'En Prueba' || t.status === 'En Configuración')
                    ? adminTab === 'tenants'
                      ? 'bg-amber-400 text-black border-2 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.9)] animate-pulse font-extrabold'
                      : 'bg-amber-950/90 text-amber-300 border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-pulse font-extrabold'
                    : adminTab === 'tenants'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>2. Inquilino Demo ({demoTenants.length})</span>
                {demoTenants.some((t) => t.status === 'En Prueba' || t.status === 'En Configuración') && (
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setAdminTab('support');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  adminTab === 'support'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <Headphones className="w-4 h-4" />
                <span>3. Soporte Técnico SLA ({supportTickets.length})</span>
              </button>

              <button
                onClick={() => {
                  setAdminTab('leads');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 relative ${
                  leads.some((l) => l.status === 'Nuevo' || l.status === 'Desde Demo')
                    ? adminTab === 'leads'
                      ? 'bg-emerald-500 text-black border-2 border-white shadow-[0_0_20px_rgba(16,185,129,0.9)] animate-pulse'
                      : 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-pulse font-extrabold'
                    : adminTab === 'leads'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>4. Solicitudes ({leads.length})</span>
                {leads.some((l) => l.status === 'Nuevo' || l.status === 'Desde Demo') && (
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setAdminTab('plan-micro');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  adminTab === 'plan-micro'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <Zap className="w-4 h-4 text-[#C5A059]" />
                <span>5. Planes Micro (A, B, C)</span>
              </button>

              <button
                onClick={() => {
                  setAdminTab('plan-pyme');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  adminTab === 'plan-pyme'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <Briefcase className="w-4 h-4 text-[#C5A059]" />
                <span>6. Plan Negocio {pymePlan?.isActive ? ' (✓)' : ' (Oculto)'}</span>
              </button>

              <button
                onClick={() => {
                  setAdminTab('plan-empresas');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  adminTab === 'plan-empresas'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <Building2 className="w-4 h-4 text-[#C5A059]" />
                <span>7. Plan Empresas {franquiciaPlan?.isActive ? ' (✓)' : ' (Oculto)'}</span>
              </button>

              <button
                onClick={() => {
                  setAdminTab('themes');
                  if (contentRef.current) contentRef.current.scrollTop = 0;
                }}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  adminTab === 'themes'
                    ? 'bg-[#C5A059] text-black'
                    : 'text-[#F9F6F0]/70 hover:text-white bg-[#1A1C20] border border-white/5'
                }`}
              >
                <Palette className="w-4 h-4" />
                <span>8. Temas Vitrina</span>
              </button>

            </div>

            {/* Admin Content Area */}
            <div ref={contentRef} className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 scroll-smooth">
              {adminTab === 'apps' && (
                <div className="space-y-6">
                  {/* Top Add New App Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white">
                        Catálogo de Apps Presentadas en Vitrina v2
                      </h3>
                      <p className="text-xs text-[#F9F6F0]/70">
                        Podés crear, modificar o dar de baja aplicaciones de alquiler.
                      </p>
                    </div>

                    {!isAddingApp && (
                      <button
                        onClick={() => setIsAddingApp(true)}
                        className="px-4 py-2.5 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#d4b068] transition-all shadow-md"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Publicar Nueva App Comercial</span>
                      </button>
                    )}
                  </div>

                  {/* Add / Edit App Form */}
                  {isAddingApp && (
                    <form
                      onSubmit={handleSaveApp}
                      className="bg-[#0F1012] p-5 border border-[#C5A059]/40 space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <h4 className="font-bold text-[#C5A059] text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          <span>{editingAppId ? 'Editar App' : 'Cargar Nueva App para la Vitrina'}</span>
                        </h4>
                        <button
                          type="button"
                          onClick={resetForm}
                          className="text-xs text-[#F9F6F0]/60 hover:text-white uppercase tracking-wider font-bold"
                        >
                          Cancelar
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                            Nombre Comercial de la App:
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Ej. Peluquería & Barbería Premium"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                            Rubro / Categoría:
                          </label>
                          <select
                            value={formCategory}
                            onChange={(e) =>
                              setFormCategory(e.target.value as AppCategory)
                            }
                            className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                          >
                            <option value="barberia">Barbería & Peluquería</option>
                            <option value="estetica">Salón de Uñas & Estética</option>
                            <option value="moda">Calzado & Boutique</option>
                            <option value="gastronomia">Gastronomía & Fast Food</option>
                            <option value="petshop">Pet Shop & Veterinaria</option>
                            <option value="masajes">Masajes & Spa</option>
                          </select>
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                            Breve Descripción / Tagline Promocional:
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Ej. Sistema completo de turnos con confirmación WhatsApp y panel admin multi-ayudante."
                            value={formTagline}
                            onChange={(e) => setFormTagline(e.target.value)}
                            className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                            Precio Mensual de Alquiler (ARS):
                          </label>
                          <input
                            type="number"
                            required
                            value={formPrice}
                            onChange={(e) => setFormPrice(Number(e.target.value))}
                            className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                            Badge / Etiqueta Promocional:
                          </label>
                          <input
                            type="text"
                            value={formBadge}
                            onChange={(e) => setFormBadge(e.target.value)}
                            placeholder="Ej. TENDENCIA, POPULAR, PROMO"
                            className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                            URL de Imagen Portada / Muestra:
                          </label>
                          <input
                            type="url"
                            value={formBanner}
                            onChange={(e) => setFormBanner(e.target.value)}
                            className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                            Características Clave (Separadas por coma):
                          </label>
                          <input
                            type="text"
                            value={formFeatures}
                            onChange={(e) => setFormFeatures(e.target.value)}
                            placeholder="Turnos online, Asignación co-admin, Notificaciones Push"
                            className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all shadow-md"
                      >
                        {editingAppId ? 'Guardar Cambios' : 'Publicar en la Página Pública'}
                      </button>
                    </form>
                  )}

                  {/* List of Published Apps in Vitrina */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {apps.map((app) => (
                      <div
                        key={app.id}
                        className="bg-[#0F1012] p-4 border border-white/10 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <img
                            src={app.bannerUrl}
                            alt={app.name}
                            className="w-14 h-14 object-cover shrink-0 border border-white/10"
                          />
                          <div className="overflow-hidden">
                            <div className="flex items-center gap-2">
                              <h4 className="font-serif font-bold text-white text-base truncate">
                                {app.name}
                              </h4>
                              <span className="bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 text-[10px] px-2 py-0.5 font-mono shrink-0 font-bold">
                                ${app.monthlyPrice.toLocaleString()}/m
                              </span>
                            </div>
                            <p className="text-xs text-[#F9F6F0]/70 truncate mt-0.5">
                              {app.categoryLabel} — {app.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => {
                              setEditingAppId(app.id);
                              setFormName(app.name);
                              setFormTagline(app.tagline);
                              setFormCategory(app.category);
                              setFormPrice(app.monthlyPrice);
                              setFormBadge(app.badgeText);
                              setFormBanner(app.bannerUrl);
                              setFormFeatures(app.keyFeatures.join(', '));
                              setIsAddingApp(true);
                              if (contentRef.current) {
                                contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                              }
                            }}
                            className="p-2 bg-[#1A1C20] border border-white/10 hover:border-[#C5A059] text-[#C5A059] transition-colors"
                            title="Editar App"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onDeleteApp(app.id)}
                            className="p-2 bg-[#1A1C20] border border-white/10 hover:border-red-500 text-red-400 transition-colors"
                            title="Eliminar de Vitrina"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {adminTab === 'tenants' && (
                <div className="space-y-6">
                  {/* Feedback Banner for Transfer */}
                  {transferToast && (
                    <div className="bg-[#C5A059]/20 border-2 border-[#C5A059] p-4 text-xs font-mono text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0" />
                        <div>
                          <div className="font-bold text-[#C5A059]">¡INQUILINO TRASLADADO CON ÉXITO!</div>
                          <div className="text-white/90">{transferToast}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setAdminTab('leads');
                            if (contentRef.current) contentRef.current.scrollTop = 0;
                          }}
                          className="px-3 py-1.5 bg-[#C5A059] text-black font-extrabold text-[11px] uppercase tracking-wider hover:bg-[#d4b068] transition-all flex items-center gap-1.5 shadow-md"
                        >
                          <span>Ver en Lista de Solicitudes</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setTransferToast(null)}
                          className="p-1 hover:bg-white/10 text-white/60 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Header & Add Button */}
                  <div className="bg-[#0F1012] p-5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif font-bold text-white text-base sm:text-lg flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#C5A059]" />
                        <span>Inquilino Demo - Personas & Comercios en Prueba</span>
                      </h3>
                      <p className="text-xs text-[#F9F6F0]/70 mt-1">
                        Gestión detallada de futuros inquilinos que están probando las apps en vivo. Podés editar sus datos, comunicarse por WhatsApp o pasarlos directamente a la Lista de Solicitudes de Alquiler.
                      </p>
                    </div>

                    {!isAddingDemoTenant && (
                      <button
                        onClick={handleStartAddDemoTenant}
                        className="px-4 py-2.5 bg-[#C5A059] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#d4b068] transition-all flex items-center gap-2 shadow-lg shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Registrar Inquilino Demo</span>
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  {isAddingDemoTenant && (
                    <form
                      onSubmit={handleSaveDemoTenant}
                      className="bg-[#1A1C20] p-5 sm:p-6 border-2 border-[#C5A059] space-y-4 font-mono text-xs shadow-2xl"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="font-bold text-[#C5A059] text-sm uppercase tracking-wider flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{editingDemoTenantId ? 'Editar Inquilino Demo' : 'Registrar Nuevo Inquilino Demo'}</span>
                        </div>
                        <button
                          type="button"
                          onClick={resetDemoTenantForm}
                          className="text-white/60 hover:text-white p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Nombre del Inquilino / Dueño *</label>
                          <input
                            type="text"
                            value={formTenantName}
                            onChange={(e) => setFormTenantName(e.target.value)}
                            placeholder="Ej: Diego Ariel / Carla Silveyra"
                            required
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Nombre del Negocio / Comercio *</label>
                          <input
                            type="text"
                            value={formTenantBusiness}
                            onChange={(e) => setFormTenantBusiness(e.target.value)}
                            placeholder="Ej: Barbería DiRasche / Boutique Carla"
                            required
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Email de Contacto</label>
                          <input
                            type="email"
                            value={formTenantEmail}
                            onChange={(e) => setFormTenantEmail(e.target.value)}
                            placeholder="ejemplo@gmail.com"
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Teléfono / WhatsApp</label>
                          <input
                            type="text"
                            value={formTenantPhone}
                            onChange={(e) => setFormTenantPhone(e.target.value)}
                            placeholder="+54 9 11 5544-3322"
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">App que está probando</label>
                          <select
                            value={formTenantAppId}
                            onChange={(e) => setFormTenantAppId(e.target.value)}
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          >
                            {apps.map((a) => (
                              <option key={a.id} value={a.id}>
                                {a.name} ({a.categoryLabel})
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Plan de Alquiler Estimado</label>
                          <select
                            value={formTenantPlan}
                            onChange={(e) => setFormTenantPlan(e.target.value as any)}
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          >
                            <option value="micro">Plan Micro-Emprendedor ($10.000 - $15.000/mes)</option>
                            <option value="pyme">Plan Negocio & Pyme ($22.000/mes)</option>
                            <option value="franquicia">Plan Franquicia & Multi-Local ($45.000/mes)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Días Restantes de Prueba Gratis</label>
                          <input
                            type="number"
                            min={0}
                            max={60}
                            value={formTenantTrialDays}
                            onChange={(e) => setFormTenantTrialDays(Number(e.target.value))}
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Estado de la Demo</label>
                          <select
                            value={formTenantStatus}
                            onChange={(e) => setFormTenantStatus(e.target.value as any)}
                            className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none"
                          >
                            <option value="En Prueba">En Prueba (Activo)</option>
                            <option value="En Configuración">En Configuración Inicial</option>
                            <option value="Demo Vencida">Demo Vencida</option>
                            <option value="Trasladado a Solicitud">Trasladado a Solicitud</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#F9F6F0]/80 mb-1 font-bold">Observaciones / Feedback de la App</label>
                        <textarea
                          rows={2}
                          value={formTenantNotes}
                          onChange={(e) => setFormTenantNotes(e.target.value)}
                          placeholder="Ej: Le interesó la función de agendamiento y el aviso sonoro de turnos..."
                          className="w-full bg-[#0F1012] border border-white/20 p-2.5 text-white focus:border-[#C5A059] outline-none resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                          type="button"
                          onClick={resetDemoTenantForm}
                          className="px-4 py-2 bg-[#0F1012] text-[#F9F6F0]/70 hover:text-white border border-white/10 uppercase font-bold text-xs"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 bg-[#C5A059] text-black hover:bg-[#d4b068] font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingDemoTenantId ? 'Actualizar Inquilino Demo' : 'Guardar Inquilino Demo'}</span>
                        </button>
                      </div>
                    </form>
                  )}

                  {/* List of Demo Tenants */}
                  <div className="space-y-4 font-mono text-xs">
                    {demoTenants.length === 0 ? (
                      <div className="bg-[#0F1012] p-8 border border-white/10 text-center text-[#F9F6F0]/60 space-y-2">
                        <Users className="w-8 h-8 text-[#C5A059] mx-auto opacity-50" />
                        <div>No hay ningún Inquilino Demo registrado aún.</div>
                        <button
                          onClick={handleStartAddDemoTenant}
                          className="mt-2 px-4 py-2 bg-[#C5A059] text-black font-bold text-xs uppercase"
                        >
                          + Crear Primer Inquilino Demo
                        </button>
                      </div>
                    ) : (
                      demoTenants.map((tenant) => {
                        const appObj = apps.find((a) => a.id === tenant.appId);
                        const isNewDemo = tenant.status === 'En Prueba' || tenant.status === 'En Configuración';

                        return (
                          <div
                            key={tenant.id}
                            className={`p-4 sm:p-5 transition-all space-y-4 shadow-xl relative ${
                              isNewDemo
                                ? 'bg-[#1c1608] border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] ring-1 ring-amber-400/50'
                                : 'bg-[#0F1012] border border-white/10 hover:border-[#C5A059]/40'
                            }`}
                          >
                            {/* Glowing Yellow Top Header Banner for active demo in trial */}
                            {isNewDemo && (
                              <div className="bg-amber-500/20 border border-amber-500/50 p-2 text-xs font-bold text-amber-300 flex items-center justify-between gap-2 rounded-sm shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                                <div className="flex items-center gap-2">
                                  <span className="flex h-2.5 w-2.5 relative shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                                  </span>
                                  <span className="uppercase tracking-wider">🟡 INQUILINO DEMO - EN PRUEBA EN VIVO</span>
                                </div>
                                <span className="bg-amber-400 text-black px-2 py-0.5 font-extrabold text-[10px] uppercase tracking-wider rounded">
                                  PROBANDO EN DEMO
                                </span>
                              </div>
                            )}

                            {/* Top Info Bar */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-bold text-white text-base">
                                    {tenant.businessName}
                                  </span>
                                  <span className="text-xs text-[#C5A059] font-bold">
                                    ({tenant.tenantName})
                                  </span>
                                  <span className="text-[10px] bg-white/10 text-white/70 px-2 py-0.5 border border-white/10">
                                    ID: {tenant.id}
                                  </span>
                                </div>
                                <div className="text-[11px] text-[#F9F6F0]/60 mt-0.5 flex items-center gap-3 flex-wrap">
                                  <span>Registrado: {tenant.createdAt}</span>
                                  <span>•</span>
                                  <span className="uppercase text-[#C5A059] font-bold">
                                    Plan {tenant.plan}
                                  </span>
                                </div>
                              </div>

                              {/* Status Badge in Yellow */}
                              <div className="flex items-center gap-2">
                                <span
                                  className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                                    isNewDemo
                                      ? 'bg-amber-400 text-black border border-amber-300 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-pulse'
                                      : tenant.status === 'Trasladado a Solicitud'
                                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                                      : tenant.status === 'Demo Vencida'
                                      ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                                      : 'bg-amber-400/20 text-amber-300 border border-amber-500/40'
                                  }`}
                                >
                                  <Clock className="w-3.5 h-3.5" />
                                  <span>{tenant.status}</span>
                                  {tenant.status === 'En Prueba' && (
                                    <span className={isNewDemo ? 'ml-1 text-black font-black underline' : 'ml-1 text-[#C5A059] font-extrabold'}>
                                      ({tenant.trialDaysLeft} días probando)
                                    </span>
                                  )}
                                </span>
                              </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-[#1A1C20] p-3 border border-white/5 text-xs">
                              {/* Tested App */}
                              <div className="space-y-1">
                                <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
                                  App Probandose:
                                </div>
                                <div className="font-bold text-white flex items-center gap-1.5">
                                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                                  <span>{tenant.appName}</span>
                                </div>
                                {appObj && (
                                  <div className="text-[10px] text-white/60">
                                    Rubro: {appObj.categoryLabel}
                                  </div>
                                )}
                              </div>

                              {/* Email */}
                              <div className="space-y-1">
                                <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
                                  Email Contacto:
                                </div>
                                <div className="text-white/90 flex items-center gap-1.5 truncate">
                                  <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                                  <a
                                    href={`mailto:${tenant.email}`}
                                    className="hover:underline truncate"
                                  >
                                    {tenant.email || 'Sin email'}
                                  </a>
                                </div>
                              </div>

                              {/* Phone / WhatsApp */}
                              <div className="space-y-1">
                                <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
                                  Teléfono / WhatsApp:
                                </div>
                                <div className="text-white/90 flex items-center gap-2">
                                  <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                                  <span>{tenant.phone || 'Sin teléfono'}</span>
                                  {tenant.phone && (
                                    <a
                                      href={`https://wa.me/${tenant.phone.replace(/[^0-9]/g, '')}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-2 py-0.5 bg-emerald-600 text-white font-bold text-[10px] hover:bg-emerald-500 rounded-sm flex items-center gap-1"
                                      title="Chat en WhatsApp"
                                    >
                                      <MessageSquare className="w-3 h-3" />
                                      <span>WA</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Notes / Feedback */}
                            {tenant.notes && (
                              <div className="bg-[#15171A] p-3 border-l-2 border-[#C5A059] text-xs text-white/80">
                                <span className="text-[10px] text-[#C5A059] font-bold uppercase block mb-0.5">
                                  Observaciones de la Demo:
                                </span>
                                {tenant.notes}
                              </div>
                            )}

                            {/* Action Buttons Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/5">
                              {/* Primary Action: Pass to Leads List */}
                              <button
                                onClick={() => handleMoveDemoTenantToLeads(tenant)}
                                className={`px-4 py-2 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                                  tenant.status === 'Trasladado a Solicitud'
                                    ? 'bg-blue-900/40 text-blue-300 border border-blue-500/40 hover:bg-blue-800/50'
                                    : 'bg-[#C5A059] text-black hover:bg-[#d4b068] shadow-md'
                                }`}
                              >
                                <ArrowRight className="w-4 h-4" />
                                <span>
                                  {tenant.status === 'Trasladado a Solicitud'
                                    ? 'Pasar de nuevo a Lista de Solicitudes'
                                    : 'Pasar a Lista de Solicitudes'}
                                </span>
                              </button>

                              {/* Edit & Delete Buttons */}
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleStartEditDemoTenant(tenant)}
                                  className="px-3 py-2 bg-[#1A1C20] border border-white/20 hover:border-[#C5A059] text-[#C5A059] hover:text-white font-bold text-xs uppercase transition-all flex items-center gap-1.5"
                                  title="Editar Inquilino Demo"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                  <span>Editar</span>
                                </button>

                                <button
                                  onClick={() => handleDeleteDemoTenant(tenant.id)}
                                  className="px-3 py-2 bg-[#1A1C20] border border-white/20 hover:border-red-500 text-red-400 hover:text-red-300 font-bold text-xs uppercase transition-all flex items-center gap-1.5"
                                  title="Eliminar Inquilino Demo"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>Eliminar</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {adminTab === 'support' && (
                <div className="bg-[#0F1012] p-5 border border-white/10 space-y-4">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2 font-mono">
                    <Headphones className="w-4 h-4 text-[#C5A059]" />
                    <span>Soporte Técnico Integrado SLA</span>
                  </h3>
                  <p className="text-xs text-[#F9F6F0]/80">
                    Mesa de ayuda y resolución de incidencias en tiempo real para inquilinos de las apps.
                  </p>

                  <div className="space-y-2 font-mono text-xs">
                    {supportTickets.map((tck) => (
                      <div
                        key={tck.id}
                        className="p-3 bg-[#1A1C20] border border-white/10 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="font-bold text-[#C5A059] flex items-center gap-2">
                            <span>[{tck.id}] {tck.appName}</span>
                            <span className="text-[10px] text-[#F9F6F0]/50">
                              {tck.createdAt}
                            </span>
                          </div>
                          <div className="text-[#F9F6F0]/80 mt-1">{tck.issue}</div>
                          <div className="text-[11px] text-[#F9F6F0]/50 mt-0.5">
                            Cliente: {tck.clientName}
                          </div>
                        </div>

                        <span
                          className={`px-2 py-1 text-[10px] font-bold ${
                            tck.status === 'Resuelto'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30'
                          }`}
                        >
                          {tck.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {adminTab === 'leads' && (
                <div className="bg-[#0F1012] p-5 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-bold text-white text-sm flex items-center gap-2 font-mono">
                        <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                        <span>Lista de Solicitudes de Alquiler ({leads.length})</span>
                      </h3>
                      <p className="text-xs text-[#F9F6F0]/70 mt-1">
                        Listado completo de solicitudes recibidas e inquilinos trasladados desde demos activas.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {leads.length === 0 ? (
                      <div className="p-6 text-center text-white/50 bg-[#1A1C20] border border-white/10">
                        No hay solicitudes de alquiler registradas.
                      </div>
                    ) : (
                      leads.map((ld) => {
                        const isActive = ld.status === 'Activo';
                        const isNewLead = ld.status === 'Nuevo' || ld.status === 'Desde Demo' || isActive;

                        const handleToggleActive = () => {
                          setLeads(
                            leads.map((l) =>
                              l.id === ld.id
                                ? { ...l, status: l.status === 'Activo' ? 'Nuevo' : 'Activo' }
                                : l
                            )
                          );
                        };

                        return (
                          <div
                            key={ld.id}
                            className={`p-4 transition-all space-y-3 shadow-xl relative ${
                              isActive || isNewLead
                                ? 'bg-[#092218] border-2 border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.35)] ring-1 ring-emerald-400/50'
                                : 'bg-[#1A1C20] border border-white/10 hover:border-[#C5A059]/40'
                            }`}
                          >
                            {/* Glowing Green Top Header Banner for active/new lead */}
                            {isNewLead && (
                              <div className="bg-emerald-500/20 border border-emerald-500/50 p-2 text-xs font-bold text-emerald-300 flex items-center justify-between gap-2 rounded-sm shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                                <div className="flex items-center gap-2">
                                  <span className="flex h-2.5 w-2.5 relative shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                  </span>
                                  <span className="uppercase tracking-wider">🟢 SOLICITUD DE ALQUILER - EN LISTADO</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={handleToggleActive}
                                  className="bg-emerald-500 hover:bg-emerald-400 text-black px-2.5 py-1 font-extrabold text-[10px] uppercase tracking-wider rounded transition-all shadow-[0_0_12px_rgba(16,185,129,0.8)] cursor-pointer flex items-center gap-1 active:scale-95"
                                  title="Presioná para activar en verde"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>ACTIVO</span>
                                </button>
                              </div>
                            )}

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
                              <div>
                                <div className="font-bold text-white text-sm flex items-center gap-2">
                                  <span>{ld.businessName}</span>
                                  <span className="text-xs text-[#C5A059]">({ld.ownerName})</span>
                                  <span className="text-[10px] bg-white/10 text-white/60 px-1.5 py-0.5">
                                    ID: {ld.id}
                                  </span>
                                </div>
                                <div className="text-[11px] text-[#F9F6F0]/60 mt-0.5">
                                  Registrado: {ld.createdAt}
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={handleToggleActive}
                                  className={`text-[11px] px-3 py-1 font-extrabold border uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 rounded-sm active:scale-95 ${
                                    isActive || isNewLead
                                      ? 'bg-emerald-500 text-black border-2 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.9)] animate-pulse'
                                      : 'bg-emerald-950 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500 hover:text-black'
                                  }`}
                                  title="Haz clic para activar / marcar en verde"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>ACTIVO</span>
                                </button>
                              </div>
                            </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-white/80 pt-1">
                            <div>
                              <span className="text-[#C5A059] font-bold">Plan: </span>
                              <span className="uppercase">{ld.preferredPlan}</span>
                            </div>
                            <div>
                              <span className="text-[#C5A059] font-bold">Rubro: </span>
                              <span className="capitalize">{ld.rubro}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[#C5A059] font-bold">Teléfono: </span>
                              <span>{ld.phone}</span>
                              {ld.phone && (
                                <a
                                  href={`https://wa.me/${ld.phone.replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-2 py-0.5 bg-emerald-600 text-white font-bold text-[10px] hover:bg-emerald-500 rounded-sm"
                                  title="Enviar WhatsApp"
                                >
                                  WA
                                </a>
                              )}
                            </div>
                          </div>

                          {ld.notes && (
                            <div className="bg-[#0F1012] p-2.5 border-l-2 border-[#C5A059] text-[11px] text-white/80">
                              <span className="text-[#C5A059] font-bold">Notas / Origen: </span>
                              {ld.notes}
                            </div>
                          )}

                          <div className="flex items-center justify-end gap-2 pt-1">
                            <button
                              onClick={() => {
                                if (confirm('¿Eliminar esta solicitud de alquiler?')) {
                                  setLeads(leads.filter((l) => l.id !== ld.id));
                                }
                              }}
                              className="px-2.5 py-1 bg-[#0F1012] text-red-400 hover:text-red-300 border border-white/10 hover:border-red-500 text-[10px] font-bold uppercase transition-all flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Eliminar</span>
                            </button>
                          </div>
                        </div>
                      );
                    })
                    )}
                  </div>
                </div>
              )}

              {adminTab === 'themes' && (
                <div className="bg-[#0F1012] p-6 border border-white/10 space-y-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-[#C5A059]" />
                      <h3 className="font-serif font-bold text-white text-lg">
                        Gestor de Temas & Estética de Vitrina v2
                      </h3>
                      <span className="bg-[#C5A059] text-black text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-wider font-mono">
                        Cyber Dark Predeterminado
                      </span>
                    </div>
                    <p className="text-xs text-[#F9F6F0]/70 mt-1">
                      Cambiá el estilo visual global de la landing y catálogo para los visitantes. El tema activo seleccionado se aplicará a toda la experiencia.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Theme 1: Cyber Dark (Predeterminado) */}
                    <div
                      className={`p-5 bg-[#1A1C20] border transition-all flex flex-col justify-between ${
                        currentModel === 'cyber-dark'
                          ? 'border-[#C5A059] ring-1 ring-[#C5A059] shadow-lg'
                          : 'border-white/10 opacity-80 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="bg-[#C5A059] text-black font-extrabold text-[9px] uppercase px-2 py-0.5 font-mono tracking-widest">
                            PREDETERMINADO DE FÁBRICA
                          </span>
                          {currentModel === 'cyber-dark' && (
                            <span className="flex items-center gap-1 text-xs text-emerald-400 font-bold font-mono">
                              <Check className="w-4 h-4" /> Activo
                            </span>
                          )}
                        </div>

                        <h4 className="font-serif font-bold text-white text-lg">
                          Cyber Dark (High-Tech)
                        </h4>
                        <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
                          Lienzo oscuro con acentos dorados y neón, tipografía técnica nítida y tarjetas de alto contraste. Ideal para estética SaaS moderna.
                        </p>

                        <div className="bg-[#0F1012] p-3 border border-white/5 space-y-1.5 text-[11px] font-mono text-[#F9F6F0]/80">
                          <div className="text-[#C5A059] font-bold">✨ Características:</div>
                          <div>• Layout de alto contraste</div>
                          <div>• Badges neón y resplandor dorado</div>
                          <div>• Interfaz lista para conversión rápida</div>
                        </div>
                      </div>

                      <button
                        onClick={() => onModelChange?.('cyber-dark')}
                        disabled={currentModel === 'cyber-dark'}
                        className={`mt-5 w-full py-2.5 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                          currentModel === 'cyber-dark'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                            : 'bg-[#C5A059] text-black hover:bg-[#d4b068]'
                        }`}
                      >
                        {currentModel === 'cyber-dark' ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Tema Activo (Cyber Dark)</span>
                          </>
                        ) : (
                          <span>Activar Cyber Dark</span>
                        )}
                      </button>
                    </div>

                    {/* Theme 2: Editorial Luxury */}
                    <div
                      className={`p-5 bg-[#1A1C20] border transition-all flex flex-col justify-between ${
                        currentModel === 'clean-editorial'
                          ? 'border-[#C5A059] ring-1 ring-[#C5A059] shadow-lg'
                          : 'border-white/10 opacity-80 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="bg-white/10 text-white font-extrabold text-[9px] uppercase px-2 py-0.5 font-mono tracking-widest">
                            MODELO EDITORIAL
                          </span>
                          {currentModel === 'clean-editorial' && (
                            <span className="flex items-center gap-1 text-xs text-emerald-400 font-bold font-mono">
                              <Check className="w-4 h-4" /> Activo
                            </span>
                          )}
                        </div>

                        <h4 className="font-serif font-bold text-white text-lg">
                          Editorial Luxury
                        </h4>
                        <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
                          Estética de catálogo de lujo con fuentes serif clásicas, paleta dorada `#C5A059`, acabados tipo revista y amplia respiración visual.
                        </p>

                        <div className="bg-[#0F1012] p-3 border border-white/5 space-y-1.5 text-[11px] font-mono text-[#F9F6F0]/80">
                          <div className="text-[#C5A059] font-bold">✨ Características:</div>
                          <div>• Tipografía Serif para títulos</div>
                          <div>• Bordes sutiles y dorados</div>
                          <div>• Formato refinado de revista</div>
                        </div>
                      </div>

                      <button
                        onClick={() => onModelChange?.('clean-editorial')}
                        disabled={currentModel === 'clean-editorial'}
                        className={`mt-5 w-full py-2.5 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                          currentModel === 'clean-editorial'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                            : 'bg-[#C5A059] text-black hover:bg-[#d4b068]'
                        }`}
                      >
                        {currentModel === 'clean-editorial' ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Tema Activo (Editorial)</span>
                          </>
                        ) : (
                          <span>Activar Editorial Luxury</span>
                        )}
                      </button>
                    </div>

                    {/* Theme 3: Bento Grid Hub */}
                    <div
                      className={`p-5 bg-[#1A1C20] border transition-all flex flex-col justify-between ${
                        currentModel === 'bento-hub'
                          ? 'border-[#C5A059] ring-1 ring-[#C5A059] shadow-lg'
                          : 'border-white/10 opacity-80 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="bg-white/10 text-white font-extrabold text-[9px] uppercase px-2 py-0.5 font-mono tracking-widest">
                            MODELO BENTO GRID
                          </span>
                          {currentModel === 'bento-hub' && (
                            <span className="flex items-center gap-1 text-xs text-emerald-400 font-bold font-mono">
                              <Check className="w-4 h-4" /> Activo
                            </span>
                          )}
                        </div>

                        <h4 className="font-serif font-bold text-white text-lg">
                          Bento Grid Hub
                        </h4>
                        <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
                          Diseño en bloques tipo Bento Cards con métricas directas, mosaico dinámico y rápido acceso a cada aplicación de alquiler.
                        </p>

                        <div className="bg-[#0F1012] p-3 border border-white/5 space-y-1.5 text-[11px] font-mono text-[#F9F6F0]/80">
                          <div className="text-[#C5A059] font-bold">✨ Características:</div>
                          <div>• Cuadrícula Bento asimétrica</div>
                          <div>• Indicadores de estado directo</div>
                          <div>• Organización tipo hub multitenant</div>
                        </div>
                      </div>

                      <button
                        onClick={() => onModelChange?.('bento-hub')}
                        disabled={currentModel === 'bento-hub'}
                        className={`mt-5 w-full py-2.5 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                          currentModel === 'bento-hub'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                            : 'bg-[#C5A059] text-black hover:bg-[#d4b068]'
                        }`}
                      >
                        {currentModel === 'bento-hub' ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Tema Activo (Bento Grid)</span>
                          </>
                        ) : (
                          <span>Activar Bento Grid</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: Planes Micro-Emprendedor (A, B, C) */}
              {adminTab === 'plan-micro' && (
                <div className="space-y-12">
                  <div className="bg-[#1A1C20] p-4 border border-[#C5A059]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-serif font-bold text-[#F9F6F0] flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#C5A059]" />
                        <span>Gestión de Planes Micro-Emprendedor</span>
                      </h2>
                      <p className="text-xs text-[#F9F6F0]/70 mt-1">
                        Configurá y activá de forma independiente los 3 niveles del Plan Micro-Emprendedor (Plan A, Plan B y Plan C). Mantené la tilde para publicarlo en la web pública o destildalo para ocultarlo.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 bg-[#0F1012] border border-[#C5A059]/30 text-[#C5A059] font-bold">
                        3 Planes Disponibles
                      </span>
                    </div>
                  </div>

                  {/* Plan Micro-Emprendedor A */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#C5A059]/30 pb-2">
                      <span className="px-2.5 py-0.5 bg-[#C5A059] text-black font-extrabold text-xs uppercase font-mono">
                        PLAN A
                      </span>
                      <h3 className="text-lg font-serif font-bold text-white">
                        Plan Micro-Emprendedor A
                      </h3>
                    </div>
                    <PlanConfigEditor
                      planId="micro-a"
                      defaultPlan={microPlanA}
                      tabLabel="Plan Micro-Emprendedor A"
                      onSavePlan={(updated) => onUpdatePricingPlan?.(updated)}
                    />
                  </div>

                  <div className="border-t-2 border-dashed border-white/10 my-8" />

                  {/* Plan Micro-Emprendedor B */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#C5A059]/30 pb-2">
                      <span className="px-2.5 py-0.5 bg-[#C5A059] text-black font-extrabold text-xs uppercase font-mono">
                        PLAN B
                      </span>
                      <h3 className="text-lg font-serif font-bold text-white">
                        Plan Micro-Emprendedor B
                      </h3>
                    </div>
                    <PlanConfigEditor
                      planId="micro-b"
                      defaultPlan={microPlanB}
                      tabLabel="Plan Micro-Emprendedor B"
                      onSavePlan={(updated) => onUpdatePricingPlan?.(updated)}
                    />
                  </div>

                  <div className="border-t-2 border-dashed border-white/10 my-8" />

                  {/* Plan Micro-Emprendedor C */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#C5A059]/30 pb-2">
                      <span className="px-2.5 py-0.5 bg-[#C5A059] text-black font-extrabold text-xs uppercase font-mono">
                        PLAN C
                      </span>
                      <h3 className="text-lg font-serif font-bold text-white">
                        Plan Micro-Emprendedor C
                      </h3>
                    </div>
                    <PlanConfigEditor
                      planId="micro-c"
                      defaultPlan={microPlanC}
                      tabLabel="Plan Micro-Emprendedor C"
                      onSavePlan={(updated) => onUpdatePricingPlan?.(updated)}
                    />
                  </div>
                </div>
              )}

              {/* Tab 6: Plan Negocio & Pyme */}
              {adminTab === 'plan-pyme' && (
                <PlanConfigEditor
                  planId="pyme"
                  defaultPlan={pymePlan}
                  tabLabel="Plan Negocio & Pyme"
                  onSavePlan={(updated) => onUpdatePricingPlan?.(updated)}
                />
              )}

              {/* Tab 7: Plan Franquicia & Multi-Local (Empresas) */}
              {adminTab === 'plan-empresas' && (
                <PlanConfigEditor
                  planId="franquicia"
                  defaultPlan={franquiciaPlan}
                  tabLabel="Plan Franquicia & Multi-Local (Empresas)"
                  onSavePlan={(updated) => onUpdatePricingPlan?.(updated)}
                />
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

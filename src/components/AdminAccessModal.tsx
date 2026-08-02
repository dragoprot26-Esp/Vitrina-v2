import React, { useState } from 'react';
import { Shield, X, Lock, Mail, AlertTriangle, Loader2 } from 'lucide-react';
import { signIn } from '../cloud';

interface AdminAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminAccessModal: React.FC<AdminAccessModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError('');
    const res = await signIn(email, pass);
    setBusy(false);
    if (res.ok) {
      setEmail('');
      setPass('');
      onSuccess();
    } else {
      setError(res.error || 'No se pudo iniciar sesión.');
    }
  };

  const handleClose = () => {
    setError('');
    setPass('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-[#1A1C20] border border-[#C5A059]/40 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#C5A059]" />
            <span className="font-serif font-bold text-lg text-[#F9F6F0]">Panel Escudo — Acceso seguro</span>
          </div>
          <button onClick={handleClose} className="text-[#F9F6F0]/60 hover:text-white transition-colors" aria-label="Cerrar">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
            Ingresá con tu cuenta de administrador. El acceso se verifica en el servidor de forma segura.
          </p>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              autoComplete="username"
              className="w-full bg-[#0F1012] border border-white/10 focus:border-[#C5A059] outline-none text-[#F9F6F0] text-sm px-3 py-2.5 transition-colors"
              placeholder="tu-email@gmail.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> Clave
            </label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="current-password"
              className="w-full bg-[#0F1012] border border-white/10 focus:border-[#C5A059] outline-none text-[#F9F6F0] text-sm px-3 py-2.5 transition-colors"
              placeholder="Tu clave"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 px-4 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Shield className="w-4 h-4" />}
            <span>{busy ? 'Verificando…' : 'Entrar al Panel'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

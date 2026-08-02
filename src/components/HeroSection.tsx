import React from 'react';
import { Sparkles, Users, Headphones, Shield, ArrowRight, Zap, CheckCircle2, ShoppingBag, Scissors, Dog, Utensils } from 'lucide-react';
import { PageModel } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  currentModel: PageModel;
  onOpenContact: () => void;
  onOpenAdmin: () => void;
  onSelectCategory: (cat: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentModel,
  onOpenContact,
  onOpenAdmin,
  onSelectCategory,
}) => {
  const { t, language } = useLanguage();

  if (currentModel === 'clean-editorial') {
    return (
      <section className="bg-[#0F1012] border-b border-white/10 text-[#F9F6F0] py-16 px-4 sm:px-6 lg:px-8 transition-all relative">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1C20] border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase font-bold tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            {t.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#F9F6F0] leading-tight">
            {t.heroTitleLine1} <br />
            <span className="italic font-serif text-[#C5A059] font-normal">
              {t.heroTitleLine2}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-[#F9F6F0]/80 text-base sm:text-lg leading-relaxed font-sans">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 bg-[#C5A059] text-black font-bold hover:bg-[#d4b068] transition-all text-xs uppercase tracking-widest shadow-xl flex items-center gap-2"
            >
              <span>{t.rentApp}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAdmin}
              className="px-6 py-3.5 bg-[#1A1C20] text-[#C5A059] hover:bg-[#C5A059]/10 border border-[#C5A059]/40 transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span>{t.adminShield}</span>
            </button>
          </div>

          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left border-t border-white/10 mt-8">
            <div className="p-4 bg-[#1A1C20] border border-[#C5A059]/20">
              <div className="text-[#C5A059] font-serif font-bold text-2xl">{language === 'es' ? 'Apps en Alquiler' : 'Apps Available'}</div>
              <div className="text-xs text-[#F9F6F0]/70 mt-1">{language === 'es' ? 'Sin costos ocultos ni comisiones.' : 'No hidden fees or sales commissions.'}</div>
            </div>
            <div className="p-4 bg-[#1A1C20] border border-[#C5A059]/20">
              <div className="text-[#C5A059] font-serif font-bold text-2xl">{language === 'es' ? 'Co-Admin & Equipo' : 'Co-Admin & Team'}</div>
              <div className="text-xs text-[#F9F6F0]/70 mt-1">{language === 'es' ? 'Permisos para ayudantes y socios.' : 'Helper & partner permissions per app.'}</div>
            </div>
            <div className="p-4 bg-[#1A1C20] border border-[#C5A059]/20">
              <div className="text-[#C5A059] font-serif font-bold text-2xl">{language === 'es' ? 'Código de Retiro' : 'Pickup Voucher'}</div>
              <div className="text-xs text-[#F9F6F0]/70 mt-1">{language === 'es' ? 'Sistema de vouchers para pedidos.' : 'Unique voucher system for pickup.'}</div>
            </div>
            <div className="p-4 bg-[#1A1C20] border border-[#C5A059]/20">
              <div className="text-[#C5A059] font-serif font-bold text-2xl">{language === 'es' ? 'Soporte SLA 24/7' : '24/7 SLA Support'}</div>
              <div className="text-xs text-[#F9F6F0]/70 mt-1">{language === 'es' ? 'Asistencia técnica preferencial.' : 'Direct WhatsApp & priority support.'}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (currentModel === 'bento-hub') {
    return (
      <section className="bg-[#0F1012] text-[#F9F6F0] py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Main Bento Hero Card */}
            <div className="lg:col-span-7 bg-[#1A1C20] p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl -z-0"></div>
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F1012] text-[#C5A059] text-[10px] font-bold border border-[#C5A059]/30 uppercase tracking-[0.2em]">
                  <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
                  VITRINA V2 — BENTO HUB MULTITENANT
                </div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#F9F6F0] tracking-tight leading-tight">
                  {t.heroTitleLine1} <span className="italic text-[#C5A059]">{t.heroTitleLine2}</span>
                </h1>
                <p className="text-[#F9F6F0]/80 text-sm sm:text-base leading-relaxed">
                  {t.heroSubtitle}
                </p>
              </div>

              <div className="relative z-10 pt-6 flex flex-wrap gap-3">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center gap-2 shadow-md"
                >
                  <span>{t.rentApp}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Side Bento Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div
                onClick={() => onSelectCategory('barberia')}
                className="bg-[#1A1C20] p-5 border border-white/10 hover:border-[#C5A059] transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center mb-3 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <Scissors className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-[#F9F6F0] text-lg">{language === 'es' ? 'Barberías & Estilo' : 'Barbershops & Style'}</h3>
                <p className="text-xs text-[#F9F6F0]/60 mt-1">{language === 'es' ? 'Turnos, barberos, alertas push.' : 'Appointments & push alerts.'}</p>
              </div>

              <div
                onClick={() => onSelectCategory('estetica')}
                className="bg-[#1A1C20] p-5 border border-white/10 hover:border-[#C5A059] transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center mb-3 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-[#F9F6F0] text-lg">{language === 'es' ? 'Salón de Uñas' : 'Nail Salon & Beauty'}</h3>
                <p className="text-xs text-[#F9F6F0]/60 mt-1">{language === 'es' ? 'Soft gel, manicuristas, catálogo.' : 'Nail tech & booking catalog.'}</p>
              </div>

              <div
                onClick={() => onSelectCategory('moda')}
                className="bg-[#1A1C20] p-5 border border-white/10 hover:border-[#C5A059] transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center mb-3 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-[#F9F6F0] text-lg">{language === 'es' ? 'Boutique & Calzado' : 'Fashion Boutique'}</h3>
                <p className="text-xs text-[#F9F6F0]/60 mt-1">{language === 'es' ? 'Código de retiro interactivo.' : 'Pickup voucher code system.'}</p>
              </div>

              <div
                onClick={() => onSelectCategory('gastronomia')}
                className="bg-[#1A1C20] p-5 border border-white/10 hover:border-[#C5A059] transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center mb-3 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-[#F9F6F0] text-lg">{language === 'es' ? 'Fast Food' : 'Fast Food & Dining'}</h3>
                <p className="text-xs text-[#F9F6F0]/60 mt-1">{language === 'es' ? 'Comandas en vivo con sonido.' : 'Live orders with audio notification.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default Cyber Dark / Editorial Luxury Standard (Model 1)
  return (
    <section className="relative bg-[#0F1012] text-[#F9F6F0] overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      {/* Editorial background subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1A1C20] border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase font-bold tracking-[0.25em]">
          <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
          <span>{t.heroBadge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight text-[#F9F6F0]">
          {t.heroTitleLine1} <br />
          <span className="italic text-[#C5A059]">
            {t.heroTitleLine2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-[#F9F6F0]/80 text-base leading-relaxed">
          {t.heroSubtitle}
        </p>

        {/* Feature Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs uppercase tracking-wider font-semibold text-[#F9F6F0]/90">
          <div className="flex items-center gap-2 bg-[#1A1C20] px-3.5 py-2 border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span>{language === 'es' ? 'Múltiples Ayudantes por App' : 'Multiple Helpers per App'}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A1C20] px-3.5 py-2 border border-white/10">
            <Users className="w-4 h-4 text-[#C5A059]" />
            <span>{language === 'es' ? 'Co-Administrador Inquilino 2' : 'Tenant Co-Admin Supported'}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A1C20] px-3.5 py-2 border border-white/10">
            <Zap className="w-4 h-4 text-[#C5A059]" />
            <span>{language === 'es' ? 'Notificaciones Push WebSockets' : 'Real-time Push Alerts'}</span>
          </div>
        </div>

        {/* CTA Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            className="px-7 py-3.5 bg-[#C5A059] text-black font-bold hover:bg-[#d4b068] transition-all text-xs uppercase tracking-widest shadow-xl flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.rentApp}</span>
          </button>
        </div>
      </div>
    </section>
  );
};



import React from 'react';
import { Shield, Sparkles, Share2, QrCode, Globe } from 'lucide-react';
import { PageModel } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentModel?: PageModel;
  onModelChange?: (model: PageModel) => void;
  onOpenAdmin: () => void;
  onOpenContact: () => void;
  onOpenShare: () => void;
  activeCategory?: string;
  onCategoryChange?: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAdmin,
  onOpenContact,
  onOpenShare,
}) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#0F1012]/95 backdrop-blur-md border-b border-white/10 text-[#F9F6F0] transition-all">
      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Brand Logo - Editorial Style */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="w-8 h-8 sm:w-11 sm:h-11 bg-[#C5A059] text-black flex items-center justify-center font-serif font-black text-base sm:text-2xl shadow-lg border border-[#D4AF37]/40 shrink-0">
            V2
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif italic text-base sm:text-2xl font-bold tracking-tight text-[#F9F6F0]">
                Vitrina v2
              </span>
              <span className="bg-[#C5A059]/15 text-[#C5A059] text-[8px] sm:text-[9px] px-1.5 py-0.5 border border-[#C5A059]/30 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono hidden sm:inline">
                {t.digitalRental}
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F9F6F0]/60 hidden md:block">
              {t.tagline}
            </span>
          </div>
        </div>

        {/* Center Share Page Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={onOpenShare}
            title={language === 'es' ? 'Compartir esta página en redes sociales o generar Código QR' : 'Share this page on social media or generate QR Code'}
            className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#1A1C20] border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-lg group shrink-0"
          >
            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] group-hover:text-black transition-colors shrink-0" />
            <span className="font-serif hidden xs:inline">{t.sharePage}</span>
            <span className="font-serif xs:hidden">{language === 'es' ? 'COMPARTIR' : 'SHARE'}</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Multi-language Selector (ES / EN) */}
          <div className="flex items-center bg-[#1A1C20] border border-[#C5A059]/40 p-0.5 text-[10px] sm:text-[11px] font-mono font-bold shadow-md">
            <button
              onClick={() => setLanguage('es')}
              title="Cambiar a Español"
              className={`px-1.5 sm:px-2 py-1 flex items-center gap-1 transition-all ${
                language === 'es'
                  ? 'bg-[#C5A059] text-black font-extrabold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span>ES</span>
            </button>
            <button
              onClick={() => setLanguage('en')}
              title="Switch to English"
              className={`px-1.5 sm:px-2 py-1 flex items-center gap-1 transition-all ${
                language === 'en'
                  ? 'bg-[#C5A059] text-black font-extrabold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span>EN</span>
            </button>
          </div>

          {/* Escudo para Ingreso al Panel Admin (Boton Cuadradito) */}
          <button
            onClick={onOpenAdmin}
            title={language === 'es' ? 'Escudo Admin - Panel de Configuración General' : 'Admin Shield - Control Panel'}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1A1C20] border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all flex items-center justify-center shadow-lg group relative shrink-0"
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] group-hover:text-black transition-colors group-hover:scale-110" />
            {/* Tooltip on Hover */}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-[#0F1012] text-[#C5A059] border border-[#C5A059]/50 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
              {t.adminShield}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};




import React, { useState } from 'react';
import {
  Eye,
  Shield,
  CheckCircle2,
  Play,
  ArrowRight,
  Sparkles,
  Users,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Phone,
  Clock,
  ShoppingBag,
  Bell,
  Code
} from 'lucide-react';
import { AppShowcase } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AppCardProps {
  app: AppShowcase;
  onOpenDemo: (app: AppShowcase, viewMode: 'public' | 'admin') => void;
  onOpenContactForApp: (app: AppShowcase) => void;
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  onOpenDemo,
  onOpenContactForApp,
}) => {
  const { t, language } = useLanguage();
  // State for toggling between public storefront view and tenant admin view preview
  const [activeViewTab, setActiveViewTab] = useState<'public' | 'admin'>('public');
  // State for image gallery index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter screenshots for the active view tab
  const activeScreenshots = app.screenshots.filter(
    (s) => s.type === activeViewTab || activeViewTab === 'public'
  );
  const currentScreenshot =
    activeScreenshots[activeImageIndex] || app.screenshots[0];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % activeScreenshots.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? activeScreenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#1A1C20] border border-white/10 hover:border-[#C5A059]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
      {/* Top Banner / Card Header */}
      <div>
        <div className="p-6 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#0F1012] border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase font-bold tracking-widest font-mono">
              {app.badgeText}
            </span>
            <div className="text-right">
              <span className="text-2xl font-serif font-bold text-[#C5A059]">
                ${app.monthlyPrice.toLocaleString('es-AR')}
              </span>
              <span className="text-xs text-[#F9F6F0]/60 font-sans"> {app.currency}{t.monthlyPrice}</span>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#F9F6F0] tracking-tight group-hover:text-[#C5A059] transition-colors">
            {app.name}
          </h3>
          <p className="text-xs text-[#F9F6F0]/70 mt-1 line-clamp-2 leading-relaxed">
            {app.tagline}
          </p>
        </div>

        {/* Dual View Switcher Bar (Vista Cliente vs Vista Panel Admin) */}
        <div className="bg-[#0F1012] px-4 py-2.5 border-b border-white/10 flex items-center justify-between gap-2">
          <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em]">
            {language === 'es' ? 'PREVISUALIZACIÓN:' : 'PREVIEW MODE:'}
          </div>
          <div className="flex items-center gap-1 bg-[#1A1C20] p-0.5 border border-white/10 text-[10px] uppercase font-bold tracking-wider">
            <button
              onClick={() => {
                setActiveViewTab('public');
                setActiveImageIndex(0);
              }}
              className={`flex items-center gap-1.5 px-3 py-1 transition-all ${
                activeViewTab === 'public'
                  ? 'bg-[#C5A059] text-black font-bold'
                  : 'text-[#F9F6F0]/60 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Cliente' : 'Client'}</span>
            </button>
            <button
              onClick={() => {
                setActiveViewTab('admin');
                setActiveImageIndex(0);
              }}
              className={`flex items-center gap-1.5 px-3 py-1 transition-all ${
                activeViewTab === 'admin'
                  ? 'bg-[#C5A059] text-black font-bold'
                  : 'text-[#F9F6F0]/60 hover:text-white'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Panel Admin' : 'Admin Panel'}</span>
            </button>
          </div>
        </div>

        {/* Image Showcase & Screenshots Preview Container */}
        <div className="relative bg-black aspect-[16/10] overflow-hidden group/img">
          {currentScreenshot ? (
            <img
              src={currentScreenshot.url}
              alt={currentScreenshot.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
            />
          ) : (
            <img
              src={app.bannerUrl}
              alt={app.name}
              className="w-full h-full object-cover object-top"
            />
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1012] via-transparent to-black/40 pointer-events-none"></div>

          {/* View Badge Badge */}
          <div className="absolute top-3 left-3 bg-[#0F1012]/90 border border-[#C5A059]/40 px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-[#C5A059] flex items-center gap-1.5 shadow-lg">
            {activeViewTab === 'public' ? (
              <>
                <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{language === 'es' ? 'Página Pública Clientes' : 'Public Storefront View'}</span>
              </>
            ) : (
              <>
                <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{language === 'es' ? 'Panel Privado Dueño / Ayudantes' : 'Owner / Staff Admin Panel'}</span>
              </>
            )}
          </div>

          {/* Screenshot Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3 bg-[#0F1012]/95 p-3 border border-white/10 text-xs">
            <div className="font-serif font-bold text-[#F9F6F0] flex items-center justify-between">
              <span>{currentScreenshot?.title || app.name}</span>
              <span className="text-[10px] text-[#C5A059] font-mono">
                {activeImageIndex + 1}/{activeScreenshots.length || 1}
              </span>
            </div>
            <p className="text-[11px] text-[#F9F6F0]/70 mt-0.5 line-clamp-1">
              {currentScreenshot?.description}
            </p>
          </div>

          {/* Screenshot Navigation Buttons if multiple */}
          {activeScreenshots.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/80 hover:bg-[#C5A059] hover:text-black text-white border border-white/20 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/80 hover:bg-[#C5A059] hover:text-black text-white border border-white/20 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* App Detailed Highlights & Features */}
        <div className="p-6 space-y-3">
          <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em] font-mono">
            {language === 'es' ? 'Beneficios Clave para tu Negocio:' : 'Key Business Benefits:'}
          </div>
          <ul className="space-y-2 text-xs text-[#F9F6F0]/80">
            {app.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer Buttons */}
      <div className="p-6 pt-0 space-y-2.5">
        <button
          onClick={() => onOpenDemo(app, activeViewTab)}
          className="w-full py-3 px-4 bg-[#C5A059] text-black font-bold text-xs hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-md"
        >
          <Play className="w-4 h-4 fill-black" />
          <span>{language === 'es' ? 'SOLICITAR DEMO' : 'REQUEST DEMO'}</span>
        </button>

        <button
          onClick={() => onOpenContactForApp(app)}
          className="w-full py-2.5 px-4 bg-[#0F1012] hover:bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{t.rentThisApp}</span>
        </button>
      </div>
    </div>
  );
};



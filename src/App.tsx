import React, { useState, useEffect } from 'react';
import { loadConfig, getSession, saveConfig, signOut } from './cloud';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AppCard } from './components/AppCard';
import { AppDemoModal } from './components/AppDemoModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { AdminAccessModal } from './components/AdminAccessModal';
import { PricingCalculator } from './components/PricingCalculator';
import { TechSupportSection } from './components/TechSupportSection';
import { ContactModal } from './components/ContactModal';
import { ShareModal } from './components/ShareModal';
import { INITIAL_APPS, PRICING_PLANS } from './data/initialApps';
import { AppShowcase, PageModel, PricingPlan } from './types';
import { Sparkles, MessageCircle, Shield, CheckCircle2, Phone, Star, Layers, HelpCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t } = useLanguage();
  // App Showcase List State
  const [apps, setApps] = useState<AppShowcase[]>(INITIAL_APPS);

  // Pricing Plans State
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(PRICING_PLANS);

  // Layout Design Model State ('cyber-dark', 'clean-editorial', 'bento-hub')
  const [currentModel, setCurrentModel] = useState<PageModel>('cyber-dark');

  // Category Filter State
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Modals Control State
  const [demoApp, setDemoApp] = useState<AppShowcase | null>(null);
  const [demoInitialMode, setDemoInitialMode] = useState<'public' | 'admin'>('public');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  // Candado del panel Escudo: pide credenciales antes de abrir
  const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(false);
  const [isAccessOpen, setIsAccessOpen] = useState<boolean>(false);
  const requestAdmin = () => {
    if (isAdminUnlocked) setIsAdminOpen(true);
    else setIsAccessOpen(true);
  };

  // Al iniciar: cargar la configuración publicada (si existe) y recordar la sesión de admin
  useEffect(() => {
    if (getSession()) setIsAdminUnlocked(true);
    loadConfig().then((data) => {
      if (!data) return;
      if (Array.isArray(data.apps)) setApps(data.apps);
      if (Array.isArray(data.pricingPlans)) setPricingPlans(data.pricingPlans);
      if (data.currentModel) setCurrentModel(data.currentModel);
    });
  }, []);

  // Publicar (guardar en la nube) el catálogo, planes y diseño actuales
  const handlePublish = async (): Promise<{ ok: boolean; error?: string }> => {
    return saveConfig({ apps, pricingPlans, currentModel });
  };

  const handleAdminLogout = () => {
    signOut();
    setIsAdminUnlocked(false);
    setIsAdminOpen(false);
  };
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);
  const [contactAppName, setContactAppName] = useState<string>('');

  // Filtered Apps
  const filteredApps = apps.filter((app) => {
    if (!app.isActive) return false;
    if (activeCategory === 'all') return true;
    return app.category === activeCategory;
  });

  // Dynamic category list (only rubros that have active apps), in a preferred order
  const CATEGORY_ORDER = ['moda', 'estetica', 'gastronomia', 'barberia', 'salud', 'petshop', 'almacen', 'fitness', 'entretenimiento', 'masajes'];
  const activeApps = apps.filter((a) => a.isActive);
  const availableCategories = Array.from(
    activeApps.reduce((map, a) => {
      if (!map.has(a.category)) map.set(a.category, a.categoryLabel || a.category);
      return map;
    }, new Map<string, string>())
  ).sort((a, b) => CATEGORY_ORDER.indexOf(a[0]) - CATEGORY_ORDER.indexOf(b[0]));
  const countFor = (cat: string) => activeApps.filter((a) => a.category === cat).length;

  // Admin Handlers
  const handleAddApp = (newApp: AppShowcase) => {
    setApps([newApp, ...apps]);
  };

  const handleUpdateApp = (updatedApp: AppShowcase) => {
    setApps(apps.map((a) => (a.id === updatedApp.id ? updatedApp : a)));
  };

  const handleDeleteApp = (appId: string) => {
    setApps(apps.filter((a) => a.id !== appId));
  };

  const handleOpenDemo = (app: AppShowcase, viewMode: 'public' | 'admin') => {
    setDemoApp(app);
    setDemoInitialMode(viewMode);
  };

  const handleOpenContactForApp = (app: AppShowcase) => {
    setContactAppName(app.name);
    setIsContactOpen(true);
  };

  const handleOpenContactWithPlan = (planName: string) => {
    setContactAppName(`Plan ${planName}`);
    setIsContactOpen(true);
  };

  const handleUpdatePricingPlan = (updatedPlan: PricingPlan) => {
    setPricingPlans((prev) => prev.map((p) => (p.id === updatedPlan.id ? updatedPlan : p)));
  };

  // Importar configuración completa desde un JSON exportado
  const handleImportConfig = (data: { apps?: AppShowcase[]; pricingPlans?: PricingPlan[]; currentModel?: PageModel }) => {
    if (Array.isArray(data.apps)) setApps(data.apps);
    if (Array.isArray(data.pricingPlans)) setPricingPlans(data.pricingPlans);
    if (data.currentModel) setCurrentModel(data.currentModel);
  };

  return (
    <div className="min-h-screen bg-[#0F1012] text-[#F9F6F0] font-sans selection:bg-[#C5A059] selection:text-black transition-colors">

      {/* Top Header */}
      <Header
        currentModel={currentModel}
        onModelChange={setCurrentModel}
        onOpenAdmin={requestAdmin}
        onOpenContact={() => {
          setContactAppName('');
          setIsContactOpen(true);
        }}
        onOpenShare={() => setIsShareOpen(true)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Hero Section */}
      <HeroSection
        currentModel={currentModel}
        onOpenContact={() => {
          setContactAppName('');
          setIsContactOpen(true);
        }}
        onOpenAdmin={requestAdmin}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Apps Showcase Gallery Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Section Title */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1C20] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
              <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
              {t.catalogTitle}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F9F6F0] tracking-tight">
              {t.catalogSubtitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#F9F6F0]/70 mt-1">
              {t.catalogDesc}
            </p>
          </div>

          {/* Category Pills (dinámicos según rubros con apps) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#C5A059] text-black font-bold'
                  : 'bg-[#1A1C20] border border-white/10 text-[#F9F6F0]/70 hover:text-white'
              }`}
            >
              {t.allCategories} ({activeApps.length})
            </button>
            {availableCategories.map(([cat, label]) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 transition-all ${
                  activeCategory === cat
                    ? 'bg-[#C5A059] text-black font-bold'
                    : 'bg-[#1A1C20] border border-white/10 text-[#F9F6F0]/70 hover:text-white'
                }`}
              >
                {label} ({countFor(cat)})
              </button>
            ))}
          </div>
        </div>

        {/* Apps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((appItem) => (
            <AppCard
              key={appItem.id}
              app={appItem}
              onOpenDemo={handleOpenDemo}
              onOpenContactForApp={handleOpenContactForApp}
            />
          ))}
        </div>
      </main>

      {/* Pricing Calculator Section */}
      <PricingCalculator
        onOpenContactWithPlan={handleOpenContactWithPlan}
        plans={pricingPlans}
      />


      {/* Technical Support & SLA Section */}
      <TechSupportSection />

      {/* Testimonials & FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F1012] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-serif font-bold text-[#F9F6F0]">
              Lo que opinan los dueños de negocios que ya alquilan
            </h2>
            <p className="text-xs text-[#F9F6F0]/70">
              Franquicias y micro-emprendedores que escalaron sus ventas con Vitrina v2
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1C20] p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs text-[#F9F6F0]/80 italic leading-relaxed">
                "Buscábamos una app para nuestra barbería sin pagar fortunas. Con el plan de $15.000/mes nuestros clientes reservan solos y mis barberos ven sus turnos en el celular."
              </p>
              <div className="text-xs font-bold text-[#C5A059] font-mono">
                — Diego Ariel (Barbería DiRasche)
              </div>
            </div>

            <div className="bg-[#1A1C20] p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs text-[#F9F6F0]/80 italic leading-relaxed">
                "Lo mejor es el código de retiro RET-NY para nuestras clientas de calzado. Llegan al local, muestran su voucher y retiran en 30 segundos."
              </p>
              <div className="text-xs font-bold text-[#C5A059] font-mono">
                — Clara M. (Boutique Glamour)
              </div>
            </div>

            <div className="bg-[#1A1C20] p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs text-[#F9F6F0]/80 italic leading-relaxed">
                "El sonido de las comandas en cocina nos cambió la vida en la panchería. Ya no pagamos el 30% a apps de envíos."
              </p>
              <div className="text-xs font-bold text-[#C5A059] font-mono">
                — Marta G. (La Panchería del Jefe)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1012] border-t border-white/10 text-[#F9F6F0]/60 py-10 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C5A059] text-black flex items-center justify-center font-serif font-black text-lg">
              V2
            </div>
            <div>
              <div className="font-serif font-bold text-white text-base">Vitrina v2</div>
              <p className="text-[11px] text-[#F9F6F0]/50">
                Plataforma de Alquiler de Aplicaciones Comerciales Multitenant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={requestAdmin}
              className="hover:text-[#C5A059] flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>ESCUDO PANEL ADMIN</span>
            </button>
            <button
              onClick={() => {
                setContactAppName('');
                setIsContactOpen(true);
              }}
              className="hover:text-[#C5A059]"
            >
              Contacto WhatsApp
            </button>
          </div>

          <div className="text-[11px] text-[#F9F6F0]/40 font-mono">
            © 2026 Vitrina v2. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Interactive Demo Modal */}
      {demoApp && (
        <AppDemoModal
          app={demoApp}
          initialMode={demoInitialMode}
          onClose={() => setDemoApp(null)}
          onOpenContact={(appName) => {
            setContactAppName(appName);
            setIsContactOpen(true);
          }}
        />
      )}

      {/* Candado de acceso al Panel Escudo */}
      <AdminAccessModal
        isOpen={isAccessOpen}
        onClose={() => setIsAccessOpen(false)}
        onSuccess={() => {
          setIsAdminUnlocked(true);
          setIsAccessOpen(false);
          setIsAdminOpen(true);
        }}
      />

      {/* Escudo Admin Control Panel Modal */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        apps={apps}
        onAddApp={handleAddApp}
        onUpdateApp={handleUpdateApp}
        onDeleteApp={handleDeleteApp}
        currentModel={currentModel}
        onModelChange={setCurrentModel}
        pricingPlans={pricingPlans}
        onUpdatePricingPlan={handleUpdatePricingPlan}
        onImportConfig={handleImportConfig}
        onPublish={handlePublish}
        onLogout={handleAdminLogout}
      />


      {/* Contact & Rental Request Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultAppName={contactAppName}
      />

      {/* Share Page & QR Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}


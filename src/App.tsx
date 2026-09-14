import React, { useState, useEffect } from 'react';
import { loadConfig, getSession, saveConfig, signOut } from './cloud';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AppCard } from './components/AppCard';
import { AdminPanelModal } from './components/AdminPanelModal';
import { AdminAccessModal } from './components/AdminAccessModal';
import { PricingCalculator } from './components/PricingCalculator';
import { TechSupportSection } from './components/TechSupportSection';
import { ContactModal } from './components/ContactModal';
import { ShareModal } from './components/ShareModal';
import { INITIAL_APPS, PRICING_PLANS } from './data/initialApps';
import { AppShowcase, PageModel, PricingPlan, ETIQUETAS_RUBRO } from './types';
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
      if (Array.isArray(data.apps)) {
        // Reconciliación anti-demos + apps nuevas: el catálogo real (INITIAL_APPS)
        // manda el orden y garantiza que TODA app del molde aparezca, aunque la
        // config publicada sea vieja y no la tenga. De la nube tomamos la versión
        // de cada app si existe (conserva ediciones/visibilidad/precio del panel);
        // las apps "fantasma" (demos de versiones viejas) se descartan solas.
        const nubePorId = new Map(
          (data.apps as AppShowcase[]).map((a) => [a.id, a])
        );
        // El demoUrl y la guiaUrl son propiedad del CÓDIGO (no se editan en el
        // panel): si la config publicada es vieja y no los trae, igual se toman
        // de INITIAL_APPS para que los botones "Ver cómo lo ve el cliente" y
        // "Guía rápida" siempre aparezcan.
        //
        // ⚠️ Todo campo nuevo que sea del código y no del panel hay que sumarlo
        // acá. Si no, la config publicada —que se guardó antes de que el campo
        // existiera— lo pisa con `undefined` y el botón no aparece nunca, sin un
        // solo error que lo explique.
        const merged = INITIAL_APPS.map((a) => {
          const nube = nubePorId.get(a.id);
          return nube ? { ...nube, demoUrl: a.demoUrl, guiaUrl: a.guiaUrl } : a;
        });
        setApps(merged);
      }
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

  // Rubros de una app: el principal MÁS los adicionales. Una misma app puede
  // aparecer en varias pestañas (ej.: Tienda Elección, en Bazar y en Moda).
  const rubrosDe = (a: AppShowcase): string[] => {
    const extras = Array.isArray((a as any).extraCategories) ? (a as any).extraCategories : [];
    return Array.from(new Set([a.category, ...extras].filter(Boolean)));
  };

  // Dynamic category list (only rubros that have active apps), in a preferred order
  /* El orden en que se muestran los rubros, tanto en las pestañas como en las
     franjas del catálogo.

     ⚠️ 'trabajo' estaba FUERA de esta lista. No se notaba porque `indexOf`
     devuelve -1 para lo que no encuentra, y -1 ordena antes que todo: quedaba
     primero de casualidad. Ahora está puesto, y está primero porque así se
     venía viendo. Un rubro nuevo que no figure acá va a seguir saltando al
     principio — si aparece uno, se agrega en el lugar que le toque. */
  const CATEGORY_ORDER = ['trabajo', 'moda', 'estetica', 'gastronomia', 'barberia', 'salud', 'petshop', 'almacen', 'fitness', 'entretenimiento', 'masajes'];
  const activeApps = apps.filter((a) => a.isActive);
  const availableCategories = Array.from(
    activeApps.reduce((map, a) => {
      rubrosDe(a).forEach((r) => {
        if (map.has(r)) return;
        // El nombre de la pestaña sale de la tabla común. Solo si el rubro no
        // está en la tabla usamos la etiqueta propia de la app.
        map.set(r, (ETIQUETAS_RUBRO as any)[r] || a.categoryLabel || r);
      });
      return map;
    }, new Map<string, string>())
  ).sort((a, b) => CATEGORY_ORDER.indexOf(a[0]) - CATEGORY_ORDER.indexOf(b[0]));
  /* Las apps de un rubro, en el orden del catálogo. Es la MISMA cuenta que
     muestra la pestaña, así el número de arriba y lo que se ve abajo no se
     pueden contradecir. */
  const appsDelRubro = (cat: string) => activeApps.filter((a) => rubrosDe(a).includes(cat));
  const countFor = (cat: string) => appsDelRubro(cat).length;

  /* Qué franjas se dibujan: todas, o solo la del rubro elegido en la pestaña. */
  const rubrosAMostrar = activeCategory === 'all'
    ? availableCategories
    : availableCategories.filter(([cat]) => cat === activeCategory);

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

        {/*
          ══════════════════════════════════════════════════════════════
           EL CATÁLOGO, SEPARADO POR RUBRO

           Antes eran 29 tarjetas una atrás de la otra: para encontrar las de
           gastronomía había que tocar la pestaña, o reconocerlas de memoria.
           Ahora cada rubro tiene su franja con el nombre y cuántas apps
           tiene, y las pestañas de arriba quedan igual: sirven para ir
           directo a una sola franja.

           ⚠️ Una app puede estar en DOS rubros (Tienda Elección está en
           Almacén y en Moda). Aparece en las dos franjas, a propósito: es la
           misma cuenta que muestran las pestañas, y así el número de arriba
           nunca contradice lo que se ve abajo. Por eso la `key` lleva el
           rubro adelante — si fuera solo el id, React vería dos tarjetas con
           el mismo nombre.
          ══════════════════════════════════════════════════════════════
        */}
        <div className="space-y-14">
          {rubrosAMostrar.map(([cat, label]) => {
            const delRubro = appsDelRubro(cat);
            if (delRubro.length === 0) return null;
            return (
              <section key={cat} id={`rubro-${cat}`}>

                {/* La franja: barra dorada, nombre del rubro, cuántas hay, y
                    la línea que se va apagando hasta el borde. */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
                  <div className="h-7 w-1 bg-[#C5A059] shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F9F6F0] tracking-tight shrink-0">
                    {label}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/40 px-2 py-0.5 shrink-0">
                    {delRubro.length} {delRubro.length === 1 ? 'app' : 'apps'}
                  </span>
                  <div className="h-px flex-1 min-w-[24px] bg-gradient-to-r from-[#C5A059]/45 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {delRubro.map((appItem) => (
                    <AppCard
                      key={`${cat}-${appItem.id}`}
                      app={appItem}
                      onOpenContactForApp={handleOpenContactForApp}
                    />
                  ))}
                </div>
              </section>
            );
          })}
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

      {/* Acá vivía el modal de la demo imitada. Se sacó junto con el botón
          "Solicitar Demo": mostraba encargos y empleados inventados como si
          fueran la app andando. Ver la nota en AppCard.tsx. */}

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


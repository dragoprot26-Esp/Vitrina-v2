import React from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/initialApps';
import { PricingPlan } from '../types';

interface PricingCalculatorProps {
  onOpenContactWithPlan: (planName: string) => void;
  plans?: PricingPlan[];
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onOpenContactWithPlan,
  plans = PRICING_PLANS,
}) => {
  const visiblePlans = plans.filter((p) => p.isActive !== false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F1012] border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1C20] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.25em]">
            <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
            SIN SORPRESAS NI COSTOS OCULTOS
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F9F6F0] tracking-tight">
            Planes de Alquiler a un Costo Muy Razonable
          </h2>
          <p className="text-sm sm:text-base text-[#F9F6F0]/80">
            Olvidate de pagar miles de dólares a un programador. Alquilá tu aplicación comercial desde $5.000 al mes, con soporte directo y personal.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid grid-cols-1 ${
          visiblePlans.length === 1
            ? 'max-w-md mx-auto'
            : visiblePlans.length === 2
            ? 'md:grid-cols-2 max-w-4xl mx-auto'
            : 'md:grid-cols-2 lg:grid-cols-3'
        } gap-6 items-stretch`}>
          {visiblePlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? 'bg-[#1A1C20] border-2 border-[#C5A059] shadow-2xl relative'
                  : 'bg-[#1A1C20] border border-white/10'
              }`}
            >
              <div>
                {plan.badge && (
                  <span
                    className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-mono mb-4 ${
                      plan.highlight
                        ? 'bg-[#C5A059] text-black font-extrabold'
                        : 'bg-[#0F1012] text-[#C5A059] border border-[#C5A059]/30'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-2xl font-serif font-bold text-[#F9F6F0]">{plan.name}</h3>
                <p className="text-xs text-[#F9F6F0]/70 mt-2 leading-relaxed min-h-[32px]">
                  {plan.description}
                </p>

                <div className="my-6 border-y border-white/10 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-bold text-[#C5A059]">
                      ${plan.price.toLocaleString('es-AR')}
                    </span>
                    <span className="text-xs text-[#F9F6F0]/60 font-mono">
                      {plan.currency}{plan.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F9F6F0]/50 mt-1">
                    {plan.priceNote || '* Llave en mano en 24hs. Cancelás cuando quieras.'}
                  </p>
                </div>

                <ul className="space-y-3 text-xs text-[#F9F6F0]/80">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenContactWithPlan(plan.name)}
                className={`mt-8 w-full py-3.5 px-4 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-[#C5A059] text-black hover:bg-[#d4b068] shadow-lg'
                    : 'bg-[#0F1012] hover:bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/40'
                }`}
              >
                <span>Elegir {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>


        {/* Cost Comparison Table: Rental vs Custom Build */}
        <div className="bg-[#1A1C20] p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#F9F6F0] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                <span>¿Por qué conviene Alquilar vs. Programar desde cero?</span>
              </h3>
              <p className="text-xs text-[#F9F6F0]/70 mt-1">
                Comparativa directa de costos para dueños de negocios y franquicias
              </p>
            </div>

            <span className="bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/40 text-xs px-3 py-1 font-mono font-bold uppercase tracking-wider">
              Ahorro del 95% Inicial
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-mono text-xs">
            <div className="p-4 bg-[#0F1012] border border-red-500/30 space-y-2">
              <div className="font-bold text-red-400 uppercase tracking-wider text-[11px]">
                ❌ Desarrollo a Medida Tradicional
              </div>
              <ul className="space-y-1.5 text-[#F9F6F0]/70 text-[11px] font-sans">
                <li>• Inversión inicial de $800.000 a $1.500.000 ARS</li>
                <li>• Demora de 2 a 4 meses de programación</li>
                <li>• Pago de servidores, hosting y mantenimiento aparte</li>
                <li>• Cobro por cada cambio o arreglo de fallas</li>
              </ul>
            </div>

            <div className="p-4 bg-[#0F1012] border border-[#C5A059]/50 space-y-2">
              <div className="font-bold text-[#C5A059] uppercase tracking-wider text-[11px]">
                ✅ Alquiler en Vitrina v2 (Recomendado)
              </div>
              <ul className="space-y-1.5 text-[#F9F6F0]/90 text-[11px] font-sans">
                <li>• Desde $5.000 ARS al mes, sin inversión inicial</li>
                <li>• Tu App lista para usar, llave en mano</li>
                <li>• Servidores rápidos y soporte directo incluido</li>
                <li>• Colaboradores y actualizaciones sin costo extra</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


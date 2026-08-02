import React from 'react';
import { Headphones, Shield, Users, Zap, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

export const TechSupportSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F1012] border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1C20] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.25em]">
            <Headphones className="w-3.5 h-3.5 text-[#C5A059]" />
            NO ESTÁS SOLO CON TU APP
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F9F6F0] tracking-tight">
            Soporte Directo & Acompañamiento
          </h2>
          <p className="text-sm sm:text-base text-[#F9F6F0]/80">
            No sabés de programación y no hace falta. Te acompañamos en la configuración y en cada cambio, por WhatsApp, de forma directa y personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1C20] p-6 border border-white/10 space-y-3">
            <div className="w-12 h-12 bg-[#0F1012] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#F9F6F0]">Te ayudamos a configurarla</h3>
            <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
              Atención directa por WhatsApp. Te ayudamos a cargar tus productos, precios y datos, y a dejar tu app lista para usar.
            </p>
          </div>

          <div className="bg-[#1A1C20] p-6 border border-white/10 space-y-3">
            <div className="w-12 h-12 bg-[#0F1012] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#F9F6F0]">Sumá colaboradores</h3>
            <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
              Según tu plan, sumás un segundo administrador y colaboradores (estilistas, cajeros o mozos) con su propio acceso para atender en vivo.
            </p>
          </div>

          <div className="bg-[#1A1C20] p-6 border border-white/10 space-y-3">
            <div className="w-12 h-12 bg-[#0F1012] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#F9F6F0]">Seguridad & Códigos Únicos</h3>
            <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
              Tus clientes reciben su código exclusivo de retiro (Ej: RET-NY-4147Y) para evitar confusiones o duplicaciones en la entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


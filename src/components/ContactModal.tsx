import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Phone, Building2, User } from 'lucide-react';
import { addLead } from '../cloud';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAppName?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultAppName = '',
}) => {
  if (!isOpen) return null;

  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRubro, setSelectedRubro] = useState('barberia');
  const [notes, setNotes] = useState(
    defaultAppName ? `Deseo alquilar la app: ${defaultAppName}` : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Guardamos la solicitud en la nube (no bloqueante: si falla, igual
    // mostramos el gracias para no frustrar al visitante).
    addLead({
      businessName,
      ownerName,
      phone,
      email,
      rubro: selectedRubro,
      appName: defaultAppName,
      notes,
    });
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1A1C20] border border-[#C5A059] w-full max-w-lg p-6 sm:p-8 space-y-6 text-[#F9F6F0] shadow-2xl my-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-[#0F1012] hover:bg-[#C5A059] text-[#C5A059] hover:text-black flex items-center justify-center transition-colors border border-[#C5A059]/40"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0F1012] border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                ALQUILER EN 24 HORAS
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F9F6F0]">
                Solicitá tu App Comercial
              </h2>
              <p className="text-xs text-[#F9F6F0]/70">
                Completá los datos de tu negocio y te la dejamos lista funcionando con tu nombre e imagen.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                  Nombre de tu Negocio / Franquicia:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Barbería DiRasche / Bellas Uñas"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-[#0F1012] border border-white/10 px-3.5 py-2.5 text-xs text-[#F9F6F0] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                  Tu Nombre y Apellido:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Diego Ariel"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full bg-[#0F1012] border border-white/10 px-3.5 py-2.5 text-xs text-[#F9F6F0] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                  Teléfono Móvil (WhatsApp para activar tu app):
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. +54 9 11 3366-5588"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0F1012] border border-white/10 px-3.5 py-2.5 text-xs text-[#F9F6F0] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                  Email (opcional, para responderte):
                </label>
                <input
                  type="email"
                  placeholder="Ej. tunegocio@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0F1012] border border-white/10 px-3.5 py-2.5 text-xs text-[#F9F6F0] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                  Rubro Principal:
                </label>
                <select
                  value={selectedRubro}
                  onChange={(e) => setSelectedRubro(e.target.value)}
                  className="w-full bg-[#0F1012] border border-white/10 px-3.5 py-2.5 text-xs text-[#F9F6F0] focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="barberia">Barbería & Peluquería</option>
                  <option value="estetica">Uñas, Estética & Belleza</option>
                  <option value="moda">Moda & Calzado</option>
                  <option value="gastronomia">Gastronomía & Fast Food</option>
                  <option value="petshop">Pet Shop & Veterinaria</option>
                  <option value="masajes">Masajes & Spa</option>
                  <option value="salud">Salud & Dietética</option>
                  <option value="almacen">Almacén & Tienda</option>
                  <option value="fitness">Gimnasio & Fitness</option>
                  <option value="entretenimiento">Entretenimiento & Eventos</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                  Comentarios o Pedidos Especiales:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Necesito habilitar 3 ayudantes para mi local."
                  className="w-full bg-[#0F1012] border border-white/10 px-3.5 py-2.5 text-xs text-[#F9F6F0] focus:outline-none focus:border-[#C5A059]"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Solicitud de Alquiler</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#C5A059] text-black flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#F9F6F0]">
              ¡Solicitud Recibida!
            </h3>
            <p className="text-xs text-[#F9F6F0]/80 leading-relaxed max-w-sm mx-auto">
              Muchas gracias, <strong className="text-[#C5A059]">{ownerName}</strong>. Un asesor de Vitrina v2 se pondrá en contacto al WhatsApp <strong className="text-[#C5A059]">{phone}</strong> en los próximos minutos para configurar tu app.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#0F1012] hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059] transition-all text-xs font-bold uppercase tracking-widest"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


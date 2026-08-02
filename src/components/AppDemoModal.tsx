import React, { useState } from 'react';
import {
  X,
  Eye,
  Shield,
  Calendar,
  Clock,
  UserCheck,
  Check,
  ShoppingBag,
  Bell,
  Plus,
  Trash2,
  Phone,
  MapPin,
  QrCode,
  Sparkles,
  AlertCircle,
  Copy,
  CheckCircle2,
  RefreshCw,
  Send,
  MessageSquare,
  Users
} from 'lucide-react';
import { AppShowcase } from '../types';

interface AppDemoModalProps {
  app: AppShowcase | null;
  initialMode?: 'public' | 'admin';
  onClose: () => void;
  onOpenContact: (appName: string) => void;
}

export const AppDemoModal: React.FC<AppDemoModalProps> = ({
  app,
  initialMode = 'public',
  onClose,
  onOpenContact,
}) => {
  if (!app) return null;

  const [activeTab, setActiveTab] = useState<'public' | 'admin'>(initialMode);
  
  // Interactive Public State (Demo booking or ordering)
  const [selectedBarberOrCollab, setSelectedBarberOrCollab] = useState<string>(
    app.demoData.collaborators?.[0]?.name || 'Jacki'
  );
  const [selectedItem, setSelectedItem] = useState<string>(
    app.demoData.items[0]?.title || ''
  );
  const [selectedDate, setSelectedDate] = useState<string>('09/07/2026');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM');
  const [customerName, setCustomerName] = useState<string>('Julieta Z.');
  const [customerPhone, setCustomerPhone] = useState<string>('+54 9 1133221100');
  
  // Confirmation state
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);
  const [isCopyingCode, setIsCopyingCode] = useState<boolean>(false);

  // Admin Interactive State
  const [orders, setOrders] = useState(
    app.demoData.sampleOrdersOrTurns || []
  );
  const [collaborators, setCollaborators] = useState(
    app.demoData.collaborators || []
  );
  const [coAdmin, setCoAdmin] = useState<string>('Segundo Administrador (Inquilino 2)');
  const [notificationLogs, setNotificationLogs] = useState<
    Array<{ id: string; type: string; msg: string; time: string }>
  >([
    {
      id: '1',
      type: 'Inicio de sesión',
      msg: 'Acceso al panel otorgado a Inquilino Principal.',
      time: '19:25:00',
    },
    {
      id: '2',
      type: 'Nuevo Turno / Pedido',
      msg: 'Cliente agendó "Corte con máquina" para las 11:00 AM.',
      time: '19:10:51',
    },
  ]);

  // Handle placing a demo booking or order
  const handleConfirmAction = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = app.category === 'moda' ? 'RET-NY' : app.category === 'gastronomia' ? 'P' : 'TRN';
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newCode = `${prefix}-${randomNum}Y`;

    setConfirmedCode(newCode);

    // Add to admin live orders
    const newOrder = {
      id: Date.now().toString(),
      code: newCode,
      customer: customerName || 'Cliente Demo',
      phone: customerPhone || '+54 9 1122334455',
      detail: `${selectedItem} ${selectedBarberOrCollab ? `(Atendido por ${selectedBarberOrCollab})` : ''}`,
      status: 'En Espera' as const,
      total: app.demoData.items.find((i) => i.title === selectedItem)?.price || '$15.000 ARS',
      time: selectedTimeSlot,
    };

    setOrders([newOrder, ...orders]);

    // Push notification log
    setNotificationLogs([
      {
        id: Date.now().toString(),
        type: 'Nuevo Encargo / Reserva',
        msg: `Cliente ${customerName} generó código ${newCode}`,
        time: new Date().toLocaleTimeString(),
      },
      ...notificationLogs,
    ]);
  };

  const handleCopyCode = () => {
    if (confirmedCode) {
      navigator.clipboard.writeText(confirmedCode);
      setIsCopyingCode(true);
      setTimeout(() => setIsCopyingCode(false), 2000);
    }
  };

  const handleSimulateNewCustomer = () => {
    const randomCode = `RET-SIM-${Math.floor(1000 + Math.random() * 9000)}`;
    setNotificationLogs([
      {
        id: Date.now().toString(),
        type: 'Alerta WebSockets Push',
        msg: `¡Simulación! Nuevo cliente agendó con código ${randomCode}`,
        time: new Date().toLocaleTimeString(),
      },
      ...notificationLogs,
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#1A1C20] border border-[#C5A059] w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl text-[#F9F6F0] my-auto">
        {/* Modal Header Bar */}
        <div className="bg-[#0F1012] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5A059] text-black font-serif font-black text-xl flex items-center justify-center">
              V2
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-serif font-bold text-white">{app.name}</h2>
                <span className="bg-[#C5A059] text-black text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-wider font-mono">
                  {app.categoryLabel}
                </span>
              </div>
              <p className="text-xs text-[#F9F6F0]/70">
                Experiencia Interactiva En Vivo (Cliente Final & Panel Admin)
              </p>
            </div>
          </div>

          {/* Tab Switcher (Cliente vs Admin) */}
          <div className="flex items-center gap-2 bg-[#1A1C20] p-1 border border-white/10">
            <button
              onClick={() => setActiveTab('public')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'public'
                  ? 'bg-[#C5A059] text-black'
                  : 'text-[#F9F6F0]/70 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>1. Página Pública Cliente</span>
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'admin'
                  ? 'bg-[#C5A059] text-black'
                  : 'text-[#F9F6F0]/70 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>2. Panel Admin Inquilino</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 bg-[#0F1012] hover:bg-[#C5A059] text-[#C5A059] hover:text-black flex items-center justify-center transition-colors ml-2 border border-[#C5A059]/40"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'public' ? (
            /* TAB 1: PÁGINA PÚBLICA DE LA APP DEMO */
            <div className="space-y-6">
              {/* Business Banner & Info */}
              <div className="relative overflow-hidden border border-white/10 bg-[#0F1012] p-6 sm:p-8">
                <img
                  src={app.bannerUrl}
                  alt={app.demoData.businessName}
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
                <div className="relative z-10 space-y-2">
                  <div className="inline-block bg-[#C5A059] text-black font-extrabold text-[10px] uppercase px-2.5 py-0.5 font-mono tracking-widest">
                    {app.demoData.location}
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    {app.demoData.businessName}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#F9F6F0]/80 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                    <span>Tel: {app.demoData.phone}</span>
                  </p>
                </div>
              </div>

              {/* Order Confirmed Banner (If placed) */}
              {confirmedCode && (
                <div className="bg-[#0F1012] border border-[#C5A059] p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-[#C5A059] text-black flex items-center justify-center mx-auto font-bold">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    ¡Encargo / Reserva Confirmada con Éxito!
                  </h3>
                  <p className="text-xs text-[#F9F6F0]/80">
                    Presentá el siguiente código en el local o por WhatsApp para retirar:
                  </p>

                  <div className="bg-[#1A1C20] border border-dashed border-[#C5A059] p-4 max-w-sm mx-auto font-mono text-2xl font-bold text-[#C5A059] tracking-wider flex items-center justify-between">
                    <span>{confirmedCode}</span>
                    <button
                      onClick={handleCopyCode}
                      className="p-2 bg-[#0F1012] hover:bg-[#C5A059] hover:text-black text-[#C5A059] border border-[#C5A059]/40 transition-colors text-xs font-sans flex items-center gap-1 uppercase tracking-wider font-bold"
                    >
                      {isCopyingCode ? (
                        <span className="text-emerald-400 font-bold">¡Copiado!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-[#F9F6F0]/60 max-w-md mx-auto">
                    * Tu pedido quedó registrado en el Panel Admin del negocio. Cambiá a la pestaña "2. Panel Admin Inquilino" para ver cómo lo recibe el dueño.
                  </div>
                </div>
              )}

              {/* Interactive Booking / Order Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column: Choose Collaborator / Services */}
                <div className="bg-[#0F1012] p-5 border border-white/10 space-y-4">
                  <h3 className="font-bold text-[#C5A059] text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>1. SELECCIONA SERVICIO O PRODUCTO</span>
                  </h3>

                  <div className="space-y-2">
                    {app.demoData.items.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItem(item.title)}
                        className={`p-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          selectedItem === item.title
                            ? 'bg-[#1A1C20] border-[#C5A059] text-white'
                            : 'bg-[#1A1C20]/50 border-white/5 text-[#F9F6F0]/70 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-12 h-12 object-cover"
                          />
                          <div>
                            <div className="font-bold text-xs text-white">{item.title}</div>
                            <div className="text-[11px] text-[#F9F6F0]/60">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-mono font-bold text-[#C5A059] text-xs">
                            {item.price}
                          </div>
                          {item.durationOrStock && (
                            <div className="text-[10px] text-[#F9F6F0]/50">
                              {item.durationOrStock}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Collaborators / Staff Selection if available */}
                  {app.demoData.collaborators && app.demoData.collaborators.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <label className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                        Elegir Profesional / Atendido por:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {app.demoData.collaborators.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => setSelectedBarberOrCollab(c.name)}
                            className={`p-2.5 border text-left flex items-center gap-2 transition-all ${
                              selectedBarberOrCollab === c.name
                                ? 'bg-[#1A1C20] border-[#C5A059] text-[#C5A059]'
                                : 'bg-[#1A1C20]/50 border-white/5 text-[#F9F6F0]/60 hover:border-white/20'
                            }`}
                          >
                            <img
                              src={c.avatarUrl}
                              alt={c.name}
                              className="w-7 h-7 object-cover"
                            />
                            <div>
                              <div className="font-bold text-xs">{c.name}</div>
                              <div className="text-[10px] opacity-75">{c.role}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Customer Info & Confirmation */}
                <form
                  onSubmit={handleConfirmAction}
                  className="bg-[#0F1012] p-5 border border-white/10 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="font-bold text-[#C5A059] text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C5A059]" />
                      <span>2. FECHA Y DATOS DE CONFIRMACIÓN</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                          Fecha del Turno / Encargo:
                        </label>
                        <input
                          type="text"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                          Horario Disponible:
                        </label>
                        <select
                          value={selectedTimeSlot}
                          onChange={(e) => setSelectedTimeSlot(e.target.value)}
                          className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059] font-mono"
                        >
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                        Tu Nombre Completo:
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ej. Julieta Z."
                        className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[#C5A059] block mb-1 uppercase tracking-wider font-semibold">
                        Teléfono Móvil (WhatsApp):
                      </label>
                      <input
                        type="text"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Ej. +54 9 1133221100"
                        className="w-full bg-[#1A1C20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Check className="w-4 h-4" />
                    <span>CONFIRMAR EN {app.demoData.businessName}</span>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* TAB 2: PANEL ADMIN PRIVADO DEL INQUILINO / DUEÑO */
            <div className="space-y-6">
              {/* Admin Dashboard Bar */}
              <div className="bg-[#0F1012] p-5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 animate-ping"></span>
                    <h2 className="text-lg font-serif font-bold text-white">
                      Panel de Control — {app.demoData.businessName}
                    </h2>
                    <span className="bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-mono px-2 py-0.5 font-bold uppercase">
                      Inquilino Activo
                    </span>
                  </div>
                  <p className="text-xs text-[#F9F6F0]/70 mt-1">
                    Licencia Comercial Vitrina v2. Multitenant aislada con notificaciones Push.
                  </p>
                </div>

                <button
                  onClick={handleSimulateNewCustomer}
                  className="px-4 py-2 bg-[#1A1C20] border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Simular Cliente Agendando</span>
                </button>
              </div>

              {/* Co-Administrator Tenant Assignment Box */}
              <div className="bg-[#0F1012] p-5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#C5A059] font-bold text-xs uppercase tracking-widest font-mono">
                  <Users className="w-4 h-4" />
                  <span>ASIGNACIÓN DE SEGUNDO ADMINISTRADOR (INQUILINO 2)</span>
                </div>
                <p className="text-xs text-[#F9F6F0]/80">
                  Como Inquilino Principal (Administrador 1), podés autorizar a tu socio, encargado o co-administrador para gestionar turnos y ventas en paralelo.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={coAdmin}
                    onChange={(e) => setCoAdmin(e.target.value)}
                    className="bg-[#1A1C20] border border-white/10 text-white text-xs px-3 py-2 focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Segundo Administrador (Inquilino 2)">
                      Pedro (Barbero Master / Co-Admin)
                    </option>
                    <option value="Carla (Encargada Depósito)">
                      Carla (Encargada Depósito)
                    </option>
                    <option value="Sofía (Co-Administradora)">
                      Sofía (Co-Administradora)
                    </option>
                  </select>

                  <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/30">
                    Active: 2do Inquilino Habilitado 👑
                  </span>
                </div>
              </div>

              {/* Live Orders & Turnos Management Table */}
              <div className="bg-[#0F1012] border border-white/10 overflow-hidden space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-white text-base flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span>Listado de Turnos / Pedidos Registrados</span>
                  </h3>
                  <span className="bg-[#1A1C20] text-[#C5A059] border border-[#C5A059]/30 text-xs font-mono px-2.5 py-1">
                    {orders.length} Registros
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-[#C5A059] font-mono text-[11px] uppercase tracking-wider">
                        <th className="py-2.5 px-3">Código / Turno</th>
                        <th className="py-2.5 px-3">Cliente & Contacto</th>
                        <th className="py-2.5 px-3">Detalle</th>
                        <th className="py-2.5 px-3">Total</th>
                        <th className="py-2.5 px-3">Estado</th>
                        <th className="py-2.5 px-3 text-right">Acción</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {orders.map((ord) => (
                        <tr key={ord.id} className="hover:bg-[#1A1C20]/50 font-mono">
                          <td className="py-3 px-3 font-bold text-[#C5A059]">
                            {ord.code}
                          </td>
                          <td className="py-3 px-3 font-sans">
                            <div className="font-bold text-white">{ord.customer}</div>
                            <div className="text-[10px] text-[#F9F6F0]/60">{ord.phone}</div>
                          </td>
                          <td className="py-3 px-3 font-sans text-[#F9F6F0]/80">
                            {ord.detail}
                          </td>
                          <td className="py-3 px-3 font-bold text-emerald-400">
                            {ord.total}
                          </td>
                          <td className="py-3 px-3">
                            <span
                              className={`px-2 py-0.5 text-[10px] font-bold ${
                                ord.status === 'Atendido' || ord.status === 'Entregado'
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                  : 'bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40'
                              }`}
                            >
                              {ord.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right font-sans">
                            <button
                              onClick={() => {
                                setOrders(
                                  orders.map((o) =>
                                    o.id === ord.id
                                      ? {
                                          ...o,
                                          status:
                                            o.status === 'En Espera'
                                              ? 'Atendido'
                                              : 'En Espera',
                                        }
                                      : o
                                  )
                                );
                              }}
                              className="px-2.5 py-1 bg-[#1A1C20] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-black text-[#C5A059] transition-colors text-[11px] font-bold uppercase tracking-wider"
                            >
                              Cambiar Estado
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Real-time WebSockets Notification Log */}
              <div className="bg-[#0F1012] p-5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#C5A059] font-bold text-xs uppercase tracking-widest font-mono">
                    <Bell className="w-4 h-4 animate-bounce text-[#C5A059]" />
                    <span>Notificaciones en Tiempo Real (Push / WebSockets)</span>
                  </div>
                  <span className="text-[10px] text-[#F9F6F0]/50 font-mono">
                    Canal simulación activo
                  </span>
                </div>

                <div className="space-y-2 max-h-40 overflow-y-auto font-mono text-xs">
                  {notificationLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-2.5 bg-[#1A1C20] border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500"></span>
                        <div>
                          <span className="font-bold text-[#C5A059]">{log.type}: </span>
                          <span className="text-[#F9F6F0]/80">{log.msg}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#F9F6F0]/50">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#0F1012] px-6 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#F9F6F0]/70">
            ¿Te interesa alquilar esta app para tu franquicia o local?
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact(app.name);
            }}
            className="px-6 py-2.5 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d4b068] transition-all flex items-center gap-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Alquilar {app.name} (desde ${app.monthlyPrice.toLocaleString('es-AR')}/mes)</span>
          </button>
        </div>
      </div>
    </div>
  );
};


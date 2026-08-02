import React, { useState, useEffect } from 'react';
import {
  Share2,
  QrCode,
  Copy,
  Check,
  Download,
  X,
  Mail,
  Send,
  MessageSquare,
  Globe,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import QRCode from 'qrcode';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'all' | 'qr'>('all');

  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://vitrina.digital';
  const shareText = '¡Descubrí Vitrina v2! La plataforma de alquiler de Apps Web y Catálogos Digitales para comercios y profesionales:';

  useEffect(() => {
    if (isOpen && pageUrl) {
      QRCode.toDataURL(pageUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error('Error generating QR:', err));
    }
  }, [isOpen, pageUrl]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = 'QR_Vitrina_v2.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vitrina v2 - Alquiler Digital',
          text: shareText,
          url: pageUrl
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      color: 'bg-emerald-600 hover:bg-emerald-500 text-white',
      badge: 'Más Usado',
      onClick: () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'bg-blue-600 hover:bg-blue-500 text-white',
      onClick: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'bg-neutral-800 hover:bg-neutral-700 text-white border border-white/20',
      onClick: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: 'bg-sky-700 hover:bg-sky-600 text-white',
      onClick: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'Telegram',
      icon: <Send className="w-5 h-5" />,
      color: 'bg-sky-500 hover:bg-sky-400 text-white',
      onClick: () => {
        const url = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      color: 'bg-amber-600 hover:bg-amber-500 text-white',
      onClick: () => {
        const mailto = `mailto:?subject=${encodeURIComponent('Te comparto Vitrina v2 - Alquiler Digital')}&body=${encodeURIComponent(shareText + '\n\n' + pageUrl)}`;
        window.location.href = mailto;
      }
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#1A1C20] border-2 border-[#C5A059] w-full max-w-lg overflow-hidden shadow-2xl transition-all relative">
        {/* Header Bar */}
        <div className="bg-[#0F1012] p-4 border-b border-[#C5A059]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center font-bold shadow-md">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-[#F9F6F0]">
                Compartir Página
              </h2>
              <p className="text-[11px] font-mono text-[#F9F6F0]/60 uppercase tracking-wider">
                Vitrina v2 • Alquiler Digital
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#0F1012]">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              activeTab === 'all'
                ? 'bg-[#1A1C20] text-[#C5A059] border-b-2 border-[#C5A059]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Redes Sociales y Enlace</span>
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              activeTab === 'qr'
                ? 'bg-[#1A1C20] text-[#C5A059] border-b-2 border-[#C5A059]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Código QR Escaneable</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {activeTab === 'all' ? (
            <>
              {/* Copy URL Input Box */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono text-[#C5A059] uppercase tracking-wider font-bold flex items-center justify-between">
                  <span>Enlace Directo a esta Página</span>
                  {copied && (
                    <span className="text-emerald-400 text-[10px] font-sans flex items-center gap-1">
                      <Check className="w-3 h-3" /> ¡Enlace Copiado al Portapapeles!
                    </span>
                  )}
                </label>
                <div className="flex items-center gap-2 bg-[#0F1012] p-1.5 border border-white/15">
                  <input
                    type="text"
                    readOnly
                    value={pageUrl}
                    className="flex-1 bg-transparent px-2 text-xs font-mono text-white/90 focus:outline-none select-all"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-3 py-2 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                      copied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#C5A059] text-black hover:bg-[#d4b068]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Native Mobile Share Button if supported */}
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                  onClick={handleNativeShare}
                  className="w-full py-2.5 bg-gradient-to-r from-[#C5A059] to-[#d4b068] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:brightness-110 transition-all"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Compartir con el Menú del Celular</span>
                </button>
              )}

              {/* Social Media Grid */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-serif font-bold text-white uppercase tracking-wider text-[#C5A059] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#C5A059]" />
                  <span>Compartir en Redes Sociales</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {socialPlatforms.map((platform) => (
                    <button
                      key={platform.name}
                      onClick={platform.onClick}
                      className={`p-3 text-xs font-bold font-sans flex items-center gap-2.5 transition-all shadow-md ${platform.color} group relative overflow-hidden`}
                    >
                      <div className="shrink-0 group-hover:scale-110 transition-transform">
                        {platform.icon}
                      </div>
                      <span className="truncate">{platform.name}</span>
                      {platform.badge && (
                        <span className="absolute top-0 right-0 bg-black/40 text-[8px] font-mono uppercase px-1 py-0.5 text-white">
                          {platform.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* QR Mini Banner Box */}
              <div className="bg-[#0F1012] p-4 border border-[#C5A059]/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white p-1 border border-[#C5A059] shrink-0">
                    {qrDataUrl ? (
                      <img src={qrDataUrl} alt="QR Code" className="w-full h-full object-contain" />
                    ) : (
                      <QrCode className="w-full h-full text-black" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Código QR para Impresión / Escaneo</h4>
                    <p className="text-[11px] text-[#F9F6F0]/60">
                      Ideal para folletos, carteles o mostrar en la pantalla.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('qr')}
                  className="px-3 py-1.5 bg-[#1A1C20] border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-1"
                >
                  <span>Ver QR</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </>
          ) : (
            /* QR Tab View */
            <div className="flex flex-col items-center justify-center space-y-6 py-4">
              <div className="text-center space-y-1">
                <h3 className="text-lg font-serif font-bold text-white">Escaneá este Código QR</h3>
                <p className="text-xs text-[#F9F6F0]/70 max-w-xs mx-auto">
                  Apuntá con la cámara de tu celular para abrir directamente Vitrina v2 en tu dispositivo.
                </p>
              </div>

              {/* QR Display Frame */}
              <div className="p-4 bg-white border-4 border-[#C5A059] shadow-2xl relative group">
                {qrDataUrl ? (
                  <img src={qrDataUrl} alt="QR Vitrina v2" className="w-64 h-64 object-contain" />
                ) : (
                  <div className="w-64 h-64 flex items-center justify-center text-black">
                    <QrCode className="w-16 h-16 animate-pulse text-[#C5A059]" />
                  </div>
                )}
                <div className="mt-2 pt-2 border-t border-gray-200 text-center font-serif text-black font-bold text-xs tracking-wider">
                  VITRINA V2 • ALQUILER DIGITAL
                </div>
              </div>

              {/* Action Buttons for QR */}
              <div className="flex items-center gap-3 w-full max-w-xs">
                <button
                  onClick={handleDownloadQR}
                  disabled={!qrDataUrl}
                  className="flex-1 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#d4b068] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar QR</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-3 bg-[#0F1012] border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? '¡Copiado!' : 'Copiar Link'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#0F1012] p-3 border-t border-white/10 text-center text-[10px] font-mono text-[#F9F6F0]/50 uppercase tracking-widest">
          Vitrina v2 • La Revolución del Alquiler Comercial
        </div>
      </div>
    </div>
  );
};

/* Service Worker — Vitrina v2 (PWA instalable).
   Subir la versión (CACHE) al publicar cambios para limpiar lo viejo. */
const CACHE = 'vitrinav2-v2';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // No cacheamos llamadas a la API de Supabase (datos siempre frescos).
  if (url.hostname.endsWith('supabase.co')) return;

  // Navegación: network-first (para tomar la última versión), con caída al cache.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put('/index.html', cp)); return r; })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Resto: cache-first con relleno.
  e.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((r) => {
      const cp = r.clone();
      caches.open(CACHE).then((c) => c.put(req, cp)).catch(() => {});
      return r;
    }).catch(() => cached))
  );
});

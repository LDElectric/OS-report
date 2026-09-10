const CACHE_NAME = 'os-fotos-v16';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './logo_pernambuco_iii.png',
  './besa_logo.png',
  './lib/html2canvas.min.js',
  './lib/jspdf.umd.min.js'
];

// Instala: pré-cacheia os arquivos essenciais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Ativa: remove caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: network-first (sempre busca atualizado, cai para o cache se offline)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          // Para navegações offline, serve o index.html (app shell)
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
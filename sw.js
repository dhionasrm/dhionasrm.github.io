const cacheName = 'dhionasrm-site-cache';
const assets = [
  '/',
  '/index.html',
  '/styles.css', // adicione os caminhos corretos dos seus arquivos CSS e JS
  '/script.js',
  'images/icon-72x72.png',
  'images/icon-192x192.png'
  // inclua todos os ativos que deseja armazenar em cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});


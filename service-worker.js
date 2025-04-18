const CACHE_NAME = 'hidelgas-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/logohidel.png',
  '/favicon.ico',
  '/logosuper.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
  'https://www.google.com/maps/embed?pb=...', // URL do seu mapa
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptação das requisições para servir com cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Retorna o cache se existir
      }
      return fetch(event.request); // Se não estiver no cache, faz a requisição normal
    })
  );
});

const CACHE_NAME = 'audio-tool-v1';
const ASSETS = [
  './',
  './index.html',
  'https://unpkg.com/browser-id3-writer@4.4.0/dist/browser-id3-writer.js'
];

// Install event: Files ko cache mein save karna
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch event: Offline hone par cache se file dena
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

/**
 * Service Worker - Offline Support
 * Punkt Odniesienia PWA
 */

const CACHE_NAME = 'punkt-odniesienia-v6';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './kontakt.vcf',
    './manifest.json',
    './favicon.svg',
    './icon-192.png',
    './icon-512.png',
    './logo.png',
    './polityka-prywatnosci.html'
];

// Install - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

// Fetch - stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cached) => {
            const fetchPromise = fetch(event.request)
                .then((response) => {
                    if (response && response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => cached || caches.match('./index.html'));

            return cached || fetchPromise;
        })
    );
});

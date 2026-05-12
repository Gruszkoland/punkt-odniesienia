/**
 * Service Worker - Offline Support
 * Punkt Odniesienia PWA
 * 
 * CACHING STRATEGY:
 * - ASSETS: Static files cached at install time (manually updated on new features)
 * - Fetch handler: Implements stale-while-revalidate for all requests
 *   → New blog articles (*.html) are automatically cached on first visit
 *   → CSS/JS updates are fetched in background and served on next visit
 *   → No need to manually add each new blog article to ASSETS
 */

const CACHE_NAME = 'punkt-odniesienia-v7';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './kontakt.vcf',
    './manifest.json',
    './favicon.svg',
    './favicon-32.png',
    './icon-192.png',
    './icon-512.png',
    './logo.png',
    './og-image.png',
    './polityka-prywatnosci.html',
    './uslugi.html',
    './uslugi.css',
    './blog/index.html',
    './blog/blog.css',
    './blog/jak-zoptymalizowac-wizytowke-google-maps.html'
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

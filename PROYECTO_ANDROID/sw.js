const CACHE_NAME = 'saice-pro-v1';
const ASSETS = [
    'index.html',
    'style.css',
    'script.js',
    'manifest.json',
    'saicecontrol_icon_1778205763108.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
});

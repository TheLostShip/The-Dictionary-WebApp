// Define a cache name for your app
const cacheName = 'dictionary-app-v1';

// List of URLs and assets to cache when the service worker is installed
const cacheAssets = [
  '/',
  '/index.html', // Update with your main HTML file
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js', // Update with your main JavaScript file
  '/favicon_io/android-chrome-192x192.png', // Update with your icon file
  '/favicon_io/android-chrome-512x512.png', // Update with your icon file
];

// Install event: Cache the specified assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('Service Worker: Caching Files');
        return cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: Intercept network requests and serve from cache if available
self.addEventListener('fetch', (e) => {
  e.respondWith(
    // Check if the requested resource is in the cache
    caches.match(e.request).then((response) => {
      // If it's in the cache, return it
      if (response) {
        return response;
      }
      // If not, fetch it from the network and cache a copy
      return fetch(e.request).then((res) => {
        // Clone the response
        const resClone = res.clone();
        // Open the cache
        caches.open(cacheName).then((cache) => {
          // Add the response to the cache for future requests
          cache.put(e.request, resClone);
        });
        return res;
      });
    })
  );
});

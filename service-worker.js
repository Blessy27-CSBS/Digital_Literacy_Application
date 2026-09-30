// GramaGuide — Progressive Web App Service Worker
// Offline-first caching strategy for all lessons, datasets, styles, and scripts

const CACHE_NAME = "gramaguide-v1";

const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./css/responsive.css",
  "./css/accessibility.css",
  "./data/lessons.js",
  "./data/quizzes.js",
  "./data/tips.js",
  "./js/translations.js",
  "./js/progress.js",
  "./js/offline.js",
  "./js/syncManager.js",
  "./js/voice.js",
  "./js/scamDetector.js",
  "./js/phoneDoctor.js",
  "./js/lessons.js",
  "./js/quiz.js",
  "./js/router.js",
  "./js/app.js",
  "./assets/icons/icon-192.svg",
  "./assets/icons/icon-512.svg"
];

// Install: Pre-cache core shell and data
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Installing GramaGuide offline cache...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate: Clean up old versions
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activating new Service Worker...");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch: Cache-first with network fallback
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Fallback for HTML navigations when offline
        if (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html")) {
          return caches.match("./index.html");
        }
      });
    })
  );
});

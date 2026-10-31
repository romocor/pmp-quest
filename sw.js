// Generado en el build de PMP Quest 1.15.0. No editar.
const CACHE = 'pmpquest-1.15.0-mvvzf21i';
const FILES = ["./","index.html","manifest.webmanifest","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","assets/index-BKwLJ1wQ.js","assets/NoWebGL-39MrWztz.js","assets/Obra3D-BV3mmjwZ.js","assets/Vivir-Cq1XFBEf.js","assets/atkinson-hyperlegible-next-latin-400-italic-C-uEjDrs.woff","assets/atkinson-hyperlegible-next-latin-400-italic-DZBmTazM.woff2","assets/atkinson-hyperlegible-next-latin-400-normal-DPp7N0cD.woff","assets/atkinson-hyperlegible-next-latin-400-normal-FfmJh7DR.woff2","assets/atkinson-hyperlegible-next-latin-700-normal-C2qZD_Q9.woff","assets/atkinson-hyperlegible-next-latin-700-normal-Dpiyiu63.woff2","assets/barlow-condensed-latin-600-normal-BFJEwTuo.woff","assets/barlow-condensed-latin-600-normal-DepVgxBB.woff2","assets/barlow-condensed-latin-700-normal-Dmwat-ge.woff","assets/barlow-condensed-latin-700-normal-v1xN8_Wq.woff2","assets/index-FwEtfv5u.css"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('pmpquest-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('index.html', copy));
          return res;
        })
        .catch(() => caches.match('index.html', { ignoreSearch: true })),
    );
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit ?? fetch(req)));
});

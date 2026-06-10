const CACHE_NAME = 'antik-turkiye-v2';
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./pwa.js",
  "./assets/icons/antik-turkiye-icon.svg",
  "./aizanoi.html",
  "./alacahoyuk.html",
  "./anazarbos.html",
  "./ani.html",
  "./aphrodisias.html",
  "./arykanda.html",
  "./aspendos.html",
  "./assos.html",
  "./catalhoyuk.html",
  "./cayonu.html",
  "./daskyleion.html",
  "./efes.html",
  "./erythrai.html",
  "./euromos.html",
  "./gobeklitepe.html",
  "./gordion.html",
  "./hattusa.html",
  "./herakleia-latmos.html",
  "./hierapolis.html",
  "./kaunos.html",
  "./kibyra.html",
  "./klaros.html",
  "./knidos.html",
  "./kultepe.html",
  "./labranda.html",
  "./laodikeia.html",
  "./magnesia.html",
  "./milet.html",
  "./myra.html",
  "./nemrut.html",
  "./nysa.html",
  "./olba.html",
  "./olympos.html",
  "./patara.html",
  "./pergamon.html",
  "./perge.html",
  "./pessinus.html",
  "./phaselis.html",
  "./priene.html",
  "./sagalassos.html",
  "./sardes.html",
  "./seleukeia-sidera.html",
  "./side.html",
  "./smyrna.html",
  "./soli-pompeiopolis.html",
  "./teos.html",
  "./termessos.html",
  "./tlos.html",
  "./troya.html",
  "./uzuncaburc.html",
  "./xanthos.html"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }))
  );
});

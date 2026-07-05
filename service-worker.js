/* ═══════════════════════════════════════════════════════════════════════
   ACADEMIA · service-worker.js
   Service Worker do PWA — cache do "app shell" para funcionamento offline.

   Estratégia:
   - Instalação: pré-armazena os arquivos essenciais do app (app shell).
   - Ativação: remove caches de versões antigas.
   - Fetch:
       • Requisições de navegação (HTML) → tenta rede, cai para cache
         offline se não houver conexão (garante que o app abra offline).
       • Assets do próprio app (css/js/icons/manifest) → "cache first",
         com atualização em segundo plano (stale-while-revalidate).
       • Qualquer requisição que não seja GET → nunca é interceptada,
         sempre vai direto para a rede.
       • Chamadas de outra origem (ex.: CDN do Chart.js) → sempre vão
         direto para a rede, sem interceptação.
   ═══════════════════════════════════════════════════════════════════════ */

const CACHE_VERSION = "academia-v3"; // v3: assistente de IA removido do projeto
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/app.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Nunca intercepta métodos que não sejam GET.
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Requisições de outra origem (ex.: CDN do Chart.js) — deixa passar
  // direto para a rede, sem cache.
  if (url.origin !== self.location.origin) return;

  // Navegação (abrir/recarregar o app): tenta rede primeiro, com
  // fallback para o cache quando estiver offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Demais arquivos do próprio app: cache first + atualização em segundo plano.
  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});

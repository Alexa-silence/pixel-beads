// 🚫 完全关闭缓存版本（开发推荐）

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// ❗关键：不走缓存，每次都请求最新资源
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

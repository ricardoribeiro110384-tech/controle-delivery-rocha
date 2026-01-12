const CACHE_NAME = "rocha-cache-v50";
const ASSETS = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",(e)=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));});
self.addEventListener("activate",(e)=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",(e)=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});

const CACHE_NAME='mis-finanzas-pro-v2';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-512-maskable.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;e.respondWith((async()=>{const c=await caches.open(CACHE_NAME),hit=await c.match(r);if(hit)return hit;try{const res=await fetch(r);if(res.ok)c.put(r,res.clone());return res;}catch(err){if(r.mode==='navigate')return(await c.match('./index.html'))||Response.error();return Response.error();}})());});

const C='mb-v2';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.add('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js').catch(()=>{})))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(n=>{const k=n.clone();caches.open(C).then(c=>c.put(e.request,k)).catch(()=>{});return n}).catch(()=>caches.match(e.request)))});

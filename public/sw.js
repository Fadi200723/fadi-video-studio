const C='fvs-1';self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['/','/manifest.webmanifest','/icon.png']))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.pathname.startsWith('/api/'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});

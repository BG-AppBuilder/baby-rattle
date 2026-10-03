var CACHE="babyrattle-1790985768";
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(['./','./index.html','./icon.png','./icon512.png','./manifest.json']);}));self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));}));self.clients.claim();});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||fetch(e.request).then(function(res){var copy=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,copy);});return res;});}));});

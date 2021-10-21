'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "f09fcab16c2be40ea7f46de4baef8661",
"main.dart.js_10.part.js": "47dcbdde3f2d6bf08c7d4a1512b49bec",
"version.json": "a533a5b85c3801faf0cb9c615d753bc3",
"main.dart.js_23.part.js": "23e5c5487fbc9e26711ee6968528fa84",
"CNAME": "f27785cec472aa864c01f4a953cad7fe",
"main.dart.js_18.part.js": "b2daf374148c906b4f32c7731d1b189e",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_17.part.js": "eeb56c21ca1c2a0cd8756bdfaef6d099",
"main.dart.js_11.part.js": "3658ea623556fda41592c4f3c3edd483",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_1.part.js": "ba1167cfa3bd3459bc292b582902dca3",
"main.dart.js_31.part.js": "f35aedaed8c4e9a3627ec5cc576e9a5f",
"main.dart.js_5.part.js": "101e29393dea9926dcf19142946554e2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_28.part.js": "213c9bd0d44c18034107009cacae7aaf",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_7.part.js": "e9918814f8538a4fc406a8fd7426647a",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_4.part.js": "2f1983146582c2299bdec2ed88cb3610",
"main.dart.js_27.part.js": "6bba5e4a07fac33d2a6f7893af8a103e",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0ac18d28fd72786a235dcc77ad273602",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "3c1e9003bf476ad3b7bb4d09c5e06987",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"main.dart.js_2.part.js": "8a24f55619ba9b720daf620aa53013ee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_6.part.js": "9091e68e46a6facad427d37577af203e",
"main.dart.js_20.part.js": "7bedcca2b890ca68534c19c7d936a171",
"main.dart.js_33.part.js": "801cd41ed13db96b63bc2ce59c4ff631",
"main.dart.js_16.part.js": "9a67e09ff9d3d786960fe202bdd67707",
"main.dart.js": "cbb01ad554ecb6ca2a44f0d704d3be22",
"main.dart.js_14.part.js": "7890c261d10d9c79bcc81ea827090494",
"main.dart.js_9.part.js": "8c55a4242835ba2f2b10b4b09c5f0388",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_3.part.js": "9021ed81eb67bb3c537a4bf192b06869",
"CHANGELOG.md": "aeca9bcb0be9ab3876447e9cf44fbe32",
"main.dart.js_8.part.js": "7156093657fded2ce8182b973e474f55",
"main.dart.js_15.part.js": "b0aa926230df96ecb9cee48a81b1ca81",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_22.part.js": "f0aa3eb79a27b17c18b3a4fce4fdb3be",
"index.html": "dbe3c0501ca2117ebf6c799e0a283fe5",
"/": "dbe3c0501ca2117ebf6c799e0a283fe5",
"main.dart.js_29.part.js": "4c285a4bb9b4a83421e7d58cebad0340",
"main.dart.js_19.part.js": "37beb76654637e3d6450b5282f2d193a",
"main.dart.js_12.part.js": "ad7fe9ec7ef08e756466e3f130a03231",
"main.dart.js_21.part.js": "6b7b0ca253efefb6241bc81e69a31fe2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

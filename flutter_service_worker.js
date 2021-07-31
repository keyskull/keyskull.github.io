'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_3.part.js": "8d4f05bc874e3747c508e92d824e3f8e",
"assets/AssetManifest.json": "3c1e9003bf476ad3b7bb4d09c5e06987",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "46c230ac58d49295b52a5828be86ad5b",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_16.part.js": "e496def1fa9688ca7495be8820aef337",
"main.dart.js_2.part.js": "b5c915eb455aa41134cd9a715a2a84dc",
"main.dart.js_6.part.js": "1297332f0a7689a53b5898234ec449b3",
"main.dart.js_19.part.js": "b09388a3faa49ed4d1a036bb033ef337",
"main.dart.js_1.part.js": "6866bf87064f61eb32d5e738f880d8ec",
"main.dart.js_18.part.js": "b31bff6fa5b63af7ea7b6be2eeb7c3e8",
"main.dart.js_12.part.js": "3f3e6cb8b561211f721b87ae852fed28",
"main.dart.js_21.part.js": "759c7c9af34936be7e48b223bcaadb91",
"CNAME": "f27785cec472aa864c01f4a953cad7fe",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_17.part.js": "2b68c30825964823787c2e92330c4108",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_7.part.js": "17c8dcf6ac9257f2b8389365f64cebd0",
"main.dart.js_10.part.js": "5da4d868e04f1cc5b9cf281dd7bdf7c8",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"version.json": "27ca9ffead8f33e4fd135ac3f52032d7",
"main.dart.js_11.part.js": "5a94a1d1fd18ce56db0115826476646c",
"main.dart.js_14.part.js": "2d3f39154cbf85ed8eb9acec42544b18",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_4.part.js": "7ef59d98212d5ead587bc89225ca52f6",
"main.dart.js": "42b34c74c1dc70ddda9265a0eb930aae",
"main.dart.js_15.part.js": "95db3763656fb3333dc942c8c901af99",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_9.part.js": "fd577df0c4850cf97b70ea7690bb3c1b",
"main.dart.js_20.part.js": "c4545e0c163805c9d53f494db606715f",
"main.dart.js_8.part.js": "bc70146a98588acb8acbfedba9f87cad",
"main.dart.js_13.part.js": "beadd9c82ad49b54bc5dc54d5a4dc8be",
"main.dart.js_5.part.js": "3734f7e61388ecf9ad696f687c187571",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"index.html": "6717f4e88d96c90191eb5bd286e938a5",
"/": "6717f4e88d96c90191eb5bd286e938a5"
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

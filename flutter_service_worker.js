'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "8b86f06ce1516f7b6cea8b60f4d77ac4",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "12ef1f78ae98998f06e3ce802b71c8bf",
"main.dart.js_27.part.js": "c396a19d47194d5161bf3eae5adf5c2a",
"index.html": "bf1270d45319868d7382f0c823f6b0e4",
"/": "bf1270d45319868d7382f0c823f6b0e4",
"CHANGELOG.md": "d1b7eb09abb8398ba3c43408eeabbb85",
"main.dart.js_22.part.js": "7c0e4288e6fc025251fe920ec4775983",
"main.dart.js_32.part.js": "50888514654fc7afc20cb3f773d23c6d",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_3.part.js": "ca3a574cf4ea50d84ea1b740afe3f741",
"main.dart.js_31.part.js": "f58bf202faa070999b20d1b5a645e9e3",
"main.dart.js_21.part.js": "90590ee82449c738ceb9609925653017",
"main.dart.js_24.part.js": "a9eac1b15c4bef3dc3e732be9bc60bd4",
"main.dart.js_23.part.js": "2bbb50082a6a3730bff91193839c50f9",
"main.dart.js_26.part.js": "01660c046e77f7c5d99685dbdb768288",
"main.dart.js_30.part.js": "b11de16983ecda8050354f7f9537cbb9",
"main.dart.js_29.part.js": "dba1a8d2ab175eb97203b51a75dcea0b",
"main.dart.js_33.part.js": "b1d2960028a98a241643f3409f3645f2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "99ca748b534b7a43f51920807c0dd27b",
"main.dart.js_14.part.js": "9313f5e07bddf12ee5136778094dd029",
"main.dart.js_1.part.js": "ddc10e311cde188af4d24bc2b17f7e7c",
"main.dart.js_9.part.js": "4eefdd5ab160dbb1e2bce095f883cd69",
"main.dart.js_19.part.js": "09eb8f454416d52306ea4f7e9ca0424e",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"version.json": "21126f3551d8f15062e183bd58a5ad6d",
"CNAME": "f27785cec472aa864c01f4a953cad7fe",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_15.part.js": "6db32558c0dafc0dacd047dd6495538e",
"main.dart.js_5.part.js": "4fdcf560f076613a254f66083d0409b0",
"main.dart.js_16.part.js": "5b259f0fe2904886ca8548ef18123125",
"main.dart.js_20.part.js": "b3cf9681bc05d3b5084f3c20c293b3cc",
"main.dart.js_17.part.js": "240cdd66fe30f4d055aa73150398fc8c",
"main.dart.js_34.part.js": "02a8883a338ea8c4f7893db925a633ce",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_13.part.js": "a394329b8f5dad0f7b229111b5529b3e",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_7.part.js": "2a2452800a362649ec2b97871826261a",
"main.dart.js_28.part.js": "8de6cbb93b8a0e29bfe060f7da463199",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/pexels-snapwire-6992-4928x3264.jpg": "526decec44e4d8a27c102c0986c34aa6",
"assets/images/pexels-snapwire-6992-640x423.jpg": "3e537e8cd9017f6287004bc9d3542d4d",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/NOTICES": "5ccc219aef27ca3835419b20be80fd68",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/AssetManifest.json": "405cb0e3ec433fe9223d4275442c70bb",
"main.dart.js_10.part.js": "a701b9e149454b0922ba1ab937d63a5a",
"main.dart.js_18.part.js": "f00f4a7fa2fa22a49d0628be19a139b3",
"main.dart.js_6.part.js": "a720f7ef9417c0da925070174a243296",
"main.dart.js_11.part.js": "fa55ebc641f72b93c217740ab95f06ad",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

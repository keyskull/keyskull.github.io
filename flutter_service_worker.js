'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_21.part.js": "bfd8b810759d743ff866f38cc7483629",
"main.dart.js_11.part.js": "58422579654d54cd64b3271d93764cd8",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_29.part.js": "87111d852cd4978d2cfd78474e004b57",
"main.dart.js_32.part.js": "4e10067c58c74b730ae59fe9c0249482",
"main.dart.js_19.part.js": "a85c7c303b5b53ed5f97082b8dc2dc7e",
"main.dart.js_5.part.js": "6ad450ef58d299f786693380ce111973",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_7.part.js": "62fc671e4b57e968bc08f5e8711a4077",
"main.dart.js_9.part.js": "9a810dd96573379005ef383a81c2b1db",
"index.html": "723384ab79796f39a52c40bc01832994",
"/": "723384ab79796f39a52c40bc01832994",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_22.part.js": "deb8d11de6e0885fd050ece01e653ff7",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_14.part.js": "c2e6eb2477f43affa90bc2ce48770f5f",
"main.dart.js_1.part.js": "1373de4165a22d9afce0d6e718726757",
"main.dart.js_2.part.js": "329cb3c752100e98c625c43a28392942",
"main.dart.js_23.part.js": "9f6394c72211a1ee74e98ede53207beb",
"main.dart.js_6.part.js": "1b6948d75a12ddf1bad220b339cb252c",
"main.dart.js_20.part.js": "467b699e7c11aa37b190e667b6f10102",
"main.dart.js_13.part.js": "119523d245e1d0f81be253abd83825b2",
"main.dart.js_18.part.js": "295033a6073b3fa0e2d420c480814bf8",
"main.dart.js_4.part.js": "034aaa493742b2ad75c7a14b22150ffa",
"main.dart.js_28.part.js": "c975843200d63666265085f44a412b72",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"version.json": "291b5077ce0eebb4471041ac43576505",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_8.part.js": "a8e467ed67091d2887c13b4b6c7d5b6e",
"main.dart.js_16.part.js": "aa6e72821915feac854a9e952ae9bece",
"main.dart.js_12.part.js": "5ed72efa1baa432c1f726baf3a378b7a",
"main.dart.js_17.part.js": "2821d6bf8bac87a1b7f39e1c6db2a794",
"main.dart.js_3.part.js": "3374b4e631a72744367f1600f471c046",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"CHANGELOG.md": "d1b7eb09abb8398ba3c43408eeabbb85",
"main.dart.js_10.part.js": "74f65f80a03f7f8b132305a412c66d16",
"CNAME": "f27785cec472aa864c01f4a953cad7fe",
"main.dart.js_24.part.js": "dd5ac8f13e8cffda17dafc973e818425",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9970ce072c19d914b20bd354abcb1e9b",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "405cb0e3ec433fe9223d4275442c70bb",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/pexels-snapwire-6992-640x423.jpg": "3e537e8cd9017f6287004bc9d3542d4d",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/pexels-snapwire-6992-4928x3264.jpg": "526decec44e4d8a27c102c0986c34aa6",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"main.dart.js_31.part.js": "9f642470aff41831c406fa6afcf2f03b",
"main.dart.js_15.part.js": "a1a6bbfe643a7c3142feccff948ebae5",
"main.dart.js": "ac291b5e245a3e6de1745313ea12c633",
"main.dart.js_27.part.js": "836b84a96b0117b842a1789d9f0c1f26"
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

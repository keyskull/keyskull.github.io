'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_2.part.js": "7383b862c66023702757506d2e2a8148",
"main.dart.js_8.part.js": "fcc3dd8249b2e9d0d1667f7b6078cfd0",
"main.dart.js_5.part.js": "763c5bbe26583fc5f0c8091e708870a6",
"main.dart.js_13.part.js": "5aafe29d8734022c30fc892bcefe4618",
"main.dart.js_11.part.js": "eb64aefa1d089b6fbe773e90fd59c2ef",
"main.dart.js_17.part.js": "90100c0dcfe13636aaea94e942585bc1",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_4.part.js": "09240fcae1d49b87caca32bb2d9b41e7",
"main.dart.js_20.part.js": "c858789d020f6a9e0d034f8442b886bc",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"CNAME": "f27785cec472aa864c01f4a953cad7fe",
"main.dart.js_9.part.js": "b3ad5ed941e2aa0bf1b2f30f4edafb71",
"main.dart.js": "07426fd6b57c70c555d9edf99d4a5661",
"main.dart.js_16.part.js": "d2229239b50be33f5f4bcef8cf9b7fd8",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_19.part.js": "fd2b6692c5de303f2a803e60203f8a05",
"main.dart.js_15.part.js": "da3ccd751922b0d482fac0799d1399cf",
"index.html": "e6786acf55403876d8ff01f0634a8ae4",
"/": "e6786acf55403876d8ff01f0634a8ae4",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_14.part.js": "54b4a4f1c937a89cd62b02d33ea3ff16",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_21.part.js": "482479336c55eeb3617cef86aedde65d",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/NOTICES": "ba5908968dcd535ad24e1c24186905fe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "3c1e9003bf476ad3b7bb4d09c5e06987",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_10.part.js": "16b9c44cc0a986c714935a729a295133",
"main.dart.js_18.part.js": "2e01bd61eaa08e2820525a6b69a14152",
"version.json": "27ca9ffead8f33e4fd135ac3f52032d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js_12.part.js": "c95b41a967706f058b45118e1e964e90",
"main.dart.js_3.part.js": "8fca36d203597c4930e22a780b385cbc",
"main.dart.js_7.part.js": "0e84295f829d2bdbf0061d64e6fcba81",
"main.dart.js_1.part.js": "7e091ea017f4eaa6c1908c769e3f8c20",
"main.dart.js_6.part.js": "ee36a8bca19fce3947d7bb5fa5392212"
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

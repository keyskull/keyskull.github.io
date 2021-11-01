'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_13.part.js": "5704c36a60c02e8c998c4fbf9a1fcd59",
"main.dart.js_10.part.js": "a2a5cc288751f926aa14cda158d43041",
"version.json": "291b5077ce0eebb4471041ac43576505",
"main.dart.js_23.part.js": "34aad90b6f3c60f28955174fdf2fc9bf",
"CNAME": "f27785cec472aa864c01f4a953cad7fe",
"main.dart.js_18.part.js": "91e6e72b879f6cb88aad2415197ba93d",
"logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"main.dart.js_17.part.js": "d384fd6c07476418d9c0c8d8f5bbc7c0",
"main.dart.js_11.part.js": "41fd386534057060e487c4df3e144fa1",
"background.css": "821f9fcb42f3f27bdbd41d672dfbcb84",
"main.dart.js_1.part.js": "a77d89df74ed76133cbb89a6f3dd475d",
"main.dart.js_31.part.js": "89b9272e8d708baab353c165df722803",
"main.dart.js_5.part.js": "d3afa303ec990d2715ffe96f06fa5604",
"main.dart.js_32.part.js": "2bc76e37be1033300faac642dbec66e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_28.part.js": "c975843200d63666265085f44a412b72",
"disclaimer.html": "13ff616f97e691873cf3a7b3143bcea1",
"main.dart.js_7.part.js": "c7d82ff171e4ba0b99a8e9a0161952dd",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_4.part.js": "c16c8478e5ed811137be61706f71ae72",
"main.dart.js_27.part.js": "836b84a96b0117b842a1789d9f0c1f26",
"assets/images/logo.png": "e1a3f8aad4aecded2a4e1f902a60aa6b",
"assets/images/flutter.jpg": "516bbeb3bcfa5c9848cdc45caa4aecdd",
"assets/images/night.jpg": "d76728f95d6561be468fca2ac4f7ebd2",
"assets/images/pexels-snapwire-6992-640x423.jpg": "3e537e8cd9017f6287004bc9d3542d4d",
"assets/images/Blog.png": "cd49d98e58757844f217dc34011e4e29",
"assets/images/4703133.jpg": "b373a3fc03638429efc316127754998f",
"assets/images/bird.gif": "3225c57f2902ddc922c2f014c6f19b0a",
"assets/images/4ddce98e9381ffa68cf9967919669e4.png": "66f7d12584ff82c7beab348563baffd8",
"assets/images/pexels-snapwire-6992-4928x3264.jpg": "526decec44e4d8a27c102c0986c34aa6",
"assets/images/bird2.jpg": "4196841834711aeb3d39bca07b981522",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9970ce072c19d914b20bd354abcb1e9b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "405cb0e3ec433fe9223d4275442c70bb",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"main.dart.js_2.part.js": "3c27ac90fb384e31021f9d66ed1f631c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"cookie-policy.html": "68e478f12cd82be5a36fc3a055f81fe1",
"main.dart.js_6.part.js": "f32a100b47c14320c6922d8068147e85",
"main.dart.js_20.part.js": "1c44c3ca3365cf4e1ba743a62781e560",
"main.dart.js_16.part.js": "bf64183aeb46a07f553b77379d174b74",
"main.dart.js": "d23f1f9a7146c4bb986ab5ef5b155799",
"main.dart.js_14.part.js": "cbd75095102b5e56647e80ed7fa9c160",
"main.dart.js_9.part.js": "faaa779e245c1e6a9a811941d3123c64",
"manifest.json": "84144ab7ff497ba8c451a893a19d7cf8",
"main.dart.js_3.part.js": "6c5bd72e86bd5a48ddc87a7454d9a293",
"CHANGELOG.md": "6d9d080fae885c8373b04e9aa9e37418",
"main.dart.js_8.part.js": "ea02decc9bed646dd5c8f2ed5334fd28",
"main.dart.js_24.part.js": "ba3c73137daef29695e6b34b11b9eeec",
"main.dart.js_15.part.js": "cd63fcf3035c2a00f980ee20687a6cab",
"CC%20BY-NC-SA%204.0.xmp": "3d6ab842c52308e773b120ed67cba69a",
"main.dart.js_22.part.js": "013c7f18b80cbfb752ead4f68ecc28d4",
"index.html": "c659f19e7ca22e91e5ba7fcfccfd7ce2",
"/": "c659f19e7ca22e91e5ba7fcfccfd7ce2",
"main.dart.js_29.part.js": "1003f0d617f21d1c877b14e53ce95327",
"main.dart.js_19.part.js": "2955212c03dc00d280a456130732388a",
"main.dart.js_12.part.js": "e427a98cdb09d9456aee6a25be0f282e",
"main.dart.js_21.part.js": "0881276fe757ab2f20a6e03bd6d2e591"
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

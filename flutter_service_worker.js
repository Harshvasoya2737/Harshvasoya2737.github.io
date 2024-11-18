'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "39a6253917c0600160252c54d1b6b822",
"assets/AssetManifest.bin.json": "4032ff45a90a89714fc848338a737cfc",
"assets/AssetManifest.json": "a5ebbe85e255523a1402fe33609e0d24",
"assets/assets/images/Chat_app_project.png": "3e2d6c81cec0e4fa0a5844187fb6f3bc",
"assets/assets/images/Cyber_crime_se_azadi.png": "0eb81fac23abfb756db1593b3810218a",
"assets/assets/images/C_C++_Certificate.jpg": "986ef2a617be06f89e704e8dc5a85fd6",
"assets/assets/images/Festival_post_maker_app_project.png": "07570638a662fd6181b4432f95544b7d",
"assets/assets/images/Galaxy_animation_app_project.png": "2c6a955d39c19364b6ac6be64d2d4ea1",
"assets/assets/images/Harsh.png": "78d42f9fc9370a56d80ed855b1f828cf",
"assets/assets/images/img.png": "26f8d7688134de81c1ff554174913cb3",
"assets/assets/images/Media_player_app.png": "9451bdc38db71c1f9ac049fdd14aeeeb",
"assets/assets/images/Platform_converter_app.png": "e31e09374658e16560fe0e5c8bc728f6",
"assets/assets/images/portfolio_logo.png": "512e5f04689b614192d77286aeb3905b",
"assets/assets/images/portofolio_bg.png": "92cfbd26fcaf475f84b6dac15dbf1912",
"assets/assets/images/Quote_app_project.png": "293ee922533c2aa77e2e3483f1927bd6",
"assets/assets/images/Spoken_english_certificate.jpg": "496eb36925f2bf45633a312b7a7c7c57",
"assets/assets/images/TechWar_2024_C_Tsunami.jpg": "39623e7fa802559c399f1afad71cc4e7",
"assets/assets/images/TestDemo_Flutter_Quiz_certificate.png": "a752e85df7aa637e2e7a2a91b4e134e0",
"assets/assets/images/TheDigitalAdda_FlutterQuizCertificate.png": "7a841d031f189d387ce82c57b44dec7e",
"assets/assets/images/trophic_techwar_2024.jpg": "86b24f4f481620f771951f1fce666d57",
"assets/assets/images/trophi_techWar_2024.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Weather_app_project.png": "dfd67f48b9825b593d8229f4cbbb02c2",
"assets/assets/logo/Android.png": "8c4ccaa5e22375278048f573c3803331",
"assets/assets/logo/Android_Studio_icon.png": "fb10c2b7f98161dd942019aff17db203",
"assets/assets/logo/apple.png": "9357892adb4e37ba5b5f7e64e923b05d",
"assets/assets/logo/c.png": "c275119b257b35b5fdcdd305bc791ac2",
"assets/assets/logo/c_plus.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/logo/Dart_programming.png": "5e4cf12285e0f82563da83e25048ade8",
"assets/assets/logo/Figma-logo.png": "886c272c149c1ab8336ec07ec3d773c5",
"assets/assets/logo/firebase.png": "de1546f8bcc43f9252f70ff7509e468b",
"assets/assets/logo/flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/logo/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/logo/ios.jpg": "da2a6f4e29dbe4c2ac27ee648c2ce242",
"assets/assets/logo/Mysql_logo.png": "c89c837abfabd927ecb42421b6fcd576",
"assets/assets/logo/Online.png": "43cc6fdb614f4ef300d32b8de6b0f481",
"assets/assets/logo/php.png": "94242182bd0c201484a8e9d8e8f55d25",
"assets/assets/logo/Postman-removebg-preview.png": "442dcce3b072037da552c45f5a1da4df",
"assets/assets/logo/Postman.png": "c65a0f6d1b913104db724c0f6a1a047f",
"assets/assets/logo/PS.png": "56a92931b07c8ba0c1d2f25496dafa52",
"assets/assets/logo/restApi-removebg-preview.png": "a8261efddb10028307bf14f547907c19",
"assets/assets/logo/restApi.jpg": "2d61eeca3e6af7d32f7b4d2aaa46f75d",
"assets/assets/logo/restApi.png": "9b67bd377a13e5bc5e91105166412987",
"assets/assets/logo/Vs-code.png": "5d2b14a7f9b02245f33cea896a974205",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "ecd11de7373386b887a8e60dbd20731a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ff6a075aaabe14aa0c91c254e25407a5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "acd7e28fce13cbff13f10298e9efa511",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "accefb75493cd97eb5f48b3941ee750e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "96ad36c6331038b50f4e9d79f66ff45f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5f44a9ebaff86bedda137d6b2167cbe",
"/": "a5f44a9ebaff86bedda137d6b2167cbe",
"main.dart.js": "0ea592dd2ae04509061c9ef0736e5ee3",
"manifest.json": "51b13becc4f677f5aef5aabec952a87c",
"version.json": "a94b5d66f30e381c1d36b1da0f367df1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa35a5f79b83edb5a721dab996afa89b",
"index.html": "3df268c5cc0440d397616199ac9dd037",
"/": "3df268c5cc0440d397616199ac9dd037",
"main.dart.js": "5e0019ec987ddef1c50033f31138aa56",
"favicon.png": "f5984ada788fbee318c7027ccce2396e",
"icons/Icon-192.png": "f5984ada788fbee318c7027ccce2396e",
"icons/Icon-512.png": "f5984ada788fbee318c7027ccce2396e",
"manifest.json": "cbe745516db41f40ee59f15011857d21",
".git/config": "b4e2b875b19c34ecfd4a9554198dd5ec",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5f/977a1534d043f57495e6aebd43bc02233a92dd": "f78d641331dcf790bf2754036dff3166",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/38210d80b07c07b2b7348477e87eb7a6bbbc3b": "79bc5a19ca7e68ed24e780b0176d5ce4",
".git/objects/f5/6c08db028b223700f5b0c1d7ca9dc255de31de": "7d4cff983f706156f04b2b0a00627281",
".git/objects/e3/e45adf3736a2e64d2a76a02b9797c64f99aea8": "5b37a77966a91a47e05f09477118ceac",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/7e/598e6644decbe3896e225cadf9735b1b553048": "a06c600179f666835551d39bf96aacda",
".git/objects/44/2b17c094e1f1f23065723954903dcc8d12fe2d": "7fb0abd62456d99ef4d85768349267f6",
".git/objects/43/dec11a5318fec95f729e68156d23e25aebe2da": "0202215eb29c9044944bcc53613aa5ed",
".git/objects/98/fe04d338a6d4f50479254d24a4f239e016e07d": "ab30b4bc5c9414a01e66515d29e26dd4",
".git/objects/98/2e47295c1342af23f9b9bfeef9b0cd98aa03d2": "2946f3135409e9ed4f64d9c8ff4aa0db",
".git/objects/5e/401e94334835de78422666e56afdae80f1aa58": "af58e3123613a838af92f2f2de51541f",
".git/objects/5b/c2ca620177f034c8dbed7da6aafc1c95197e68": "cb745a5f71d7d7c4853d4470503af9bc",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/b6/441301f98cadb337f9db7b5f7dcfaa97698b4d": "af4f7831c39e6f3f91ff0ecd058b9ec4",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/a6/dcd67f0167c8cc3c528a052dfe96d8391a6e02": "ba94de4f9106dbe55f1670c183c41ac7",
".git/objects/a1/b1272667d2b83f4175d82b1cc086aa43e17fcf": "0ea5fca1279e90305ea7746281786c2f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e9/97a72a715420c9b47f9d0526455675018a85bf": "d8fd7c0192ddce5ac60257f602ab87bc",
".git/objects/e9/dfce003fe807192a584b6858a4593051501898": "f6bdc1ff68894c84677ae318d6e50c85",
".git/objects/f1/66d03130186ee2523375d124ca5f354af7d59d": "9483db7e0938a1d59db471348f7c088d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/eb06fa6cc8787066029471e89b3a0fe9795274": "bb883ea5dd6b9fa89fcfc5240c360720",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/1d/c34cee9efd4459043631f764d5fff4ab566be7": "f25a636451fe489ba78d7944045f14ea",
".git/objects/22/a7dc5622e3b2735a121228165fd8f97d69b9ed": "43eb49091ab169fadb7de0e25136338d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "f16cb31305cace6c5627368f4ed86a51",
".git/logs/refs/heads/master": "f16cb31305cace6c5627368f4ed86a51",
".git/logs/refs/remotes/origin/master": "6200e24707f54ee3e8cd6c4df565daea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "8063bc681c7911ca1ba0be88e8eedf5d",
".git/refs/remotes/origin/master": "8063bc681c7911ca1ba0be88e8eedf5d",
".git/index": "bac4851467da92d1fb38e033871907fb",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "8bf7377b4185e7e51478670ea21f8ff4",
"assets/NOTICES": "c387295f3f574da39a515c7af8c49b97",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/cover.jpg": "a27491667d387c80e66ea8132582f336",
".idea/libraries/Archive.xml": "f8b270571c8b9ef5798591c24af14de0",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "afdabccf4ef8da1785614c30f964fde2",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "2c8bb2b57bd6108d55833896a6d1d235",
".idea/misc.xml": "63c8bd6059b78fa1572161ded5da965a"
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

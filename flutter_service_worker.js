'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa35a5f79b83edb5a721dab996afa89b",
"index.html": "ed6746ca9c772cc1d0886d5b90fa58d4",
"/": "ed6746ca9c772cc1d0886d5b90fa58d4",
"main.dart.js": "726c76fd1feccf689842ccb6b0cc84b4",
"favicon.png": "f5984ada788fbee318c7027ccce2396e",
"icons/Icon-192.png": "f5984ada788fbee318c7027ccce2396e",
"icons/Icon-512.png": "f5984ada788fbee318c7027ccce2396e",
"manifest.json": "cbe745516db41f40ee59f15011857d21",
".git/config": "e3d82f8ab32e0306b9bf24fb0d253033",
".git/objects/95/8079f9831bd6ed1e303cece2df6b8b1157c9bf": "c730ec7253da443a96f65a055c3de35a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/f0253ebde3d738fec00a352f5134f5b078a7cb": "2e9f33a7e1a398f1e5f6d67b9492fb70",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/5f/977a1534d043f57495e6aebd43bc02233a92dd": "f78d641331dcf790bf2754036dff3166",
".git/objects/ad/264f530c5ae20a0a8fb368891035b6e4a8a8ed": "0a7f47f0f399b177b94b7ab2005cecad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/38210d80b07c07b2b7348477e87eb7a6bbbc3b": "79bc5a19ca7e68ed24e780b0176d5ce4",
".git/objects/f5/6c08db028b223700f5b0c1d7ca9dc255de31de": "7d4cff983f706156f04b2b0a00627281",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/c6/d41de41710a20a00df648731ddcd7cd096313d": "29ea275701822535dc6597be37124edc",
".git/objects/45/069ac10b84b22615d4eb35bb733cf13b73d836": "93d1fafc1021337fd4ea62927b0ee260",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/17/d8c0d08244a6cc494b47d259baf48e6a058313": "3be42c7bbf8d91c8e2cfd804c3ae89b7",
".git/objects/7e/598e6644decbe3896e225cadf9735b1b553048": "a06c600179f666835551d39bf96aacda",
".git/objects/44/2b17c094e1f1f23065723954903dcc8d12fe2d": "7fb0abd62456d99ef4d85768349267f6",
".git/objects/43/dec11a5318fec95f729e68156d23e25aebe2da": "0202215eb29c9044944bcc53613aa5ed",
".git/objects/54/8edcc5210b37abd995b6616721ad91275ef0f1": "e69ec1a54a110a31b50a55012a1d16be",
".git/objects/98/fe04d338a6d4f50479254d24a4f239e016e07d": "ab30b4bc5c9414a01e66515d29e26dd4",
".git/objects/30/71b7603f642b1ce11f24b88fa510e211a6666c": "db4011c71031f5d80c0d8634f0de73d8",
".git/objects/55/885caca32d4819c3a3e9da2524cf968c5f67cd": "6554d3329f9c03347c611ec6ac23814e",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/b6/441301f98cadb337f9db7b5f7dcfaa97698b4d": "af4f7831c39e6f3f91ff0ecd058b9ec4",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/b0/0f876f00850f1d636373bb3c3c6cf53df3852a": "ebb70466cc54d52751fe181c1d209645",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/8366930b8b39bab4a3392cb9fe8c4f2a7f6307": "0eb23162ed1a17d84f4551df1fb35345",
".git/objects/f1/66d03130186ee2523375d124ca5f354af7d59d": "9483db7e0938a1d59db471348f7c088d",
".git/objects/ce/b9eb123796bc03b82712cbc53e81de3dff7905": "0ea1460705cc44287ff8a4c5fca16647",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/eb06fa6cc8787066029471e89b3a0fe9795274": "bb883ea5dd6b9fa89fcfc5240c360720",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/12/43d306821ac3bb218a25fe806ca2eabf61571b": "fc9812ba7b4d00ed901018d0e73e5a72",
".git/objects/1d/c34cee9efd4459043631f764d5fff4ab566be7": "f25a636451fe489ba78d7944045f14ea",
".git/objects/1c/c9a46f3ffbad1b596b725acef6ee8e6d2ca725": "0b3562189b0c3f3a170f1047fff7abc6",
".git/objects/14/93ab4021db5b731c16cc7141c395c17455cc0c": "a7b71e4e19fea9e1a1caeadfa48f994a",
".git/objects/22/a7dc5622e3b2735a121228165fd8f97d69b9ed": "43eb49091ab169fadb7de0e25136338d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "0114403d25a410642fe15b94c997c75a",
".git/logs/refs/heads/master": "0114403d25a410642fe15b94c997c75a",
".git/logs/refs/remotes/origin/master": "c937800df9c9680058a1d7a9f612e28d",
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
".git/refs/heads/master": "f3ee783e035380566b60987f754f34de",
".git/refs/remotes/origin/master": "f3ee783e035380566b60987f754f34de",
".git/index": "718b3c243b54f0579ea89b39de06fe1d",
".git/COMMIT_EDITMSG": "e0d9c270a4ffa8e76c487383b6538bcb",
".git/FETCH_HEAD": "cad3e59544782d2c4b284d8c4d12e064",
"assets/AssetManifest.json": "76d0a866b29950c6c76e44de62cfa8f8",
"assets/NOTICES": "c387295f3f574da39a515c7af8c49b97",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/favicon.png": "f5984ada788fbee318c7027ccce2396e",
"assets/assets/images/cover.jpg": "a27491667d387c80e66ea8132582f336",
".idea/libraries/Archive.xml": "f8b270571c8b9ef5798591c24af14de0",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "476b7951c450b1da60ba252ee9442de7",
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

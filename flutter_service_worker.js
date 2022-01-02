'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "b40870a54e23516463445c1b8b9e9432",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c67129e5012769f734c956fd37b5392",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48f2893f562c14e2a75caf612fa54ff5",
".git/logs/refs/heads/master": "48f2893f562c14e2a75caf612fa54ff5",
".git/logs/refs/remotes/origin/master": "0be3d993060d4fece3f345c449f66f37",
".git/objects/03/424c63f3b95c288cd8839870686bd0a263cedd": "ff6148d956465c19d38d9a71abe15e5d",
".git/objects/07/bb677364859fcd5e120e4298a0c690834f65b7": "bd6e286cff9c2bbce773e5605b60aa68",
".git/objects/09/1c65cf697b204ac77c10d86da2b6c79dcef1a3": "7b8413c812aabfb81616b4e3e533ba1f",
".git/objects/0a/7686a9d416def7b5f390a60c78c7c24fb65538": "780ecf3971c445b3c894f7ecb4359afb",
".git/objects/0f/41ca8d98d249e33fb1b3a1d942207fdf1d6b7b": "74feef2ecfdaf1dab6a6d042f0fba68f",
".git/objects/19/0897e85b7ecfc6dbda33a9b9bad6a1e4b96b63": "2b6cb7356a250351ab77f9329d861284",
".git/objects/22/9703d27f9ae834a634406c26f9c5687471563c": "813ea03865693f2fdf16d1a6c4921787",
".git/objects/2d/1c2171d4f02d5fc12e3ba3e831d27894ec9e8d": "1ed221f4ba238d9dda4b808d1869f7c7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/2aae4598be72fddd178bfac15565847d1abcda": "1c03a354d72d09720ca79b03da1133aa",
".git/objects/35/153e85ca5be24516758b4df757e602fbd98ecb": "a90daccdcdeabe6971c8b213332f127c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/adad0906e4d4019aea9283a84015287b85a1c5": "6928bd75793fd8618761d851cbd8909f",
".git/objects/4e/f94b6f14703f83f888a7f159d1408c0503a523": "da51f6087df450cf29623f0646b39415",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/63/6c34f05cfdda8a7e505ac0de81e58e5bce621a": "0a9690bccb33d87d992d77c2f927c075",
".git/objects/71/400b978993ef3af68758d91649c5aa0329c751": "321a40d9f4a73bff0580bb959d05ee64",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/599785c6a217bf63fcf53aa149046c9e0f60a6": "78e55fe9b8f6f4f50b15836885e0004f",
".git/objects/87/261e034a53bfa6fe5205b7be6f2f59b8a875c8": "6454c399b6fbe7d509146e7397ba1dc3",
".git/objects/87/fec9b32253d3a5477fc0563730cbea7594b2f9": "9e9a1f452d2c51369aebfb75250da096",
".git/objects/8d/d5b109223cb3afaf2696444d26f99492a04d34": "7efbbfa7ebc9b43154f873c77f0e3483",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/21253b24970eaa82204febd8cbb6d14471a102": "36846613505ebfc1d156dab95c06fcbb",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d2/9f65435ee3bc92c2ef4fe530b22c05b3e41f41": "e999e6527cb0d8f0b65808c5bba77afa",
".git/objects/d5/43946cf89ab148411ae50bf8ad79ca8d6aafd1": "f321c3bb89a536cd801944c694df7b4f",
".git/objects/d6/11567291d71d160043d856755f304ba7ccd8d8": "d8c66656a7c9df62187ecf5230ce199e",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/dce8ea11da7022495e160a0952de64eabe12b3": "c0835d21c28bd3a10b4e4cc879358501",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "1b1c6115991117c9bc381f9e1a00038c",
".git/refs/remotes/origin/master": "1b1c6115991117c9bc381f9e1a00038c",
"assets/AssetManifest.json": "17e908fe3151657626e27e80b6a25eff",
"assets/assets/fonts/DMSans-Bold.ttf": "071853031a2175ada019db9e6fd1585c",
"assets/assets/fonts/DMSans-Italic.ttf": "b89267290c0df2e03ae1b60bd14109c8",
"assets/assets/fonts/DMSans-Medium.ttf": "fbbc5a515be4021a9a36f048e25ad396",
"assets/assets/fonts/DMSans-MediumItalic.ttf": "a2a143d61d86a67e5e77cf43fd0a4e59",
"assets/assets/fonts/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/assets/img/behance.png": "34eb61804152983c41bc6055efaae28a",
"assets/assets/img/casestudies.png": "09944d7da53e53ae63bd82d15e298cf4",
"assets/assets/img/dribbble.png": "69eed1383f2e32ffa3475a47017a804e",
"assets/assets/img/img1.png": "8ce74744d04983b506113b39f5cfa248",
"assets/assets/img/img2.png": "c48e45b2a8d5db5e2fe655bae77a3e4f",
"assets/assets/img/img3.png": "7c27c5b15a30a22422f8b3368fc7addf",
"assets/assets/img/img4.png": "5c4a14263d0db06cb99680d6e9dabe27",
"assets/assets/img/instagram.png": "302bc621b62200dca6fbb0aea41fec70",
"assets/assets/img/linkedin.png": "46efda257cbc684511e8645bb614d719",
"assets/assets/img/logo.png": "393fdc500e64516bd02a90f4bbe9ae92",
"assets/assets/img/photo.png": "d1ae5abe78551c813b4c8021f7137ac2",
"assets/assets/img/web%2520.docx": "6bf48e905652e05c52f640117bb1c3a1",
"assets/FontManifest.json": "14f1ba8c836d6a3ea03b9f932c13ad19",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7478f9625792b11c650d673a94d84085",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "393fdc500e64516bd02a90f4bbe9ae92",
"icons/Icon-192.png": "393fdc500e64516bd02a90f4bbe9ae92",
"icons/Icon-512.png": "393fdc500e64516bd02a90f4bbe9ae92",
"icons/Icon-maskable-192.png": "393fdc500e64516bd02a90f4bbe9ae92",
"icons/Icon-maskable-512.png": "393fdc500e64516bd02a90f4bbe9ae92",
"index.html": "be0e3b1ebc53a4b8c8e319166ebdf2c9",
"/": "be0e3b1ebc53a4b8c8e319166ebdf2c9",
"main.dart.js": "6867c8b6c432741dd36d802d9c2285f5",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
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

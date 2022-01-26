'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "b40870a54e23516463445c1b8b9e9432",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "be25dfbf3c3a4ca59e55dcab623f9c7b",
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
".git/index": "d6812b665b88fe4546d3e18c05c1a5ba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6df2dca349a0086010028ec10a2694ef",
".git/logs/refs/heads/master": "6df2dca349a0086010028ec10a2694ef",
".git/logs/refs/remotes/origin/master": "52f5333e967a0014fee0738c3a6d27f8",
".git/objects/03/424c63f3b95c288cd8839870686bd0a263cedd": "ff6148d956465c19d38d9a71abe15e5d",
".git/objects/07/bb677364859fcd5e120e4298a0c690834f65b7": "bd6e286cff9c2bbce773e5605b60aa68",
".git/objects/09/1c65cf697b204ac77c10d86da2b6c79dcef1a3": "7b8413c812aabfb81616b4e3e533ba1f",
".git/objects/0a/7686a9d416def7b5f390a60c78c7c24fb65538": "780ecf3971c445b3c894f7ecb4359afb",
".git/objects/0f/41ca8d98d249e33fb1b3a1d942207fdf1d6b7b": "74feef2ecfdaf1dab6a6d042f0fba68f",
".git/objects/0f/4bd1641960c27574d9c367c186021be3169de1": "256090e141808aa8843593259a257bcf",
".git/objects/17/90f35181372996c25bc54b3e16cef70932a0c2": "b1a44805891bb7602e3b155d1a7ebbb7",
".git/objects/19/0897e85b7ecfc6dbda33a9b9bad6a1e4b96b63": "2b6cb7356a250351ab77f9329d861284",
".git/objects/1d/65676f7ab87f9b30fe1c0138402bc71f550d3a": "1d45850b892357c897cc0875ffee72f4",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/20/bc428c981fcc038b1795c8417667f76a35c551": "b5aec9467290d8ffd9e129ed2c3c0251",
".git/objects/22/028fbf61a13a285323844a39653f7079e5723b": "8bd2cf7fbefe10490844b3ed8d3dd634",
".git/objects/22/9703d27f9ae834a634406c26f9c5687471563c": "813ea03865693f2fdf16d1a6c4921787",
".git/objects/2d/1c2171d4f02d5fc12e3ba3e831d27894ec9e8d": "1ed221f4ba238d9dda4b808d1869f7c7",
".git/objects/2d/3cabe72c0e744ce1d1bddf874dd64b20778bec": "471e9594465d8a3457de7f49e2dd185f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/2aae4598be72fddd178bfac15565847d1abcda": "1c03a354d72d09720ca79b03da1133aa",
".git/objects/35/153e85ca5be24516758b4df757e602fbd98ecb": "a90daccdcdeabe6971c8b213332f127c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/6ce7aa53204c294085bb6562ea6c866ac64e7f": "94ceaa824cc886f9b24c1fef6eb14cc0",
".git/objects/3a/b62d7b87e0529b7106235d3890364d4b0090fc": "9cfd97069319c9ee4e7a1848e09bf4c7",
".git/objects/43/ac67620270d155b41c708360cde110c2a3de89": "823bda8dc3041c0acd23cbf18447fd58",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/d6aeccfd343786bf5a2b8d9e01cd167bf95a58": "077ffde6842a38d36e58e66291463928",
".git/objects/4b/adad0906e4d4019aea9283a84015287b85a1c5": "6928bd75793fd8618761d851cbd8909f",
".git/objects/4e/f94b6f14703f83f888a7f159d1408c0503a523": "da51f6087df450cf29623f0646b39415",
".git/objects/4f/2c2e77689f9c5ae0c832fea779539aeab6fff1": "98b977ee34ac1f43ce0b71b66ab9056e",
".git/objects/52/d0c9307fb74ed4e7d3c4c68832253f3922a48b": "29e5ebd0b64f50c61a6d0a63a6c5eb29",
".git/objects/57/95eb632c6224a574114c62cd199ee96ea8c9f0": "611ecd69fcc91aa0db84396509d91aea",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/63/6c34f05cfdda8a7e505ac0de81e58e5bce621a": "0a9690bccb33d87d992d77c2f927c075",
".git/objects/70/a75d0c49ba76db0434c166a6638c43b557d0d5": "7f8585de70ff86750e8b0eb082ed440e",
".git/objects/71/400b978993ef3af68758d91649c5aa0329c751": "321a40d9f4a73bff0580bb959d05ee64",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f8ce6398814187bc3f0775440ff02818de0ee6": "26ae0039561e6192bccf853b14905309",
".git/objects/7a/8807dd4c62de1a8f58e396e685d06e8894be47": "75eb0730619e2c0e472f7e95c895928f",
".git/objects/7b/599785c6a217bf63fcf53aa149046c9e0f60a6": "78e55fe9b8f6f4f50b15836885e0004f",
".git/objects/7f/d94a28bd876f1c1b5e0f7482e8b477cc208509": "61be0434fed8785c0420c42cba7b4642",
".git/objects/87/261e034a53bfa6fe5205b7be6f2f59b8a875c8": "6454c399b6fbe7d509146e7397ba1dc3",
".git/objects/87/fec9b32253d3a5477fc0563730cbea7594b2f9": "9e9a1f452d2c51369aebfb75250da096",
".git/objects/8a/2b876d5eb37c73889be8f244ae9521f76601a6": "283178563c701c30b25416e982168827",
".git/objects/8d/d5b109223cb3afaf2696444d26f99492a04d34": "7efbbfa7ebc9b43154f873c77f0e3483",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/21253b24970eaa82204febd8cbb6d14471a102": "36846613505ebfc1d156dab95c06fcbb",
".git/objects/95/4560a2d6fc5b3f761159fcf761ed22c6ed499d": "b6403aab56d4bff656b4e3303c83b249",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b0/40e26d2eb8e52a5c99400a9dcc3115f7cfe69b": "e8bc722f1fdb18fdaf93551242c990bb",
".git/objects/b3/c3eda64363133197327c58924e63f60bea3c4b": "4712e0b387e7532691486e289e95dd52",
".git/objects/b6/330e20d80177d46659e145e2e0497d825891b4": "017c9becf20ff240b14a88c1826413b5",
".git/objects/bd/da5a7a9ddcb39143bd7fe40b4f188a029ba032": "e479fc3e90e9aa69f23d98cbcd76bb22",
".git/objects/d2/9f65435ee3bc92c2ef4fe530b22c05b3e41f41": "e999e6527cb0d8f0b65808c5bba77afa",
".git/objects/d5/43946cf89ab148411ae50bf8ad79ca8d6aafd1": "f321c3bb89a536cd801944c694df7b4f",
".git/objects/d6/11567291d71d160043d856755f304ba7ccd8d8": "d8c66656a7c9df62187ecf5230ce199e",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/db/1a4d64e47385519dbe164f0e2d871a6fc81e10": "cd8f76e4aca832ebc68dabab399adec7",
".git/objects/de/d3caf9a99b7952eb48051740f4373d96d00272": "c96f122d019b9e62e20e510d7e377810",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/a7dd7afafc7f64eef3a5be248a38dbdfa5d746": "601e4699a4a608d881b1cc935bf2ec30",
".git/objects/eb/69ba6c366117cf6cb784fb199663fb490c06be": "aef039a80cc07dd4beba7621202a7ae0",
".git/objects/ed/8573a3ea866917232c61eeca903d7af32aff81": "3f382bd8eadd81b4f7eac6225cd6d3b2",
".git/objects/fd/dce8ea11da7022495e160a0952de64eabe12b3": "c0835d21c28bd3a10b4e4cc879358501",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "2ef15002b4682c7491d3f1152a564815",
".git/refs/heads/master": "75bcf13a1b4d70761db3769eb434a2d8",
".git/refs/remotes/origin/master": "75bcf13a1b4d70761db3769eb434a2d8",
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
"index.html": "808a19b55b05c471694a8b2e4cb174b5",
"/": "808a19b55b05c471694a8b2e4cb174b5",
"main.dart.js": "a21ccaa4256920c75ebe7b9540c11e7a",
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

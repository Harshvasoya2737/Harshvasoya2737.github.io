'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c71b2dc61c91b357804691c9d7fc523c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "d5671dde618dd460e4644a7fb1bae8c6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3be3764db3ab3b0ad86f272d8b4e47a",
".git/logs/refs/heads/main": "626f536493a606f4c6a6636804893763",
".git/logs/refs/remotes/origin/main": "d3b5d89eaf9f3bf2b811c5392cde813f",
".git/objects/05/87df35c831ee6ab83c58a4c86b1498d20990a1": "3ca744cbfd8f5166a52a9057226157d4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/cd06bd244aea281a36d352e4ebedb899a1fd02": "77fb28d880814c2e84119471c748e97a",
".git/objects/13/26b15b3f2087e6dd4ef9e86901815a2657214b": "29d6061c9a2b59b779786bbde9d0987f",
".git/objects/14/6b16fcb66b3508e1a0f0eea6428c946bdb2460": "0c654eaef71965ceee67f15e009fe738",
".git/objects/1a/ae4f57541f3a0fb89ec217408f2d0e7493cf5c": "186bf10e88c70ad3b0e9fd991f7ceddf",
".git/objects/1b/2bef739fd1f73f84bc9d576c0de2dc6817dbe3": "773baf69505226a7f43c85ea42485dbf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/84404f764b70a9db607dd7f5af559cbf5f09d4": "4fd90daab4030a0e672d26a21aed0428",
".git/objects/25/9e9fb89a693bfc7c47b8a56fa00d9ffbc99057": "dccc689df07639ab4a967d5989ebd642",
".git/objects/29/f1a94d4faf7286a5d9ec36e1e7adcb82b9b93d": "1629e9a7d037fcf5bca584146d36caf8",
".git/objects/2d/24ae231726cb2b5f19d80091ffcc5aeeabee8f": "580d1630ad138f84d753da09034748db",
".git/objects/2d/5e40de1418d04a7277fa777451c1b78a2381f9": "9c8db75e00d80aaf92f502a5a13a3453",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/e219962e7341f7cf8489be52fd3bc0de85a97b": "33c23d7ee9d6e8fff961fe81766f764d",
".git/objects/36/0d5c998d50593f76851520789c224f4a6d1574": "69cf21c0f7f8089c4d7069ac4aaa2594",
".git/objects/39/46c6cc4e66000abd0784e577817bdbac0388c8": "c1f25f4d8dfbd1eee94d625aaa3bd3c3",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/7a5238f44c2dd61705366c5d0a786d098a5a40": "fa6ac6b4b9dcd20d2dc131360606f28c",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/193761ffd49cab3c12b9b872cd9df0c31299e8": "ba49e1ce5a5fefeea130a919dec31c39",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/175008161fff2ebd0790d921597ec9e2d9ad8b": "c83197a289f8cf22feca12d3f4828888",
".git/objects/49/dddc74b70cdd6f6fd3b3c02c75ac845e621398": "8ac321f24a88513b000e45033fb5b431",
".git/objects/4c/7deb9840d61fe1cc2a02a27f64c6cad00aad59": "a8beddc78a15697c575b58fedfbc433f",
".git/objects/4d/545bd7ab8def466c6fd1b546d19ca87e2effe7": "559d984d2b2b56131171d1e0994f19bd",
".git/objects/4f/0629cb7958249613f748d8f4c70dfe9acfdba2": "135e329ff9bb2554d30e210c33f3ace4",
".git/objects/53/d552eae35213856175e809a6c048a8b8f365d4": "a69ab288c4c1d5b0eb37a1270100db0f",
".git/objects/53/df526404476e7e038639510d0fe8fc113fdb72": "c38450608dc11ff5f581d07309824cf5",
".git/objects/54/5cab3bfe2f01a795605df77be8fe5c1da958cb": "994528511a1b874b032c6ffe8a641b0d",
".git/objects/57/69f2e17938c8692643feee0142281993617c50": "d9e10b8adc4c17a9fb8ac43f0d9e77ef",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/65/701424723b18a50aaf59b7496dc9fd787e7763": "4ebaa1b99804ac76c21cf18b323ac3d8",
".git/objects/65/74f1ab65676bfb69351d4ffc142d9b3f20a1dd": "994a562461c08331822cac1122646bb4",
".git/objects/6a/b86e475004521b97824410a06dcb6ff7815384": "6d65a450ce6e07c51505abd1779cf303",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/735304a39da51cac6b0482d9404e09b8358367": "b922381f2ab11623b55a89cf8443a468",
".git/objects/6d/eff0876cb505a05f6202d1a91ed881240abcef": "3b61a867752c70a1b9365601bfb3907f",
".git/objects/6e/962debfea57b443dbb686bbaaacc60283094a5": "9522f4a3e22845671d80c702767a3a51",
".git/objects/77/0b80491f6c9e6ab21a4fe27babe5db78bfc346": "4a0d803403d24fde7a64fcee426da070",
".git/objects/77/cc2d483d24fd0ca1462dc68a7c54e175e99b73": "b5312a9f01dfb563e521b768f4d31385",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/6bda6aa289c9443d4250394969e343be01b590": "23000362879cc2d29f082485fae356d4",
".git/objects/80/ce7a7be09ae8013f33413d62f227f970e628c6": "b5b4db2b848e391502c76c96357eca0b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/93a773cc0268a3599345e590027f0cfb818542": "f4f7334060546155423b37b070584bea",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/f3ae3b6a191de3b389c86dfc28aeda2cfc90f2": "287ab3a6b19d5e70bb7edd1a23750e6c",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/eb46cf1f7894b0818aa51bc2a8617137a297a4": "93625aa8aafa1d391e138ccd42ed592f",
".git/objects/9d/e448b0f390834558f43c5bfdbcfbac614dab67": "96c191f60d0a4183cd2d3ad8589d7c55",
".git/objects/a0/53093959b1c906302362fc01abcf9414281804": "9891c0d7854c82ac6f84f68de27abcb8",
".git/objects/a7/b53e291f610cf0f3e7d9f7245af0486e8cf410": "9d0b3583489980bfa9ce7e714e63e0db",
".git/objects/a8/e682a2f63ee39375574380c2b3829177970c29": "bb3c2a5eb19cdd9fd2e2a90f575ea2df",
".git/objects/ac/b15f3473d7720820efa08256086587b78fb9a1": "5382e9d0d09cc0aef7b577aea368b7f6",
".git/objects/ad/d41b593bcb587842cf4b043962cd493b538d8d": "9afce2652592c4cbab2feab3336884a0",
".git/objects/ae/981cad02318b5ac02aa2992f75856ca028a2c4": "501aa4cabb41af35571ece4bf7f76253",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/bc46917917ba33aff63a2d82ad7e39ace17b31": "5f8b31c5d246fc3acc5c4fc296d46cf3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4bf2afe53541a2cf8aad14c99ac95f874f8887": "a75c8065af14e5f44dc56cc060f9ad94",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c0/d412f1d5da50d78d14ebffbada446b95190b5a": "f93248956c6eafa17b3ccde1369e48e3",
".git/objects/c6/7dfef34831cf3766bc1208554eebee7d21465b": "461e32b301ee8114663ab0702c0d1ebb",
".git/objects/c6/dda77c159de44b64db69c33e8d358c5bd1d3a4": "486ec89ba0b11a3f27c0dbc0563413bf",
".git/objects/c7/bc3b3884aa8dfce8305d34a8583cffb904a8c2": "d567981de646609d21f1d0e2e5bfbafe",
".git/objects/c7/edae034aaa871fdc07612bb4d3e1690d98453c": "9e631039f5c99f0de67c467246996c74",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/23d6ae4251b0a222c9f1b02c8d5b7d5fbb1247": "e870dd75850a7fda1eb5c9ea3aad40bf",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/66c998e888009c3e51b6f61aa24d088ae33b97": "bbe00ec0607adad0dc8c579e5da91eb8",
".git/objects/d1/8c5d78f1124ebb20eb2e27e501b34ad3fbb12a": "c9d84176c95581ca031ef50b6dc4629e",
".git/objects/d2/9bd6d784a234f1da97afd2aeaebff78c9590f9": "91dacbf2d8fc7d895619d53df709a31c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/2befdbcc726ba83c1f8cb57b51f0e982f7e7b6": "ba1c4a9aba4aa9c37a561398eb1f5ba2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0db91676779904811f78ff00df32c65d5c1e8c": "b4bd2e2b15efab042ce8ba249feec47b",
".git/objects/ee/dc28d3fb17ea0d28acafbdd2d958e31afcdffa": "3213f4110902648ed593fa10aa7283ae",
".git/objects/ef/ae7f9e376ae1260fa0a54c6e7adb5b77289143": "6a42edc24c690dfc042ef2f5dc66ed7a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "65d126f218eb66bb87ac2bfc8c41e364",
".git/refs/remotes/origin/main": "65d126f218eb66bb87ac2bfc8c41e364",
"assets/AssetManifest.bin": "39a6253917c0600160252c54d1b6b822",
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
"flutter_bootstrap.js": "544f8156a902c186c3eb33691dc10f3f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a0fff6c444ac70321835c786af5c559",
"/": "6a0fff6c444ac70321835c786af5c559",
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

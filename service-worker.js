/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "404.html",
    "revision": "ffe581387ced17fd5d8096447258aaa3"
  },
  {
    "url": "assets/css/0.styles.16fa4d1d.css",
    "revision": "617777fbd41026a448546e7aa92cda7e"
  },
  {
    "url": "assets/js/1.5a35cace.js",
    "revision": "d33b23132158c83c1088b0c9821bc1f5"
  },
  {
    "url": "assets/js/10.ad11a71a.js",
    "revision": "a28880dea4fa13531294b6bb2e2aafaf"
  },
  {
    "url": "assets/js/11.8064c8a5.js",
    "revision": "3c0470e0d14fe41b2e3fd615d30e4fea"
  },
  {
    "url": "assets/js/12.426c6f32.js",
    "revision": "88443df5a89a6e5680ac2436822a9fbf"
  },
  {
    "url": "assets/js/13.1fd575b8.js",
    "revision": "67b14a83b2a8455329ab6f7a552be821"
  },
  {
    "url": "assets/js/14.caeb17ae.js",
    "revision": "4f49dd60459c0ac084042c739b801e74"
  },
  {
    "url": "assets/js/15.3c29e508.js",
    "revision": "699fd02037199f7b26aadabfbd65dcea"
  },
  {
    "url": "assets/js/16.a07cffe4.js",
    "revision": "5c708091a153f4dcc83caa2ab5441860"
  },
  {
    "url": "assets/js/17.09c6b01f.js",
    "revision": "76042a5d2b7dcb2b78fd8bdaaeee7e85"
  },
  {
    "url": "assets/js/18.685f5dde.js",
    "revision": "5a0a5ecc5ec0991dc1818c4f8a75571b"
  },
  {
    "url": "assets/js/19.002110b3.js",
    "revision": "43eb485980da78ae63cbf6f4d3b1f906"
  },
  {
    "url": "assets/js/20.4155458f.js",
    "revision": "720c171c5fab75f00961996aa93af3a1"
  },
  {
    "url": "assets/js/21.5d44ce9d.js",
    "revision": "de08a57fb24c07ad7ac0d78b07da78af"
  },
  {
    "url": "assets/js/22.0ffa1727.js",
    "revision": "18dc4aff922d7d08b9d747dfdddcefce"
  },
  {
    "url": "assets/js/23.be1b83c7.js",
    "revision": "15d77b522122a25ecd58ba851da7b413"
  },
  {
    "url": "assets/js/24.ca5c9874.js",
    "revision": "00304bc425d803d813444f52bf21ffc5"
  },
  {
    "url": "assets/js/25.2a6333ae.js",
    "revision": "93de8e85d53e9c1b50434e4d32789110"
  },
  {
    "url": "assets/js/26.0ebd5268.js",
    "revision": "1f0faf90910e5071230d2edfd83a8ad9"
  },
  {
    "url": "assets/js/27.5bb6d208.js",
    "revision": "288680e68cbcdac724f9cea48bdd4bd5"
  },
  {
    "url": "assets/js/28.ab9fc389.js",
    "revision": "b9ce8912c818be524f4b764d05914f88"
  },
  {
    "url": "assets/js/29.15c55324.js",
    "revision": "5530c81ad9e2a99693afc7c6db8e8baa"
  },
  {
    "url": "assets/js/3.2eca5b28.js",
    "revision": "f79aa89e39cca2cb88fefd376c326644"
  },
  {
    "url": "assets/js/30.2ee19067.js",
    "revision": "d05edff8f0b0d0746f2e0d2702f6fb30"
  },
  {
    "url": "assets/js/31.71b0c4ca.js",
    "revision": "6be95b90421133aa6c5e6ad9adab4912"
  },
  {
    "url": "assets/js/32.81240b2f.js",
    "revision": "45a0b59cbeb05bdc0960ca855ed5318e"
  },
  {
    "url": "assets/js/33.c879364e.js",
    "revision": "b285d4040c4e5ffdd8c13c4c8cabfdfb"
  },
  {
    "url": "assets/js/34.b700ff52.js",
    "revision": "a89dc56eaaeb98280538b92aadaa5ff1"
  },
  {
    "url": "assets/js/35.b204e620.js",
    "revision": "bbdbc1382e1984d134c291efd8837c55"
  },
  {
    "url": "assets/js/36.96b60eb8.js",
    "revision": "69965c54597ac7e1e93cd78f974aaab0"
  },
  {
    "url": "assets/js/37.8d2ee0fb.js",
    "revision": "7bc244d96b994c13a0a9a8a013dbb58f"
  },
  {
    "url": "assets/js/38.dd08f776.js",
    "revision": "53395eb596bb2a1a694f16428576aef2"
  },
  {
    "url": "assets/js/39.b0f0d1d4.js",
    "revision": "6dd2728510693090c9de8f84f46c7c6f"
  },
  {
    "url": "assets/js/4.11798acd.js",
    "revision": "b48b7175651f21f71f78bbaa163d32aa"
  },
  {
    "url": "assets/js/40.e0c6243a.js",
    "revision": "9a7d9118ae62b012673ba8dfbd5334ce"
  },
  {
    "url": "assets/js/41.68818372.js",
    "revision": "365397840a2846d13ac69787d734f3f4"
  },
  {
    "url": "assets/js/42.179278a0.js",
    "revision": "e52de56b0c8916ba00841e3b8ba101cf"
  },
  {
    "url": "assets/js/43.c9d15bdf.js",
    "revision": "b198980e1fb504382f8998317d5fe412"
  },
  {
    "url": "assets/js/44.a004fd4b.js",
    "revision": "9a972dbef4a8bbbf36430b92fc22807a"
  },
  {
    "url": "assets/js/45.a31510f4.js",
    "revision": "d2da4f9c4a9e616ed97ae97bb17121b8"
  },
  {
    "url": "assets/js/46.987bd804.js",
    "revision": "ab7f205a7244f6063bb3bde06c3eee7f"
  },
  {
    "url": "assets/js/47.12ea99ba.js",
    "revision": "f3ab885119b9940d9ba9f03ea6b55b77"
  },
  {
    "url": "assets/js/48.b4f5f63d.js",
    "revision": "aa8404ff7a003aee4b641e9cdb9b1e49"
  },
  {
    "url": "assets/js/49.ada0a2d3.js",
    "revision": "34eb248c41a61e19ddc052646f50f0d7"
  },
  {
    "url": "assets/js/5.6f86d21f.js",
    "revision": "b41782880539ad296af0b1c852efccb3"
  },
  {
    "url": "assets/js/50.a386e5d9.js",
    "revision": "362d196b12a792b5cadb28fca41230a1"
  },
  {
    "url": "assets/js/51.8d7bfd34.js",
    "revision": "de1efa54650fca9f720919b9636322b6"
  },
  {
    "url": "assets/js/52.3c779e82.js",
    "revision": "debf273310d43601f17202efc61df7b3"
  },
  {
    "url": "assets/js/53.e5583508.js",
    "revision": "f440dbdca70a26aa8f39e3628a352242"
  },
  {
    "url": "assets/js/54.8290176b.js",
    "revision": "644ea971b55c7b5e60e4eb2b30c7100c"
  },
  {
    "url": "assets/js/55.d6ec8ef9.js",
    "revision": "2ce26419e8f5094a2700883f484abb30"
  },
  {
    "url": "assets/js/56.89d18b1f.js",
    "revision": "efbe26f55c08e012d5da35bcd5997d43"
  },
  {
    "url": "assets/js/57.7c22c714.js",
    "revision": "834924bd25be77faaf8c0a8fbd5c3190"
  },
  {
    "url": "assets/js/58.e1499d4a.js",
    "revision": "aec4715d2d04426c3e091a3959255923"
  },
  {
    "url": "assets/js/59.5fc2a007.js",
    "revision": "f71bd54f452d92400c9234bfa49f2943"
  },
  {
    "url": "assets/js/6.292f07b4.js",
    "revision": "8a1ede55101c9c313efb2488e690413c"
  },
  {
    "url": "assets/js/60.613c8ae8.js",
    "revision": "80f60a4ec5cad43456ca58d95a28aeb9"
  },
  {
    "url": "assets/js/61.400cded7.js",
    "revision": "1b81a222e90a144ab29bd54ff844a932"
  },
  {
    "url": "assets/js/7.374bb8a6.js",
    "revision": "5c9abebfc30fd06411dea720b68f859a"
  },
  {
    "url": "assets/js/8.3ff40d3a.js",
    "revision": "1a125e8da50c15535855928f7a6679c6"
  },
  {
    "url": "assets/js/9.2940bddf.js",
    "revision": "a9432c7c35204c7765ceee8c97e0d622"
  },
  {
    "url": "assets/js/app.738c9361.js",
    "revision": "f81eb74180bb6f0de9b9a8b31da8a976"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "baidu_verify_code-91fUQJnRjp.html",
    "revision": "b1b72efe34a14968a9f6a2fe13241fe7"
  },
  {
    "url": "blogs/javascript/01-effective-javascript-bian-xie-gao-zhi-liang-javascriptdai-ma-de-68ge-you-xiao-fang-fa.html",
    "revision": "69c4a87a5824393215f1a9314bd2934a"
  },
  {
    "url": "blogs/javascript/02-hash-he-history-lu-you-de-qu-bie.html",
    "revision": "883f19a793b9269229f2845e08340cd0"
  },
  {
    "url": "blogs/javascript/03-shi-xian-fang-dou-he-jie-liu.html",
    "revision": "6907348488f6514cf02a2c5924dcb2ba"
  },
  {
    "url": "blogs/javascript/javascriptshe-ji-mo-shi/01-javascriptshe-ji-mo-shi.html",
    "revision": "c26106341b3e8325f6ef82254e08efe0"
  },
  {
    "url": "blogs/javascript/javascriptshe-ji-mo-shi/08-fa-bu-ding-yue-mo-shi.html",
    "revision": "a5e8af9b4fba7a3d4e310c041b8e0185"
  },
  {
    "url": "blogs/npm/01-npmbie-ming.html",
    "revision": "f3432f2556c8b9c919418220b1b4245a"
  },
  {
    "url": "blogs/shell/01-windows-powerline.html",
    "revision": "684944d942b04c093f2741044caede55"
  },
  {
    "url": "blogs/xin-an-gong-ju/01-gong-ju-xia-zai-lian-jie.html",
    "revision": "f6e28f1012906a2b6815b50ec2731b7b"
  },
  {
    "url": "blogs/yuan-shen/yuan-shen-chou-qia-ji-lu-zhua-qu.html",
    "revision": "301d3edd25731d329810a0d34c5af5ce"
  },
  {
    "url": "categories/index.html",
    "revision": "13e8bbeb147e28f5c3b7406e1c548ee1"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4ed0b5c4b7a8cdb86c98cf49a3dc0b24"
  },
  {
    "url": "categories/npm/index.html",
    "revision": "7f9667b0f2ac634e41c46d3d3b91a3ed"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c5c308ec4855d94bff0ac08f7fb53528"
  },
  {
    "url": "categories/开发工具/index.html",
    "revision": "e8b84e69021c277a70c9eec76cacd812"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "8c2d1a01083de9317844fc9ab8ab8fe4"
  },
  {
    "url": "docs/after-end/01-sqlji-chu.html",
    "revision": "e126ef02c84627f7c0ebfec3e7364825"
  },
  {
    "url": "docs/after-end/03-mysqlcai-keng.html",
    "revision": "7f658a3e41956fbfce1ff57c6a8d7108"
  },
  {
    "url": "docs/after-end/index.html",
    "revision": "1588524c587e752ea0827d2f51651cb0"
  },
  {
    "url": "docs/bi-ji-za-xiang/01-yi-xie-npmku.html",
    "revision": "cd46f646f68ca14349c187de349fde89"
  },
  {
    "url": "docs/bi-ji-za-xiang/2021.04.01yue-kao-ti/01.jian-da-ti.html",
    "revision": "ee7d14ffd0c22db547141534fa6482f9"
  },
  {
    "url": "docs/bi-ji-za-xiang/2021.04.01yue-kao-ti/index.html",
    "revision": "6b445a876d42c5e46ff0fc23043e66fb"
  },
  {
    "url": "docs/bi-ji-za-xiang/2021.05.31yue-kao-ti/yue-kao-jian-da-ti.html",
    "revision": "448fcde96ed5db8e45a1883c811ec65f"
  },
  {
    "url": "docs/bi-ji-za-xiang/index.html",
    "revision": "7d1503ef91262148d1474ad9095d65b4"
  },
  {
    "url": "docs/front-end/index.html",
    "revision": "b65724d360bce567ab13d84b90501461"
  },
  {
    "url": "docs/front-end/javascript/01-javascriptxiao-ji-qiao.html",
    "revision": "867ab7fce6a5f274d98330d8f6677fbc"
  },
  {
    "url": "docs/front-end/javascript/02-javsscriptgao-ji.html",
    "revision": "d4997c478e59b2bcb7526a9f0f4f4296"
  },
  {
    "url": "docs/front-end/javascript/index.html",
    "revision": "090c432a2157aa69feccf2ff6c2aee02"
  },
  {
    "url": "docs/front-end/nuxt/01-nuxt.html",
    "revision": "6e4104501b9a23314708ca3f1bca472c"
  },
  {
    "url": "docs/front-end/nuxt/index.html",
    "revision": "68bc9dbec6afb534b59c7e82ba9b8ab0"
  },
  {
    "url": "docs/front-end/react/01-reactbi-ji.html",
    "revision": "33d1e2a5bf32fae26cd88d8fde89dd01"
  },
  {
    "url": "docs/front-end/react/02-reduxbi-ji.html",
    "revision": "279b67b08c6152eec8c9acab5a174270"
  },
  {
    "url": "docs/front-end/react/03-react-hooks.html",
    "revision": "4a95f0c52bca49d432fa0092b41abb74"
  },
  {
    "url": "docs/front-end/react/04-reactchang-yong-ku.html",
    "revision": "ecb27c6e91018b76b71472114c783ec5"
  },
  {
    "url": "docs/front-end/react/index.html",
    "revision": "4d78634b7d982be4c7ed5810588a8597"
  },
  {
    "url": "docs/front-end/react/reactzong-jie-bi-ji.html",
    "revision": "5efcfd4851cab031dbc9dd7b53d7dee1"
  },
  {
    "url": "docs/front-end/typescript/01.typescriptbi-ji.html",
    "revision": "d93132ce224aa491a5538d1d4d4e4615"
  },
  {
    "url": "docs/front-end/typescript/02.lin-shi-bi-ji.html",
    "revision": "78480148fcbd42a251d3d5c65fb77069"
  },
  {
    "url": "docs/front-end/typescript/index.html",
    "revision": "9e0f2e62ba0c7c187e13901236bef0ab"
  },
  {
    "url": "docs/front-end/vue/01-vue2.html",
    "revision": "6b8f8d426f1086b116716bda0740f0bc"
  },
  {
    "url": "docs/front-end/vue/02-vue3.html",
    "revision": "225fcb384877f8e5c1ecee86932675f7"
  },
  {
    "url": "docs/front-end/vue/03-vue3-zu-he-shi-api.html",
    "revision": "a791b1cdb06fd4675644376007694944"
  },
  {
    "url": "docs/front-end/vue/04-vuecli.html",
    "revision": "adbb4624c9d79cd1f1f51a93883de75e"
  },
  {
    "url": "docs/front-end/vue/05-vu3-setupyu-fa-tang.html",
    "revision": "5c871df88ac30418ceeb5919718ed060"
  },
  {
    "url": "docs/front-end/vue/index.html",
    "revision": "3140a5c891bbbfaf84747204127c0c5a"
  },
  {
    "url": "docs/hui-bian/01-hui-bian-shou-ce.html",
    "revision": "de7824759093578382c0c8f2ae715a01"
  },
  {
    "url": "docs/mian-shi-ti/mian-shi-ti.html",
    "revision": "8cc550b3660494a7f733284c99fdbe08"
  },
  {
    "url": "docs/mian-shi-ti/qian-duan-mian-shi-bi-wen.html",
    "revision": "c67a1d83360e3e174cc4906c6c862871"
  },
  {
    "url": "docs/shen-ru-xue-xi-javascript/01-javascriptshen-ru-zhi-cong-yuan-xing-dao-yuan-xing-lian.html",
    "revision": "4dcca59990059529df35e09f326e6b27"
  },
  {
    "url": "docs/shen-ru-xue-xi-javascript/index.html",
    "revision": "76def703c7f5faa81fe8dd968d19d1e0"
  },
  {
    "url": "google0e6cd1aa7c50a2d4.html",
    "revision": "b2f218858ba11c8765b7d6604323f72a"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "39942daa1ffbb5770297c217b5e1e3ab"
  },
  {
    "url": "logo.gif",
    "revision": "b334e83801e81cc0f5bf6677e91e6338"
  },
  {
    "url": "tag/index.html",
    "revision": "b8686cc613fcd1f6b37daa1b3f1c5818"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f13adf2bc544e1188284863e351c095b"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "a2209e58e55d5bcfb223aba510c4e427"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "d7875bee0f27a81bacd99c3985f78aaa"
  },
  {
    "url": "tag/React/index.html",
    "revision": "4af3421ecbf2431f238237df60f35d7a"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "b1cd23dbb78153f90b398b4e19ee6136"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "680b7dc7c0bf6127d43d5984e9627b1c"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "2ddf95d5424a90d7412eccc0b06189fc"
  },
  {
    "url": "tag/原神/index.html",
    "revision": "f33548975ed14b34a126c3ebe98ffcdc"
  },
  {
    "url": "tag/开发工具/index.html",
    "revision": "f3a3054bf65ef2e14a169541737b7b51"
  },
  {
    "url": "test/02-javascriptdao-di-shi-ru-he-zhi-xing-de.html",
    "revision": "8173045af94790568999d1603e745fdf"
  },
  {
    "url": "test/02-javascriptyun-xing-ji-zhi.html",
    "revision": "d40cf5b3ab052f46d2aa1932866286cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "e22a2d3d11ad11222a3e869caf6c4d73"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "63343371589ee5ce9702864e85e4f7ed"
  },
  {
    "url": "views/1.x/installuse.html",
    "revision": "a7f3691bead0820bcac3c691f725af68"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

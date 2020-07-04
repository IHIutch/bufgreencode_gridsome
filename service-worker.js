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
    "url": "404.html",
    "revision": "435f37f2584315947a65645defd470f5"
  },
  {
    "url": "404/index.html",
    "revision": "435f37f2584315947a65645defd470f5"
  },
  {
    "url": "access-parking/bicycle-access-and-parking/index.html",
    "revision": "fcdfb2581cfe33e9ea5c83fdddc5df0d"
  },
  {
    "url": "access-parking/pedestrian-access/index.html",
    "revision": "4d557b5e605ad4c2409a1cc2e4ded0cc"
  },
  {
    "url": "access-parking/transportation-demand-management/index.html",
    "revision": "34817a2eba42b792e902c6c20920d379"
  },
  {
    "url": "access-parking/vehicle-access-and-parking/index.html",
    "revision": "a7ba316890554261336326d83209beb1"
  },
  {
    "url": "administration-approvals/common-procedures/index.html",
    "revision": "8ec028e338b8c7cd0c6e6d4be5e99c50"
  },
  {
    "url": "administration-approvals/review-bodies-and-administration/index.html",
    "revision": "9fe1789c368e7c62b12cdf8373009206"
  },
  {
    "url": "administration-approvals/right-of-way-approvals/index.html",
    "revision": "b3f9f47e0cc33965a440cc31a43e9e58"
  },
  {
    "url": "administration-approvals/subdivision-approvals/index.html",
    "revision": "3cc9d1e27c893a747bf710f53c4024b8"
  },
  {
    "url": "administration-approvals/zoning-approvals/index.html",
    "revision": "7cc0046256800b6eb1b94519f5d111aa"
  },
  {
    "url": "assets/css/0.styles.fc0c3d3b.css",
    "revision": "04d370015c5ef870f10700fa9ed3060c"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "3a16ffab44b4cb5cdc7e874bde1f6120"
  },
  {
    "url": "assets/data/access-parking/bicycle-access-and-parking/index.json",
    "revision": "b97b73b430fc7359eafc5362debe0756"
  },
  {
    "url": "assets/data/access-parking/pedestrian-access/index.json",
    "revision": "0770292efea7659a8f4c6597c9877ce8"
  },
  {
    "url": "assets/data/access-parking/transportation-demand-management/index.json",
    "revision": "2af3236873c396085a9bd53adecd625e"
  },
  {
    "url": "assets/data/access-parking/vehicle-access-and-parking/index.json",
    "revision": "f6fe6fc7d74aedb0b8eb6c9c79409227"
  },
  {
    "url": "assets/data/administration-approvals/common-procedures/index.json",
    "revision": "d20d8ecdb9518664eb446016d06c4802"
  },
  {
    "url": "assets/data/administration-approvals/review-bodies-and-administration/index.json",
    "revision": "440dc4f8d7cf825e21bead29f449876d"
  },
  {
    "url": "assets/data/administration-approvals/right-of-way-approvals/index.json",
    "revision": "7ebfacac9af251b8229e8fa6718e67a3"
  },
  {
    "url": "assets/data/administration-approvals/subdivision-approvals/index.json",
    "revision": "b1126dc0a9ce46eba71cb7aa53946f61"
  },
  {
    "url": "assets/data/administration-approvals/zoning-approvals/index.json",
    "revision": "e67f2d4be4929e0475863c37ebb61191"
  },
  {
    "url": "assets/data/corridor-zones/c-m-metro-rail/index.json",
    "revision": "0ee4ac56062c28ab616ac689a060336b"
  },
  {
    "url": "assets/data/corridor-zones/c-r-rail/index.json",
    "revision": "aa9723ded0f1486cb08dd45de03c46a2"
  },
  {
    "url": "assets/data/corridor-zones/c-w-waterfront/index.json",
    "revision": "a4b5a6f15061ffef51dbb9fe6aafc79a"
  },
  {
    "url": "assets/data/definitions-measurements/glossary-of-terms/index.json",
    "revision": "cd9b0f4959b1ef8a90902832e607a31e"
  },
  {
    "url": "assets/data/definitions-measurements/measures-and-exceptions/index.json",
    "revision": "5a8aefbaeb9b0dd5f01e590cdbac559d"
  },
  {
    "url": "assets/data/definitions-measurements/rules-of-interpretation/index.json",
    "revision": "5f2e3e178604a047478999ac3efbbd20"
  },
  {
    "url": "assets/data/district-zones/d-c-flex-commercial/index.json",
    "revision": "8b9f020118eca426dbb51eb646c42d78"
  },
  {
    "url": "assets/data/district-zones/d-e-educational-campus/index.json",
    "revision": "33f12301e3f62fcca9e3dadc9643117f"
  },
  {
    "url": "assets/data/district-zones/d-ih-heavy-industrial/index.json",
    "revision": "2e9d11d1121015c8c389518b1f029f9c"
  },
  {
    "url": "assets/data/district-zones/d-il-light-industrial/index.json",
    "revision": "a9b242cf93fef45097121757716d08c2"
  },
  {
    "url": "assets/data/district-zones/d-m-medical-campus/index.json",
    "revision": "c3b2936f4ba84751e88c143b917804f5"
  },
  {
    "url": "assets/data/district-zones/d-og-green/index.json",
    "revision": "4cebbed6718be67bc666eaf2e6220ade"
  },
  {
    "url": "assets/data/district-zones/d-on-natural/index.json",
    "revision": "6e68f4f8d31acd6aa97d7b63603df43c"
  },
  {
    "url": "assets/data/district-zones/d-os-square/index.json",
    "revision": "37ed17d398235e4c5f723fcb226dfdc1"
  },
  {
    "url": "assets/data/district-zones/d-r-residential-campus/index.json",
    "revision": "cf2be513b4d3fae67ecf389f3b2a3035"
  },
  {
    "url": "assets/data/district-zones/d-s-strip-retail/index.json",
    "revision": "edb50ae19eaf47d0365aadd7dff75d64"
  },
  {
    "url": "assets/data/index.json",
    "revision": "13d685c33a756a9aabf945037c70de85"
  },
  {
    "url": "assets/data/introductory-provisions/title-purpose-and-applicability/index.json",
    "revision": "9529b111c5af8a7fc97db7fb9bbd0e3b"
  },
  {
    "url": "assets/data/introductory-provisions/transition-rules/index.json",
    "revision": "19af98a14ce2ce3afd3846d1fe25f176"
  },
  {
    "url": "assets/data/introductory-provisions/zoning-map/index.json",
    "revision": "89ca7a2814665e1b93bfdfbf8fd1871b"
  },
  {
    "url": "assets/data/neighborhood-zones/building-types/index.json",
    "revision": "c56452ec94e260896dda3b2d81bd7653"
  },
  {
    "url": "assets/data/neighborhood-zones/frontage-elements/index.json",
    "revision": "bf2b169fb7b9f6e746b9438bb8303ab2"
  },
  {
    "url": "assets/data/neighborhood-zones/overlays/index.json",
    "revision": "8a9eeda69209e5fec4ac5cb74572d627"
  },
  {
    "url": "assets/data/neighborhood-zones/zone-descriptions/index.json",
    "revision": "7a84211a0cc4188e92d1d455c749f0d4"
  },
  {
    "url": "assets/data/nonconformities-enforcement/enforcement/index.json",
    "revision": "2b2fdd6654695cf630891b222ae08e0c"
  },
  {
    "url": "assets/data/nonconformities-enforcement/nonconformities/index.json",
    "revision": "95995297140e1287ff5067e375d37fa4"
  },
  {
    "url": "assets/data/planned-unit-developments/planned-unit-development-number-1-and-58-gates-circle-redevelopment/index.json",
    "revision": "8bb4469fbfa7bfa5a1c8053752f631a6"
  },
  {
    "url": "assets/data/signs/exempt-signs/index.json",
    "revision": "0503a4655a4a436fa260e7171ca8ad20"
  },
  {
    "url": "assets/data/signs/off-premise-signs/index.json",
    "revision": "11da7dd6f029b0cc58dce7efdf4bc5ad"
  },
  {
    "url": "assets/data/signs/on-premise-signs/index.json",
    "revision": "0608c50429365ad258ec39255b6b5091"
  },
  {
    "url": "assets/data/signs/signs/index.json",
    "revision": "a3abd2d8b049dddd04630726e86d0f1d"
  },
  {
    "url": "assets/data/site-development/corner-visibility/index.json",
    "revision": "e364a37a6404914ec2253cc18624f5a4"
  },
  {
    "url": "assets/data/site-development/fences-and-walls/index.json",
    "revision": "1ad7e4a4d72b5ce39ac65633dd85908f"
  },
  {
    "url": "assets/data/site-development/landscape/index.json",
    "revision": "7ed5d4072120e9c1f05d9cd55028891e"
  },
  {
    "url": "assets/data/site-development/outdoor-lighting/index.json",
    "revision": "5135c5e953f32d8114b530126d823fbd"
  },
  {
    "url": "assets/data/site-development/site-impacts/index.json",
    "revision": "6a28109c3d530dd848a28d60071c2ca7"
  },
  {
    "url": "assets/data/site-development/stormwater/index.json",
    "revision": "59b05d1440e9c0fb67d538efdc47b5a6"
  },
  {
    "url": "assets/data/transportation-network/blocks/index.json",
    "revision": "25dfcbdc7a6618dc4fd2f6a266f8b84d"
  },
  {
    "url": "assets/data/transportation-network/rights-of-way/index.json",
    "revision": "2e19baad371e0cc764a7cfa1e9e480f2"
  },
  {
    "url": "assets/data/uses/accessory-uses/index.json",
    "revision": "7439c2f300a28995922115178e465e17"
  },
  {
    "url": "assets/data/uses/principal-uses/index.json",
    "revision": "375800dccee3ccd17d7b55142c01c20a"
  },
  {
    "url": "assets/data/uses/temporary-uses/index.json",
    "revision": "9a92bc3283c25a491b7b8fb6bbb8d2d8"
  },
  {
    "url": "assets/data/zoning-board-of-appeals/zoning-board-of-appeals/index.json",
    "revision": "b8fcfcea28f90927cca13c78fd25d3b3"
  },
  {
    "url": "assets/img/bufgreencode-icon.3b3389ac.svg",
    "revision": "3b3389aca763221ab7cb69976871fc6c"
  },
  {
    "url": "assets/img/bufgreencode-logo.9213477f.svg",
    "revision": "9213477f4dcbff1f75272153112ae0b8"
  },
  {
    "url": "assets/js/app.e5f22f5d.js",
    "revision": "e31ed5c8583e9cde434a4e6d89720437"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.f030b27a.js",
    "revision": "0cc84805846450e5138a2ede1273e9ad"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.8d3eb029.js",
    "revision": "0a37fc7842ff2bb637a3a21479489266"
  },
  {
    "url": "assets/js/page--src--pages--index-vue~page--src--templates--post-vue.58d1bc28.js",
    "revision": "86eb6ebce6f3c010cebedb70352559f1"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.dfa101f9.js",
    "revision": "ff90de545861a6f9af0339c91da544e9"
  },
  {
    "url": "assets/js/vendors~page--src--pages--index-vue~page--src--templates--post-vue.47c2d982.js",
    "revision": "894e6277de71a46721447ddbb1d1caf1"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue.66f21f58.js",
    "revision": "d2feb4d49fe128502c521548b3f0d08f"
  },
  {
    "url": "assets/js/vue-remark--content--sections--access-parking--bicycle-access-and-parking-md.d4b8dbd6.js",
    "revision": "8aa29eb99e739d16a11be16bcac1e763"
  },
  {
    "url": "assets/js/vue-remark--content--sections--access-parking--pedestrian-access-md.71dd73a8.js",
    "revision": "d9b3b0c531a517f251986100816b46aa"
  },
  {
    "url": "assets/js/vue-remark--content--sections--access-parking--transportation-demand-management-md.ef82e086.js",
    "revision": "4bc99d33f7ad4f516ae63f2466028228"
  },
  {
    "url": "assets/js/vue-remark--content--sections--access-parking--vehicle-access-and-parking-md.608652ba.js",
    "revision": "b955410d96c114ff427b2f30a2e559f4"
  },
  {
    "url": "assets/js/vue-remark--content--sections--administration-approvals--common-procedures-md.c9492bc1.js",
    "revision": "42762428ea2845b71be6332560e2dce1"
  },
  {
    "url": "assets/js/vue-remark--content--sections--administration-approvals--review-bodies-and-administration-md.e1dd434d.js",
    "revision": "f220557c40d2d57d19fa99bb7e58d78a"
  },
  {
    "url": "assets/js/vue-remark--content--sections--administration-approvals--right-of-way-approvals-md.e64e1228.js",
    "revision": "fff049725cefbd74caa073dbab4afca3"
  },
  {
    "url": "assets/js/vue-remark--content--sections--administration-approvals--subdivision-approvals-md.a60cf20c.js",
    "revision": "9b244a78923f7ad2cdabcfe16089b8f6"
  },
  {
    "url": "assets/js/vue-remark--content--sections--administration-approvals--zoning-approvals-md.96365225.js",
    "revision": "a9cc4d274d0e614031fc3eefe2473106"
  },
  {
    "url": "assets/js/vue-remark--content--sections--corridor-zones--c-m-metro-rail-md.23c43a97.js",
    "revision": "34e850710fb367cd46be78f745772671"
  },
  {
    "url": "assets/js/vue-remark--content--sections--corridor-zones--c-r-rail-md.404005bf.js",
    "revision": "f2c7536e884513cac346b4b60b2dcc59"
  },
  {
    "url": "assets/js/vue-remark--content--sections--corridor-zones--c-w-waterfront-md.7e3cddbe.js",
    "revision": "1c78f6ba2e6d6982a7f2e53713731d83"
  },
  {
    "url": "assets/js/vue-remark--content--sections--definitions-measurements--glossary-of-terms-md.83b21653.js",
    "revision": "c5ae9aa3e883d34120f11c03112de39c"
  },
  {
    "url": "assets/js/vue-remark--content--sections--definitions-measurements--measures-and-exceptions-md.e9415778.js",
    "revision": "b6373f122bb655e94b9d4f16511219cd"
  },
  {
    "url": "assets/js/vue-remark--content--sections--definitions-measurements--rules-of-interpretation-md.26729080.js",
    "revision": "d58a0c177520b88f85c86bd067bc9eb7"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-c-flex-commercial-md.7aa4df44.js",
    "revision": "fcbdaf44db57403a77d9b46fce443467"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-e-educational-campus-md.656189c7.js",
    "revision": "1f92b1cf8fda7be648e655ff4e2e5f7a"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-ih-heavy-industrial-md.fd4f6918.js",
    "revision": "6a59550ed6dc182fa33ed2b2e5ae0fb7"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-il-light-industrial-md.8b75da6e.js",
    "revision": "b71989a411df16f02c7bfaa262117c9a"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-m-medical-campus-md.a54f7c3f.js",
    "revision": "7f6d7bb53c6cc1dd25111fb4c6767784"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-og-green-md.2d92c004.js",
    "revision": "a61810878aa173739208d25a8b2c28b3"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-on-natural-md.cb9ce426.js",
    "revision": "07b3ef9474552df7953075ebe729cc05"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-os-square-md.5743f912.js",
    "revision": "750ef4e07b0ed66b11375625ec89cd26"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-r-residential-campus-md.5fab1715.js",
    "revision": "a188be4b46ef082141e0fc3c9fc62822"
  },
  {
    "url": "assets/js/vue-remark--content--sections--district-zones--d-s-strip-retail-md.460250d9.js",
    "revision": "9025d29d40453c28cefacbb7c842cd36"
  },
  {
    "url": "assets/js/vue-remark--content--sections--introductory-provisions--title-purpose-and-applicability-md.9ead086c.js",
    "revision": "20e3987a4180fdc4361d647e4cbd87a9"
  },
  {
    "url": "assets/js/vue-remark--content--sections--introductory-provisions--transition-rules-md.6b33afdd.js",
    "revision": "317b26767ff0918e3accca64e0836144"
  },
  {
    "url": "assets/js/vue-remark--content--sections--introductory-provisions--zoning-map-md.5887f861.js",
    "revision": "75c8d5332dc4ef126ff21ace71803541"
  },
  {
    "url": "assets/js/vue-remark--content--sections--neighborhood-zones--building-types-md.67c9cf19.js",
    "revision": "1d17a0c9ac09956ed18d7db8e121c24b"
  },
  {
    "url": "assets/js/vue-remark--content--sections--neighborhood-zones--frontage-elements-md.9a4deb05.js",
    "revision": "ba77c2a41adec48e3f493a1df92c1f92"
  },
  {
    "url": "assets/js/vue-remark--content--sections--neighborhood-zones--overlays-md.a885bc5b.js",
    "revision": "dc36b4181a51706927fa152d5b50e442"
  },
  {
    "url": "assets/js/vue-remark--content--sections--neighborhood-zones--zone-descriptions-md.3cf36d0b.js",
    "revision": "74d06fa35b71321b940266a261fba8ac"
  },
  {
    "url": "assets/js/vue-remark--content--sections--nonconformities-enforcement--enforcement-md.fd4130b9.js",
    "revision": "908d5ff15d5e519c44867792187773f9"
  },
  {
    "url": "assets/js/vue-remark--content--sections--nonconformities-enforcement--nonconformities-md.9a9a281e.js",
    "revision": "0e5859bf3e49e0bfbeaf09b2d1d59f2f"
  },
  {
    "url": "assets/js/vue-remark--content--sections--planned-unit-developments--planned-unit-developments-number-1-gates-circle-redevelopment-md.16cd62d6.js",
    "revision": "9ad77bf301e78fedbf7302f34daece18"
  },
  {
    "url": "assets/js/vue-remark--content--sections--signs--exempt-signs-md.0b0e43c8.js",
    "revision": "a61dc7121ccafe5bb9c4f056ab89e2ed"
  },
  {
    "url": "assets/js/vue-remark--content--sections--signs--off-premise-signs-md.68749c1a.js",
    "revision": "6a99b3ba13e9e6723979d0293dde9a90"
  },
  {
    "url": "assets/js/vue-remark--content--sections--signs--on-premise-signs-md.ee09e3c8.js",
    "revision": "d371320fed004e79af0daea6aa762df8"
  },
  {
    "url": "assets/js/vue-remark--content--sections--signs--signs-md.6357ffce.js",
    "revision": "3cca2eaad49d6867c8020b9a7080a3b9"
  },
  {
    "url": "assets/js/vue-remark--content--sections--site-development--corner-visibility-md.92a02991.js",
    "revision": "dbaf92ab4b7a0839050499a706b2dcc4"
  },
  {
    "url": "assets/js/vue-remark--content--sections--site-development--fences-and-walls-md.ff4124e4.js",
    "revision": "4f8316dca4d0d7a3d03390402509ea6a"
  },
  {
    "url": "assets/js/vue-remark--content--sections--site-development--landscape-md.7a84f91b.js",
    "revision": "04ab2f00c37a57ab37bbdb999c443ef5"
  },
  {
    "url": "assets/js/vue-remark--content--sections--site-development--outdoor-lighting-md.c081883a.js",
    "revision": "55118378a622eeac6f6bf71ea2dfe070"
  },
  {
    "url": "assets/js/vue-remark--content--sections--site-development--site-impacts-md.ca527d92.js",
    "revision": "f43efa083627190fedfa4e747924e5ef"
  },
  {
    "url": "assets/js/vue-remark--content--sections--site-development--stormwater-md.a15567a5.js",
    "revision": "e9d328f655bc6cfc2ced0c9c7445fede"
  },
  {
    "url": "assets/js/vue-remark--content--sections--transportation-network--blocks-md.e337dee9.js",
    "revision": "b61fb674c25c0ecce3daed41a12a1625"
  },
  {
    "url": "assets/js/vue-remark--content--sections--transportation-network--rights-of-way-md.e529c24b.js",
    "revision": "38491b031e501aa7d854ec5150f0abf5"
  },
  {
    "url": "assets/js/vue-remark--content--sections--uses--accessory-uses-md.81b6b3ae.js",
    "revision": "c756bfdac9fe55dee3e82589745087c6"
  },
  {
    "url": "assets/js/vue-remark--content--sections--uses--principal-uses-md.5b32805e.js",
    "revision": "44464e243d2dff0436f48e90698b5aa1"
  },
  {
    "url": "assets/js/vue-remark--content--sections--uses--temporary-uses-md.f72ff638.js",
    "revision": "7b6919a87e6dba3aa7c9e9d237f1cd57"
  },
  {
    "url": "assets/js/vue-remark--content--sections--zoning-board-of-appeals--zoning-board-of-appeals-md.80a7a65a.js",
    "revision": "606700e493171d303af31fb70bc21860"
  },
  {
    "url": "assets/static/3-2-2.82a2fbd.52a8413f3cefe591158c893b99173f62.jpg",
    "revision": "8e3ed98667a1accc5d9de74023e3225e"
  },
  {
    "url": "assets/static/3-2-2.c0c8573.52a8413f3cefe591158c893b99173f62.jpg",
    "revision": "ca22cfb5263047d35912abe74ebe5d30"
  },
  {
    "url": "assets/static/3-3-2.d5ad9c3.93a2991536009300d7a05d7f8054e106.png",
    "revision": "2c67067679afc5374e1faa2bf3ceba9e"
  },
  {
    "url": "assets/static/3-3-3.c26726e.641c53df78f8eec3cb921a3537b438ec.png",
    "revision": "28543a0908f9d279af2f0c5cd5c84042"
  },
  {
    "url": "assets/static/3-3-4.d5ad9c3.d285346caf3031aaa060473868d61af5.png",
    "revision": "c842a250222b74f84eb69d0085297ed5"
  },
  {
    "url": "assets/static/3-3-5.c26726e.b1417cd72e27d14aee9dfb6b6c809b77.png",
    "revision": "7dfc18c255793961f795d3958b87bb94"
  },
  {
    "url": "assets/static/3-3-6.d5ad9c3.d7cbfdd51f175eb78fa5d589a8aba4b6.png",
    "revision": "e7b40fa1b0fcb5d04b6d49a993b42a34"
  },
  {
    "url": "assets/static/3-3-7.d5ad9c3.dfdf38c0660699b5a31afe267d9ae8aa.png",
    "revision": "f6808e89648b5948df273a60c33f8ec8"
  },
  {
    "url": "assets/static/3-3-8.d5ad9c3.8883c4fba485c43b9c0ab159ca308894.png",
    "revision": "3bd865723fab143bc3124f463b067d55"
  },
  {
    "url": "assets/static/3-3-9.d5ad9c3.abebfc62f7ddce7940a4746894f04628.png",
    "revision": "803ae2b2970f8f52ac83290170a4ad14"
  },
  {
    "url": "assets/static/4-1.82a2fbd.7260d50606196f750247df3a2b45561e.png",
    "revision": "a928ce102f467131183b8ea2e8d11699"
  },
  {
    "url": "assets/static/4-1.c0c8573.7260d50606196f750247df3a2b45561e.png",
    "revision": "57a05ab998c3a7b1e0f17308eaf0d6a4"
  },
  {
    "url": "assets/static/favicon.ac8d93a.c94dd89891e6e2a0d0c5008d8897b922.png",
    "revision": "788a34153d4c6e1843fe587a0e5ff92a"
  },
  {
    "url": "assets/static/favicon.b9532cc.c94dd89891e6e2a0d0c5008d8897b922.png",
    "revision": "2e5bf790fad83f0b6128fde2d81fb721"
  },
  {
    "url": "assets/static/favicon.ce0531f.c94dd89891e6e2a0d0c5008d8897b922.png",
    "revision": "188d04e45018e7d498b8c70edaa4ed3d"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "c94dd89891e6e2a0d0c5008d8897b922"
  },
  {
    "url": "corridor-zones/c-m-metro-rail/index.html",
    "revision": "a1633559444dffc7daa2eebd57a864be"
  },
  {
    "url": "corridor-zones/c-r-rail/index.html",
    "revision": "1954914489eff7f276f476662e466df0"
  },
  {
    "url": "corridor-zones/c-w-waterfront/index.html",
    "revision": "c7a6d40da7f2b00fc96f407231d9053b"
  },
  {
    "url": "definitions-measurements/glossary-of-terms/index.html",
    "revision": "ea0034239f4e265b7ca13f9841823990"
  },
  {
    "url": "definitions-measurements/measures-and-exceptions/index.html",
    "revision": "a72c6120129618563fa2023e2ef08694"
  },
  {
    "url": "definitions-measurements/rules-of-interpretation/index.html",
    "revision": "88513e35ed07f32f851b4ee49d8d1b7d"
  },
  {
    "url": "district-zones/d-c-flex-commercial/index.html",
    "revision": "e09f66c44603f1e955096679aa122bc9"
  },
  {
    "url": "district-zones/d-e-educational-campus/index.html",
    "revision": "f3d9df49d39c423914b4255c6de4cc4c"
  },
  {
    "url": "district-zones/d-ih-heavy-industrial/index.html",
    "revision": "b4d9d4c69ee044a95b9557e949e6a240"
  },
  {
    "url": "district-zones/d-il-light-industrial/index.html",
    "revision": "059ef406c59f1c69d1b878623b4f66df"
  },
  {
    "url": "district-zones/d-m-medical-campus/index.html",
    "revision": "3e844a9846507b2e2bb200234078e944"
  },
  {
    "url": "district-zones/d-og-green/index.html",
    "revision": "18bd9a3d620291a228bbe99b220ccf0d"
  },
  {
    "url": "district-zones/d-on-natural/index.html",
    "revision": "40c86751687a59cf9d935d0a1cf15065"
  },
  {
    "url": "district-zones/d-os-square/index.html",
    "revision": "08f114922de7fb1bb36a3eba14938ecc"
  },
  {
    "url": "district-zones/d-r-residential-campus/index.html",
    "revision": "5f72e56c88e063a5e620f2b4962eab6a"
  },
  {
    "url": "district-zones/d-s-strip-retail/index.html",
    "revision": "d3ca162a84a76478d3100b0253892efd"
  },
  {
    "url": "index.html",
    "revision": "b784fdd6cf5f64a25c07490d4642cce3"
  },
  {
    "url": "introductory-provisions/title-purpose-and-applicability/index.html",
    "revision": "a195c97447de31c373052e2d95858351"
  },
  {
    "url": "introductory-provisions/transition-rules/index.html",
    "revision": "c3aa9dd56b47e6b21bac2357a7ef5448"
  },
  {
    "url": "introductory-provisions/zoning-map/index.html",
    "revision": "3ade4d485da691dfb8af5546d1202593"
  },
  {
    "url": "manifest.json",
    "revision": "b751e85bded1619f98f16e7890d79b2c"
  },
  {
    "url": "meta/bufgreencode-logo.png",
    "revision": "5047e2617baca11bdd482220621e11b0"
  },
  {
    "url": "meta/meta-img.png",
    "revision": "c2dd3d5b9fafb7d1e4671615ac7a0148"
  },
  {
    "url": "neighborhood-zones/building-types/index.html",
    "revision": "89933f0bdcb3b6537a5ff48f5b477017"
  },
  {
    "url": "neighborhood-zones/frontage-elements/index.html",
    "revision": "54fcd2d258b6d1bad822816960e18178"
  },
  {
    "url": "neighborhood-zones/overlays/index.html",
    "revision": "d9dbf28a6214febe76f8b5331c9f1cdc"
  },
  {
    "url": "neighborhood-zones/zone-descriptions/index.html",
    "revision": "93ca299c51bc7eb9654cf89f98f43b43"
  },
  {
    "url": "nonconformities-enforcement/enforcement/index.html",
    "revision": "39a63b365198b31ee0c15cf85119c932"
  },
  {
    "url": "nonconformities-enforcement/nonconformities/index.html",
    "revision": "efaae32ba863a1ca83aaf7eeb5f5713a"
  },
  {
    "url": "planned-unit-developments/planned-unit-development-number-1-and-58-gates-circle-redevelopment/index.html",
    "revision": "c003cf43feaa3c59b5582a73bc610f72"
  },
  {
    "url": "signs/exempt-signs/index.html",
    "revision": "571682f589e5d415b785debbf317bf70"
  },
  {
    "url": "signs/off-premise-signs/index.html",
    "revision": "8f1736da9f2f0d1493e1bc5a066aa9f8"
  },
  {
    "url": "signs/on-premise-signs/index.html",
    "revision": "37bc4f6787eda9aa8f572f9db0618e19"
  },
  {
    "url": "signs/signs/index.html",
    "revision": "8a78d8b77a046271ba846da6b80e0eb6"
  },
  {
    "url": "site-development/corner-visibility/index.html",
    "revision": "f0f4e6538d2c454e8312851b199ad413"
  },
  {
    "url": "site-development/fences-and-walls/index.html",
    "revision": "88a709a9bb3cb3666a0fa23dbb21d517"
  },
  {
    "url": "site-development/landscape/index.html",
    "revision": "ec3ca27afc1652b91210a1dfe5bf5084"
  },
  {
    "url": "site-development/outdoor-lighting/index.html",
    "revision": "bd59d47156eeefb3a729cc6a5a7f05ad"
  },
  {
    "url": "site-development/site-impacts/index.html",
    "revision": "dfb5129fb794774308b2056d415ee4f0"
  },
  {
    "url": "site-development/stormwater/index.html",
    "revision": "de8f1d4c260c8ebc7553822dd5157747"
  },
  {
    "url": "transportation-network/blocks/index.html",
    "revision": "8fb99cfe555c39c1581699d4812581e4"
  },
  {
    "url": "transportation-network/rights-of-way/index.html",
    "revision": "4a932afc57a196973398072ec3d6c995"
  },
  {
    "url": "uses/accessory-uses/index.html",
    "revision": "68993018b8597b96dd29e0801729239e"
  },
  {
    "url": "uses/principal-uses/index.html",
    "revision": "9d1edb29dd18072a50f235bbfef3e2eb"
  },
  {
    "url": "uses/temporary-uses/index.html",
    "revision": "2043e4ad41c99e0bd8c54c89b043a2b2"
  },
  {
    "url": "zoning-board-of-appeals/zoning-board-of-appeals/index.html",
    "revision": "7ecfe8d718a511c35c1b572411dc4a6a"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "zoning-board-of-appeals/zoning-board-of-appeals",
    "revision": "76bf324239faa2eccc2fe21f2ad76228"
  },
  {
    "url": "planned-unit-developments/planned-unit-development-number-1-and-58-gates-circle-redevelopment",
    "revision": "01833848479bd0cb3f9629e87beb6911"
  },
  {
    "url": "neighborhood-zones/zone-descriptions",
    "revision": "77a7e631d9a47a2da6d64f9cbcb0b135"
  },
  {
    "url": "uses/temporary-uses",
    "revision": "b726ef8836cffb22731ee53283f70cb7"
  },
  {
    "url": "transportation-network/rights-of-way",
    "revision": "b5365e963134dc9a51f93d1530264a3f"
  },
  {
    "url": "site-development/site-impacts",
    "revision": "fb403198701f5dc05a11b2f98fe72ca1"
  },
  {
    "url": "site-development/stormwater",
    "revision": "07603fd5f490eab16fe228b132a4f244"
  },
  {
    "url": "signs/signs",
    "revision": "c368443d0109462c0f6f5961ff7cb982"
  },
  {
    "url": "uses/principal-uses",
    "revision": "e9395e77c4061c96a8214759ae8ad0b8"
  },
  {
    "url": "introductory-provisions/zoning-map",
    "revision": "721e4d4d52f1601251bb70f2e1a8b584"
  },
  {
    "url": "signs/off-premise-signs",
    "revision": "76c0d0e302ddbc1b265bba400fe75fb3"
  },
  {
    "url": "signs/on-premise-signs",
    "revision": "ee43f439e57cb8f3698e0bf40cfaaee4"
  },
  {
    "url": "site-development/outdoor-lighting",
    "revision": "bf397175c4cd5d109baac6fd98452ddb"
  },
  {
    "url": "introductory-provisions/title-purpose-and-applicability",
    "revision": "b4b1dd0a5e2e622ea02aafefaf1c5501"
  },
  {
    "url": "site-development/landscape",
    "revision": "66f61e3dda3cf67c73786955587c89be"
  },
  {
    "url": "introductory-provisions/transition-rules",
    "revision": "aa5cb7c8b043287d6354f71cf3d20d09"
  },
  {
    "url": "neighborhood-zones/overlays",
    "revision": "ae3335dc07a4f88c69e59710648b32df"
  },
  {
    "url": "administration-approvals/zoning-approvals",
    "revision": "19de03457f75b91553e5056a18510525"
  },
  {
    "url": "nonconformities-enforcement/nonconformities",
    "revision": "6617c7ff3b5d29902c95bbafc45cfa9d"
  },
  {
    "url": "site-development/fences-and-walls",
    "revision": "f80f0e59c77e4f5415d08e0e842cdc3a"
  },
  {
    "url": "access-parking/vehicle-access-and-parking",
    "revision": "28db03a7b0e15fa1af059a6627257f8e"
  },
  {
    "url": "definitions-measurements/rules-of-interpretation",
    "revision": "ca354799776d58bf911b8f3e6c732ae9"
  },
  {
    "url": "signs/exempt-signs",
    "revision": "96487140ca6a04202b84d0bcb0a043c1"
  },
  {
    "url": "access-parking/transportation-demand-management",
    "revision": "dd370c189d1fce841f8a291ed90cfc5a"
  },
  {
    "url": "site-development/corner-visibility",
    "revision": "1a26e4916ca619ce3428cabc043d17f9"
  },
  {
    "url": "administration-approvals/review-bodies-and-administration",
    "revision": "cd33e8c4476d87a8ae16548da012d42c"
  },
  {
    "url": "administration-approvals/right-of-way-approvals",
    "revision": "97b28da77b59b83d1d0146f21d844f02"
  },
  {
    "url": "transportation-network/blocks",
    "revision": "922dc1daaf1909bc58b09a60cb6617d4"
  },
  {
    "url": "uses/accessory-uses",
    "revision": "cf02b102ed5d2cf7e7294f0865cc82ff"
  },
  {
    "url": "administration-approvals/subdivision-approvals",
    "revision": "9c2982aeba229f913e685f9f42fa25a9"
  },
  {
    "url": "neighborhood-zones/frontage-elements",
    "revision": "de9be920a6927e65330aa17316550ca5"
  },
  {
    "url": "definitions-measurements/measures-and-exceptions",
    "revision": "ddb2dcf452752f20c44ed6d17fe6cbd6"
  },
  {
    "url": "nonconformities-enforcement/enforcement",
    "revision": "4306e4739f5c027c12de88f7af9e2f1d"
  },
  {
    "url": "access-parking/pedestrian-access",
    "revision": "2d593f95264535ffff2578621122bb2e"
  },
  {
    "url": "neighborhood-zones/building-types",
    "revision": "8d24c3447a1dbecde61697810781edf7"
  },
  {
    "url": "definitions-measurements/glossary-of-terms",
    "revision": "cb81eac71e96c806807972c3f083de9f"
  },
  {
    "url": "district-zones/d-c-flex-commercial",
    "revision": "2e21318f70bc2ee7e70c02b19dae6538"
  },
  {
    "url": "district-zones/d-e-educational-campus",
    "revision": "4744ccfd849bf95cb3c445f0d33629aa"
  },
  {
    "url": "district-zones/d-ih-heavy-industrial",
    "revision": "30ce9fd60fd608c91957b9577f20247e"
  },
  {
    "url": "district-zones/d-il-light-industrial",
    "revision": "2414653da7069558d5ec374472f01e5e"
  },
  {
    "url": "district-zones/d-m-medical-campus",
    "revision": "495162d63a66857c1b385f765a36cf71"
  },
  {
    "url": "district-zones/d-r-residential-campus",
    "revision": "b139114050285cf355098721b6624158"
  },
  {
    "url": "district-zones/d-s-strip-retail",
    "revision": "397734c0ac7271ceaf26d75e4d364621"
  },
  {
    "url": "district-zones/d-og-green",
    "revision": "cd609ccc3a3eb044cc543f3bc63bd718"
  },
  {
    "url": "district-zones/d-on-natural",
    "revision": "4d6ee450cea101e545d5eb0924e43036"
  },
  {
    "url": "district-zones/d-os-square",
    "revision": "3a3a4168d45dc8e87cdc59debfb31075"
  },
  {
    "url": "corridor-zones/c-m-metro-rail",
    "revision": "4cf9439b755ace386665776d9fd72048"
  },
  {
    "url": "corridor-zones/c-r-rail",
    "revision": "94c0162356049e420f74fb3e77010379"
  },
  {
    "url": "corridor-zones/c-w-waterfront",
    "revision": "50944baef4b88234dc4ecc0deb470ac4"
  },
  {
    "url": "access-parking/bicycle-access-and-parking",
    "revision": "d14dc72defb315191c623db49b189d31"
  },
  {
    "url": "administration-approvals/common-procedures",
    "revision": "502a1b06c4ea5042b34c3b3b735e1cfa"
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
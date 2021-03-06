<template>
  <div class="antialiased">
    <div>
      <Navbar class="fixed top-0 z-20" />
      <div
        class="fixed pt-16 inset-x-0 md:hidden z-10 transition-md overflow-hidden"
        :class="menuIsOpen ? 'h-screen' : 'h-26'"
      >
        <Subnav
          :menuIsOpen.sync="menuIsOpen"
          :activeHeading="activeHeading"
          :activeIdx="activeIdx"
        />
      </div>
    </div>
    <div class="flex">
      <div
        class="hidden md:block md:w-1/4 lg:w-1/6 fixed top-0 h-full pt-16 flex-shrink-0"
      >
        <Sidebar />
      </div>
      <div
        class="pt-20 w-full md:pt-16 px-6 md:px-8 lg:pl-16 lg:pr-0 md:w-3/4 lg:w-5/6 md:ml-auto"
      >
        <transition name="fade" @after-enter="afterEnter()" appear>
          <div class="flex" :key="$route.path">
            <div class="my-12 w-full lg:pr-16 lg:w-3/4">
              <main class="w-full">
                <slot />
              </main>
            </div>
            <aside v-if="toc" class="hidden lg:block lg:w-1/4">
              <div class="sticky h-screen overflow-y-auto top-0 pt-16">
                <div class="mt-8 pb-8">
                  <div class="mb-2">
                    <span
                      class="uppercase font-bold text-gray-500 text-sm tracking-wider"
                      >On this Page</span
                    >
                  </div>
                  <ul ref="toc">
                    <li
                      v-for="(anchor, index) in tocContent"
                      :key="index"
                      class="text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      <a :href="anchor.anchor" class="py-1 pl-0 block">
                        <span
                          class="block border-l-2 transition-fast"
                          :class="
                            localActiveIdx == index
                              ? 'text-gray-900 pl-2 border-gray-900'
                              : 'pl-0 border-transparent'
                          "
                          >{{ anchor.value }}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/SidebarComponent";
import Navbar from "~/components/NavbarComponent";
import Subnav from "~/components/SubnavComponent";

export default {
  name: "SidebarLayout",
  props: {
    toc: {
      type: Boolean,
      default: false,
    },
    tocContent: {
      type: Array,
    },
    activeIdx: {
      type: Number,
    },
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  components: {
    Sidebar,
    Navbar,
    Subnav,
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    copyAnchorsToClipBoard(e) {
      setTimeout(() => {
        const textArea = document.createElement("textarea");
        textArea.value = e.path[0].baseURI;
        textArea.style.position = "fixed"; //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 99999);

        try {
          document.execCommand("copy");
        } catch (err) {
          console.error("Oops, unable to copy", err);
        }
        document.body.removeChild(textArea);
      }, 1);
    },
    initCopyAnchors() {
      let self = this;
      let anchors = [];
      anchors = document.getElementsByClassName("heading-anchor");
      for (let a of anchors) {
        a.addEventListener("click", function(e) {
          self.copyAnchorsToClipBoard(e);
        });
      }
    },
    afterEnter() {
      this.initCopyAnchors();
    },
  },
  computed: {
    activeHeading() {
      return this.tocContent ? this.tocContent[this.activeIdx] : null;
    },
    localActiveIdx() {
      return this.activeIdx == -1 ? 0 : this.activeIdx;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>

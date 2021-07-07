<template>
  <Layout>
    <div
      class="container w-full h-full px-2 py-4 bg-gray-50"
      v-if="youtubeData"
    >
      <div class="mx-4 md:mx-10 bg-gray-50">
        <h3 class="text-secondary text-3xl font-thin py-2">
          Procedure Videos
        </h3>
        <h1 class="font-bold text-5xl pb-4">
          Video Gallery
        </h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:mx-10">
        <div
          v-for="item in youtubeData"
          :key="item.id.videoId"
          @click="openModal(item.id.videoId)"
        >
          <div class="rounded-lg overflow-hidden shadow">
            <g-image :src="item.snippet.thumbnails.high.url" />
            <div class="px-4 py-3 bg-white text-center">
              <h1
                class="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out"
              >
                {{ item.snippet.title }}
              </h1>
              <p>{{ item.snippet.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <t-modal
        :showing="showModal"
        @close="showModal = false"
        :showClose="true"
      >
        <!-- Put your modal content here -->
        <div class="relative" style="padding-top: 56.25%">
          <iframe
            class="absolute inset-0 w-full h-full"
            :src="'https://www.youtube.com/embed/' + videoId"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </t-modal>
    </div>
    <div class="bg-gray-100 w-full p-8 flex flex-wrap" v-else>
      <div class="w-full md:w-1/3 lg:w-1/3 p-2" v-for="index in 9" :key="index">
        <a
          href="/"
          class="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300"
        >
          <div class="relative group text-primary-500" style="padding-top: 70%">
            <div class="absolute top-0 left-0 h-full w-full">
              <span
                class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"
              ></span>
            </div>
          </div>
          <div class="flex flex-col flex-grow">
            <div class="pl-4 pr-4 pt-4 mb-4 text-left relative flex-grow">
              <h3 class="text-lg font-bold text-gray-darkest mr-10">
                <span class="skeleton-box h-5 w-1/6 inline-block"></span>
                <span class="skeleton-box h-5 w-1/2 inline-block"></span>
                <span class="skeleton-box h-5 w-2/4 inline-block"></span>
                <span class="skeleton-box h-5 w-2/5 inline-block"></span>
              </h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import TModal from '../components/TModal.vue'
export default {
  components: { TModal },
  data: function() {
    return {
      youtubeData: null,
      showModal: false,
      videoId: '',
    }
  },
  mounted: async function() {
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/search?' +
        new URLSearchParams({
          key: 'AIzaSyClP3_K3ZbLoR0dVtwRthNOmKbhMhVcjb4',
          channelId: 'UCsooa4yRKGN_zEE8iknghZA',
          part: 'snippet',
          maxResults: 21,
          order: 'date',
        })
    )
    console.log(response)
    const data = await response.json()
    console.log(data)
    this.youtubeData = data.items
  },
  methods: {
    openModal(id) {
      ;(this.showModal = true), (this.videoId = id)
    },
  },
}
</script>

<style>
.skeleton-box {
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;
}
.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(255, 255, 255, 0)),
    color-stop(20%, rgba(255, 255, 255, 0.2)),
    color-stop(60%, rgba(255, 255, 255, 0.5)),
    to(rgba(255, 255, 255, 0))
  );
  background-image: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  -webkit-animation: shimmer 3s infinite;
  animation: shimmer 3s infinite;
  content: '';
}
@-webkit-keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>

<template>
  <Layout>
    <hero :Content="hero" :whatsapp="whatsapp"></hero>
    <div class="w-full h-full px-2 py-4 bg-gray-50" v-if="youtubeData">
      <div class="mx-4 md:mx-10 bg-gray-50 text-center">
        <h3 class="text-secondary text-3xl font-thin py-2">
          Video Gallery
        </h3>
        <h1 class="font-bold text-5xl pb-4">
          Procedure Videos
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
      <div class="flex justify-center pt-4 text-white">
        <button
          class="bg-secondary rounded shadow hover:shadow-lg py-4 px-6 border-transparent"
          @click="apiCall"
        >
          Load More
        </button>
      </div>
    </div>
    <skeleton-card v-else></skeleton-card>
  </Layout>
</template>

<script>
import Hero from '../components/Hero.vue'
import SkeletonCard from '../components/SkeletonCard.vue'
import TModal from '../components/TModal.vue'
export default {
  components: { TModal, Hero, SkeletonCard },
  data: function() {
    return {
      hero: null,
      youtubeData: null,
      showModal: false,
      videoId: '',
      nextPageToken: '',
      key: '',
      channelId: '',
      whatsapp: '',
    }
  },
  mounted: async function() {
    await this.apiCall()
  },
  created: function() {
    this.hero = this.$page.posts.edges[0].node?.hero?.gallery
    this.key = this.$page.posts.edges[0].node?.appKeys?.google_key
    this.channelId = this.$page.posts.edges[0].node?.appKeys?.youtube_channalId
    this.whatsapp = this.$page.posts.edges[0].node?.contactInfo.whatsapp
  },
  methods: {
    async apiCall() {
      window.scrollTo(0, 600)
      const response = await fetch(
        'https://www.googleapis.com/youtube/v3/search?' +
          new URLSearchParams({
            key: this.key,
            channelId: this.channelId,
            part: 'snippet',
            maxResults: 21,
            order: 'date',
            pageToken: this.nextPageToken,
          })
      )
      console.log(response)
      const data = await response.json()
      console.log(data)
      this.youtubeData = data.items
      this.nextPageToken = data.nextPageToken
    },
    openModal(id) {
      ;(this.showModal = true), (this.videoId = id)
    },
  },
}
</script>
<page-query>
query{
 posts: allPosts{
  edges{
    node{
      hero{
        gallery{
          title,
          subtitle,
          description,
          img
        }
      }
      appKeys{
      google_key,
      youtube_channalId
      }
      contactInfo{
          whatsapp
        }
    }
  }
}
}
</page-query>

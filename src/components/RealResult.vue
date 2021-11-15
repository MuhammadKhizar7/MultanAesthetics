<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-4">
      <div class="col-span-3 bg-primary p-5 md:p-20 text-white flex">
        <div class="mx-4 md:mx-10">
          <h3 class="text-gray-100 text-3xl font-thin py-2">
            {{ content.subtitle }}
          </h3>
          <h1 class="font-bold text-4xl pb-4">
            {{ content.title }}
          </h1>
          <p class="py-4">
            {{ content.description }}
          </p>
          <p class="text-white text-3xl font-thin py-4">
            <span class="inline-block"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 36 36"
              >
                <path
                  id="Icon_awesome-phone"
                  data-name="Icon awesome-phone"
                  d="M34.691,1.73,27.379.042a1.7,1.7,0,0,0-1.934.977L22.071,8.894a1.683,1.683,0,0,0,.485,1.969l4.261,3.487A26.058,26.058,0,0,1,14.358,26.81L10.87,22.549A1.686,1.686,0,0,0,8.9,22.064L1.027,25.439a1.708,1.708,0,0,0-.984,1.941L1.73,34.691A1.687,1.687,0,0,0,3.375,36,32.621,32.621,0,0,0,36,3.375,1.685,1.685,0,0,0,34.691,1.73Z"
                  transform="translate(0.001 0.001)"
                  fill="#fdfdfd"
                />
              </svg>
            </span>
            {{ content.phoneNumber }}
          </p>
        </div>
      </div>
      <div class="bg-auto bg-no-repeat bg-center bg-back-img">
        <div class="md:mt-10 md:-ml-20 relative">
          <g-image
            class="md:w-80"
            :src="require(`!!assets-loader!@images/${content.img}`)"
          />
          <div
            class="absolute top-40 left-52 md:left-28 z-10 cursor-pointer"
            @click="openModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#fff"
              class="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <t-modal :showing="showModal" @close="showModal = false" :showClose="true">
      <!-- Put your modal content here -->
      <div class="relative" style="padding-top: 56.25%">
        <iframe
          class="absolute inset-0 w-full h-full"
          :src="'https://www.youtube.com/embed/' + content.videoId"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </t-modal>
  </div>
</template>

<script>
import TModal from './TModal.vue'
export default {
  components: {
    TModal,
  },
  data: function() {
    return {
      showModal: false,
      content: null,
    }
  },
  created: function() {
    this.content = this.$static.allPosts.edges[0].node?.realResult
  },
  methods: {
    openModal() {
      this.showModal = true
    },
  },
}
</script>
<static-query>
query{
 allPosts{
  edges{
    node{
     realResult{
      title,
      subtitle,
      description,
      phoneNumber,
      videoId,
      img
    }
  }
}
}
}
</static-query>

<style></style>

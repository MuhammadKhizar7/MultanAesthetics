<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div>
        <g-image class="w-full h-full" src="~/assets/images/client.jpg" />
      </div>
      <div class="col-span-2 text-center text-white bg-primary p-8">
        <h3 class="text-gray-100 text-3xl font-thin py-2">
          {{ content.subtitle }}
        </h3>
        <h1 class="font-bold text-4xl pb-4">
          {{ content.title }}
        </h1>
        <carousel
          autoplay
          autoplayHoverPause
          easing="linear"
          :perPage="1"
          :navigationEnabled="true"
        >
          <slide v-for="review in content.reviews" :key="review.id">
            <p class="py-4">
              {{ review.message }}
            </p>
            <div class="flex justify-center">
              <g-image
                class="w-16 h-16 rounded-full"
                :src="require(`!!assets-loader!@images/${review.img}`)"
              />
              <p class="pt-4 pl-2">{{ review.name }}</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    // Carousel,
    // Slide,
    Carousel: () =>
      import('vue-carousel/src/index')
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import('vue-carousel/src/index')
        .then((m) => m.Slide)
        .catch(),
  },
  data: function() {
    return {
      content: null,
    }
  },
  created: function() {
    this.content = this.$static.allPosts.edges[0].node?.clientReviews
  },
}
</script>
<static-query>
query{
 allPosts{
  edges{
    node{
    clientReviews{
      title,
      subtitle,
      reviews{
        id,
        message,
        img,
        name
      }
    }
    }
}
}
}
</static-query>
<style>
.VueCarousel-navigation-button {
  color: white !important;
}
</style>

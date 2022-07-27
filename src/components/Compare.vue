<template>
  <div class="contianer w-full px-2 py-4 bg-gray-50">
    <!-- heading -->
    <div class="text-center pb-10">
      <h2 class="text-gray-500 text-3xl font-thin">
        {{ content.subtitle }}
      </h2>
      <h1 class="font-bold text-5xl">
        {{ content.title }}
      </h1>
    </div>
    <!-- grid 4 col -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 mx-10">
      <!-- card compare -->
      <div
        class="rounded shadow p-2 bg-secondary-light overflow-hidden"
        v-for="card in content.cards"
        :key="card.id"
      >
        <h1
          class="text-gray-800 font-bold text-lg text-center hover:text-red-500 transition duration-300 ease-in-out mb-2"
        >
          {{ card.title }}
        </h1>
        <comparify class="bg-white h-64 w-full overflow-hidden" value="45">
          <g-image
            slot="first"
            class="h-64 bg-cover  w-full"
            :src="require(`!!assets-loader!@images/${card.img_first}`)"
            alt="before"
          />
          <g-image
            slot="second"
            class="h-64 bg-cover w-full"
            :src="require(`!!assets-loader!@images/${card.img_second}`)"
            alt="after"
          />
        </comparify>
        <div class="flex justify-between text-gray-500">
          <div>After</div>
          <div>Before</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comparify from '@/components/Comparify.vue'
export default {
  components: {
    Comparify,
  },
  data: function() {
    return {
      content: null,
    }
  },
  created: function() {
    this.content = this.$static.allPosts.edges[0].node?.compare
  },
}
</script>
<static-query>
query{
 allPosts{
  edges{
    node{
      compare{
        title,
        subtitle,
        cards{
          id,
          title,
          img_first,
          img_second
        }
      }
  }
}
}
}
</static-query>

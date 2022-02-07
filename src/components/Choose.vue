<template>
  <!-- choose us -->
  <div class="contianer w-full px-4 bg-gray-50 pb-5">
    <!-- heading -->
    <div class="font-bold text-4xl text-center py-5">
      <h2 class="text-gray-500 font-thin">{{ choose.subtitle }}</h2>
      <h1>{{ choose.title }}</h1>
    </div>
    <div class="mx-auto flex flex-col md:flex-row items-center">
      <div>
        <div class="flex  py-5">
          <div>
            <div
              class="bg-red-500 text-white font-semibold text-2xl break-words w-10 h-10 transform-gpu rotate-45 flex justify-center justify-items-center mr-3 -mb-2"
            >
              <p class="transform-gpu -rotate-45">{{ choose.points[0].id }}</p>
            </div>
          </div>
          <div class="">
            <h1 class="font-bold text-2xl text-secondary">
              {{ choose.points[0].title }}
            </h1>
            <p class="mt-1">
              {{ choose.points[0].description }}
            </p>
          </div>
        </div>
        <div class="flex  py-5">
          <div>
            <div
              class="bg-red-500 text-white font-semibold text-2xl break-words w-10 h-10 transform-gpu rotate-45 flex justify-center justify-items-center mr-3 -mb-2"
            >
              <p class="transform-gpu -rotate-45">{{ choose.points[1].id }}</p>
            </div>
          </div>
          <div class="">
            <h1 class="font-bold text-2xl text-secondary">
              {{ choose.points[1].title }}
            </h1>
            <p class="mt-1">
              {{ choose.points[1].description }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 lg:py-0">
        <g-image :src="require(`!!assets-loader!@images/${choose.img}`)" />
      </div>
      <div>
        <div class="flex  py-5">
          <div>
            <div
              class="bg-red-500 text-white font-semibold text-2xl break-words w-10 h-10 transform-gpu rotate-45 flex justify-center justify-items-center mr-3 -mb-2"
            >
              <p class="transform-gpu -rotate-45">{{ choose.points[2].id }}</p>
            </div>
          </div>
          <div class="">
            <h1 class="font-bold text-2xl text-secondary">
              {{ choose.points[2].title }}
            </h1>
            <p class="mt-1">
              {{ choose.points[2].description }}
            </p>
          </div>
        </div>
        <div class="flex  py-5">
          <div>
            <div
              class="bg-red-500 text-white font-semibold text-2xl break-words w-10 h-10 transform-gpu rotate-45 flex justify-center justify-items-center mr-3 -mb-2"
            >
              <p class="transform-gpu -rotate-45">{{ choose.points[3].id }}</p>
            </div>
          </div>
          <div class="">
            <h1 class="font-bold text-2xl text-secondary">
              {{ choose.points[3].title }}
            </h1>
            <p class="mt-1">
              {{ choose.points[3].description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      choose: null,
    }
  },
  created: function() {
    this.choose = this.$static.allPosts.edges[0].node?.chooseUs
  },
}
</script>
<static-query>
query{
 allPosts{
  edges{
    node{
      chooseUs{
        title,
        subtitle,
        img,
        points{
          id,
          title,
          description
        }
      }
  }
}
}
}
</static-query>
<style></style>

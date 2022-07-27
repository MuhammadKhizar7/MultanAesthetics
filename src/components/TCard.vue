<template>
  <!-- card -->
  <div class="rounded-lg overflow-hidden shadow bg-white">
    <g-image
      class="h-64 bg-cover"
      :src="require(`!!assets-loader!@images/${content.img}`)"
    />
    <div class="px-4 py-3 text-center">
      <g-link :to="'/services/' + content.id"
        ><h1
          class="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out"
        >
          {{ content.title }}
        </h1>
        <p class="text-justify">{{ content.description }}</p>
        <p class="text-red-300">Learn More -></p>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      Object,
      default: {
        id: 1,
        img: 'card_1.jpg',
        title: 'Face Treatment',
        description:
          'Facilis similique numquam perferendis dolores reprehenderit et architecto eius quidem vel.',
      },
    },
  },
}
</script>

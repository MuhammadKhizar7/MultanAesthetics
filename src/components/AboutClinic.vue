<template>
  <div class="contianer w-full px-4 bg-secondary-light py-20">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="p-10 pt-0 md:pr-0">
        <g-image
          class="image-flip"
          :src="require(`!!assets-loader!@images/${content.img}`)"
        />
      </div>
      <!-- card -->
      <div
        class="rounded-2xl overflow-hidden shadow bg-white -mt-10 md:-ml-10 sm:z-10 p-10 md:p-20"
      >
        <!-- heading -->
        <div class="font-bold text-4xl py-5">
          <h2 class="text-secondary font-thin">{{ content.title }}</h2>
          <h1>{{ content.name }}</h1>
        </div>
        <p class="pt-4">
          {{ content.about_1 }}
        </p>
        <p class="pt-4">
          {{ content.about_2 }}
        </p>
        <p class="pt-4">
          {{ content.about_3 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      Object,
      default: {
        title: 'INTRODUCTION',
        name: 'About Multan Aesthetics',
        about_1:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea',
        about_2:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea',
        about_3:
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea',
      },
    },
  },
}
</script>

<style>
.image-flip {
  transform: rotateY(180deg);
}
</style>

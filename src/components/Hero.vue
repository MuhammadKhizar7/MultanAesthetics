<template>
  <!--Hero-->
  <div
    class="mx-auto flex flex-col md:flex-row items-center  bg-primary-light bg-hero-pattern bg-no-repeat bg-center xl:bg-img-postion bg-cover w-full"
  >
    <!--Left Col-->
    <div
      class="flex flex-col w-full lg:w-1/2 justify-center sm:items-start pt-12 pb-24 px-6 text-white text-center sm:text-left"
    >
      <p class="font-bold text-4xl md:text-5xl ">{{ content.title }}</p>
      <h1 class="font-bold text-4xl md:text-5xl mb-4">
        {{ content.subtitle }}
      </h1>
      <p class="leading-normal mb-4">
        {{ content.description }}
      </p>
      <t-button isWhatsapp :PhoneNumber="whatsapp"></t-button>
    </div>
    <!--Right Col-->
    <div class="w-full lg:w-1/3 lg:py-0 text-center relative">
      <g-image :src="require(`!!assets-loader!@images/${content.img}`)" />
      <g-image
        class="absolute bottom-0 left-0 w-1/2 md:-ml-20 "
        src="~/assets/images/bg_flower2.png"
      />
    </div>
  </div>
</template>

<script>
import TButton from './TButton.vue'
export default {
  components: { TButton },
  props: {
    content: {
      Object,
      default: () => {
        return {
          title: 'Care Your Skin,',
          subtitle: ' Care Your Beauty',
          description: ` Enter your super app's description here... The key is to find the right
        length. Don't want it to be too long, but then don't want it to be too
        short so that it looks weird between the title and button below.`,
          img: 'home_hero.png',
        }
      },
    },
    whatsapp: {
      String,
      whatsapp: '',
    },
  },
}
</script>

<style></style>

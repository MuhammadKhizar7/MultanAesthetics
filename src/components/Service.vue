<template>
  <!-- services -->
  <div class="contianer w-full px-2 py-4 bg-gray-50">
    <!-- heading -->
    <div class="text-center pb-10">
      <h2 class="text-gray-500 text-3xl font-thin">
        {{ content.subtitle }}
      </h2>
      <h1 class="font-bold text-5xl">{{ content.title }}</h1>
    </div>
    <!-- grid 4 col -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
      <!-- card -->
      <t-card
        v-for="card in content.cards"
        :key="card.id"
        :content="card"
      ></t-card>
    </div>
  </div>
</template>

<script>
import TCard from './TCard.vue'
export default {
  components: { TCard },
  props: {
    content: {
      Object,
      default: () => {
        return {
          title: 'Treatments & Services',
          subtitle: ' HEALTHY SKIN AND NATURAL',
          cards: [
            {
              id: 1,
              img: 'card_1.jpg',
              title: 'Face Treatment',
              description:
                'Facilis similique numquam perferendis dolores reprehenderit et architecto eius quidem vel.',
            },
          ],
        }
      },
    },
  },
}
</script>

<style></style>

<template>
  <Layout>
    <hero :Content="hero"></hero>
    <div class="contianer w-full  bg-secondary-light px-4 pb-10 pt-5">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!-- card -->
        <div
          class="col-span-2 rounded-2xl overflow-hidden shadow bg-white -mt-10 md:mt-0 p-10 md:p-20"
        >
          <!-- heading -->
          <div class="font-bold text-4xl py-5">
            <h2 class="text-secondary font-thin">{{ card.subtitle }}</h2>
            <h1>{{ card.title }}</h1>
          </div>
          <p class="pt-4">
            {{ card.description }}
          </p>
          <p class="pt-4">
            {{ card.description_1 }}
          </p>
          <p class="pt-4">
            {{ card.description_2 }}
          </p>
          <ul class="mt-10">
            <li
              class="bg-primary-lightest rounded-md py-4 mt-4"
              v-for="point in card.points"
              :key="point.id"
            >
              <span class="bg-secondary-light p-5 mr-4 rounded-md">{{
                point.id
              }}</span>
              {{ point.title }}
            </li>
          </ul>
        </div>
        <div class="py-5 order-first md:order-last">
          <g-image
            class="image-flip rounded-md"
            :src="require(`!!assets-loader!@images/${card.img}`)"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
  components: { Hero },
  computed: {
    card: function() {
      return this.$page.allPosts.edges[0].node?.services?.cards.find(
        (x) => x.id === this.$context.id
      )
    },
    hero: function() {
      return this.$page.allPosts.edges[0].node?.hero.services
    },
  },
}
</script>
<page-query>
query{
  allPosts{
    edges{
      node{
           hero{
          services{
            title,
            subtitle,
            description,
            img
          }
        }
        services{
          cards{
            id,
            subtitle
            title,
            description,
            description_1,
            description_2,
            img,
            points{
              id,
              title
            }
          }
        }
      }
    }
  }
}
</page-query>
<style></style>

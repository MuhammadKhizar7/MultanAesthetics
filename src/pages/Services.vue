<template>
  <Layout>
    <hero :Content="services"></hero>
    <service></service>
    <testiomonial></testiomonial>
    <compare></compare>
    <real-result></real-result>
  </Layout>
</template>

<script>
import Compare from '../components/Compare.vue'
import Hero from '../components/Hero.vue'
import RealResult from '../components/RealResult.vue'
import Service from '../components/Service.vue'
import Testiomonial from '../components/Testiomonial.vue'
export default {
  components: { Hero, Service, Compare, RealResult, Testiomonial },
  data: function() {
    return {
      services: null,
    }
  },
  created: function() {
    this.services = this.$page.posts.edges[0].node?.hero?.services
  },
}
</script>
<page-query>
query{
 posts: allPosts{
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
    }
  }
}
}
</page-query>
<style></style>

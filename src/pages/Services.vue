<template>
  <Layout>
    <hero :Content="services" :whatsapp="whatsapp"></hero>
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
      whatsapp: null,
    }
  },
  created: function() {
    this.services = this.$page.posts.edges[0].node?.hero?.services
    this.whatsapp = this.$page.posts.edges[0].node?.contactInfo.whatsapp
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
       contactInfo{
          whatsapp
        }
    }
  }
}
}
</page-query>
<style></style>

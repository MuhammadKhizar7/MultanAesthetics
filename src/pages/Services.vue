<template>
  <Layout>
    <hero :content="heroServices" :whatsapp="whatsapp"></hero>
    <service :content="services"></service>
    <real-result></real-result>
  </Layout>
</template>

<script>
import Hero from '../components/Hero.vue'
import RealResult from '../components/RealResult.vue'
import Service from '../components/Service.vue'
export default {
  name: 'services',
  components: { Hero, Service, RealResult },
  data: function() {
    return {
      heroServices: null,
      services: null,
      whatsapp: null,
    }
  },
  created: function() {
    this.heroServices = this.$page.posts.edges[0].node?.hero?.services
    this.whatsapp = this.$page.posts.edges[0].node?.contactInfo.whatsapp
    this.services = this.$page.posts.edges[0].node?.services
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
        services{
        title,
        subtitle
        cards{
          id,
          img,
          title,
          description
        }
      }
    }
  }
}
}
</page-query>
<style></style>

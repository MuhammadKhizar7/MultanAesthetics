<template>
  <Layout>
    <hero :content="home" :whatsapp="whatsapp"></hero>
    <choose></choose>
    <service :content="services"></service>
    <compare></compare>
    <real-result></real-result>
  </Layout>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Choose from '@/components/Choose.vue'
import Service from '@/components/Service.vue'
import Compare from '@/components/Compare.vue'
import RealResult from '@/components/RealResult.vue'
export default {
  metaInfo: {
    title: 'Hello, world!',
    metaInfo: {},
  },
  components: {
    Hero,
    Choose,
    Service,
    Compare,
    RealResult,
  },
  data: function() {
    return {
      home: null,
      services: null,
      whatsapp: null,
    }
  },
  created: function() {
    this.home = this.$page.posts.edges[0].node?.hero?.home
    this.services = this.$page.posts.edges[0].node?.services
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
        home{
          title,
          subtitle,
          description,
          img
        }
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
       contactInfo{
          whatsapp
        }
    }
  }
}
}
</page-query>
<style></style>

<template>
  <Layout>
    <hero :content="aboutHero" :whatsapp="whatsapp"></hero>
    <about-clinic :content="aboutClinic"></about-clinic>
    <about-doctor :content="aboutDoctor"></about-doctor>
    <testiomonial></testiomonial>
  </Layout>
</template>

<script>
import AboutClinic from '../components/AboutClinic.vue'
import AboutDoctor from '../components/AboutDoctor.vue'
import Hero from '../components/Hero.vue'
import Testiomonial from '../components/Testiomonial.vue'
export default {
  components: { Hero, AboutClinic, AboutDoctor, Testiomonial },
  metaInfo: {
    title: 'About us',
  },
  data: function() {
    return {
      aboutHero: null,
      aboutClinic: null,
      aboutDoctor: null,
      whatsapp: null,
    }
  },
  created: function() {
    this.aboutHero = this.$page.posts.edges[0].node.hero.about
    this.aboutClinic = this.$page.posts.edges[0].node.clinicInfo
    this.aboutDoctor = this.$page.posts.edges[0].node.doctorInfo
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
        about{
          title,
          subtitle,
          description,
          img
        }
      }
      clinicInfo{
        title, 
        name,
        about_1,
        about_2,
        about_3,
        img
      }
      doctorInfo{
        title,
        subtitle,
        name,
        about_1,
        about_2,
        about_3,
        img
        }
      contactInfo{
        whatsapp
      }
      }
      
    }
  }
}
</page-query>

<template>
  <Layout>
    <hero :content="contactHero" :whatsapp="contact.whatsapp"></hero>
    <contact-card :content="contact"></contact-card>
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            class="w-full"
            height="500"
            id="gmap_canvas"
            :src="encodeMapUrl"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
    <real-result></real-result>
  </Layout>
</template>

<script>
import ContactCard from '../components/ContactCard.vue'
import Hero from '../components/Hero.vue'
import RealResult from '../components/RealResult.vue'
export default {
  components: { Hero, ContactCard, RealResult },
  data: function() {
    return {
      contact: null,
      contactHero: null,
    }
  },
  created: function() {
    this.contactHero = this.$page.posts.edges[0].node.hero.contact
    this.contact = this.$page.posts.edges[0].node.contactInfo
  },
  computed: {
    encodeMapUrl: function() {
      let map = `https://maps.google.com/maps?q=${this.contact.address
        .replace('(3.75 km) 60000 ', '')
        .replace(', Punjab, Pakistan', '')}&t=&z=13&ie=UTF8&iwloc=&output=embed`
      return encodeURI(map)
    },
  },
}
</script>
<page-query>
query{
 posts: allPosts{
  edges{
    node{
      hero{
        contact{
          title,
          subtitle,
          description,
          img
        }
      }
       contactInfo{
      address,
      phone,
      whatsapp,
      whatsappShow,
      email
    }
    }
  }
}
}
</page-query>
<style></style>

<template>
  <div class="font-sans">
    <the-header></the-header>
    <slot />
    <the-footer></the-footer>
    <!-- <fb-chat
      login-msg="welcome"
      logout-msg="good bye"
      :app-id="YOUR_APP_IDD"
      :page-id="YOUR_PAGE_ID"
    ></fb-chat> -->
  </div>
</template>
<script>
import TheFooter from '@/components/TheFooter.vue'
import FbChat from '../components/FbChat.vue'
import TheHeader from '../components/TheHeader.vue'
import PostSeo from '../mixins/SEO.vue'

export default {
  // mixins: [PostSeo],
  components: {
    TheFooter,
    FbChat,
    TheHeader,
  },
}
</script>

<template>
  <div
    class="fb-customerchat"
    :page_id="convert2Str(pageId)"
    :theme_color="checkColor(themeColor)"
    :logged_in_greeting="checkMsg(loginMsg)"
    :logged_out_greeting="checkMsg(logoutMsg)"
    :greeting_dialog_display="greetingDisplay"
  ></div>
</template>

<script>
export default {
  name: 'vue-fb-chat',
  props: {
    appId: {
      type: Number,
      required: true,
    },
    pageId: {
      type: Number,
      required: true,
    },
    themeColor: {
      type: String,
    },
    loginMsg: {
      type: String,
      default: null,
    },
    logoutMsg: {
      type: String,
      default: null,
    },
    greetingDisplay: {
      type: String,
      default: 'hide',
    },
  },
  data() {
    return {
      defaultColor: '#3b5998',
    }
  },
  methods: {
    convert2Str(str) {
      return str.toString()
    },
    checkColor(color) {
      if (color) {
        if (color == '#ffffff' || color == '#fff') {
          console.error("The Color can't be White\nSelect another color")
          return this.defaultColor
        }

        if (this.isHex(color)) {
          return color
        } else {
          console.error(
            "Error: Invalid type of color!\n'" +
              color +
              "' is not a type of color \nThe color has to be in hex format"
          )
        }
      }

      return null
    },
    isHex(hex) {
      var re = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i

      if (re.test(hex)) {
        return true
      }

      return false
    },
    checkMsg(msg) {
      if (msg) {
        //console.log(msg.length);
        if (msg.length <= 80) {
          return msg
        } else {
          console.error('Exceeded the expected character limit!')
        }
      }

      return null
    },
  },
  created() {
    return (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  },
  mounted() {
    //console.log(this.appId.toString(), this.pageId.toString());
    let self = this
    window.fbAsyncInit = function() {
      FB.init({
        appId: self.convert2Str(self.appId),
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.1',
      })
    }
  },
}
</script>
<style scoped>
.text {
  color: #7f8fa4;
  background: #2c97de;
}
</style>

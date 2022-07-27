<template>
  <div class="bg-black text-white pt-10">
    <div class="grid grid-cols-2 md:grid-cols-4 md:gap-10 md:p-10 p-4">
      <div class="col-span-2 p-5 md:ml-10">
        <div class="flex flex-wrap sm:flex-nowrap">
          <div class="mx-auto sm:mx-0">
            <g-image
              class="w-20 h-20"
              src="~/assets/images/logo.png"
              alt="multanesthetics logo"
            />
            <!-- <img src="~/assets/images/logo.svg" alt="multanesthetics logo" /> -->
          </div>
          <h1 class="font-bold text-3xl p-2">
            {{ webInfo.name }}
          </h1>
        </div>
        <div class="flex ml-16 gap-x-5">
          <a :href="webInfo.fb" target="_black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 70 70"
            >
              <path
                id="Icon_awesome-facebook"
                data-name="Icon awesome-facebook"
                d="M70.563,35.775A35,35,0,1,0,30.094,70.563V45.955H21.2V35.775h8.891V28.017c0-8.825,5.222-13.7,13.22-13.7a53.548,53.548,0,0,1,7.835.687v8.661H46.734c-4.347,0-5.7,2.715-5.7,5.5v6.61h9.707L49.186,45.955H41.031V70.563A35.161,35.161,0,0,0,70.563,35.775Z"
                transform="translate(-0.563 -0.563)"
                fill="#fdfdfd"
              />
            </svg>
          </a>
          <a :href="webInfo.youtube" target="_black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 70 70"
            >
              <path
                id="Icon_awesome-youtube"
                data-name="Icon awesome-youtube"
                d="M69.587,15.453c-.805-4.311-3.177-7.707-6.189-8.859C57.94,4.5,36.05,4.5,36.05,4.5S14.16,4.5,8.7,6.594C5.69,7.746,3.318,11.141,2.513,15.453,1.05,23.267,1.05,39.571,1.05,39.571s0,16.3,1.463,24.118C3.318,68,5.69,71.254,8.7,72.406,14.16,74.5,36.05,74.5,36.05,74.5s6.914,0,14.226-.387c5.189-.274,10.732-.79,13.123-1.707,3.012-1.152,5.384-4.406,6.189-8.717,1.463-7.814,1.463-24.118,1.463-24.118s0-16.3-1.463-24.118Zm-40.7,38.921V24.768l18.3,14.8-18.3,14.8Z"
                transform="translate(-1.05 -4.5)"
                fill="#fdfdfd"
              />
            </svg>
          </a>
          <a :href="webInfo.twitter" target="_black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 70 70"
            >
              <path
                id="Icon_awesome-twitter"
                data-name="Icon awesome-twitter"
                d="M62.8,20.826c.044.766.044,1.531.044,2.3,0,23.351-14.435,50.258-40.819,50.258A35.251,35.251,0,0,1,0,65.451a24.164,24.164,0,0,0,3.464.219,25.532,25.532,0,0,0,17.811-7.547c-6.307-.164-11.593-5.25-13.414-12.25a14.781,14.781,0,0,0,2.71.273,12.506,12.506,0,0,0,3.775-.6c-6.574-1.641-11.5-8.75-11.5-17.336V27.99a12.478,12.478,0,0,0,6.485,2.242c-3.864-3.172-6.4-8.586-6.4-14.711A20.716,20.716,0,0,1,4.886,6.607c7.062,10.719,17.678,17.719,29.581,18.484a24.385,24.385,0,0,1-.355-4.047c0-9.734,6.4-17.664,14.347-17.664A13.229,13.229,0,0,1,58.94,8.959a25.286,25.286,0,0,0,9.105-4.266,17.438,17.438,0,0,1-6.307,9.734A24.646,24.646,0,0,0,70,11.693a35.649,35.649,0,0,1-7.2,9.133Z"
                transform="translate(0 -3.381)"
                fill="#fdfdfd"
              />
            </svg>
          </a>
          <a :href="webInfo.instagram" target="_black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 70 70"
            >
              <path
                id="Icon_awesome-instagram"
                data-name="Icon awesome-instagram"
                d="M35,19.291A17.947,17.947,0,1,0,52.946,37.238,17.917,17.917,0,0,0,35,19.291Zm0,29.615A11.668,11.668,0,1,1,46.668,37.238,11.688,11.688,0,0,1,35,48.906ZM57.865,18.556A4.185,4.185,0,1,1,53.68,14.37,4.176,4.176,0,0,1,57.865,18.556Zm11.884,4.249C69.483,17.2,68.2,12.23,64.1,8.138,60,4.046,55.038,2.765,49.432,2.484c-5.778-.328-23.1-.328-28.875,0C14.967,2.749,10,4.03,5.894,8.122S.522,17.182.241,22.789c-.328,5.779-.328,23.1,0,28.881.265,5.608,1.546,10.575,5.653,14.667s9.057,5.373,14.664,5.654c5.778.328,23.1.328,28.875,0C55.038,71.726,60,70.445,64.1,66.337c4.091-4.092,5.372-9.059,5.653-14.667.328-5.779.328-23.086,0-28.865ZM62.284,57.871a11.812,11.812,0,0,1-6.653,6.654C51.025,66.353,40.093,65.931,35,65.931s-16.038.406-20.629-1.406a11.812,11.812,0,0,1-6.653-6.654C5.894,53.264,6.315,42.33,6.315,37.238S5.909,21.2,7.721,16.6A11.812,11.812,0,0,1,14.373,9.95C18.98,8.122,29.912,8.544,35,8.544S51.04,8.138,55.632,9.95A11.812,11.812,0,0,1,62.284,16.6c1.827,4.608,1.405,15.542,1.405,20.634S64.111,53.279,62.284,57.871Z"
                transform="translate(0.005 -2.238)"
                fill="#fdfdfd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h1 class="font-bold text-3xl pb-5">Our Address</h1>
        <p>
          {{ contactInfo.address }}
        </p>
        <p>Email : {{ contactInfo.email }}</p>
        <p>phone : {{ contactInfo.phone }}</p>
      </div>
      <div class="font-semibold block space-y-3">
        <h3 class="font-bold text-3xl pb-5">Quick Links</h3>
        <g-link class="block font-semibold underline" to="/about">About</g-link>
        <g-link class="block font-semibold underline" to="/services"
          >Services</g-link
        >
        <g-link class="block font-semibold underline" to="/contact"
          >Contact</g-link
        >
        <g-link class="block font-semibold underline" to="/gallery"
          >Gallery</g-link
        >
      </div>
    </div>
    <hr class="divide-y divide-gray-400 mt-10" />
    <p class="text-center p-2">© 2021 {{ webInfo.name }}. All Right Reserved</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      webInfo: null,
      contactInfo: null,
    }
  },
  created: function() {
    this.webInfo = this.$static.allPosts.edges[0].node?.webInfo
    this.contactInfo = this.$static.allPosts.edges[0].node?.contactInfo
  },
}
</script>
<static-query>
query{
 allPosts{
  edges{
    node{
     webInfo{
      name,
      fb,
      youtube,
      instagram,
      twitter
    }
    contactInfo{
      phone,
      whatsapp,
      email,
      address
    }
  }
}
}
}
</static-query>
<style></style>

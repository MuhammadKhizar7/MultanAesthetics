<template>
  <nav
    class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
  >
    <div class="mb-2 sm:mb-0 inner">
      <g-link
        class=" text-red-500 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans"
        to="/"
      >
        <g-image
          class="pt-2 inline-block"
          width="50"
          height="50"
          src="~/assets/images/logo.png"
          alt="multanesthetics logo"
        />
        {{ $static.metadata.siteName }}</g-link
      >
    </div>

    <div class="sm:mb-0 self-center space-x-4 md:space-x-20">
      <!-- <div class="h-10" style="display: table-cell, vertical-align: middle;"> -->
      <g-link
        exact
        active-class="text-red-500"
        class="text-gray-500 text-base xl:text-xl no-underline hover:no-underline font-medium font-sans"
        to="/"
        >Home</g-link
      >
      <g-link
        exact
        active-class="text-red-500"
        class="text-gray-500 text-base xl:text-xl no-underline hover:no-underline font-medium font-sans"
        to="/services"
        >Services</g-link
      >
      <g-link
        exact
        active-class="text-red-500"
        class="text-gray-500 text-base xl:text-xl no-underline hover:no-underline font-medium font-sans"
        to="/gallery"
        >Gallery</g-link
      >
      <g-link
        exact
        active-class="text-red-500"
        class="text-gray-500 text-base xl:text-xl no-underline hover:no-underline font-medium font-sans"
        to="/about/"
        >About</g-link
      >
      <g-link
        exact
        active-class="text-red-600"
        class="text-gray-500 text-base xl:text-xl no-underline hover:no-underline font-medium font-sans"
        to="/contact/"
        >Contact</g-link
      >
      <!-- </div> -->
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

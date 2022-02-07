<template>
  <div class="mt-4">
    <a
      v-if="isWhatsapp"
      :href="whatsAppSend"
      target="_blank"
      class="bg-secondary rounded shadow hover:shadow-lg py-4 px-6 border-transparent"
    >
      <slot>Appointment Now</slot>
    </a>
    <g-link
      class="bg-secondary rounded shadow hover:shadow-lg py-4 px-6 border-transparent"
      :to="url"
      v-else
    >
      <slot>Appointment Now</slot>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    isWhatsapp: Boolean,
    PhoneNumber: {
      type: String,
    },
  },
  data: () => {
    return {
      appointmentText:
        'HI%2C%20I%20want%20to%20schedule%20an%20appointment%20with%20DR.%20Kabir.%20Please%20let%20me%20know%20about%20timing%20and%20my%20appointment%20time',
      whatsAppUrl: 'https://api.whatsapp.com/send?',
    }
  },
  computed: {
    whatsAppSend: function() {
      return `${this.whatsAppUrl}phone=${this.PhoneNumber}&text=${
        this.appointmentText
      }`
    },
  },
}
</script>

<style></style>

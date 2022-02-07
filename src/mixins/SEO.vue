<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    twitter {
      site
      creator
    }
  }
  allPosts {
    edges {
      node {
        doctorInfo {
          img
        }
        contactInfo {
          phone
          whatsapp
          email
          address
          postalCode
        }
        webInfo {
          fb
          youtube
          instagram
          twitter
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  data: function() {
    return {
      name: '',
    }
  },
  created: function() {
    this.name = this.$route.name
      ? this.$route.name
      : this.$route.path.replace(/\//g, '').replace(/[0-9]/g, '')
  },
  metaInfo() {
    const webInfo = this.$static.allPosts?.edges[0].node?.webInfo
    const contactInfo = this.$static.allPosts?.edges[0].node?.contactInfo
    const siteUrl = this.$static.metadata.siteUrl
    const postPath = this.$static.metadata.siteUrl + this.$route.fullPath
    const image = this.$static.allPosts.edges[0].node?.doctorInfo.img
    const imagePath = (image && `${siteUrl}/${image}`) || ''
    const title = this.$page.posts?.edges[0].node?.hero?.[this.name].title
      ? this.$page.posts?.edges[0].node?.hero?.[this.name].title
      : this.$page.allPosts?.edges[0].node?.hero?.[this.name].title
    const description = this.$page.posts?.edges[0].node?.hero?.[this.name]
      .description
      ? this.$page.posts?.edges[0].node?.hero?.[this.name].description
      : this.$page.allPosts?.edges[0].node?.hero?.[this.name].description
    return {
      title: title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: description,
        },
        { key: 'og:url', property: 'og:url', content: `${postPath}` },
        {
          key: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: imagePath,
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: 675,
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: 1200,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: image ? 'summary_large_image' : 'summary',
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: imagePath,
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: title,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Dermatology',
            name: this.$static.metadata.siteName,
            image: imagePath,
            description: description,
            '@id': siteUrl,
            url: siteUrl,
            telephone: contactInfo.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: contactInfo.address,
              addressLocality: contactInfo.address,
              postalCode: contactInfo.postalCode,
              addressCountry: 'Pakistan',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 30.2264512,
              longitude: 71.4739066,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ],
              opens: '3pm',
              closes: '1am',
            },
            sameAs: [
              webInfo.fb,
              webInfo.youtube,
              webInfo.twitter,
              webInfo.instagram,
            ],
          },
        },
      ],
    }
  },
}
</script>

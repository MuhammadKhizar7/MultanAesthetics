<static-query>
query{
metadata{
  siteName,
  siteDescription,
  siteUrl,
  twitter{
    site,
    creator
  }
}
 allPosts{
    edges{
      node{
        doctorInfo{
          img
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
    console.log(this.name)
  },
  metaInfo() {
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
            '@type': 'BlogPosting',
            description: description,
            datePublished: new Date(),
            author: {
              name: this.$static.metadata.author,
            },
            headline: title,
            image: imagePath,
          },
        },
      ],
    }
  },
}
</script>

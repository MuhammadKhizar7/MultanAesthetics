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
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl
    const postPath = this.$static.metadata.siteUrl + this.$route.fullPath
    const image = this.$static.allPosts.edges[0].node?.doctorInfo.img
    const imagePath = (image && `${siteUrl}${image.src}`) || ''

    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.summary,
        },
        { key: 'og:url', property: 'og:url', content: `${siteUrl}${postPath}` },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.post.title,
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.post.summary,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: imagePath,
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: (image && image.size.width) || '',
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: (image && image.size.height) || '',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.post.summary,
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
          content: this.$page.post.title,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: this.$page.post.description,
            datePublished: this.$page.post.date,
            author: {
              name: this.$static.metadata.author,
            },
            headline: this.$page.post.title,
            image: imagePath,
          },
        },
      ],
    }
  },
}
</script>

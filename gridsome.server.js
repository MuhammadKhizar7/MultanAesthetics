// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }
module.exports = function(api) {
  api.loadSource(async (actions) => {
    const Blogs = require('./src/data/data.json')

    const collection = actions.addCollection({
      typeName: 'Posts',
    })

    for (const blog of Blogs) {
      collection.addNode(blog)
      console.log(blog)
    }
  })
  api.createPages(async ({ graphql, createPage }) => {
    // load data from post API
    const { data } = await graphql(`
      {
        allPosts {
          edges {
            node {
              services {
                cards {
                  id
                  title
                  description
                  img
                }
              }
            }
          }
        }
      }
    `)
    //  console.log( data.allPosts.edges[0].node.services.cards);
    // for each content found create a page
    data.allPosts.edges[0].node.services.cards.forEach((card) => {
      createPage({
        path: `/services/${card.id}`,
        component: './src/templates/Service.vue',
        context: {
          id: card.id,
        },
      })
    })
  })
}

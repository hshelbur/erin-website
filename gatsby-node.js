const path = require(`path`)
const {PAGINATION_LIMIT} = require(`./src/constants`)

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions
	const results = await graphql(`
		{
		  categories: allContentfulCategory {
		    edges{
		      node {
		        slug
		      }
		    }
		  }
		  articles: allContentfulArticle {
		    edges {
		      node {
		        slug
		      }
		    }
		  }
		}
	`)
	results.data.categories.edges.forEach(({node: category}) => 
		createPage({
			path: category.slug, 
			component: path.resolve(`src/templates/category.js`), 
			context: {
				slug: category.slug,
			},
		})
	)
	results.data.articles.edges.forEach(({node: article}) => 
		createPage({
			path: article.slug, 
			component: path.resolve(`src/templates/article.js`), 
			context: {
				slug: article.slug,
			},
		})
	)

    const numPages = Math.ceil(results.data.articles.edges.length / PAGINATION_LIMIT)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/articles` : `/articles/page/${i + 1}`,
        component: path.resolve("./src/templates/article-list.js"),
        context: {
          limit: PAGINATION_LIMIT,
          skip: i * PAGINATION_LIMIT,
        },
      })
    })
}

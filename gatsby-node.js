const path = require(`path`)

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
}

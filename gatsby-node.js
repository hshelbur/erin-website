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
}

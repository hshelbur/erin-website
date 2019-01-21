exports.articlePath = (slug) => `/articles/${slug}`

exports.articlePagePath = (page) => page === 1 ? `/articles` : `/articles/page/${page}`

exports.categoryPagePath = (slug, page) => page === 1 ? `/categories/${slug}` : `/categories/${slug}/page/${page}`
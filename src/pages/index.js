import React from 'react'
import ArticleList from '../components/article-list'
import Layout from '../layout'

const ARTICLES = []

const IndexPage = () => (
	<Layout>
		<ArticleList articles={ARTICLES} />
	</Layout>
)

export default IndexPage

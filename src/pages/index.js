import React from 'react'
import ArticleList from '../components/article-list'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'

const ARTICLES = []

const IndexPage = () => (
  <Layout>
	  <div className="col-md-8 col-lg-9">
	    <ArticleList articles={ARTICLES} />
	  </div>
	  <div>
	    <aside className="col-md-4 col-lg-3 side-bar">
	      <Sidebar />
	    </aside>
	  </div>
  </Layout>
)

export default IndexPage

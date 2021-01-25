import React from 'react'
import { Helmet } from 'react-helmet'
import styles from '../pages/blog.module.css'
import book from '../assets/book.jpg'
import Layout from './layout'
import ArticlePreview from './article-preview'

export default ({ headline, posts, location, siteTitle }) => (

	<Layout location={location}>
		<div style={{ background: '#fff' }}>
			<Helmet title={siteTitle} />
			<div className={styles.blog}>
				<img
					className={styles.blogImage}
					src={book}
					alt="Hero"
				/>
				<div className={styles.blogDetails}>
					<h1 className={styles.blogHeadline}>Read More About {headline}</h1>
				</div>
				<div className={styles.blogSubDetails}>
					<h3 className={styles.blogHeadline}>Panui Atu</h3>
				</div>

			</div>
			<div className="wrapper">
				<h2 className="section-headline">{headline}</h2>
				<ul className="article-list">
					{posts.map(({ node }) => {
						return (
							<li key={node.slug}>
								<ArticlePreview article={node} />
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	</Layout>
)
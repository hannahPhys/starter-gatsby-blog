import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from './blog.module.scss'

import book from '../assets/bookbackg.png'



class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }} className={styles.blogWrapper}>
          <Helmet title={siteTitle} />
          <div className={styles.blogHeader}>
            <img
              className={styles.blogImage}
              src={book}
              alt="Hero"
            />
            <div className={styles.blogDetails}>
              <h1 className={styles.blogHeadline}>Read More</h1>
            </div>
            <div className={styles.blogSubDetails}>
              <h3 className={styles.blogHeadline}>Panui Atu</h3>
            </div>

          </div>
          <div className="wrapper">
            <h2 className={styles.sectionHeadline}>Recent articles</h2>
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
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

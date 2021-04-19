import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/seo'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from './blog.module.scss'
import herostyles from '../components/hero.module.scss'

import book from '../assets/bookbackg.png'


class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <SEO title='Blog' description='Learn more about all things weed, wellness, spirituality, recipes, maori history, rongoa and feminism' />
        <div style={{ background: '#fff' }} className={styles.blogWrapper}>
          <div className={styles.blogHeader}>
            <img
              className={styles.blogImage}
              src={book}
              alt="Hero"
            />
            <div className={herostyles.heroDetails}>
              <h1 className={herostyles.heroHeader}>Read More</h1>
              <p className={herostyles.heroSubheader}> Panui atu </p>
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

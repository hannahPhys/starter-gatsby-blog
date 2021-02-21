import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import book from '../assets/cannabis-banner.jpg'
import Img from 'gatsby-image'
import styles from './blog-post.module.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }} className={styles.blogPost}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={styles.hero}>
            <img
              className={styles.heroImage}
              alt={post.title}
              src={book}
            />
          </div>
          <div className={styles.wrapper}>
            <h1 className="section-headline">{post.title}</h1>

            <div className={styles.blogImageWrapper}>
              <Img
                className={styles.blogImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>

            <p style={{ display: 'block', }} >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>

        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

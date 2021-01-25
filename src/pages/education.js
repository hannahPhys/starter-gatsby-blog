import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import TagBlog from '../components/tagBlog'

class educIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <TagBlog
        headline='Education'
        posts={posts}
        location={this.props.location}
        siteTitle={siteTitle} />
    )
  }
}

export default educIndex

export const educQuery = graphql`
  query educIndexQuery {
	allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {tags: {eq: "Education"}}) {
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

import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import TagBlog from '../components/tagBlog'

class sexIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <TagBlog
        headline='Sex'
        posts={posts}
        location={this.props.location}
        siteTitle={siteTitle} />
    )
  }
}

export default sexIndex

export const sexQuery = graphql`
  query sexIndexQuery {
	allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {tags: {eq: "Self Love"}}) {
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

import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import TagBlog from '../components/tagBlog'

class WeedIndex extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const posts = get(this, 'props.data.allContentfulBlogPost.edges')

		return (
			<TagBlog
				headline='Weed'
				posts={posts}
				location={this.props.location}
				siteTitle={siteTitle} />
		)
	}
}

export default WeedIndex

export const weedQuery = graphql`
  query WeedIndexQuery {
	allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {tags: {eq: "General"}}) {
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

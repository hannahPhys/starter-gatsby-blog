import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import styles from './index.module.scss'

import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import weedImage from '../assets/weedImage.png'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className={styles.weedImageWrapper}>
            <img
              className={styles.weedImage}
              src={weedImage}
              alt="Hero"
            ></img></div>
          <div className={styles.textWrapper}>
            <div>
              <h2> Kia ora e hoa mā </h2>
              It’s no coincidence that the part of the marijuana plant we smoke is the female part.
            <br /> <br />
            Think about it: plant medicine and herbal healing were long considered the tools of our tupuna wahine, and female spirituality and political activism go hand-in-hand more often than not.
            <br /> <br />
            One of the biggest problems we face today is we’re lonely; we don’t have that connection to home, and to each other. This brand is about acknowledging and re-remembering the tapu connection between Whanau, Manaakitanga, Wairua, Tinana, and Whenua.
            <br /> <br />
            We need to reconnect ourselves as wahine toa to Aotearoa, to listen to our bodies and to the land, to embrace sustainability as a service to our native land after so much harm has been done to her body, to educate ourselves about cannabis and how we can puff puff pass it in a healthy, beneficial way that is in tune with our waiwhero and growing this practice and marijuana within our iwi and communities
            </div>
          </div>

          <div className="wrapper">
            <h3 className="section-headline">New Posts</h3>
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(limit: 4, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(  resizingBehavior: SCALE) {
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

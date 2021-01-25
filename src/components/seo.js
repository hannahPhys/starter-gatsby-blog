import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{
				lang: `en`,
			}}
			title={title}
			defaultTitle={site.siteMetadata.title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
		>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* General tags */}
			<meta name="description" content={metaDescription} />

			{/* OpenGraph tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />

		</Helmet>
	)
}

export default SEO

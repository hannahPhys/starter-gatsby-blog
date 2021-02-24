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
			titleTemplate={`%s | Weed Wahine`}
		>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* General tags */}
			<meta name="description" content={metaDescription} />

			{/* OpenGraph tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<script async src='https://www.googletagmanager.com/gtag/js?id=G-M2D5JZ09KT'></script>
			<script>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M2D5JZ09KT');
        `}
			</script>
		</Helmet>
	)
}

export default SEO

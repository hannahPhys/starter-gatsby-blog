import React from 'react'

import Layout from '../components/layout'
import styles from './thanks.module.scss'


class ThanksIndex extends React.Component {
	render() {
		return (
			<Layout location={this.props.location}>
				<h1 className={styles.header}>Nga mihi nui ki a koe</h1>
			</Layout>
		)
	}
}

export default ThanksIndex


import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.scss'

export default () => (
	<div className={styles.footer}>
		<div className={styles.column}>
			<h4>Weed Wāhine</h4>
			<p> A chill whānau for weed, wellness and wāhine toa</p>
		</div>
		<div className={styles.nav}>
			<ul>
				<li className={styles.navigationItem}>
					<Link className={styles.navigationLink} to="/">Home</Link>
				</li>
				<li className={styles.navigationItem}>
					<Link className={styles.navigationLink} to="/blog/">Learn</Link>
				</li>
				<li className={styles.navigationItem}>
					<Link className={styles.navigationLink} to="/shop/">Shop</Link>
				</li>
			</ul>
		</div>
	</div>
)
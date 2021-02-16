import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.scss'

export default () => (
  < nav role="navigation" className={styles.navigation} >
    <ul >
      <li className={styles.navigationItem}>
        <Link className={styles.navigationLink} to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link className={styles.navigationLink} to="/blog/">Learn</Link>
        <ul>
          <li> <Link className={styles.navigationLink} to="/weed/">Weed</Link> </li>
          <li> <Link className={styles.navigationLink} to="/sex/">Sex</Link> </li>
          <li> <Link className={styles.navigationLink} to="/education/">Education</Link> </li>
        </ul>
      </li>
    </ul>
  </nav >
)
import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  < nav role="navigation" className={styles.navigation} >
    <ul >
      <li className={styles.navigationItem}>
        <Link className={styles.navigationLink} to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link className={styles.navigationLink} to="/">Learn</Link>

        <ul>
          <li> <Link className={styles.navigationLink} to="/blog/">Weed</Link> </li>
          <li> <Link className={styles.navigationLink} to="/blog/">Sex</Link> </li>
          <li> <Link className={styles.navigationLink} to="/blog/">Education</Link> </li>

        </ul>
      </li>
    </ul>
  </nav >

)



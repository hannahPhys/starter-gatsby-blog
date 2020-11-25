import React from 'react'
import sex from './sex.jpg'
import styles from './hero.module.css'

export default () => (
  <div className={styles.hero}>
    <img
      src={sex}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>Wahine Weed</h3>
    </div>
  </div>
)

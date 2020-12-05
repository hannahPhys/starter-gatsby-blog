import React from 'react'
import sex from '../assets/sex.jpg'
import styles from './hero.module.css'

export default () => (
  <div className={styles.hero}>
    <div className={styles.heroWrapper}>
      <img
        className={styles.heroImage}
        src={sex}
        alt="Hero"
      ></img>
    </div>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>Weed Wāhine</h3>
    </div>
  </div>
)

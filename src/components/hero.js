import React from 'react'
import sex from '../assets/sex.jpg'
import styles from './hero.module.css'

export default () => (
  <div className={styles.hero}>
    <img
      src={sex}
      alt="Hero"
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>Weed Wāhine</h3>
    </div>
  </div>
)

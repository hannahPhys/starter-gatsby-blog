import React from 'react'
import bg from '../assets/bg.png'
import styles from './hero.module.scss'

export default () => (
  <div className={styles.hero}>
    <div className={styles.heroWrapper}>
      <img
        className={styles.heroImage}
        src={bg}
        alt="Hero"
      ></img>
      <span className={styles.greenCross1}></span>
    </div>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeader}>Weed Wāhine</h3>
      <p className={styles.heroSubheader}> Cannabis education from Aotearoa </p>
    </div>
  </div>
)

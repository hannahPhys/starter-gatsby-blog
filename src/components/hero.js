import React from 'react'
import styles from './hero.module.scss'
import Img from 'gatsby-image'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroWrapper}>
      <Img
        className={styles.heroImage}
        fluid={data.heroImage.fluid}
      />
      <span className={styles.greenCross1}></span>
    </div>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeader}>Weed Wāhine</h3>
      <p className={styles.heroSubheader}> Cannabis education from Aotearoa </p>
    </div>
  </div>
)

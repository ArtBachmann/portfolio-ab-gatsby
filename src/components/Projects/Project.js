import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const Project = ({ project }) => {
  const { name, slug, type, created, description, images } = project
  console.log(description)
  let mainImage = images[0].fluid
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt='single project' />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          sivullee..
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {type}
          </h4>
          <div className={styles.details}>
            <h5>{created}</h5>
          </div>
        </div>
      </div>

    </article>
  )
}

export default Project

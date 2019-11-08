import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const getImage = graphql`
  query {
    file(relativePath: { eq: "Maicel ja Shaunee2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`



const Project = ({ project }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, slug, type, technology, category, created, images } = project

  let mainImage = images ? images[0].fluid : img
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt='single project' />
        <AniLink fade className={styles.link} to={`/projects/${slug}`}>
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
            <h4>{technology}</h4>
            <h4>{category}</h4>
          </div>
        </div>
      </div>

    </article>
  )
}

export default Project

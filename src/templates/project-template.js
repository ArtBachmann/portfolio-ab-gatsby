import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledProjectHero from '../components/StyledProjectHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Template = ({ data }) => {

  const {
    name,
    category,
    technology,
    type,
    description: { description },
    created,
    images
  } = data.project

  const [mainImage, ...projectImages] = images

  return (

    <Layout>
      <a href="https://artbachmann.fi" target="_blank" rel="noopener norefferer">
        <StyledProjectHero img={mainImage.fluid} />
      </a>

      <div className={styles.center}>
        <a href="https://artbachmann.fi" target="_blank" rel="noopener norefferer">
          To Site
      </a>
      </div>


      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {projectImages.map((item, index) => {
              return <Img
                key={index}
                fluid={item.fluid}
                alt='single project'
                className={styles.image}
              />
            })}
          </div>
          <h3>{name}</h3>
          <div className={styles.info}>
            <p>
              <FaMap className={styles.icon} />
              Realisoitu {technology} teknologialla.
            </p>
            <p>
              <FaMap className={styles.icon} />
              Kaytetty {category} tyokaluja.
            </p>
            <h4>Valmistunut : {created}</h4>
            <h4>{type}</h4>
            <p className={styles.desc}>
              <p>Lyhyt kuvaus sivun tekemisista.</p>
              {description}
            </p>
            <AniLink fade to='/skills' className='btn-primary'>
              Takaisiin esimerkkien pariin
          </AniLink>
          </div>
        </div>

      </section>
    </Layout >
  )
}

// Normal Page Query >>>
export const query = graphql`
  query($slug:String!){
  project: contentfulProjects(slug:{
    eq:$slug
  }
  ){
    name
    slug
    category
    technology   
    description{
      description
    }
    featured
    created(formatString:"dddd MMMM Do YYYY")
    images{
      fluid{
        ...GatsbyContentfulFluid
      }
    }
  }  
}
`



export default Template

// <img src={Github} alt="github logo" />
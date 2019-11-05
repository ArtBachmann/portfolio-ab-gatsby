import React from 'react'
import Project from '../Projects/Project'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getTours = graphql`
 query {
  featuredProjects: allContentfulProjects(
    filter:{featured:{eq:true}}
  ){
    edges{
      node{
        name  
        slug
        featured
        type       
        images{
          fluid{
            ...GatsbyContentfulFluid_tracedSVG
          }        
        }
      }
    }
  }
}
`

const FeaturedProjects = () => {
  const response = useStaticQuery(getTours)
  const projects = response.featuredProjects.edges
  return (
    <section className={styles.tours}>
      <Title title='Parhaat palat...' />
      <div className={styles.center}>
        {projects.map(({ node }) => {
          return <Project
            key={node.name}
            project={node}
          />
        })}
      </div>

      <AniLink fade to='/skills/' className='btn-primary'>
        Lisää projektejä
      </AniLink>
    </section>
  )
}

export default FeaturedProjects

import React from 'react'
import ProjectList from './ProjectList'
import { useStaticQuery, graphql } from 'gatsby'

const getProjects = graphql`
  query {
  projects: allContentfulProjects { 
    edges{
      node{
        contentful_id
        name  
        slug        
        featured
        type
        category
        technology
        description{
          description
        }
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
const Projects = () => {
  const { projects } = useStaticQuery(getProjects)
  return (

    <ProjectList projects={projects} />
  )
}

export default Projects

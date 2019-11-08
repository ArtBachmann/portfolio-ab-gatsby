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
        category
        technology
        type
        description{
          description
        }
        images{
          fluid{
            ...GatsbyContentfulFluid
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

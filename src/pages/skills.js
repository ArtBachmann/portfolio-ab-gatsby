import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Projects from '../components/Projects/Projects'


const skills = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.tools.childImageSharp.fluid} />
      <h2>Skills</h2>
      <Projects />
    </Layout>
  )
}

// Page !! query (chnge image name...)
export const query = graphql`
      query {
  tools:file(relativePath:{eq:"HeroBackground1.png"}){
    childImageSharp{
      fluid(quality:90,maxWidth:1400){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default skills

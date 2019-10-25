import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

const skills = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.tools.childImageSharp.fluid} />
      <h2>Skills</h2>
    </Layout>
  )
}

// Page !! query (chnge image name...)
export const query = graphql`
      query {
  tools:file(relativePath:{eq:"tools.png"}){
    childImageSharp{
      fluid(quality:90,maxWidth:1400){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default skills

import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Contact from '../components/Contact/Contact'



const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.office.childImageSharp.fluid} />
      <h2>Contact</h2>
      <Contact />
    </Layout>
  )
}

// Page !! query (chnge image name...)
export const query = graphql`
      query {
  office:file(relativePath:{eq:"office.png"}){
    childImageSharp{
      fluid(quality:90,maxWidth:1400){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default contact

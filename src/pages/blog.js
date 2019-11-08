import React from 'react'
import Layout from '../components/Layout'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'

const blog = ({ data }) => {

  return (
    <Layout>
      <StyledHero img={data.cloud.childImageSharp.fluid} />
      <BlogList />
    </Layout>


  )
}

// Page !! query (chnge image name...)
export const query = graphql`
      query {
  cloud:file(relativePath:{eq:"HeroBackground1.png"}){
    childImageSharp{
      fluid(quality:90,maxWidth:1400){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default blog

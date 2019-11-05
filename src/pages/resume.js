import React, { Component } from 'react'
import Layout from '../components/Layout'
// import Header from '../examples/RegularHeader'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

export default class resume extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.cabels.childImageSharp.fluid} />
      </Layout>
    )
  }
}


// Page !! query (chnge image name...)
export const query = graphql`
      query {
  cabels:file(relativePath:{eq:"HeroBackground1.png"}){
    childImageSharp{
      fluid(quality:90,maxWidth:1400){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`


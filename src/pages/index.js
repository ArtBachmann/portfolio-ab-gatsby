import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import FeaturedProjects from '../components/Home/FeaturedProjects'

export default ({ data }) => (

  <Layout>
    <StyledHero home='true' img={data.FrontPageHero.childImageSharp.fluid}>
      <Banner title="ART BACHMANN" subtitle="Resume - Portfolio"
      >
      </Banner>
    </StyledHero>
    <About />
    <FeaturedProjects />
  </Layout>
)

// Page !! query (chnge image name...)
export const query = graphql`
      query {
  FrontPageHero:file(relativePath:{eq:"FrontPageHero.png"}){
    childImageSharp{
      fluid(quality:100,maxWidth:2000){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`


// info="Huomisen (huippu)tyontekijan ominaisuudet – sosiaalisesti taitava, kykenee reagoimaan nopeasti muuttuvaan työympäristöön, vaihtamaan työtehtävää tai jopa alaa. On valmis jatkuvaan uudelleen kouluttautumiseen ja haluaa oppia uutta. . ."

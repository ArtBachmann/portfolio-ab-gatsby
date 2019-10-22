import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'

const index = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner title="ART BACHMANN" color="red" subtitle="Resume - Portfolio" info="Huomisen (huippu)tyontekijan ominaisuudet – sosiaalisesti taitava, kykenee reagoimaan nopeasti muuttuvaan työympäristöön, vaihtamaan työtehtävää tai jopa alaa. On valmis jatkuvaan uudelleen kouluttautumiseen ja haluaa oppia uutta. . ."
        >
        </Banner>
      </SimpleHero>
      <About />
    </Layout>
  )
}

export default index

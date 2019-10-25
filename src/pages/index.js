import React from 'react'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'

const index = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner title="ART BACHMANN" subtitle="Resume - Portfolio"        
        >
        </Banner>
      </SimpleHero>
      <About />
    </Layout>
  )
}

export default index


// info="Huomisen (huippu)tyontekijan ominaisuudet – sosiaalisesti taitava, kykenee reagoimaan nopeasti muuttuvaan työympäristöön, vaihtamaan työtehtävää tai jopa alaa. On valmis jatkuvaan uudelleen kouluttautumiseen ja haluaa oppia uutta. . ."

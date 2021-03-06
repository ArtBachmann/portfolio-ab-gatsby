import React from 'react'
import Title from '../Title'
import IntroText from '../IntroText'
import styles from '../../css/about.module.css'
import img from '../../images/artbachmann_medium.jpg'

const About = () => {
  return (
    <section className={styles.about}>
      <IntroText text='Huomisen (huippu)tyontekijan ominaisuudet – sosiaalisesti taitava, kykenee reagoimaan nopeasti muuttuvaan työympäristöön, vaihtamaan työtehtävää tai jopa alaa. On valmis jatkuvaan uudelleen kouluttautumiseen ja haluaa oppia uutta.' />

      <Title title='kuka minä olen...' subtitle='' />
      <div className={styles.aboutCenter}>

        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="Art Bachmann" />
          </div>
        </article>
        <article className={styles.aboutInfo}>

          <p> aikana aloitin Metropolia avoimessa ammattikorkeakoulussa tietotekniikan koulutusohjelman opinnot mistä sain laajan perusosaamisen. Sen lopettamisen jälkeen jatkoin itseoppimista modernien web-teknologioiden parissa. Hetkellä etsin uutta uramahdollisuutta hankitun osaamisen perustella aloittajana web-kehittäjänä front-end puolella.  Tavoitteeni on pääse rakentamaan sekä jatkokehittämään innovatiivisia projekteja sekä kehittymä itse niin että pysyn ajan tasalla nopeasti muuttuvalla alalla.</p>

          <button type='button' className='btn-primary'>lue lisää</button>
        </article>
      </div>
    </section>
  )
}

export default About

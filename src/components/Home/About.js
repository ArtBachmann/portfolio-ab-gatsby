import React from 'react'
import Title from '../Title'
import WiseText from '../WiseText'
import styles from '../../css/about.module.css'
import img from '../../images/artbachmann_medium.jpg'

const About = () => {
  return (
    <section className={styles.about}>
      <WiseText text='Kyky ja palava halu jatkuvaan oppimiseen on tärkeämpää kuin se, mitä osaamme tänään.' />

      <Title title='kuka minä olen...' subtitle='' />
      <div className={styles.aboutCenter}>

        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="Art Bachmann" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          {/* <h4>Lorem ipsum dolor sit amet.</h4> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vitae.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur repudiandae ducimus! Tempora, molestias. Ipsum cumque dicta illo tenetur in rerum illum doloremque ut quis quaerat hic delectus eligendi aut incidunt, expedita esse.</p>
          <button type='button' className='btn-primary'>lue lisää</button>
        </article>
      </div>
    </section>
  )
}

export default About

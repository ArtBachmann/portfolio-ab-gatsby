import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {

  return (
    <section className={styles.contact}>
      <Title title='contact' subtitle='me' />
      <div className={styles.center}>
        <form action="https://formspree.io/bachmann.art@gmail.com" method="POST"> className={styles.form}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder='jhon smith'
            />
          </div>
          <label htmlFor="email">email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder='email@email.com'
            />
          </div>
          <label htmlFor="message">message</label>
          <div>
            <textarea
              name='message'
              id='message'
              className={styles.formControl}
              placeholder='hei hei'
            />
          </div>
          <div>
            <input type="submit"
              value='klikkaa'
              className={styles.formControl}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              href={item.url}
              key={index}
              target='_blank'
              rel='noopener noreferrer'>
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        &copy; Art Bachmann {new Date().getFullYear()}
      </div>
      <div className={styles.copyright}>
        <p>
          Background vector created by starline -
         www.freepik.com
       </p>
      </div>
      {/* <a
    href="https://www.freepik.com/free-photos-vectors/background">Background vector created by starline -
    www.freepik.com</a> */}
    </footer>
  )
}

export default Footer

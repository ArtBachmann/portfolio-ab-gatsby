import React, { useState } from 'react'
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import { FaBars } from 'react-icons/fa'
import links from '../constants/links'

const Navbar = () => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          {/*  <img src={logo} alt="logo" /> */}
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaBars className={styles.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>{item.text}</AniLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}


export default Navbar

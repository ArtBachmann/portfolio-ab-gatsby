import React from 'react'
import styles from '../css/banner.module.css'
import ColoredLine from '../components/DrawLine'

const Banner = ({ title, info, subtitle, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      {ColoredLine}
      <h3>{subtitle}</h3>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner

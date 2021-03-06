import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage
      className={className}
      fluid={img}
      home={home}  >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)` 
min-height: ${props => props.home ? 'calc(44vh - 62px)' : '26vh'};
background:${props => props.home ? 'linear-gradient(rgba(134, 228, 231, 0.7), rgba(0, 0, 0, 0.2))' : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;  
  /* margin-top: 0px; */
`

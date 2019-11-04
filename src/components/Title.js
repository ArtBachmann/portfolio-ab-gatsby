import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle, text }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className='title'>{title}</span>
        <span>{subtitle}</span>
        <span className='text'>{text}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-transform: uppercase; 
  margin-bottom: 2.2rem;
  h4 {   
    text-align: center;
    letter-spacing: 4px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--primaryColor);
    font-size: 1.4rem;
  }
  .text {
    color: var(--primaryColor);
    text-align: center;
  }

  span {
    display: block;
  }

  

  @media screen and (min-width: 576px) {
    .title {
    color: var(--primaryColor);
    font-size: 1.8rem;
  }

  }

  @media (min-width: 776px) {
    span {
      display: inline-block;
      margin: 0 0.4rem;
    }
  }

  @media screen and (min-width: 992px) {

  }

  @media screen and (min-width: 1200px) {


  }
`

export default Title

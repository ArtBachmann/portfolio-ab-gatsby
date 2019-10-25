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
  font-size: 2rem;
  margin-bottom: 3rem;
  h4 {
    text-align: center;
    letter-spacing: 6px;
    color: var(--primaryColor)
  }
  .title {
    color: var(--primaryColor)
  }
  .text {
    color: var(--primaryColor);
    text-align: center;
  }

  span {
    display: block;
  }

  @media (min-width: 776px) {
    span {
      display: inline-block;
      margin: 0 0.4rem;
    }
  }
`

export default Title

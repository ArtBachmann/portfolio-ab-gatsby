import React from 'react'
import styled from 'styled-components'


const WiseText = ({ text }) => {
  return (
    <TextWrapper>
      <h4>
        <span className='text'>{text}</span>
      </h4>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`  

   
  h4 {
    text-align: center;
    width: 80vw;
    letter-spacing: 3px;
    color: var(--textDarkBlue)
  }
  .text {
    color: var(--textDarkBlue);
    font-size: 1rem;
    margin-bottom: 2rem;     
    text-align: center;
  }
  span {
    display:flex;
  }

  @media (min-width: 576px) {
     .text {
    color: var(--textDarkBlue);
    font-size: 1.2rem;
    margin-bottom: 2rem;     
    text-align: center;
  }
  }

  @media (min-width: 776px) {

    .text {
    color: var(--textDarkBlue);
    font-size: 1.2rem;
    margin-bottom: 2rem;     
    text-align: center;
  }   
  }

  @media (min-width: 992px) {
    .text {
    color: var(--textDarkBlue);
    font-size: 1.2rem;
    margin-bottom: 2rem;     
    text-align: center;
  }

  }

  @media (min-width: 1200px) {

  }
`

export default WiseText
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

  font-size: 1rem;
  margin-bottom: 3rem;  
  h4 {
    text-align: center;
    width: 80vw;
    letter-spacing: 3px;
    color: var(--textDarkBlue)
  }
  .text {
    color: var(--textDarkBlue);
    
    text-align: center;
  }
  span {
    display:flex;
  }

  @media (min-width: 776px) {
    span {
      display: inline-block;
      margin: 0 0.4rem;
    }
  }
`

export default WiseText
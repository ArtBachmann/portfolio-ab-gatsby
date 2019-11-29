import React from 'react'
import styled from 'styled-components'


const WiseText = ({ text }) => {
  return (
    <TextWrapper>
      <h5>
        <span className='text'>{text}</span>
      </h5>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`  

  h5 {
    text-align: center;
  }
  span { 
    display: inline-block;    
  }
 
  .text {
    width: 80vw;
    letter-spacing: .4px;
    color: var(--textDarkBlue);
    font-size: 0.85rem;
    margin: 2.5rem 0;  
       
    
  } 

  @media (min-width: 576px) {
     .text {
    color: var(--textDarkBlue);
    font-size: 1rem;       
  
  }
  }

  @media (min-width: 776px) {
    .text {
    color: var(--textDarkBlue);
    font-size: 1rem;    
  
  }   
  }

  @media (min-width: 992px) {
    .text {
    color: var(--textDarkBlue);
    font-size: 1.2rem; 
    width: 70%;  
    
  }
  }

  @media (min-width: 1200px) {
    .text {
    color: var(--textDarkBlue);
    font-size: 1.2rem;   
  } 
  }
`

export default WiseText
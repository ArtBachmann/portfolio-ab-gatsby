import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import img from '../images/new-portfolio-pics/28.jpg'
import Img from 'gatsby-image'

const getImages = graphql`
  query Images {
    fixed:file(relativePath:{eq:"130.jpg"}){
    childImageSharp{
      fixed(width:600,height:400)
       {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid:file(relativePath:{eq:"28.jpg"}){
    childImageSharp{
      fluid(maxWidth: 300){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>Fixed Image/Blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image/SVG</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  .fluid {
    width: 200px;
  }  
`

export default Images

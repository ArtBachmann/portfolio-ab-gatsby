import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const getSiteData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author {
          name
          age
          address
        }
        data
        description
      }
    }
  }
`

const Header = () => {
  const { site: { siteMetadata } } = useStaticQuery(getSiteData)

  return (
    <div>
      <h1>title:{siteMetadata.title}</h1>
      <h1>author:{siteMetadata.author.name}</h1>
      <h1>author's age:{siteMetadata.author.age}</h1>
    </div>
  )
}

export default Header

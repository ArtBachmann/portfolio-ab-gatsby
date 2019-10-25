import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
query StaticFirstQuery {
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
  }`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)
        return <h3>Title: {data.site.siteMetadata.title}</h3>
      }} />
  )
}

export default RegularHeader

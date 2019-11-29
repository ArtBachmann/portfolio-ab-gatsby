import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


// Query name must be unique.
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

// Static Query as a component >>> itself in return, not a regular return
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

import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
  query {
  post:allContentfulPosts(
    sort:{fields:published,
      order:DESC}){   
    edges {
      node {
        id:contentful_id
        title
        slug        
        published(formatString:"MMMM Do, YYYY")
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }   
  }
}
`

const BlogList = () => {
  const { post } = useStaticQuery(getPosts)
  console.log(post)
  return (
    <div>
      Hello from BlogList
      <BlogCard />
    </div>
  )
}

export default BlogList

import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const blog = () => {

  return (
    <Layout>
      Blog Page <Link to='/'>Home</Link>
    </Layout>
  )
}

export default blog

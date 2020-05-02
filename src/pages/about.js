import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Heading } from 'evergreen-ui'

export default function about() {
  return (
    <Layout>
      <SEO title="about" />
      <Heading size={700}>About</Heading>
    </Layout>
  )
}

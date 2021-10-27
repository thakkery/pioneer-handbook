import React from 'react'
import { Link } from 'gatsby'
import Hero from '../texts/hero'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
// @ts-ignore
import Bottom from '../texts/bottom'

type HomepageProps = {
  [key: string]: any
}

const Homepage = (props: HomepageProps) => {
  return (
    <Layout>
      <div className="Homepage-container">
        <Hero />
        <Bottom />
      </div>
    </Layout>
  );
}

export default Homepage

import React from 'react'
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import Navbar from './Navbar'

export default function CurricLayout(props:any) {
  return (
    <React.Fragment>
      <SEO
        title="Guild Curriculum"
        description="Learn web and app development using the free resources on programming" 
        pathname="curriculum"
      />
      <main style={{ padding: '1rem 1.5rem 2rem 1rem', transition: `all 0.3s ease-in-out` }}>
        <Navbar />
        {props.children}
      </main>
    </React.Fragment>
  );
}

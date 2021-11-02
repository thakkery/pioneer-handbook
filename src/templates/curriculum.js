import React from 'react'
import { graphql } from 'gatsby'
import CurricLayout from '../components/layout/CurricLayout';

export default function CurricTemplate(props) {
  const post = props.data.post;
  console.log('Post: ', post);

  return (
    <CurricLayout>
      <h1>{post && post.frontmatter.title}</h1>
    </CurricLayout>
  );
}

export const pageQuery = graphql`
  query CurricSlideBySlug($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      body
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

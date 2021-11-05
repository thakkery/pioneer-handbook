import { Heading } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import HeadlessLayout from '../../../components/layout/Headless'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
}

const Page = ({ data: { page } }: PageProps) => (
  <HeadlessLayout>
    <Seo title={page.title} description={page.excerpt} />
    <Heading as="h1" variant="styles.h1">
      {page.title}
    </Heading>
    <article>
      <MDXRenderer>{page.body}</MDXRenderer>
    </article>
  </HeadlessLayout>
)

export default Page
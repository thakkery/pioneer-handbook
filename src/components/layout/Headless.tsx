import * as React from 'react'
import { Global } from '@emotion/react'
import { Box, Container } from 'theme-ui'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import CodeStyles from '@lekoarts/gatsby-theme-minimal-blog/src/styles/code'
import SkipNavLink from '@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav'

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme:any) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <Seo />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      {/* @ts-ignore */}
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
    </Container>
  </React.Fragment>
)

export default Layout

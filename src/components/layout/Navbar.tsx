import React from 'react'
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'
import HeaderTitle from '../../@lekoarts/gatsby-theme-minimal-blog/components/header-title';
import Navigation from '../../@lekoarts/gatsby-theme-minimal-blog/components/navigation';

export default function Navbar() {
  const { navigation } = useMinimalBlogConfig();

  return (
    <nav style={{
      display: 'flex',
      'flexDirection': 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60
    }}>
      <HeaderTitle />
      <Navigation nav={navigation} />
    </nav>
  );
}

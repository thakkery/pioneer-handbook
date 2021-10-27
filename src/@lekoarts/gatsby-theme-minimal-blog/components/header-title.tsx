import React from 'react'
import { Link } from 'gatsby'
/** @ts-ignore */
import logo from '../../../images/nowispow_long_slogan.svg'

export default function HeaderTitle() {
  return (
    <Link to="/" aria-label="Home page">
      <img height={70} width="auto" src={logo} />
    </Link>
  );
}

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
/** @ts-ignore */
import logo from '../../../images/plutus.svg'


const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
`
const LogoTitle = styled.h1`
  font-size: 1.6em;
  color: black;
  padding-left: 1em;
`

export default function HeaderTitle() {
  return (
    <LogoLink to="/" aria-label="Home page">
      <img height={70} width="auto" src={logo} />
      <LogoTitle>Pioneer Handbook</LogoTitle>
    </LogoLink>
  );
}

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navigation = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4rem;
  align-items: center;

  & .Navigation-link:first-child {
    border-radius: 8px 0px 0px 8px;
  }
  & .Navigation-link:last-child {
    border-radius: 0px 8px 8px 0px;
  }
  & .Navigation-link {
    background-color: ivory;
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    height: 4rem;
    padding-top: 0.8rem;
  }
  & .Navigation-link:hover {
    background-color: turquoise;
  }
  & .Navigation-link:active {
    background-color: #008282;
  }
  & .Navigation-link:visited {
    color: #5A2B64;
  }
`

export default function MainBody() {
  return (
    <section style={{ paddingTop: '3rem'}}>
      <Navigation>
        <Link className="Navigation-link" to="/guides">Pioneer Guides</Link>
        <Link className="Navigation-link" to="/recipes">Advanced Recipes</Link>
      </Navigation>
    </section>
  );
}

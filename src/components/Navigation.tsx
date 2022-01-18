import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const navMenu = [{
  title: 'Pioneer Guides',
  route: '/guides'
}, {
  title: 'Advanced Recipes',
  route: '/recipes'
}]

interface TabNavProps {
  active?: number;
}
interface NavLinkProps {
  active: boolean;
}

const Navigation: any = styled.nav`
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
    border-right: none;
  }
  & .Navigation-link {
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    height: 4rem;
    padding-top: 0.8rem;
    border-right: 1px solid brown;
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
const NavLink = styled(Link)`
  background-color: ${
    (props:NavLinkProps) => props.active ? 'turquoise' : 'ivory'
  };
`
const TabNavigation = (props:TabNavProps) => (
  <Navigation>
    {navMenu.map((navItem, idx) => (
        <NavLink key={navItem.title} className="Navigation-link"
          to={navItem.route}
          active={props.active === (idx + 1)}
        >
          {navItem.title}
        </NavLink>
      )
    )}
  </Navigation>
);
export default TabNavigation;

import "../customstyles.css"
import React from 'react'
import { Link } from 'gatsby'

interface NavItem {
  title: string;
  slug: string;
}
interface NavProps {
  nav: NavItem[];
}

export default function Navigation(props:NavProps) {
  return (
    <div className="Nav-container">
      {props.nav.map(({ title, slug }) => (
        <Link
          id="Nav-item"
          key={title}
          to={slug}
        >{title}</Link>
      ))}
    </div>
  );
}

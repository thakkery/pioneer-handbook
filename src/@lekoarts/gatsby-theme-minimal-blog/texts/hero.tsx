import React from 'react'
import { Link } from 'gatsby'

export default function Hero(props) {
  // replace the plain text web development guild with an image of double doors opening to stairs
  // on top of the doors is Web Development Guild
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>The Plutus Pioneer Handbook</h1>
      <p style={{fontSize: '1.1rem'}}>
        A collection of community resources for getting started with Plutus and Cardano blockchain development. <Link to="/about">Learn what this handbook is about and how you can contribute.</Link>
      </p>
    </section>
  );
}

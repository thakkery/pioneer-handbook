import React from 'react'
import { Link } from 'gatsby'

export default function Hero(props) {
  // replace the plain text web development guild with an image of double doors opening to stairs
  // on top of the doors is Web Development Guild
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>The Web Development Guild</h1>
      <br />
      <br />
      <Link to="/curriculum">View Curriculum</Link>
      {/* <Button text="View Curriculum" color="primary" size="xl" /> */}
    </section>
  );
}

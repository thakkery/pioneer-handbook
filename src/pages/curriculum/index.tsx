import React from 'react'
import { Link } from 'gatsby'
import CurricLayout from '../../components/layout/CurricLayout'

export default function Curriculum() {
  return (
    <CurricLayout>
      <section>
        <p>Welcome to the curriculum page. Here are your curriculum options</p>
        <Link to="/curriculum/html">HTML</Link>
      </section>
    </CurricLayout>
  );
}

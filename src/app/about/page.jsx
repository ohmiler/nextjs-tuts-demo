import React from 'react'
import Header from '../component/Header'
import Nav from '../component/Nav'
import Link from 'next/link'

export const metadata = {
  title: "My About Page",
};

function About() {
  return (
    <div>
      <Header />
      <Nav />
      <div className='container mx-auto'>
      <h3 className='font-bold'>About Page</h3>
        <p>This is about page</p>
        <Link href="/about/team" className='inline-block bg-purple-500 text-white py-2 px-4 rounded'>
          Our Team
        </Link>
      </div>
    </div>
  )
}

export default About

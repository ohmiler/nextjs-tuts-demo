import React from 'react'
import Header from '../component/Header'
import Nav from '../component/Nav'

function Contact() {
  return (
    <div>
      <Header />
      <Nav />
      <div className='container mx-auto'>
        <h3 className='font-bold'>Contact Page</h3>
        <p>This is Contact Page</p>
      </div>
    </div>
  )
}

export default Contact

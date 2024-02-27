import React from 'react'
import Header from '@/app/component/Header'
import Nav from '@/app/component/Nav'
import Link from 'next/link'
import Image from 'next/image'
import nextImg from '../../../../public/next.svg'
import vercelImg from '../../../../public/vercel.svg'

function Team() {
  return (
    <div>
        <Header />
        <Nav />
        <div className='container mx-auto'>
            <h3 className='font-bold'>Our Team</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam doloribus sed veritatis at dolores architecto fugiat, earum vitae necessitatibus est.
            </p>
            <div className='flex'>
            <Image src={nextImg} width={300} />
            <Image src={vercelImg} width={300} />
            </div>
            <Link href="/about" className='inline-block bg-gray-500 text-white py-2 px-4 rounded'>Back</Link>
        </div>
    </div>
  )
}

export default Team

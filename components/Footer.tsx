import React from 'react'
import Container from './Container'
import Image from 'next/image'
import payment from "@/images/payment.png"

const Footer = () => {
  return (
    <footer className="bg-lightBg text-sm">
      <Container className='py-5 flex items-center justify-between'>
        <p>Copyright © 2025
          <span> reactBD</span> All rights reserve
        </p>
        <Image src={payment} alt='payment' className='w-64 object-cover' />
      </Container>
    </footer>
  )
}

export default Footer

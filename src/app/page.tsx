import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Why from '@/app/components/Home/Why'
import Benefits from '@/app/components/Home/Benefits'
import About from '@/app/components/Home/About'
import Product from '@/app/components/Home/Product'
import { Metadata } from 'next'
import Order from './components/Home/Order'
export const metadata: Metadata = {
  title: 'Friuit Basket Jimbaran',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Why />
      <Benefits />
      <Product />
      <Order />
      <About />
    </main>
  )
}

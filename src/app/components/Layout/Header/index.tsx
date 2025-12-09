'use client'
import { useEffect, useRef, useState } from 'react'

import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'

import { headerItem } from '@/app/types/menu'

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<headerItem[]>([])

  const [navbarOpen, setNavbarOpen] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.HeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header className="z-40 w-full transition-all fixed top-0 duration-300 shadow-lg bg-green-primary py-3">
      <div>
        <div className="container flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <h4 className="lg:hidden text-text-primary font-medium">
            Fruit Basket & Juice Jimbaran
          </h4>
          <nav className="hidden lg:flex grow items-center gap-8 justify-start md:ml-20">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg text-text-primary"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-text-primary"></span>
              <span className="block w-6 h-0.5 bg-text-primary mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-text-primary mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-green-primary shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-text-primary">
              <Logo />
            </h2>

            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 text-text-primary"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

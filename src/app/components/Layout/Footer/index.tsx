'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { footerlLinksData } from '@/app/types/footerlinks'
import { socialLinksData } from '@/app/types/sociallinks'

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState<footerlLinksData[]>([])
  const [socialLinks, setSocialLinks] = useState<socialLinksData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinks)
        setSocialLinks(data.SocialLinks)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="bg-green-primary text-text-primary">
      <div className="container p-4">
        <div className="my-6 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-y-5">
          {/* COLUMN-1 */}
          <div className="sm:col-span-6 lg:col-span-3">
            <div className="shrink-0 items-center border-right hidden lg:flex">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className="sm:col-span-6 lg:col-span-6 flex items-center justify-center">
            <div className="flex gap-4 justify-center">
              {footerLinks.map((items, i) => (
                <div key={i}>
                  <Link
                    href={`${items.href}`}
                    className="text-lg font-normal text-text-primary flex items-center justify-center hover:text-white hover:underline"
                  >
                    {items.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:col-span-6 lg:col-span-3 lg:flex lg:items-center lg:justify-end">
            <div className="flex gap-4 justify-center lg:justify-end ">
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className="bg-white/20 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center text-text-primary hover:text-black hover:bg-white">
                    <Icon icon={items.imgSrc} className="text-2xl" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-4 flex sm:flex-row gap-4 items-center justify-center border-t border-t-white/30">
          <h4 className="text-lg text-center md:text-start font-normal text-text-primary">
            @2025.All rights reserved
          </h4>
          <div className="flex gap-5  justify-center items-center md:justify-start"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer

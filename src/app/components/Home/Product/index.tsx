'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { productData } from '@/app/types/productdata'
import FeatureSkeleton from '@/app/Skeleton/Features'

const Product = () => {
  const [products, setProducts] = useState<productData[]>([])
  const [loading, setLoading] = useState(true)
  const smoothies = products.smoothies
  const mixJuice = products.mixJuice
  const fruitJuice = products.fruitJuice

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setProducts(data.ProductData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="product" className=" relative bg-header">
      <div className="container">
        <h2 className="text-midnight_text text-center mb-5 max-w-xl mx-auto sm:leading-16">
          We Sell Freshness.
        </h2>
        <p className="text-black/60 text-lg text-center md:max-w-[60%] mx-auto">
          This is our product list made from fresh, locally sourced fruits to
          give.
        </p>
        <div className="">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {Array.from({ length: 3 }).map((_, i) => (
                <FeatureSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-black/70">
              <div className="bg-white rounded-2xl p-5 shadow-lg flex flex-col gap-5 px-8 py-8 ">
                <h3 className="text-2xl font-semibold text-black mt-5">
                  {smoothies.heading}
                </h3>
                <div className="flex flex-col gap-4 ">
                  {smoothies.items.map((item, i) => (
                    <div key={i} className="flex justify-between border-b pb-2">
                      <p className="font-semibold">{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-lg flex flex-col gap-5 px-8 py-8">
                <h3 className="text-2xl font-semibold text-black mt-5">
                  {mixJuice.heading}
                </h3>
                <div className="flex flex-col gap-4 ">
                  {mixJuice.items.map((item, i) => (
                    <div key={i} className="flex justify-between border-b pb-2">
                      <p className="font-semibold">{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-lg flex flex-col gap-5 px-8 py-8">
                <h3 className="text-2xl font-semibold text-black mt-5">
                  {fruitJuice.heading}
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <p className="text-left font-semibold">Size</p>
                    <p className="text-center font-semibold">Sedang</p>
                    <p className="text-right font-semibold">Jumbo</p>
                  </div>

                  {fruitJuice.items.map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-4 border-b pb-2"
                    >
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-center">{item.price[0].price}</p>
                      <p className="text-right">{item.price[1].price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Product

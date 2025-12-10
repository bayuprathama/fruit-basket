'use client'

import { useEffect, useState } from 'react'
import { ProductCategory, ProductType } from '@/app/types/productdata'
import FeatureSkeleton from '@/app/Skeleton/Features'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Product = () => {
  const [products, setProducts] = useState<Record<
    ProductType,
    ProductCategory
  > | null>(null)
  const [loading, setLoading] = useState(true)

  const [showAll, setShowAll] = useState(false)
  const displayedFeatures = showAll
    ? products?.fruitJuice.items
    : products?.fruitJuice.items.slice(0, 5)

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
    <section id="product" className="py-20">
      <div className="container">
        <h2 className="text-black text-center mb-5 max-w-xl mx-auto sm:leading-16 px-6">
          Our Fresh Selection.
        </h2>
        <p className="text-black/60 text-lg text-center md:max-w-[60%] mx-auto px-6">
          This is our product list made from fresh, locally sourced fruits to
          give.
        </p>
        <div className="bg-white">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {Array.from({ length: 3 }).map((_, i) => (
                <FeatureSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl shadow-lg lg:grid-cols-3 gap-8 mt-10 text-black/70">
              <div className="p-5 flex flex-col gap-5 px-8 py-8 ">
                <h3 className="text-2xl font-semibold text-green-primary mb-5">
                  {products?.smoothies.heading}
                </h3>
                <div className="flex flex-col gap-6 ">
                  {products?.smoothies.items.map((item, i) => (
                    <div key={i} className="flex justify-between border-b pb-2">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-lg">{String(item.price)}K</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 flex flex-col gap-5 px-8 py-8">
                <h3 className="text-2xl font-semibold text-green-primary mb-5">
                  {products?.mixJuice.heading}
                </h3>
                <div className="flex flex-col gap-6 ">
                  {products?.mixJuice.items.map((item, i) => (
                    <div key={i} className="flex justify-between border-b pb-2">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-lg">{String(item.price)}K</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 flex flex-col gap-5 px-8 py-8">
                <h3 className="text-2xl font-semibold text-green-primary mb-5">
                  {products?.fruitJuice.heading}
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <p className="text-left font-semibold"></p>
                    <p className="text-center font-semibold">Sedang</p>
                    <p className="text-center font-semibold">Jumbo</p>
                  </div>

                  {displayedFeatures?.map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-4 border-b pb-2"
                    >
                      <p className="font-semibold text-lg">{item.name}</p>
                      {typeof item.price !== 'string' && (
                        <p className="text-center text-lg">
                          {item.price[0].price}K
                        </p>
                      )}
                      {typeof item.price !== 'string' && (
                        <p className="text-center text-lg">
                          {item.price[1].price}K
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex w-full text-center justify-center items-center px- gap-2 py-3 text-green-primary font-semibold cursor-pointer hover:text-orange-primary transition"
                  >
                    {showAll ? (
                      <>
                        Show less
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show more
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
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

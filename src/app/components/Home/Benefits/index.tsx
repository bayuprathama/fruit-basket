import Image from 'next/image'

const Benefits = () => {
  return (
    <section className="py-10 lg:py-20" id="benefits">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 content-center justify-items-center gap-12 lg:gap-0">
          <div className="lg:col-span-6 flex sm:justify-center justify-start mt-10 lg:mt-0">
            <Image
              src="/images/benefits/fruits.svg"
              alt="business"
              width={636}
              height={805}
              className="w-full"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-5 justify-center">
            <h2 className="text-black text-center lg:text-start">
              What You Get.
            </h2>
            <p className="text-black/60 text-lg font-normal text-center lg:text-start max-w-2xl lg:max-w-lg mx-auto lg:mx-0 px-6 lg:px-0 leading-[1.6]">
              Our fruit baskets and fresh juices are made from fresh, locally
              sourced fruits to give you a simple and natural way to enjoy
              everyday nutrition. No exaggerated claims, just real fruit, fresh
              taste, and practical benefits like convenience, freshness, and
              versatility. Whether for daily consumption, a thoughtful gift, or
              a corporate need, our products fit naturally into a healthy
              routine and a modern lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits

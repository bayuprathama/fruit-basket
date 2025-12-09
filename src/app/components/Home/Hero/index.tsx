import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <section
      className="bg-[url('/images/hero/hero.jpg')] flex flex-col justify-center
             bg-cover bg-center bg-no-repeat pt-28 lg:pb-14 overflow-hidden] relative h-full lg:h-[800px]"
    >
      <div
        className="absolute inset-0 
                   lg:bg-gradient-to-r 
                   from-black/70 
                   via-black/40 
                   to-black/10 bg-gradient-to-b 
                   "
      />
      <div className="container">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-12 content-center">
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            <Image
              src="/images/hero/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px] opacity-10"
            />
            <Image
              src="/images/hero/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px] opacity-5"
            />
            <Image
              src="/images/hero/linetwo.svg"
              alt="line-image"
              width={190}
              height={148}
              className="hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5"
            />
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl max-w-2xl leading-16 text-text-primary text-center lg:text-start mx-auto lg:mx-0 pt-5">
                Your Daily Dose of Freshness.
              </h1>
              <p className="text-white/80 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0">
                Juicy, refreshing, and full of flavor. Fresh juice made daily
                from the best fruits nature has to offer.
              </p>
              <div className="mx-auto lg:mx-0">
                <Link href="https://wa.me/628519313358" target="_blank">
                  <button className="text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-orange-primary bg-orange-primary hover:bg-transparent hover:cursor-pointer hover:text-text-primary">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

import Link from 'next/link'

const About = () => {
  return (
    <section
      id="order"
      className="py-20 bg-[url('/images/order/order.jpg')] bg-cover bg-center bg-no-repeat relative"
    >
      <div
        className="absolute inset-0 z-0 
                   lg:bg-gradient-to-r 
                   from-black/80 
                   via-black/50 
                   to-black/10 bg-gradient-to-b 
                   "
      />
      <div className="container relative z-10">
        <div className="flex justify-center text-center items-center gap-12 lg:gap-0">
          <div className="flex flex-col gap-5 justify-center px-6 lg:px-0">
            <h2 className="text-text-primary text-center sm:leading-14 leading-12">
              How to Get?
            </h2>
            <p className="text-white/80 font-normal text-center leading-[1.6] max-w-2xl lg:max-w-lg mx-auto text-lg lg:mx-0 lg:px-0">
              Order now and enjoy simple, honest flavors, no hassle, just fresh
              goodness delivered to you.
            </p>
            <div className="mx-auto lg:mx-0">
              <Link href="https://wa.me/628519313358" target="_blank">
                <button className="text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-orange-primary bg-orange-primary hover:bg-transparent hover:cursor-pointer hover:text-text-primary hover:border-orange-primary">
                  Order Now
                </button>
              </Link>
            </div>
            <div className="mx-auto lg:mx-0">
              <Link
                href="https://www.google.com/maps/place/Fruit+Basket+%26+Juice+Jimbaran/@-8.7996559,115.1661635,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd245f879a0d9dd:0x88b2731949679646!8m2!3d-8.7996559!4d115.1661635!16s%2Fg%2F11ykxp_wr0?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <button className="text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-green-primary bg-green-primary hover:bg-transparent hover:cursor-pointer hover:text-text-primary hover:border-green-primary">
                  Our Location
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

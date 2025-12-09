import Link from 'next/link'

const About = () => {
  return (
    <section id="order" className="py-10">
      <div className="container">
        <div className="flex justify-center text-center items-center gap-12 lg:gap-0">
          <div className="flex flex-col gap-5 justify-center px-6 lg:px-0">
            <h2 className="text-midnight_text text-center sm:leading-14 leading-12">
              How to Get?
            </h2>
            <p className="text-black/60 font-normal text-center leading-[1.6] max-w-2xl lg:max-w-lg mx-auto text-lg lg:mx-0 lg:px-0">
              Order now and enjoy simple, honest flavors, no hassle, just fresh
              goodness delivered to you.
            </p>
            <div className="mx-auto lg:mx-0">
              <Link href="https://wa.me/628519313358" target="_blank">
                <button className="text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-orange-primary bg-orange-primary hover:bg-transparent hover:cursor-pointer hover:text-green-primary hover:border-green-primary">
                  Order Now
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

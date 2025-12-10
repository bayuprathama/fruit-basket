import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 content-center justify-items-center gap-12 lg:gap-0">
          <div className="col-span-6 flex flex-col gap-5 justify-center px-6 lg:px-0">
            <h2 className="text-black text-center lg:text-start sm:leading-14 leading-12">
              About Us.
            </h2>
            <p className="text-black/60 font-normal text-center lg:text-start leading-[1.6] max-w-2xl lg:max-w-lg mx-auto text-lg lg:mx-0  lg:px-0">
              Fruit Basket Jimbaran: Located in the Udayana & Bali Polytechnic
              campus area, we serve fresh and high-quality fruits & juices. The
              practical choice for anyone seeking a healthy intake amid a busy
              schedule. Natural nutrition, served fast, right next to the
              campus.
            </p>
          </div>
          <div className="col-span-6">
            <Image
              src="/images/about/baskets.svg"
              alt="farmer-with-baskets"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={50}
        height={50}
        style={{ objectFit: 'contain' }}
        quality={100}
      />
    </Link>
  )
}

export default Logo

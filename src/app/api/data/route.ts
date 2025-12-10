import { NextResponse } from 'next/server'

import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'
import { ProductType, ProductCategory } from '@/app/types/productdata'

const HeaderData: headerItem[] = [
  { label: 'Why us?', href: '#why' },
  { label: 'Product', href: '#product' },
  { label: 'Benefits', href: '#benefits ' },
  { label: 'Order', href: '#order' },
  { label: 'About Us', href: '#about' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/premium.svg',
    heading: 'Premium Selection',
    paragraph:
      'We only source the highest quality fruits, harvested at peak ripeness.',
  },
  {
    imgSrc: '/images/features/heart.svg',
    heading: 'Made with Heart',
    paragraph:
      'Fresh juice mixes made to-order, everything is executed with detail and personalization. Perfect for special gifts or your daily dose of self-reward.',
  },
  {
    imgSrc: '/images/features/farmer.svg',
    heading: 'Supporting Local Farmers',
    paragraph:
      'By choosing us, you are supporting sustainable farming practices and helping our local farmers thrive',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'Lite',
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'Basic invoice generation',
      'Downloadable PDF invoice',
      'Unlimited transactions',
      'Emails for all the updates',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Lite features',
      'Custom invoice templates',
      'Tax calculation support',
      'Automatic invoice reminders',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'Plus',
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Basic features',
      'Multi-currency support',
      'Invoice payment tracking',
      'Priority customer support',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Why us?', href: '#why' },
  { label: 'Product', href: '#product' },
  { label: 'Benefits', href: '#benefits ' },
  { label: 'Order', href: '#order' },
  { label: 'About Us', href: '#about' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa6-brands:tiktok',
    link: 'https://www.tiktok.com/@fruit.basketnjuicee',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:whatsapp',
    link: 'https://wa.me/628519313358',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:google',
    link: 'https://www.google.com/maps/place/Fruit+Basket+%26+Juice+Jimbaran/@-8.7996559,115.1661635,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd245f879a0d9dd:0x88b2731949679646!8m2!3d-8.7996559!4d115.1661635!16s%2Fg%2F11ykxp_wr0?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D',
    width: 14,
  },
]

const ProductData: Record<ProductType, ProductCategory> = {
  smoothies: {
    heading: 'Smoothies',
    items: [
      { name: 'Mangga', price: '15' },
      { name: 'Alpukat', price: '15' },
      { name: 'Buah Naga', price: '15' },
      { name: 'Stroberi', price: '15' },
    ],
  },
  mixJuice: {
    heading: 'Mix Juice',
    items: [
      { name: 'Mangga Strawberry', price: '15' },
      { name: 'Mangga Pisang', price: '15' },
      { name: 'Strawberry Pisang', price: '15' },
      { name: 'Buah Naga Pisang', price: '15' },
      { name: 'Buah Naga Strawberry', price: '15' },
      { name: 'Es Jeruk Peras', price: '10' },
    ],
  },
  fruitJuice: {
    heading: 'Fruit Juice',
    items: [
      {
        name: 'Alpukat',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Mangga',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Jeruk',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Melon',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Semangka',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Anggur',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Apel',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Sirsak',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Tomat',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Nanas',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Pepaya',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Stroberi',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Pisang',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Kurma',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
      {
        name: 'Buah Naga',
        price: [
          { name: 'Sedang', price: '10' },
          { name: 'Jumbo', price: '15' },
        ],
      },
    ],
  },
}
export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
    ProductData,
  })
}

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
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

const ProductData: Record<ProductType, ProductCategory> = {
  smoothies: {
    heading: 'Smoothies',
    items: [
      { name: 'Mangga', price: '15000' },
      { name: 'Alpukat', price: '15000' },
      { name: 'Buah Naga', price: '15000' },
      { name: 'Strawberi', price: '15000' },
    ],
  },
  mixJuice: {
    heading: 'Mix Juice',
    items: [
      { name: 'Mangga Strawberry', price: '15000' },
      { name: 'Mangga Pisang', price: '15000' },
      { name: 'Strawberry Pisang', price: '15000' },
      { name: 'Buah Naga Pisang', price: '15000' },
      { name: 'Buah Naga Strawberry', price: '15000' },
      { name: 'Es Jeruk Peras', price: '10000' },
    ],
  },
  fruitJuice: {
    heading: 'Fruit Juice',
    items: [
      {
        name: 'Alpukat',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Mangga',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Jeruk',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Melon',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Semangka',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Anggur',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Apel',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Sirsak',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Tomat',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Nanas',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Pepaya',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Strawberi',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Pisang',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Kurma',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
        ],
      },
      {
        name: 'Buah Naga',
        price: [
          { name: 'Sedang', price: '10000' },
          { name: 'Jumbo', price: '15000' },
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

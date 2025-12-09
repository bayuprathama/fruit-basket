export const footerlabels: { label: string; herf: string }[] = [
  { label: 'Terms', herf: '#' },
  { label: 'Disclosures', herf: '#' },
  { label: 'Disclosures', herf: '#' },
  { label: 'Latest News', herf: '#' },
]

export const featureData: {
  imgSrc: string
  heading: string
  paragraph: string
}[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Cash collection',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Insights',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Payment',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
  },
]

export const productData: {
  heading: string
  items: {
    name: string
    price: string | { name: string; price: string }[]
  }[]
}[] = [
  {
    heading: 'Smoothies',
    items: [
      { name: 'Mangga', price: '15000' },
      { name: 'Alpukat', price: '15000' },
      { name: 'Buah Naga', price: '15000' },
      { name: 'Strawberi', price: '15000' },
    ],
  },
  {
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
  {
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
        name: 'Melon',
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
]

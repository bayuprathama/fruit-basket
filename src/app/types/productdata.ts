export type SizePrice = {
  name: string
  price: string
}

export type ProductItem = {
  name: string
  price: string | SizePrice[]
}

export type ProductCategory = {
  heading: string
  items: ProductItem[]
}

export type ProductType = 'smoothies' | 'mixJuice' | 'fruitJuice'

export type productData = {
  heading: string
  items: {
    name: string
    price: string | { name: string; price: string }[]
  }[]
}

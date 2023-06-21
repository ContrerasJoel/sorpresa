export interface Product {
    id: string
    status: string
    images: string[]
    title: string
    price: number
  }
export  interface Products {
    products: Product[]
  }
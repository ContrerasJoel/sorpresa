"use client"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import ProductBox from "@/components/products/ProductBox"
import { useProducts } from "@/context/useContextProduct"
import type { Product } from "@/interfaces/interfaces"
import { useState, type ChangeEvent } from "react"

export default function page() {
  const products = useProducts()
  const [productsReady, setProductsReady] = useState<Product[]>(products)

  const handlerFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const valueFilter = e.target.value
    const productsFiltered = products.filter(
      item =>
        item.title
          .toLocaleLowerCase()
          .includes(valueFilter.toLocaleLowerCase()) ||
        item.id.toLocaleLowerCase().includes(valueFilter.toLocaleLowerCase()) ||
        item.status
          .toLocaleLowerCase()
          .includes(valueFilter.toLocaleLowerCase())
    )
    console.log(productsFiltered)
    setProductsReady(productsFiltered)
  }
  return (
    <>
      <Navbar handlerFilter={handlerFilter} />
      <ProductBox products={productsReady} />
      <Footer />
    </>
  )
}

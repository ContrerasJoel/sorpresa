"use client"
import type { ReactNode } from "react"
import { ContextProduct } from "./ContextProduct"

interface props {
  children: ReactNode | ReactNode[]
}

export const ProviderProduct = ({ children }: props) => {
  const products = [
    {
      id: "001",
      status: "In stock",
      categories: [],
      images: [
        "https://res.cloudinary.com/dzliuhj0b/image/upload/v1687286360/Regalos/001/estumejorsorpresa_343761236_181735931426717_1646626372924105637_n_vhgwb2.jpg",
        "https://res.cloudinary.com/dzliuhj0b/image/upload/v1687286360/Regalos/001/estumejorsorpresa_343998826_147887464748769_1284360050409258179_n_mocqxe.jpg",
        "https://res.cloudinary.com/dzliuhj0b/image/upload/v1687286360/Regalos/001/estumejorsorpresa_343664638_935116411068177_8025209411445473353_n_ygxsxk.jpg",
      ],
      title: "Desayuno Dia de la Madre",
      price: 75.999,
    },
  ]
  return (
    <ContextProduct.Provider value={products}>
      {children}
    </ContextProduct.Provider>
  )
}

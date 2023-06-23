import { ProviderProduct } from "@/context/ProviderProduct"
// import "./globals.css"
import "../sass/styles.scss"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EsTuMejorSorpresa",
  description: "Tienda Online Desayunos y Arreglos para fechas especiales",
}

interface props {
  children: React.ReactNode
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderProduct>{children}</ProviderProduct>
      </body>
    </html>
  )
}

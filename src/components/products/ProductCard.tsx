import Slider from "./Slider"
import IconWhatsApp from "../../../public/icons/WhatsApp.svg"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/interfaces/interfaces"

const ProductCard = ({ images, title, price, id, status }: Product) => {
  const actionWhatsApp = `https://api.whatsapp.com/send?phone=+573194921133&text=Hola!%20me%20interesa%20el%20producto%20${id}`
  return (
    <div className="card__container">
      <div className="card__images">
        <Slider images={images} />
      </div>
      <div className="card__details">
        <div
          className={
            status === "In stock"
              ? "card__details_tag"
              : "card__details_tag_sold_out"
          }
        >
          <h6>{id}</h6>
          <h5>{status}</h5>
        </div>
        <div className="card__details_title">
          <h3>{title}</h3>
        </div>
        <div className="card__icon_and_price">
          <Link href={actionWhatsApp} target="_blank">
            <Image src={IconWhatsApp} width={45} alt="icon whatsapp" />
          </Link>
          <h2>
            ${price},<small>00</small>
          </h2>
        </div>
      </div>
    </div>
  )
}
export default ProductCard

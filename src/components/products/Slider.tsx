import Image from "next/image"
import { useState } from "react"
import ArrowLeft from "../../../public/icons/ArrowLeft.svg"
import ArrowRight from "../../../public/icons/ArrowRight.svg"

interface Props {
  images: string[]
}

const Slider = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0)

  function previousImg() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }
  function nextImg() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }

  return (
    <div className="slider__container">
      <button onClick={previousImg}>
        <Image src={ArrowLeft} alt="Izquierda" />{" "}
      </button>
      {images.map((image, i) => (
        <div className="slider__img" key={i}>
          {currentImage === i && (
            <Image src={image} width={256} height={256} alt="product" />
          )}
        </div>
      ))}
      <div className="slider__bolls">
        {images.map((_, i) => (
          <div
            key={i}
            className={
              currentImage === i ? "slider__boll_active" : "slider__boll"
            }
          ></div>
        ))}
      </div>

      <button onClick={nextImg}>
        <Image src={ArrowRight} alt="Derecha" />
      </button>
    </div>
  )
}

export default Slider

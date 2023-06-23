"use client"
// import Image from "next/image"
// import Logo from "../../../public/logo/logo.svg"

interface Props {
  handlerFilter: any
}

export default function Navbar({ handlerFilter }: Props) {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <h1>LOGO</h1>
        {/* <Image src={Logo} alt="logo" width={50} /> */}
      </div>
      <div className="navbar__filter">
        <input type="text" onChange={handlerFilter} />
      </div>
      <div className="navbar__user">
        <h1>LOGO</h1>
        {/* <Image src={Logo} alt="logo" width={50} /> */}
      </div>
    </div>
  )
}

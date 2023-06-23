import Image from "next/image"
// import logoLargo from "../../../public/logo/logoLargo.svg"
import WhatsAppWhite from "../../../public/icons/WhatsAppWhite.svg"
import Instagram from "../../../public/icons/Instagram.svg"
// import Facebook from "../../../public/icons/Facebook.svg"
import Link from "next/link"
export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__sections">
        <div className="footer__sections_logo">
          <h1>LOGO HORIZONTAL</h1>
          {/* <Image src={logoLargo} width={300} height={100} alt="Logo" /> */}
        </div>
        <div className="footer__sections_questions">
          <h3>Preguntas Frecuentes</h3>
          <p>¿Como puedo pagar?</p>
          <p>¿Que precio tiene el envío?</p>
          <p>¿Como cargar la batería?</p>
        </div>
        <div className="footer__sections_contacts">
          <h3>Contactos</h3>
          <div>
            <Link
              href="https://api.whatsapp.com/send?phone=+56949491484&text=Hola!"
              target="_blank"
            >
              <Image src={WhatsAppWhite} width={45} alt="icon whatsapp" />
            </Link>
            {/* <Link
              href="https://www.facebook.com/mente.intima.co"
              target="_blank"
            >
              <Image src={Facebook} width={45} alt="icon Facebook" />
            </Link> */}
            <Link
              href="https://www.instagram.com/estumejorsorpresa/"
              target="_blank"
            >
              <Image src={Instagram} width={45} alt="icon Instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <Link href="https://www.linkedin.com/in/joel-contreras-fullstack/">
          © 2023. Página creada por Joel Contreras. Todos los derechos
          reservados.
        </Link>
      </div>
    </div>
  )
}

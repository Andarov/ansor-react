import { styles } from "../util/style"
import { logoF } from '../assets'
import Navbar from "./Navbar"

const Footer = () => {
  return (
    <div className="bg-br-dark-black py-6">
        <div className={`${styles.container} flex flex-col justify-between items-center text-white md:flex-row`}>
            <a className="mb-6 md:mb-0" href="index.html">
                <img src={logoF} alt="Logo" />
            </a>

            <Navbar />
        </div>
    </div>
  )
}

export default Footer

import { styles } from "../util/style";
import { logoH } from "../assets";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="py-6">
      <div className={`${styles.container} flex justify-between items-center`}>
        <a href="index.html">
          <img src={logoH} alt="Logo" />
        </a>
        <Navbar />
        <div className="flex items-center">
          <a className="inline-block bg-br-main-red py-1.5 px-3 rounded-lg font-bold text-base text-white lg:px-6 lg:py-3" href="#">
            <span className="hidden lg:block">Qabulga yozilish</span>
            <span className="lg:hidden"><FontAwesomeIcon icon={faPencil} /></span>
          </a>
          <button className="ml-3 lg:hidden">
            <FontAwesomeIcon className="text-3xl" icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

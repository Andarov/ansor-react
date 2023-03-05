import { styles } from "../util/style";
import { logoH } from "../assets";
import Navbar from "./Navbar";
import MainLInk from "./MainLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="py-6">
      <div className={`${styles.container} flex justify-between items-center`}>
        <a href="index.html">
          <img src={logoH} alt="Logo" />
        </a>
        <Navbar />
        <div className="flex items-center">
          <MainLInk />
          <button className="ml-3 lg:hidden">
            <FontAwesomeIcon className="text-3xl" icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

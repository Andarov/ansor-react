import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const MainLInk = () => {
  return (
    <>
        <a className="inline-block bg-br-main-red py-1.5 px-3 rounded-lg font-bold text-base text-white lg:px-6 lg:py-3" href="#">
          <span className="hidden lg:block">Qabulga yozilish</span>
          <span className="lg:hidden"><FontAwesomeIcon icon={faPencil} /></span>
        </a>   
    </>
  )
}

export default MainLInk

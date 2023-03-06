import { services } from '../util/services'
import { styles } from '../util/style'
import { img1, img2, img3, img4 } from "../assets"

const Services = () => {
  return (
    <div className='py-14 lg:py-28'>
        <div className='w-full max-w-[834px] mx-auto px-5'>
            <h2 className='font-bold text-3xl text-center mb-14 lg:text-4xl'>Xizmatlar</h2>
            <ul>
                {services.map((el, idx)=>(
                    <li className={`flex flex-col items-center md:flex-row ${idx === services.length - 1 ? 'mb-0' : 'mb-16'}`}>
                        <img className='w-full h-[250px] object-cover mb-5 mr-0 md:mb-0 md:mr-16' src={img1} alt={el.title} />

                        <div className="max-w-[600px]">
                            <h3 className='font-bold text-2xl text-br-dark-black mb-6'>{el.title}</h3>
                            <p className='text-base text-[#444]'>{el.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Services

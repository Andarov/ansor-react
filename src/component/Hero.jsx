import { heroImg } from "../assets"
import { styles } from "../util/style"

const Hero = () => {
  return (
    <div className="bg-br-main-blue">
      <div className={`${styles.container} flex justify-between md:items-center lg:items-end`}>
      <div className="py-20 max-w-[500px] ms:py-28">
        <h1 className="font-bold text-2xl text-white mb-4 sm:text-3xl md:text-4xl">Tabiiy davolash usullari yordamida kasalliklardan xalos bo'ling.</h1>
        <p className="text-base text-white mb-9 sm:text-lg">Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko'p uchraydigan kasalliklarni yengishda yordam beradi. Sog'ligingizni o'z ishining professionallariga ishonib topshiring.</p>
        <a className="inline-block bg-br-main-red py-1.5 px-3 rounded-lg font-bold text-base text-white lg:px-6 lg:py-3" href="#">Qabulga yozilish</a>
    </div>
        <img className="hidden md:block md:h-[450px] lg:h-[510px]" src={heroImg} alt="doctor" />
      </div>
    </div>
  )
}

export default Hero

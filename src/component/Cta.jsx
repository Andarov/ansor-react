import { styles } from "../util/style"

const Cta = () => {
  return (
    <div className="bg-br-main-blue py-16">
        <div className={`${styles.container} text-center`}>
            <h2 className="font-bold text-2xl mb-8 text-white sm:text-3xl sm:mb-10 md:text-4xl">Qabulga ro’yxatdan o’ting</h2>

            <a className="inline-block bg-transparent py-1.5 px-3 rounded-lg font-bold text-xs text-white uppercase border-2 border-white mr-2 sm:mr-5 sm:text-sm md:mr-10 lg:px-6 lg:py-3" href="#">Qo'ng'iroq qilish</a>
            <a className="inline-block bg-transparent py-1.5 px-3 rounded-lg font-bold text-xs text-white uppercase border-2 border-white sm:text-sm lg:px-6 lg:py-3" href="#">Telegramdan yozish</a>
        </div>
    </div>
  )
}

export default Cta

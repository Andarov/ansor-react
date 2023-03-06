const Navbar = () => {
  return (
    <nav>
        <ul className="flex flex-col items-center md:flex-row">
            <li className='mb-2 md:mb-0 md:mr-8'>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Xizmatlar</a>
            </li>
            <li className='mb-2 md:mb-0 md:mr-8'>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Dorilar</a>
            </li>
            <li className='mb-2 md:mb-0 md:mr-8'>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Asal</a>
            </li>
            <li className='mb-2 md:mb-0 md:mr-8'>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Kontaktlar</a>
            </li>
            <li>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Blog</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

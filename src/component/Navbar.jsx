const Navbar = () => {
  return (
    <nav className='hidden lg:block'>
        <ul className="flex items-center">
            <li className='mr-8'>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Xizmatlar</a>
            </li>
            <li className='mr-8'>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Dorilar</a>
            </li>
            <li className='mr-8'>
              <a className='text-sm leading-5 tracking-wider uppercase font-bold' href="#">Asal</a>
            </li>
            <li className='mr-8'>
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

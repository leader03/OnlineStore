import Link from 'next/link'
import {AiOutlineSearch} from 'react-icons/Ai'

const Header = () => {
  return (
    <nav className='bg-blue-400 h-16 flex justify-between items-center px-16 '>
        <h3 className='text-white font-medium text-xl'>Online Stores</h3>
        <Link href={''} className='flex flex-row items-center gap-2'>
        <AiOutlineSearch size={24} color="white" />
        <h3 className='text-white font-medium text-lg'>Search</h3>
        </Link>
      </nav>
  )
}

export default Header
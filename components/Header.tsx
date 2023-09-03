import Link from 'next/link'
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/Ai'
import { FaCartPlus } from 'react-icons/fa'
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Header = ({setCartItems}: any) => {
  const {cartItems} = useSelector((state: any) => state.datas)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen: boolean) => !prevIsCartOpen)
  };

  return (
    <>
    <nav className='bg-pink-400 h-16 flex justify-between items-center px-4 sm:px-8 md:px-16 '>
      <Link href="/"><h3 className='text-white text-sm font-medium sm:text-xl'>Online Stores</h3></Link>
      <div className='flex flex-row gap-2 sm:gap-8'>
        <button
          className="bg-white px-2 text-sm sm:px-3 py-1 rounded flex items-center shadow-sm gap-2 sm:gap-3 text-[#C20475] font-semibold"
          onClick={toggleCart}
        >
          <h1>{cartItems.length}</h1>
          <FaCartPlus /> <span className='hidden sm:block'>Cart</span>
        </button>

        <Link href={'/search'} className='flex flex-row items-center sm:gap-2'>
          <AiOutlineSearch size={20} color="white" />
          <h3 className='text-white font-medium text-sm sm:text-lg'>Search</h3>
        </Link>

      </div>
    </nav>
    {isCartOpen && <Cart setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
    </>
  )
}

export default Header
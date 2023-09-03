import Link from 'next/link'
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/Ai'
import { FaCartPlus } from 'react-icons/fa'
import Cart from './Cart';

const Header = ({cartItems,setCartItems}: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart modal visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
    <nav className='bg-pink-400 h-16 flex justify-between items-center px-16 '>
      <h3 className='text-white font-medium text-xl'>Online Stores</h3>
      <div className='flex flex-row gap-8'>

        <button
          className="bg-white px-3 py-1 rounded flex items-center shadow-sm gap-3 text-[#C20475] font-semibold"
          onClick={toggleCart}
        >
          <h1>{cartItems.length}</h1>
          <FaCartPlus /> Cart
        </button>

        <Link href={''} className='flex flex-row items-center gap-2'>
          <AiOutlineSearch size={24} color="white" />
          <h3 className='text-white font-medium text-lg'>Search</h3>
        </Link>

      </div>
    </nav>
    {isCartOpen && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
    </>
  )
}

export default Header
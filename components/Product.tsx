import Link from 'next/link'
import React from 'react'
import {FaCheckCircle, FaShoppingCart, FaStar} from 'react-icons/fa'

const Product = ({product,addToCart,isItemInCart}: any) => {
  return (
    <div
    //   key={product.id}
      className="bg-white rounded-lg shadow p-4 transition-all duration-300 hover:shadow-lg relative"
    //   onMouseEnter={() => setHoveredItem(product.id)}
    //   onMouseLeave={() => setHoveredItem(null)}
    >

      <img
        src={product.image}
        alt={product.title}
        className=" h-48 object-cover mb-4"
      />

      {/* Product Information */}
      <div className="flex justify-between items-center pb-2">
        <p className="bg-pink-100 px-1 text-pink-500 rounded w-3/4">{product.title}</p>
        <p className="text-gray-600">Rs. {product.price}</p>
      </div>

      {/* <Link href={`/product/${product.id}`}>
        <p className="font-bold text-gray-800">{product.name}</p>
      </Link> */}

      <div className="flex justify-between items-center">
        <div className="flex items-center border border-yellow-500 rounded px-1 mt-2">
          <p className="text-yellow-500">{product.rating}</p>
          <FaStar className="text-yellow-500 ml-1" />
        </div>
        <button
          className={`px-4 py-2 rounded-full text-white ${
            isItemInCart(product.id) ? "bg-pink-500 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600"
          }`}
          onClick={() => addToCart(product)}
          disabled={isItemInCart(product.id)}
        >
          {isItemInCart(product.id) ? <FaCheckCircle /> : <FaShoppingCart />}
        </button>
      </div>
    </div>
  )
}

export default Product
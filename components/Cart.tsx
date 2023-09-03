import { actionsCreators } from "@/state";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const Cart = ({setCartItems,isCartOpen,setIsCartOpen}:any) => {

    const {cartItems} = useSelector((state: any) => state.datas)
    const dispatch = useDispatch()    
    const {removeFromCart,increaseQuantity} = bindActionCreators(actionsCreators,dispatch)

  const handleQuantityChange = (product: any,value: number) => {  
    const updatedProduct = { ...product, quantity: value };
    increaseQuantity(updatedProduct)

//     setCartItems((prevItems: any) =>
//     prevItems.map((item: any) =>
//       item.id === itemId
//         ? { ...item, quantity: Math.max(1, item.quantity + value) }
//         : item
//     )
//   );

  }

  const handleCloseModal = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      {isCartOpen && (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-hidden bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-pink-600" id="slide-over-title">
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleCloseModal}
                          >
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                        <div className="mt-8">
                          <h2 className="text-lg font-medium text-gray-900 mb-4">Cart Items</h2>
                          {cartItems && cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                          ) : (
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {cartItems?.map((item: any) => (
                                  <li key={item.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            {item.title}
                                          </h3>
                                          <p className="ml-4">${item.price}</p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="p-1 border border-gray-300 rounded-md hover:bg-gray-200"
                                            onClick={() => handleQuantityChange(item,-1)}
                                          >
                                            <span className="sr-only">Reduce quantity</span>
                                            <svg
                                              className="h-4 w-4"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M20 12H4"
                                              />
                                            </svg>
                                          </button>
                                          <input
                                            type="number"
                                            min="1"
                                            className="mx-2 border border-gray-300 rounded-md text-center w-12"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                                            />
                                          <button
                                            type="button"
                                            className="p-1 border border-gray-300 rounded-md hover:bg-gray-200"
                                            onClick={() => handleQuantityChange(item,1)}
                                          >
                                            <span className="sr-only">Increase quantity</span>
                                            <svg
                                              className="h-4 w-4"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-pink-600 hover:text-pink-500"
                                            onClick={() => removeFromCart(item.id)}
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Cart;
function increase(updatedProduct: any): any {
    throw new Error("Function not implemented.");
}


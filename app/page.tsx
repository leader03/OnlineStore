"use client"
import { useGetAllProducts } from '@/queries/productQuery'
import Image from 'next/image'
import Header from '@/components/Header'
import Product from '@/components/Product'
import { useEffect, useMemo, useState } from "react";
import { ProductType } from '@/types/product'


export default function Home() {

  const [productData,setProductData] = useState<ProductType[]>([])
  const { isLoading, data: allProducts, refetch } = useGetAllProducts()
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  const isItemInCart = (itemId: any) => {
    return cartItems.some((item) => item.id === itemId);
  };

  useMemo(() => {
    const productList = allProducts?.data
    const newData = productList?.map((item: ProductType) => {
      return {
        id: item.id,
        image: item.image,
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.price,
        rating: item.rating.rate,
        quantity:1
      }
    })
    // dataList(newData)
    setProductData(newData)
  },[allProducts?.data])



  return (
    <main>
      {/* <Header cartItems={cartItems} setCartItems={setCartItems} /> */}
      <div>
        <div className="container mx-auto flex flex-col md:flex-row gap-12 p-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productData?.map((item: any) => (
                <Product key={item.id} product={item} isItemInCart={isItemInCart} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

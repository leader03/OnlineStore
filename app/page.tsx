"use client"
import { useGetAllProducts } from '@/queries/productQuery'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Home() {

  const {isLoading, data: allProducts, refetch} = useGetAllProducts()
  console.log(allProducts);
  
  return (
    <main>
      <Header />
      <div>
        
      </div>
    </main>
  )
}

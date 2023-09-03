"use client"
import Product from "@/components/Product";
import SearchInput from "@/components/common/SearchInput";
import { useGetAllProducts } from "@/queries/productQuery";
import { ProductType } from "@/types/product";
import Image from "next/image"
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {

  const { cartItems } = useSelector((state: any) => state.datas)
  const isItemInCart = (itemId: any) => {
    return cartItems.some((item: any) => item.id === itemId);
  };

  const [productData, setProductData] = useState<ProductType[]>([])
  const { isLoading, data: allProducts, refetch } = useGetAllProducts()
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
        quantity: 1
      }
    })
    setProductData(newData)
  }, [allProducts?.data])


  const [filterList, setFilterList] = useState<any[]>([]);
  const [keyword, setKeyword] = useState("")
  const handleKeyword = (e: React.SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    setKeyword(inputElement.value)

    const updatedList = productData?.filter(
      (item: { title: string }) => {
        return item.title
          .toLowerCase()
          .includes(inputElement.value.toLowerCase());
      }
    ).map((item: ProductType) => {
      return {
        id: item.id,
        image: item.image,
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.price,
        rating: item.rating.rate,
        quantity: 1
      };
    });
    setFilterList(updatedList)
  }

  return (
    <main className="w-full px-6 mx-auto mt-4">
      <div className="flex items-center justify-center pb-4">
        <SearchInput keyword={keyword} onChange={handleKeyword} />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-12 p-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keyword && filterList?.map((item: any) => (
            <Product key={item.id} product={item} isItemInCart={isItemInCart} />
          ))}
        </div>
      </div>
      {/* {!keyword && <h3>Enter title of product to see</h3>} */}
      {keyword && !filterList?.length &&
        <>
          <h1 className="text-center">Product Not Found!!</h1>
        </>}
    </main>
  )
}

export default Search
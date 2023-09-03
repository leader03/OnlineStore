"use client"
import { getAllProducts, getProductDetail } from "@/services/product"
import { useQuery } from "@tanstack/react-query"

export const useGetAllProducts = () => useQuery(['allproducts'], () => getAllProducts(), {
    onError: (err: { message: string }) => {
        console.log(err.message)
    }
})


export const useGetProductDetail = (id: any) =>
    useQuery(['productdetail', id], () => getProductDetail(id), {
        onError: (err: { message: string }) => {
            console.log(err.message)
        }
    })

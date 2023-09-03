"use client"
import { getAllProducts } from "@/services/product"
import { useQuery } from "@tanstack/react-query"

export const useGetAllProducts = () => useQuery(['allproducts'], () => getAllProducts(), {
    onError: (err: {message: string}) => {
        console.log(err.message)
    }
})
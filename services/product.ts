import axiosClient from "@/lib/axiosInterceptor"

export const getAllProducts = () => {
    return axiosClient.get(`/products`)
}
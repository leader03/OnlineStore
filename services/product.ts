import axiosClient from "@/lib/axiosInterceptor"

export const getAllProducts = () => {
    return axiosClient.get(`/products`)
}

export const getProductDetail = (id: any) => {
    return axiosClient.get(`/products/${id}`)
}
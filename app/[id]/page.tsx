"use client"
import { useGetProductDetail } from '@/queries/productQuery';
import { actionsCreators } from '@/state';
import { ProductType } from '@/types/product';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react'
import { FaCheckCircle, FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'


const DetailPage = () => {
    const router = useSearchParams();
    const search = router.get('id')
    console.log(search);

    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const { cartItems } = useSelector((state: any) => state.datas)


    const isItemInCart = (itemId: any) => {
        return cartItems.some((item: any) => item.id === itemId);
    };

    const dispatch = useDispatch()
    const { dataList } = bindActionCreators(actionsCreators, dispatch)

    const [productDetail, setProductDetail] = useState<ProductType>()
    const { isLoading, data: productDetails, refetch } = useGetProductDetail(search)

    useMemo(() => {
        const productList = productDetails?.data
        const newDat = () => {
            return {
                id: productList?.id,
                image: productList?.image,
                title: productList?.title,
                description: productList?.description,
                category: productList?.category,
                price: productList?.price,
                rating: productList?.rating.rate,
                quantity: 1
            }
        }
        setProductDetail(newDat)
    }, [productDetails?.data])


    useEffect(() => {
        refetch()
    }, [search])
    console.log(productDetail);

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="h-60 p-4 object-cover object-center rounded border border-gray-200"
                        src={productDetail?.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2
                            className="text-sm title-font text-gray-500 tracking-widest"
                        >
                            {productDetail?.category}
                        </h2>
                        <h1
                            className="text-gray-900 text-3xl title-font font-medium mb-1"
                        >
                            {productDetail?.title}
                        </h1>
                        <div className="flex w-16 items-center border border-yellow-500 rounded px-1 mt-2">
                            <p className="text-yellow-500">{productDetail?.rating?.rate}</p>
                            <FaStar className="text-yellow-500 ml-1" />
                        </div>
                        <p className="leading-relaxed">
                            {productDetail?.description}
                        </p>
                        <div className="flex gap-4 items-center">

                            <span className="title-font font-medium text-2xl text-gray-900 ">
                                Rs. {productDetail?.price}
                            </span>

                            <button className="flex ml-auto text-white bg-pink-500 border-0 text-sm sm:text-base py-2 px-2 sm:px-6 focus:outline-none hover:bg-pink-600 rounded"
                                onClick={() => dataList(productDetail)}
                                disabled={isItemInCart(productDetail?.id)}
                            >
                                {isItemInCart(productDetail?.id) ? <FaCheckCircle /> : "Add to Cart"}
                            </button>
                            <button
                                onClick={toggleFavorite}
                                className="text-gray-500 bg-gray-200 rounded-full w-10 h-10  focus:outline-none mr-3 flex justify-center items-center"
                            >
                                {isFavorite ? (
                                    <FaHeart className="text-pink-500" />
                                ) : (
                                    <FaHeart />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailPage
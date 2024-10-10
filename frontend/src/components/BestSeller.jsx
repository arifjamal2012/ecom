import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const bestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setbestSeller] = useState([]);
    // console.log(bestSeller);
    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        // console.log(bestProduct)
        setbestSeller(bestProduct.slice(0,5))
    },[products]);
    // console.log(setbestSeller())
    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className="w-3/4 m-auto text-sx sm:text-sm md:text=base text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eos totam itaque expedita sequi, eligendi dolore quaerat! Possimus, beatae dicta!</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller.map((item,index) => (
                        <ProductItem key={index} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>

        </div>
    )
}

export default bestSeller

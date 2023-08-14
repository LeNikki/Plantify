"use client"
import React from 'react'
import { useSearchParams} from "next/navigation"
import {useState, useEffect} from "react"
import Image from "next/image"
function Details() {
  
    const params = useSearchParams();
    const data = params.get('data')
    const result = JSON.parse(data)
    const [quantity, setquantity] = useState(1)
    console.log(result.reviews)
  return (
    <div className='flex flex-row m-10  w-full justify-between'>
      <section className='p-5 flex items-center justify-center w-1/2'>
      <Image
      src={result.image}
      width="auto"
      height="auto"
      alt="plant-image"
      className='w-1/2 p-5'
      />
       </section>
      <section className='w-1/2 p-5 flex flex-col  '>
        <h1 className='font-bold text-xl'>{result.plantName}</h1>
          <p>{result.rating} | {result.reviews} | {result.itemSold}</p>
        <p className='text-red-500 mb-5 font-bold text-2xl'>Price: ${result.price}</p>
        <p>Rating: {result.rating}</p>
        <section className='flex flex-row mt-3'><p>Quantity: </p> <p className='ml-3 font-bold'> - </p> <p className='mr-3 ml-3 font-bold'>{quantity}</p> <p className=' font-bold'> + </p> </section>
        <button className='w-44 p-3 bg-red-500 text-slate-50 hover:bg-emerald-500 mt-5'>Add to cart</button>
      </section>
     
    </div>
  )
}

export default Details
"use client"
import React from 'react'
import { useSearchParams} from "next/navigation"
import {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"

function Details() {
  
    const params = useSearchParams();
    const data = params.get('data')
    const result = JSON.parse(data)
    const [number, setnumber] = useState(1)
    result.number=number
    useEffect(() => {
      result.number = number
      console.log(result)
    }, [number])
    
    const subtract = ()=>{
      if(number<=1){
        setnumber(1)
      }
      else{
        setnumber(number-1)
      }
    }
    const add = ()=>{
        setnumber(number+1)
    }
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
        <section className='flex flex-row justify-between w-28'>
                <p className='p-2 text-slate-50 w-10 h-10 text-center bg-red-700 hover:bg-red-400' onClick={subtract}>-</p>
                <p>{number}</p>
                <p className='p-2 text-slate-50 w-10 h-10 text-center bg-red-700 hover:bg-red-400' onClick={add}>+</p>
            </section>
        <Link href={{
          pathname: `/cart/${result.code}`,
          query: { data: JSON.stringify(result) },
        }}
         className='w-44 p-3 bg-red-500 text-slate-50 text-center hover:bg-emerald-500 mt-5'>Add to cart</Link>
      </section>
     
    </div>
  )
}

export default Details
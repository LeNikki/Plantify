"use client"
import React from 'react'
import { useSearchParams} from "next/navigation"
import {useState, useEffect} from "react"
import Image from "next/image"

export default function Cart (){
    const params = useSearchParams()
    const data = params.get('data')
    const result = JSON.parse(data)
    const [number, setnumber] = useState(result.number)
    const totalItemPrice = number * result.price
    console.log(result)
    useEffect(() => {
        result.number=number
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
    return (
        <div className=  "w-full h-full p-5">
          <section className='bg-slate-200 w-full items-center h-auto p-10 rounded-lg flex md:flex-row justify-around'>
            <Image
                src={result.image}
                width={52}
                height='auto'
                alt="plant-image"
            />
            <p className='font-bold'>{result.plantName}</p>
            <p className='font-bold text-red-700'>Individual Price: {result.price}</p>
            <section className='flex flex-row justify-between w-28'>
                <p className='p-2 text-slate-50 w-10 h-10 text-center bg-red-700 hover:bg-red-400' onClick={subtract}>-</p>
                <p className='p-2 w-10 h-10 text-center'>{number}</p>
                <p className='p-2 text-slate-50 w-10 h-10 text-center bg-red-700 hover:bg-red-400' onClick={add}>+</p>
            </section>
            <p>Total Price: {totalItemPrice}</p>

          </section>
        </div>
    )
}
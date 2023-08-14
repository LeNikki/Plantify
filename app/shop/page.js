"use client"
import { plantCollection } from "../plants"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
export const metadata = {
    title: 'Shop',
    description: 'Welcome to Plantify',
  }
export default function Shop (){
   const router = useRouter();
   
    return (
        <div className=  "w-full h-full p-5">
            Shop
            {/* Card for each item */}
            <div className="w-full  p-5 flex flex-wrap md:flex-row justify-around">
                {plantCollection.map(eachplant => (
                    <Link href={{
                        pathname: `/shop/${eachplant.code}`,
                        query: { data: JSON.stringify(eachplant) },
                      }}  
                      className="w-52 h-82 md:w-48  m-5 md:h-78 p-5 flex flex-col items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]"  
                      onClick = {()=>prodDetail(eachplant)} 
                      eachplant = {eachplant} 
                      key = {eachplant.code}>
                    <Image
                       src = {eachplant.image}
                       width = "auto"
                       height = 'auto'
                       alt = {eachplant.plantName}
                       className = "w-40 h-44"
                    />
                    <br/>
                    <p>{eachplant.plantName}</p>
                    <br/>
                    <p className="font-bold text-red-500"> $: {eachplant.price}</p>
                    <p>Rating: {eachplant.rating}</p>
                    </Link>
                ))}
            </div>
            
        </div>
    )
}



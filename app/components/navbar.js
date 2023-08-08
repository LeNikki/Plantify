
'use client'
import React from 'react'
import { Inter, Poppins, Tinos } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"
import search from "../../public/search.png"
import menu from "../../public/menu.png"
import plantifyLogo from "../../public/plantifyLogo.png"
import xsolid from "../../public/xsolid.svg"
import usersolid from "../../public/usersolid.svg"
import { useState, useEffect } from 'react'
import { fromJSON } from 'postcss'
const inter = Inter({ subsets: ['latin'] })
const tinos = Tinos(
  {
    subsets: ['latin'],
    weight: ['400', '700'],
  }
)
const pages = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Shop",
      link: "/shop "
    },
    {
      title: "Cart",
      link: "/cart "
    },
  ];
export default function Navbar() {
  const [burger, setburger] = useState(true);
  const [searchIn, setsearchIn] = useState(" ");
  useEffect(() => {
    console.log(searchIn)
  }, [searchIn])
  
  const menuClick = ()=> {
    setburger(!burger);
    console.log(burger);
  };
  return (
    <main className='w-full mt-10 p-5 flex flex-col h-30 md:h-20 md:flex-row justify-center'>
    
      <nav className='w-full p-2 flex flex-col md:flex-row md:w-70 md:justify-around md:items-center'>
        <section className='flex flex-row w-full'>
          <Image
          src={burger ? menu : xsolid}
          width = "auto"
          height = "auto"
          className='inline-block md:hidden w-7 h-7'
          onClick = {menuClick}
          alt = "burgerNav"
          priority ={ true} 
        />
        <section className='flex flex-row items-center'>
        <Image
          src={plantifyLogo}
          alt = "logo"
          width = "auto"
          height = "auto"
          className='w-10'
        />
        <h1 className={`${tinos.className}  md:w-1/2 text-center text-5xl tracking-widest`}>Plantify</h1>
        </section>
        </section>
       
        <ul className= {`${burger? "hidden" : "flex" } flex flex-col h-60 w-full md:flex-row md:justify-around md:items-center md:w-3/4 md:flex`}>
          {pages.map((page) => (
            <Link key={page.title} href={page.link} className='p-5 w-32 items-center bg-neutral-50 text-center rounded-md  hover:font-bold  md:bg-transparent'>{page.title}</Link>
          ))}
        </ul>
        
      </nav>
      <section className='flex flex-row w-full items-center md:w-3/4'>
        <input
        type="text"
        name="plant-name"
        value= {searchIn}
        onChange = {e => setsearchIn(e.target.value)}
        className='w-1/2  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-emerald-500 focus:shadow-outline'
        />
        <Image
        src = {search}
        className = 'w-12 h-12 ml-10 rounded-full p-3 hover:bg-emerald-300 '
        alt ="search"
        width = "auto"
        height = "auto"
        />
        <Image
        src = {usersolid}
        className = ' mr-10 ml-10 w-12 h-12 p-3 rounded-full p-3 hover:bg-emerald-300 '
        alt ="profile"
        width = "auto"
        height = "auto"
        />
        </section>
        
      </main>
  )
}


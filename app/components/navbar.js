

import React from 'react'
import { Inter, Poppins, Tinos } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"
import search from "../../public/search.png"
import menu from "../../public/menu.png"
import plantifyLogo from "../../public/plantifyLogo.png"
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
  return (
    <main className='w-full  p-5 flex flex-col h-30 md:h-20 md:flex-row justify-center'>
    
      <nav className='w-full p-2 flex flex-col md:flex-row md:w-70 md:justify-around md:items-center'>
        <section className='flex flex-row w-full'>
          <Image
          src={menu}
          width = {40}
          height = {10}
          className='inline-block  md:hidden'
        />
        <section className='flex flex-row items-center'>
        <Image
          src={plantifyLogo}
          
          className='w-10'
        />
        <h1 className={`${tinos.className}  md:w-1/2 text-center text-5xl tracking-widest`}>Plantify</h1>
        </section>
        </section>
        <ul className='flex flex-col h-60 w-full md:flex-row md:justify-around md:items-center md:w-3/4'>
          {pages.map((page) => (
            <Link key={page.title} href={page.link} className='p-5 items-center bg-neutral-50 text-center rounded-md  hover:bg-sky-200 hover:font-bold md:bg-transparent'>{page.title}</Link>
          ))}
        </ul>
        
      </nav>
      <section className='flex flex-row w-full items-center md:w-1/2'>
        <input
        type="text"
        name="plant-name"
        className='w-30  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-emerald-500 focus:shadow-outline'
        />
        <Image
        src = {search}
        className = 'w-5 h-5 ml-10 mr-10'
        />
        </section>
      </main>
  )
}


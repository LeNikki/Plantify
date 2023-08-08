import React from 'react'
import Link from "next/link"
import Image from "next/image"
import github from "../../public/github.png"
import linkedin from "../../public/linkedin.png"
import gmail from "../../public/gmail.png"
function Footer() {
  return (
    <div className='bg-slate-300 w-full p-10 items-center flex flex-col justify-center'>
        <h1>© 2023, Nicole Satiembre, Philippines, All rights reserved</h1>
        <br/>
        <p> This site is made with NextJs13, TailwindCss, MongoDB and RESTful APIs</p>
        <br/>
        <p> This is a sample site for my portfolio. Let's connect on social media!</p>
        <br/>
        
         <section className='w-1/4 p-5 flex flex-row justify-around items-center'>
            <Link href="https://github.com/LeNikki" className='items-center flex flex-col justify-center '>
                <Image
                src={github}
                width = "auto"
                height = "auto"
                alt="github account"
                className='w-14 h-14 rounded-full mr-5 p-3 hover:bg-emerald-500'
                />
                Github
            </Link>
            <Link href="https://www.linkedin.com/in/nicole-satiembre-04a3b11b1/" className='items-center flex flex-col justify-center'>
            <Image
                src={linkedin}
                width = "auto"
                height = "auto"
                alt="linkedin account"
                className='w-14 h-14 p-3 rounded-full mr-5 hover:bg-emerald-500'
                />
            LinkedIn
                
            </Link>
            <a href="mailto:nicsatiembre@gmail.com" className='items-center flex flex-col justify-center'>
            <Image
                src={gmail}
                width = "auto"
                height = "auto"
                alt="gmail account"
                className='w-14 h-14 mr-5 rounded-full p-3 flex justify-center  hover:bg-emerald-500'
                /> 
                Gmail</a>
         </section>
        
        <br/>
        <Link href="https://lenikki.github.io/Satiembre-Portfolio/" className='font-bold gover:text-emerald-800'>Click here to follow my portfolio</Link>

    </div>
  )
}

export default Footer
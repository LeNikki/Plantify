import Image from "next/image"
import plant1 from "../public/plant1.png"
import cactus1 from "../public/cactus1.jpg"
import pinkflower from "../public/pinkflower.jpg"
import sakura from "../public/sakura.jpg"
import sunflower from "../public/sunflower.jpg"
import roseclay from "../public/roseclay.jpg"
export default function Home() {

  return (
    <div className=  "w-full h-full p-10 flex flex-row justify-between">
    <Image
     src={plant1}
     width="full"
     height = "full"
     alt = "huuhuhhuhu"
     className="rounded-lg"
    />
     <div className="text-center w-full ">
       <h1 className="text-6xl">Diverse plant resource.</h1>
       <br/>
       <p className="">Be one with the nature and explore the freshness these plants has to offer!</p>
       <br/>
       <div className = "w-full p-5 flex flex-row items-center justify-around ">
          <Image
          src={cactus1}
          width="auto"
          height = "auto"
          alt = "cactus"
          className="rounded-lg w-40"
          />
          <Image
          src={sunflower}
          width="auto"
          height = "auto"
          alt = "cactus"
          className="rounded-lg w-40"
          />
          
          <Image
          src={pinkflower}
          width="auto"
          height = "auto"
          alt = "pinkFlower"
          className="rounded-lg w-40"
          />
          <Image
          src={roseclay}
          width="auto"
          height = "auto"
          alt = "cactus"
          className="rounded-lg w-40"
          />
          <Image
          src={sakura}
          width="auto"
          height = "auto"
          alt = "sakura"
          className="rounded-lg w-40"
          />
       </div>
       <br/>
       <button className="p-3 w-auto bg-emerald-500 text-slate-50 hover:bg-emerald-800 ">Explore our collections!</button>
     </div>
    </div>
  )
}

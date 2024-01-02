import { Menu, Search } from "lucide-react"
import SocialIons from "./socialsIcons"
import { categories } from "@/lib/data"


export default function Header (): JSX.Element {
  return (
  
        <header className='bg-black text-white md:px-12 px-6'>
                 <div  className="flex flex-col  items-center">
                    <div className="flex flex-col justify-center md:flex-row md:justify-between items-center w-full">
                        <SocialIons></SocialIons>
                            {/* Search bar */}
                        <div className="flex md:max-w-[400px] md:w-[50%] justify-center bg-black p-[4px] items-center border-slate-500 border-[1px]  mt-4 w-full ">
                            <input className="py-2 px-2 w-full  outline-none text-black" 
                            type="text"  
                            placeholder="Search ..."/>
                            <Search className="w-20 rotate-[90grad]"></Search>
                        </div>
                    </div>
                    <h1 className=" md:mt-10 mt-4 md:text-7xl text-5xl font-bold">SPIEL</h1>     
                    <ul className="mt-4 mb-4 flex  gap-4">
                         <Menu className="md:hidden cursor-pointer  text-white"></Menu>
                         {categories?.map( categorie => (
                            <li className="hidden cursor-pointer md:block hover:underline underline-offset-4"
                             key={categorie}> {categorie}</li>
                         ))}
                    </ul>
              </div>
   </header>  
  )
}
import { Menu, Search } from "lucide-react"
import SocialIons from "./socialsIcons"
import Wrapper from "./wrapper"


export default function Header (): JSX.Element {
  return (
  
        <header className='bg-black text-white'>
                 <Wrapper  className="flex flex-col items-center">
                    <SocialIons></SocialIons>
                        {/* Search bar */}
                    <div className="flex justify-center bg-black p-[4px] items-center border-slate-500 border-[1px]  mt-4 w-full ">
                        <input className="py-2 px-2 w-full  outline-none text-black" 
                        type="text"  
                        placeholder="Search ..."/>
                        <Search className="w-20 rotate-[90grad]"></Search>
                    </div>
                    <h1 className="mt-4 text-5xl font-bold">SPIEL</h1>     
                    <Menu className="mt-4 mb-4 cursor-pointer  text-white"></Menu>
                </Wrapper>
        </header>
  
  )
}

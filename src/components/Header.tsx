import { TwitterIcon , X , FacebookIcon , Youtube , Twitch , Instagram, Search, Menu} from "lucide-react"
import Wrapper from "./Wrapper"


export default function Header (): JSX.Element {
  return (
  
        <header className='bg-black text-white'>
                 <Wrapper  className="flex flex-col items-center">
                    <nav className="flex">
                        <ul className="flex items-center gap-4 justify-center mt-6 ">
                            <li><a href=""><TwitterIcon className=""></TwitterIcon></a></li>
                            <li><a href=""><FacebookIcon></FacebookIcon> </a></li>
                            <li><a href=""><Youtube></Youtube></a></li>
                            <li><a href=""><Twitch></Twitch></a></li>
                            <li><a href=""><Instagram></Instagram></a></li>
                        </ul>
                    </nav>
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

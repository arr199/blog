import { website } from "@/lib/data"
import Wrapper from "./wrapper"
import { ArrowRight } from "lucide-react"
import SocialIons from "./socialsIcons"
import { categories } from "@/lib/data"

export default function Footer (): JSX.Element {
  return (
        <div className='bg-black text-white flex flex-col'>
            <Wrapper className="flex flex-col items-center px-10 text-center py-4">
                <p className="text-balance">
                    At {website}, every click is an adventure in the gaming world. 
                    Whether you’re a casual or  hardcore gamer, we’re your 
                    go-to for the latest news, tips, and trends.
                </p>
                <p className="mt-6 text-balance">Subscribe to our newsletters. We’ll keep you in the loop.</p>
                <form className="flex justify-center bg-black  items-center border-slate-500 border-[1px]  mt-4 w-full ">
                        <input className="py-3 px-2 w-full  outline-none text-black" 
                        type="text"  
                        placeholder="Type your email"/>
                        <button>
                            <ArrowRight className="w-20"></ArrowRight>
                        </button>
                </form>
                <SocialIons></SocialIons>
                <ul className="flex flex-wrap text-center gap-6 justify-center my-6">
                    {categories?.map( e => (
                        <li 
                            className="cursor-pointer"
                            key={e}>{e}
                        </li>
                    ) )}
                </ul>

            </Wrapper>
            <p className="py-4 self-center border-t w-full text-center border-neutral-600">
                Blog at {website}.com
            </p>
        </div>
  )
}

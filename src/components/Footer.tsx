import { website } from "@/lib/data"
import Wrapper from "./Wrapper"

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
            </Wrapper>
            <p className="py-4 self-center border-t w-full text-center border-neutral-600">
                Blog at {website}.com
            </p>
        </div>
  )
}

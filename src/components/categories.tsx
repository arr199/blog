
import { categories } from "@/lib/data";
import Wrapper from "./wrapper";
import Link from "next/link";

export default function Categories (): JSX.Element {
 return (
        <Wrapper className="my-10">
            <div className="">
                <h2 className="text-lg font-bold">Category</h2>
                <div className="w-full h-[3px] bg-black"></div>
                <div className="flex flex-col md:flex-row flex-wrap  mt-4 font-semibold">
                    {categories?.map( (categorie) => (
                        <Link href="#" key={categorie} 
                        className="text-3xl md:text-5xl lg:text-7xl hover:text-blue-500 cursor-pointer ">
                        {categorie}.
                        </Link>
                    ))}
                </div>
            </div>
        </Wrapper>



  )
}

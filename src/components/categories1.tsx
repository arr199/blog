
import { categories } from "@/lib/data";
import Wrapper from "./wrapper1";

export default function Categories (): JSX.Element {
 return (
        <Wrapper className="my-10">
            <div className="">
                <h2 className="text-lg font-bold">Category</h2>
                <div className="w-full h-[3px] bg-black"></div>
                <div className="flex flex-col mt-4 font-semibold">
                    {categories?.map( (categorie) => (
                        <span key={categorie} 
                        className="text-3xl">
                        {categorie}.
                        </span>
                    ))}
                </div>
            </div>
        </Wrapper>



  )
}

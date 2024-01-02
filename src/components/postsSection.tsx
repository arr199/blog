import { Posts } from "@/lib/data"
import Image from "next/image"
import Wrapper from "./wrapper"

export default function PostsSection (): JSX.Element {
  const posts = Posts ?? []

return (
   <Wrapper className='flex flex-col justify-center mt-6 '>
        <h2 className="text-2xl font-semibold">Latest</h2>
        <div className="w-full bg-black h-[3px]"></div>
        {/* POSTS CONTAINER */}
        <div className="">
            {posts?.map( (post , index)   => (
                <div key={index} className="mt-6">
                    <div className="relative w-full h-full aspect-video">
                        <Image 
                        className=""
                        src={post.imageUrl}
                        fill
                        alt="post image">
                        </Image>
                    </div>
                    <p className="mt-2">{post.category.join(", ")}</p>
                    <h2 className="text-3xl font-bold py-2">{post.title}</h2>
                    <p className="text-neutral-500 ">{post.author}</p>
                </div>
            )  )}
        </div>
   </Wrapper>
  )
}

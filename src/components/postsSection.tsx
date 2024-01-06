import { posts } from "@/lib/data"
import Image from "next/image"
import Wrapper from "./wrapper"
import Link from "next/link"
import payload from "payload"

export default async function PostsSection (): Promise<JSX.Element> {
const { docs : posts  } = await payload.find({
    collection : "posts" ,
    limit : 4
})

console.log("HELLO THERE" ,  posts[0].category)
    
return (
   <Wrapper className='flex flex-col justify-center mt-6 '>
        <h2 className="text-2xl font-semibold">Latest</h2>
        <div className="w-full bg-black h-[3px]"></div>
        {/* POSTS CONTAINER */}
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-4  gap-10 ">
            {posts?.map( (post , index)   => {
                const categories =  Object.keys(post.category?.[0]).map( e =>  post?.category[0][e as keyof object] === true ? e : false).filter(Boolean)
                console.log(categories) 
                        
            
           
           return  (<div key={index} className="mt-6 self-start ">
                    <div className="relative w-full h-full aspect-video ">
                        <Image 
                        className=""
                        src={post?.imageUrl}
                        fill
                        alt="post image">
                        </Image>
                    </div>
                    <p className="mt-2">{categories.join(", ")}</p>
                   <Link href={`post/${post.id}`}>
                        <h2 className="md:text-xl xl:text-2xl text-3xl font-bold py-2 hover:text-blue-500 cursor-pointer">{post.title}</h2>
                   </Link> 
                    <p className="text-neutral-500 ">{post.author}</p>
                </div>
            )}  )}
        </div>
   </Wrapper>
  )
}

import { posts } from "@/lib/data";
import Image from "next/image";
import payload from "payload";


export interface Props {
  searchParams : Record<string,string> ,
  params : Record<string,string>
}

export default async function Page({ searchParams, params }: Props):Promise<JSX.Element>  {
  const id = params.id;
  const post : Post = posts.filter( (e : any) => e.id === id)[0]
  
  const element = await payload.findByID({
    collection : "posts",
    id : "6599b285c5337e91ce3e2383"
  })


  return (
    <div className="">
      <div className="px-4  self-start  bg-black text-white text-center">
        <div className="relative w-full h-full aspect-video ">
          <Image
            className=""
            src={post.imageUrl}
            fill
            alt="post image">
          </Image>
        </div>
        <p className="mt-2">{post?.category.join(", ")}</p>
        <h2 className="text-4xl font-bold py-2  md:text-5xl ">{post.title}</h2>
        <p className="text-neutral-500 ">{post.author}</p>
      </div>
      <div>
        <p 
        className="mt-4"
        >{element.content.map( (e,index) => (<p className="mt-4 " key={index}>{e.paragraph}</p>))}</p> 
      </div>
    </div>
  );
}

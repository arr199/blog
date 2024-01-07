import { posts } from "@/lib/data";
import Image from "next/image";
import payload from "payload";


export interface Props {
  searchParams : Record<string,string> ,
  params : Record<string,string>
}

export default async function Page({ searchParams, params }: Props):Promise<JSX.Element>  {
  const id = params.id;
  const post  = await payload.findByID({
    collection : "posts",
    id
  })
 const category = Object.keys(post.category[0]).map( e =>  post.category[0][e as keyof object] === true ? e : false  ).filter(Boolean)

  return (
    <div className="">
      <div className="px-4  self-start  bg-black text-white text-center pb-4">
        <div className="relative w-full h-full aspect-video ">
          <Image
            className=""
            src={`${process.env.SERVER_PUBLIC_URL}/posts/${post.filename}`}
            fill
            alt="post image">
          </Image>
        </div>
        <p className="mt-2">{category.join(", ")}</p>
        <h2 className="text-4xl font-bold py-2  md:text-5xl ">{post.title}</h2>
        <p className="text-neutral-500 ">{post.author}</p>
      </div>
      <div className="p-4 text-pretty">
        <p 
        className="mt-4"
        >{post.content.map( (e,index) => (<p className="mt-4 " key={index}>{e.paragraph}</p>))}</p> 
      </div>
    </div>
  );
}

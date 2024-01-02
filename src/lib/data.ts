import Categories from "@/components/categories"

interface Post {
    title : string 
    category :  Array<"News" | "Reviews" | "Guides" | "Videos" | "Podcast" | "Game Culture" | "Features">
    author : string ,
    imageUrl : string


}

export const categories = ["News" , "Reviews" ,"Guides" , "Videos" , "Podcast" , "Game Culture" , "Features"]

export const website = "Blog"
export const Posts : Post[] = [
    {
        title : "Unseen Dragons Gets March Release Date And New Trailer" ,
        category : ["News"] , 
        author : "Joan Smith" ,
        imageUrl : "/dragon.webp"
    },
    {
        title : "Slow Burn: A Dive into the Open-World RPG’s Vivid Universe",
        category : ["News" , "Reviews"] , 
        author : "Joan Smith" ,
        imageUrl : "/slowburn.webp"
    },
    {
        title : "How to Defeat the Secret Boss in Fountain" ,
        category : ["Guides"] , 
        author : "Joan Smith" ,
        imageUrl : "/secretboss.webp"
    },
    {
        title : "Tiger’s Den Claws Out in the Ultimate Fighting Arena",
        category : ["News"] , 
        author : "Joan Smith" ,
        imageUrl : "/fighthing-arena.webp"
    },
    {
        title : "Not Enough – The Chase for More in the City of Dreams and Desires",
        category : ["Features"  ,"News"] , 
        author : "Joan Smith" ,
        imageUrl : "/GTA.webp"
    },
    
]



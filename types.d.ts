interface Post {
    id: string
    title : string 
    category :  Array<"News" | "Reviews" | "Guides" | "Videos" | "Podcast" | "Game Culture" | "Features">
    author : string ,
    imageUrl : string ,
    description : string ,
    content : string
}
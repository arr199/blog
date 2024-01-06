import { CollectionConfig } from "payload/types"
import { categories } from "../../lib/data"

export const Posts : CollectionConfig = {
    slug : "posts" ,
    fields : [
        { 
            name : "title" , 
            type : "text" ,
            required : true   
        } ,
        {
            name : "description" ,
            type : "text" ,
            required : true
        },
        {   name : "category" , 
            type : "array" ,
            fields : categories.map( e => ( { name : e.toLowerCase() , type : "checkbox" ,   }  )),
            required : true ,
            maxRows : 1 ,
            minRows : 1 ,
            
         },
         
         { 
             name : "author" , 
             type : "text"  ,
             required : true
         },
         { 
            name : "content" ,
            type : "array",
            label : "Paragraph" , 
            required : true ,
            fields : [
                { name : "paragraph" , type : "textarea"  }
            ],
         },
         
    ],
    upload : {
        staticDir : "posts" ,
        staticURL : "/posts",
        mimeTypes : ["image/*"],
        imageSizes : [
            { 
                name : "thumbnail" ,
                width : 400 ,
                height : 300 ,
                position : "centre",
                
            },
            { 
                name : "card" ,
                width : 768 ,
                height : 1024 ,
                position : "centre",
                
            },
            { 
                name : "tablet" ,
                width : 1024 ,
                height : undefined ,
                position : "centre",
                
            }
        ],
    }

} 
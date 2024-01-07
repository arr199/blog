import { buildConfig } from "payload/config";
import {  mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { Posts } from "./collections/posts";



export default buildConfig({
    collections : [Posts] , 
    serverURL : process.env.SERVER_PUBLIC_URL , 
    db : mongooseAdapter({ url : process.env.MONGO_DB_URL  ?? ''}),
    editor : slateEditor({}),
    routes : {
        admin : "/admin"
    },
    admin : {
        bundler : webpackBundler()
    }
})
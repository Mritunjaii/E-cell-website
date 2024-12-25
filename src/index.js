import dotenv from "dotenv";
dotenv.config({path:".env"});
import dbconnect from "./db/index.js"
import {app} from "./app.js";


dbconnect().then(()=>{
    app.on("err",()=>{
        console.log("err in src/index",err);
    })
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on port ${process.env.port}`);
    });
}).catch((err)=>{
    console.log("Failed Mongo connection in index app file:\n",err);
});
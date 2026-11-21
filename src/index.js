// require('dotenv').config()
import dotenv from "dotenv";


// import mongoose from "mongoose";
// import { db_name } from "./constant.js";

import connectDB from "./db/db.js";

dotenv.config({
    path: "./.env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("error", error);
})






// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
//         app.on("error",(error)=>{
//             console.error("error", error);
//         })
//         app.liten(process.env.PORT,()=>{
//             console.log(`server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("error", error);
//     }
// })
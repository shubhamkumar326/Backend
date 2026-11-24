import {Router } from "express";
import {loginuser, registerUser} from "../controllers/user.controler.js"

import { upload} from "../middlewares/multer.js"
import { LogOut } from "lucide-react";

const router =Router()

router.route("/register").post(
    upload.fields([
       {
        name :"avatar",
        maxCount:1

       },
       {
        name:"coverImaage",
        maxCount:1,
       } ,
    ]),
    registerUser
)

router.route("/login").post(loginuser)

router.route("/logot").post(veryfyJWT,logOutUser)



export default router
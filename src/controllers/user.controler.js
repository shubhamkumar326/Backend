import {asyncHandler} from "../utils/asyncHandler.js";
import {Apierror} from "../utils/Apierror.js"
import{User} from "../models/user.model.js"
import{uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const registerUser =asyncHandler(async (req ,res)=>{
    //  res.status(200).json({
    //     massage :"ok"
    // })

    const {fullName,email,username,password} =req.body
    console.log('email:',email);


    // if(fullName===""){
    //     throw new Apierror(400,"fullname is required")

    // }

    if([fullName,email,username,password].some(()=>field?.trim()==="")
    ){
    throw new Apierror(400,"All field are required")
}

    User.findOne({
        $or:[{username},{email}]
    })
    if (existedUser){
        throw new Apierror(409,"user with email or useranme already exist")
    }

    const avatarlocalpath= req.files?.avatar[0]?.path
   const coverImagelocalpath= req.files?.coverImage[0]?.path
   if(!avatarlocalpath){
    throw new Apierror (400,"avatar is requierd")

   }
   const avatar=await uploadOnCloudinary(avatarlocalpath);
   const coverImage=uploadOnCloudinary(coverImagelocalpath)
   if(!avatar){
        throw new Apierror (400,"avatar is requierd")

   }
    await User.create({
    fullname,
    avatar:avatar.url,
    coverImange:coverImage?.url || "",
    email,
    password,
    username:username.toLoweCase()
   })
     const userId= await User.findById(user_id).select(
        "-password -refreshToken"
     )
     if(!userId){
        throw new Apierror(500,"user not created")

     }
     return res.status(200).json(
        new ApiResponse (200,"user registered successfully")
     )
})

export {registerUser}
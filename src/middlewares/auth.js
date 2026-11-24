import { Apierror } from "../utils/Apierror";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";


export const veryfyJWT= asyncHandler(async(req, res, next)=>{
   
  try {
      const token =  req.cookie?.accessToken || req.header 
      ("Authorization")?.replace("Bearer","")
  
      if(!token){
          throw new Apierror(400,"Unauthorized reqest")
  
      }
      const decodedToken =jwt.veryfy(token,process.env.ACCESS_TOKEN_SECRET)
  
      const user =await User.findById(decodedToken?._id).select("-pasword  -refreshToken")
  
      if(! user){
  
          throw new Apierror(401,"invalid AccessToken")
      }
      req.user =user;
      next()
  } catch (error) {
    throw new Apierror(401, error?.massage ||"invalid access token")
    
  }
})
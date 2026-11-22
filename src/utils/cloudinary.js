import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCloudinary =async (localfilepath)=>{
    try {
        if(!localfilepath)
            return null
         const responsee= await cloudinary.uploader.upload(localfilepath,{

            resource_type:'auto'
        })
        console.log("file is  uploade" ,responsee.url);
        return responsee
        
        
    } catch (error) {
        fs.unlinkSync(localfilepath)// remove the localy saved temporary file as the uploadde
        
    }
}

export{uploadOnCloudinary}
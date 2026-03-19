import {User} from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const VerifyJwt = async (req,res,next)=>{

    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
    
        const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodeToken?._id).select("-password -refreshToken")
    
        if(!user){
    
            return res.status(400).json({message:"the user not found"})
        }
    
        req.user=user
    
        next()
    
    } catch (error) {
        throw error
    }

}
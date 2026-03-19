import { User } from "../models/user.model.js"

// generation of the access and refresh token 

const GenerateAccessandRefreshToken = async (userId)=>{

   try {
      const user = await User.findById(userId)
      if (!user) {
          throw new Error("user not found while generating tokens")
      }

      const accessToken = await user.generateAccessToken()
      const refreshToken = await user.refreshToken()
      user.refreshToken = refreshToken
 
      await user.save({validateBeforeSave:false})
 
      return {accessToken, refreshToken}
   } catch (error) {
     throw error
    
   }

}


const RegisterUser = async(req,res)=>{


    const {username,email, password}=req.body

    if(!username || !email ||!password){

        return res.status(400).json({
            message:"the username or email or password not found"
        })
    }

    

    const user= await User.create({
        username:username.toLowerCase(),
        email,
        password

    })


    const createdUser = await User.findById(user._id).select("-password")

    if(!createdUser){

        return res.status(400).json({message:"something went wring while registering the user"})
    }



    return res.status(201).json({
        message:"the user is being created",
        user: createdUser
    })

}

const LoginUser = async(req,res)=>{

    const {email,password}=req.body

    if (!email || !password){

        return res.status(400).json({message:"username or passsword not found"})
    }

    const user = await User.findOne(
     {
        $or:[{email}]
     }
    )

    if(!user){

        return res.status(400).json({message:"user not found"})
    }

    const isPasswordcorrect = await user.isPasswordcorrect(password)

    if(!isPasswordcorrect){

        return res.status(400).json({message:"the password entered is incorrect"})
    }


    const {refreshToken, accessToken}=await GenerateAccessandRefreshToken(user._id)
   
    const Loginuser = await User.findById(user._id).select("-password -refreshToken")

    const options={
        httpOnly:true,
        secure:true 
    }

    return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json({user:Loginuser,accessToken},"user logged in successfully")

}


export { RegisterUser, LoginUser }

import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema= new mongoose.Schema({

    username:{
        type:String,
        unique:[true,"username already taken"],
        required:true,

    },

    email:{

        type:String,
        unique:true,
        requied:true, 
    },


    password:{
        type:String,
        required:true,
    }
},{timestamps:true}
)

userSchema.pre("save", async function () {

    if (!this.isModified("password")) return

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.isPasswordcorrect=async function (password){

    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken=async function(){

    return jwt.sign({
        _id:this.id,
        username:this.username,
        email:this.email,
        
    },
    process.env.ACCESS_TOKEN_SECRET
    ,{
       expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

userSchema.methods.refreshToken=async function (){

    return jwt.sign({
        _id:this.id
    },
   process.env.REFRESN_TOKEN_SECRET,
   {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRES
   }
)

}


export const User = mongoose.model("User",userSchema)
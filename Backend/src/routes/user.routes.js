import { Router } from "express"
import  {RegisterUser,LoginUser} from "../controller/auth.controller.js"

const authRouter= Router()


authRouter.route("/Register").post(RegisterUser)
authRouter.route("/login").post(LoginUser)

export default authRouter
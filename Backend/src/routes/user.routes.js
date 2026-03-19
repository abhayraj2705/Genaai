import { Router } from "express"
import  {RegisterUser,LoginUser,LogoutUser} from "../controller/auth.controller.js"
import { VerifyJwt } from "../middlewares/auth.middlewares.js"

const authRouter= Router()


authRouter.route("/Register").post(RegisterUser)
authRouter.route("/login").post(LoginUser)
authRouter.route("/logout").post(VerifyJwt,LogoutUser)

export default authRouter
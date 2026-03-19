import app from "./src/app.js"
import connection_db from "./src/db/db.connection.js"
import dotenv from "dotenv"


dotenv.config({
    path:'./.env'
}
)


connection_db()

// requires all the routes here 

import authRouter from "./src/routes/user.routes.js"

// using all the riutes here 

app.use("/api/auth",authRouter)

app.listen(3000,()=>{

    console.log(`the server is running on the port 3000`)
})
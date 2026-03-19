import mongoose from "mongoose";

const connection_db = async ()=>{

try {
    const mongoUri = (process.env.MONGO_URI || "").replace(/\/+$/, "")
    const dbName = (process.env.DB_NAME || "").replace(/^\/+/, "")

    const connection = await mongoose.connect(mongoUri, { dbName })

    console.log(`the db is connected to the ${connection.connection.host}`)
} catch (error) {
    
    console.log("mongodb connection error", error)

    process.exit()
}

}


export default connection_db;
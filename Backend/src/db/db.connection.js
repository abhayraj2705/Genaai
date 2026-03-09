import mongoose from "mongoose";

const connection_db = async ()=>{

try {
    
    const connection = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)

    console.log(`the db is connected to the ${connection.connection.host}`)
} catch (error) {
    
    console.log("mongodb connection error", error)

    process.exit()
}

}


export default connection_db;
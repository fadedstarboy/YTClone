import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR: ", error)
        throw error
    })
    
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO DB connection failed", error);
} )













/*
import express from "express";

const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Application is listening on ${process.env.PORT}`);
        })

    } catch(error) {
        console.error("ERROR: ", error)
        throw error
    }

})()
*/
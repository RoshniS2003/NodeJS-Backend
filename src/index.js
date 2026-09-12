import dotenv from "dotenv"; 


import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB() // execution

/*
import mongoose from "mongoose";
import { DB_Name } from "./constants";

import express from "express";
const app = express()

    // await is only valid in async functions
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/
        ${DB_Name}`)

            app.on("error", (error) => {
                console.log("ERROR: ", error);
                throw err
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on PORT $
                    {process.env.PORT}`);
            })

        } catch (error) {
            console.error("ERROR: ", error)
            throw err
        }
    })()

    */
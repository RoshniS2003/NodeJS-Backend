import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
})
import dns from "dns"
import { error } from "console";

dns.setServers(["1.1.1.1", "8.8.8.8"])

connectDB() // execution

    .then(() => {
        app.on("error" , (error) => {
            console.log("Error:" , error);
            throw err
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is runnig at PORT :
             ${process.env.PORT}`);
        })
    })

    .catch((err) => {
        console.log("MongoDB Connection is Failed !!! ", err);
    })








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
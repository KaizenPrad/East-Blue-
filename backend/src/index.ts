// All the imports are here 
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { clerkWebhookHandler } from "./webhooks/clerk.js";


// App creation and configuration
const app = express();
dotenv.config();

const rawJson = express.raw({type:"application/json", limit:"1mb"})

// All the middlewares are here
app.post("/webhooks/clerk",rawJson,(req,res)=>{
    void clerkWebhookHandler(req,res)
    
})
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// All the routes are here


const PORT = process.env.PORT || 3001;

// Starting the server
app.listen(PORT, ()=>{
    console.log(`The Server is running on http://localhost${PORT}`);
})
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "dotenv/config";

import { clerkMiddleware } from "@clerk/express";

import { clerkWebhookHandler } from "./webhooks/clerk.js";
import { getEnv } from "./lib/env.js";


const env = getEnv();
const app = express();

dotenv.config();


const rawJson = express.raw({type:"application/json", limit:"1mb"})

app.post("/webhooks/clerk",rawJson,(req,res)=>{
    void clerkWebhookHandler(req,res)
})

app.use(express.json());

app.use(cors());

app.use(clerkMiddleware());


const PORT = process.env.PORT || 3001;

app.listen(env.PORT, ()=>{
    console.log(`The Server is running on http://localhost:${env.PORT}`);
})

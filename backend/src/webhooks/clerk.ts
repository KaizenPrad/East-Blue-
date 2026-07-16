import type { Request, Response } from "express";
import { getEnv } from "../lib/env.js";

export async function clerkWebhookHandler(req:Request,res:Response){
    const env = getEnv();

    try {
        if(!env.CLERK_WEBHOOK_SECRET){
            res.status(503).send("Webhooks not configured");
        }
    } catch (error) {
        
    }
}

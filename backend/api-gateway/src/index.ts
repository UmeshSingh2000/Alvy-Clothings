import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();

app.use(cors());


// -------------------------------
// SERVICE URLs
// -------------------------------

const AUTH_SERVICE = process.env.AUTH_SERVICE_URL
const USER_SERVICE = process.env.USER_SERVICE_URL
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE_URL


// -------------------------------
// ROOT ROUTE
// -------------------------------

app.get("/", (_req: Request, res: Response) => {
    res.send("API Gateway Running");
});

app.use("/api/auth", createProxyMiddleware({
    target: AUTH_SERVICE,
    changeOrigin: true,

}))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
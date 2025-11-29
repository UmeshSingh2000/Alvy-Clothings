import prisma from "../config/prisma";
import { comparePassword, hashPassword } from "../helpers/bcrypt";
import { Request, Response } from "express";
import { z } from "zod";

const userSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export const registerUser = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body;
        const parsedData = userSchema.safeParse({ email, password });
        if (!parsedData.success) {
            const errorMessages: Record<string, string> = {};
            parsedData.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as string;
                errorMessages[fieldName] = issue.message;
            })
            return res.status(400).json({ message: "Invalid input data", errors: errorMessages });
        }

        const isExistingUser = await prisma.user.findUnique({
            where: {
                email: parsedData.data.email
            }
        })
        if (isExistingUser) {
            return res.status(409).json({ message: "User already exists with this Email" });
        }

        const hashedPassword = await hashPassword(parsedData.data.password);

        const newUser = await prisma.user.create({
            data: {
                email: parsedData.data.email,
                password: hashedPassword,
            }
        })
        return res.status(201).json({ message: "User registered successfully", userId: newUser.id });

    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const parsedData = userSchema.safeParse({ email, password });
        if (!parsedData.success) {
            const errorMessages: Record<string, string> = {};
            parsedData.error.issues.forEach((issue) => {
                const fieldName = issue.path[0] as string;
                errorMessages[fieldName] = issue.message;
            })
            return res.status(400).json({ message: "Invalid input data", errors: errorMessages });
        }
        const user = await prisma.user.findUnique({
            where: {
                email: parsedData.data.email
            }
        })
        if (!user) {
            return res.status(404).json({ message: "User not found with this Email" });
        }
        const isPasswordValid = await comparePassword(parsedData.data.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        return res.status(200).json({ message: "Login successful", userId: user.id });
    }
    catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
import prisma from "../config/prisma";
import { hashPassword } from "../helpers/bcrypt";
import { Request, Response } from "express";
import { z } from "zod";

const registerSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const parsedData = registerSchema.safeParse({ email, password });
        if (!parsedData.success) {
            return res.status(400).json({ message: "Invalid input data" });
        }

        const isExistingUser = await prisma.user.findUnique({
            where: {
                email: parsedData.data.email
            }
        })
        if (isExistingUser) {
            return res.status(409).json({ message: "User already exists" });
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
import jwt from 'jsonwebtoken';

export const generateToken = (payload: any): string => {
    try {
        const secretkey = process.env.JWT_SECRET_KEY
        if (!secretkey) {
            throw new Error("JWT secret key is not defined");
        }
        return jwt.sign(payload, secretkey, { expiresIn: '1h' });
    } catch (error) {
        throw new Error("Error generating token");
    }
}
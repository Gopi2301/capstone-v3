import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()

export const generateToken = (id)=>{
    return jwt.sign({id},"Sandy",{expiresIn:"30d"})
};


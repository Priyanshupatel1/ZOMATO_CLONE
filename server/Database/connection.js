import mongoose, { mongo } from "mongoose";
import env from 'dotenv';

export default async () => {
    return mongoose.connect(process.env.MONGO_URI);

} 
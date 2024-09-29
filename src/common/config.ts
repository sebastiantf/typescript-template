import dotenv from 'dotenv';
dotenv.config();

export const name = process.env.NAME || 'Joe';

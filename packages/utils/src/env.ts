import * as dotenv from 'dotenv';
dotenv.config();
export const getEnvOrFail = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};
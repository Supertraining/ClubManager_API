import dotenv from 'dotenv';
import MongoStore from 'connect-mongo';

dotenv.config({ path: './config/.env' });

export const port = process.env.PORT || 8080;
export const mongoUrl = process.env.MONGO_URL;
export const client_prod_url = process.env.CLIENT_PROD_URL; 
export const admin_prod_url = process.env.ADMIN_PROD_URL;
export const client_dev_url = process.env.CLIENT_DEV_URL;
export const admin_dev_url = process.env.ADMIN_DEV_URL;

export const secretKey = process.env.JWT_SECRET;


export const gmailData = {
  gmailService: process.env.SERVICE,
  gmailPort: process.env.GMAILPORT,
  gmailUser: process.env.GMAILUSER,
  gmailPass: process.env.GMAILPASS,
}




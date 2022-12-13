import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.SECRET_KEY || '';

export const signToken = (id: string, login: string) => {  
  return jwt.sign({ id, login }, SECRET_KEY, { expiresIn: '720m' });
}

export const checkToken = (token: string) => {
  try {
    jwt.verify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
}
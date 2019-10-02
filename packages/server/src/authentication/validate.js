import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models";

dotenv.config();
const { JWT_SECRET } = process.env;

export default async token => {
  const { id } = await jwt.verify(token, JWT_SECRET);
  return User.findById(id);
};

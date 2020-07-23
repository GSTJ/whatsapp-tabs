import bcrypt from "bcrypt";
import { User } from "../models";

export default async (username, password) => {
  if (!username || !password) throw new Error("Preencha o nome/senha");
  const error = new Error("Nome ou senha incorretos");
  const user = await User.findOne({ username });
  if (!user) throw error;
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw error;
  return user;
};

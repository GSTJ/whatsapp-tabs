import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";
import { getImage } from "./utils";
import { User } from "../models";

dotenv.config();
const { GOOGLE_ID } = process.env;
const GoogleClient = new OAuth2Client(GOOGLE_ID);

export default async idToken => {
  if (!idToken) throw new Error("O token não foi informado.");
  const googleUser = await GoogleClient.verifyIdToken({ idToken });
  const { name, email, picture } = googleUser.payload;
  if (!email) throw new Error("Erro na verificação do token");
  const user = await User.findOne({ email });
  if (!user) throw new Error("Usuário não cadastrado");
  // Renewing name/picture from google.
  Object.assign(user, { name, picture: await getImage(picture) });
  await user.save();
  return user;
};

import bcrypt from 'bcrypt'
import { OAuth2Client } from 'google-auth-library'
import { getImage } from './utils'
import { User } from '../models'

const { GOOGLE_ID } = process.env
const GoogleClient = new OAuth2Client(GOOGLE_ID)

export default async (username, password, idToken) => {
  // Colocar checagem no SAT depois
  const googleUser = await GoogleClient.verifyIdToken({ idToken })
  const { name, email, picture } = googleUser.payload
  return User.create({
    name,
    email,
    picture: await getImage(picture),
    username,
    password: await bcrypt.hash(password, 10)
  })
}

/*
export async function SatLogin(username, password) {
  if (!username || !password)
    throw new Error("Preencha o nome de usuário/senha.");
  const query = `Select * From D6_USUARIOS WHERE LOWER(D6_NOME)='${username.toLowerCase()}' AND D6_SENHA='${password}'`;
  const { recordset } = await new sql.Request().query(query);
  const user = recordset[0];
  if (!user)
    throw new Error("O nome do usuário do SAT ou senha estão incorretos.");
  const {
    D6_STATUS: status,
    D6_NOME: nome,
    D6_FUNCAO: cargo,
    D6_NOME_COMPUTADOR: computador
  } = user;
  if (status[1] !== "1") throw new Error("Usuário desativado.");
  return { nome, cargo, computador };
}
*/

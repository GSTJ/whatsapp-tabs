/*
import sql from "mssql";
import { Client, User } from "../../models";

async function createClient(num) {
  const number = num.replace("whatsapp:+55", "");
  const prefix = number.substr(0, 3);
  const firstHalf = number.substr(3, 4);
  const lastHalf = number.substr(7);
  const formatted = `(${prefix})${firstHalf}-${lastHalf}`;
  const client = `
    SELECT TOP 1 * From D1_PESSOAS
    WHERE D1_FONE_CELULAR='${formatted}'
    OR D1_FONE_ADICIONAL='${formatted}'
    ORDER BY D1_CODIGO DESC
  `;
  const { recordset: clients } = await new sql.Request().query(client);
  if (!clients[0]) return Client.create({ number: num });
  const { D1_CODIGO, D1_RAZAO_SOCIAL: name } = clients[0];
  const os = `
    SELECT * FROM D64_OS
    WHERE D1_CODIGO='${D1_CODIGO}'
    ORDER BY D64_CODIGO DESC
  `;
  const { recordset } = await new sql.Request().query(os);
  return Client.create({
    number: num,
    name: name.toLowerCase(),
    os: recordset.map(record => record.D64_CODIGO)
  });
}

export async function recieveMessage(params, sender) {
  const number = params.From || params.to;

  let client = await Client.findOne({ number });
  if (!client) client = await createClient(number);

  return Message.create({
    messageSid: params.MessageSid || params.sid,
    from: sender || client._id,
    to: params.To ? undefined : client._id,
    body: params.Body || params.body,
    contentType: params.MediaContentType0 || "text/plain",
    media: params.MediaUrl0 || ""
  });
}

export async function setFuncionario(clientID, funcionarioID) {
  const newClient = await Client.findById(clientID);
  const user = await User.findById(funcionarioID);
  if (!user) newClient.funcionario = "";
  if (user.statys === "online") newClient.funcionario = user._id;
  await newClient.save();
  return newClient;
}
*/

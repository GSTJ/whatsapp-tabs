/* eslint-disable no-param-reassign */
import dotenv from "dotenv";
import twillio from "twilio";
import { Client, File, User, UserMessage, ClientMessage } from "../../models";

dotenv.config();
const { ACCOUNT_SID, AUTH_TOKEN, TWILLIO_NUMBER } = process.env;
const twillioClient = twillio(ACCOUNT_SID, AUTH_TOKEN);

export default {
  sendClientMessage: async (root, { message }, my) => {
    const client = await Client.findById(message.to);
    if (!client) throw new Error("Target not found.");

    const { media, contentType, ...rest } = message;

    // Adciona o cliente à lista "privada"
    const me = await User.findById(my._id);
    const exists = me.conversations.indexOf(client._id);
    if (exists === -1) {
      me.conversations.push(client._id);
      me.save();
    }
    // Envia a mensagem para o Twillio
    const { sid: messageSid } = await twillioClient.messages.create({
      ...rest,
      mediaUrl: media,
      to: `whatsapp:${client.number}`,
      from: TWILLIO_NUMBER
    });

    if (!messageSid) throw new Error("Something went wrong with Twillio.");
    // Salva o objeto na DB
    return ClientMessage.create({
      ...rest,
      from: my._id,
      messageSid,
      contentType,
      media
    });
  },
  sendUserMessage: async (root, { message }, my) => {
    const user = await User.findById(message.to);
    if (!user) throw new Error("Target not found.");

    const { media, contentType, ...rest } = message;
    return UserMessage.create({
      ...rest,
      from: my._id,
      contentType,
      media
    });
  },
  uploadFile: async (root, args) => File.create(args.file),
  createClient: async (root, args) => Client.create(args),
  unmarkClient: async (root, { client }, my) => {
    const me = await User.findById(my._id);

    const index = me.conversations.indexOf(client._id);
    if (index !== -1) throw new Error("Client not assigned.");

    me.conversations.splice(index, 1);
    await me.save();
  },
  fowardClient: async (root, { client, to }) => {
    const target = await User.findById(to);
    if (target.status !== "online") throw new Error("User unavailable.");

    const index = target.conversations.indexOf(client._id);
    if (index !== -1) return;

    target.conversations.push(client._id);
    await target.save();
  }
};

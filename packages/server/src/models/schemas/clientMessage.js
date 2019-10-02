import Mongoose, { Schema } from "mongoose";
import { clientMessage } from "../plugins";

const { Types } = Schema;

export const schema = {
  from: {
    type: Types.ObjectId,
    required: true
  },
  to: Types.ObjectId,
  body: String,
  media: String,
  messageSid: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: "sending"
  },
  contentType: {
    type: String,
    default: "text/plain"
  }
};

const model = Mongoose.model("client_messages", schema);

model.plugin(clientMessage);

export default model;

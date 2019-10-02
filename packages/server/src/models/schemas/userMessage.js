import Mongoose, { Schema } from "mongoose";
import { userMessage } from "../plugins";

const { Types } = Schema;

export const schema = {
  from: {
    type: Types.ObjectId,
    required: true,
    ref: "users"
  },
  to: {
    type: Types.ObjectId,
    required: true,
    ref: "users"
  },
  body: String,
  media: String,
  status: {
    type: String,
    enum: ["sending", "failed", "sent"],
    default: "sending"
  },
  contentType: {
    type: String,
    default: "text/plain"
  },
  conversations: {
    type: [
      {
        type: Types.ObjectId,
        ref: "clients"
      }
    ],
    default: []
  }
};

const model = Mongoose.model("user_messages", schema);

model.plugin(userMessage);

export default model;

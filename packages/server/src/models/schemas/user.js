import Mongoose, { Schema } from "mongoose";
import { user } from "../plugins";

const { Types } = Schema;

export const schema = {
  picture: String,
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["online", "offline", "busy"],
    default: "offline"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
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

const model = Mongoose.model("users", schema);

model.plugin(user);

export default model;

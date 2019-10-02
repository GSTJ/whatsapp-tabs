import { Schema } from "mongoose";

const { Types } = Schema;
const CLIENT_MESSAGE = {
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

export default CLIENT_MESSAGE;

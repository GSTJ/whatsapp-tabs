import Mongoose from "mongoose";
import { client } from "../plugins";

export const schema = {
  number: {
    type: String,
    required: true,
    set: num => num.replace("whatsapp:", ""),
    unique: [true, "Cliente já existente"]
  },
  name: {
    type: String,
    default: ""
  },
  picture: {
    type: String,
    default: ""
  }
};

const model = Mongoose.model("clients", schema);

model.plugin(client);

export default model;

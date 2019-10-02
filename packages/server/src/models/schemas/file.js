import Mongoose from "mongoose";
import fileType from "file-type";

export const schema = {
  base64: {
    type: String,
    validate: str => {
      const type = fileType(Buffer.from(str, "base64"));
      return /pdf|png|jpeg|jpg|mp3|mp4/.test(type.mime);
    },
    required: true
  },
  type: {
    type: String,
    validate: type => /pdf|png|jpeg|jpg|mp3|mp4/.test(type),
    required: true
  },
  name: {
    type: String,
    required: true
  }
};

const model = Mongoose.model("files", schema);

export default model;

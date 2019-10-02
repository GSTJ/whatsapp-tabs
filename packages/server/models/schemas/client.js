const CLIENT = {
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
export default CLIENT;

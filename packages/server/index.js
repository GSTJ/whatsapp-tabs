import mongoose from "mongoose";
import dotenv from "dotenv";
import app, { server } from "./app";
import { User } from "./models";
import Apollo, { Bind } from "./graphql";
// import Connection from "./database";

dotenv.config();
const { PORT, DEV_PORT, NODE_ENV, MONGO_URL } = process.env;
const production = NODE_ENV === "production";
const port = production ? PORT : DEV_PORT;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on("error", () => console.error("Error connecting to DB 😰"));
db.once("open", async () => {
  try {
    // Logout all users.
    await User.updateMany({}, { status: "offline" });
    Bind(app, server);
    await server.listen(port);
    // await Connection();
    console.log("Everything ready! 🚀");
    console.log(`Apollo: http://localhost:${port + Apollo.graphqlPath}`);
    console.log(
      `Subscriptions: ws://localhost:${port + Apollo.subscriptionsPath}`
    );
  } catch (err) {
    console.log("Unable to connect to server.");
  }
});

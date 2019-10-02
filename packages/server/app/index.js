import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import { Server } from "http";
import { Authentication, Files, Twillio } from "./routes";

const { NODE_ENV } = process.env;
const production = NODE_ENV === "production";

const app = express();

app.use(cookieParser());
app.use(express.json({ limit: "300mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(Authentication);
app.use(Twillio);
app.use(Files);

// Host react on production
if (production) {
  const build = path.join(__dirname, "../build");
  const index = path.join(build, "index.html");
  app.use(express.static(build));
  app.get("/*", (req, res) => res.sendFile(index));
}

export default app;

export const server = Server(app);

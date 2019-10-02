import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const { SAT_DATABASE, SAT_PASSWORD, SAT_SERVER, SAT_USER } = process.env;

export default () =>
  sql.connect({
    user: SAT_USER,
    password: SAT_PASSWORD,
    database: SAT_DATABASE,
    server: SAT_SERVER,
    connectionTimeout: 3000,
    requestTimeout: 3000,
    pool: {
      idleTimeoutMillis: 300000,
      max: 500000
    },
    options: {
      tdsVersion: "7_1"
    }
  });

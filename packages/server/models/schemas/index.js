import { Schema } from "mongoose";
import USER from "./user";
import USER_MESSAGE from "./userMessage";
import CLIENT from "./client";
import CLIENT_MESSAGE from "./clientMessage";
import FILE from "./file";

export const file = new Schema(FILE, { timestamps: true });
export const user = new Schema(USER, { timestamps: true });
export const client = new Schema(CLIENT, { timestamps: true });
export const userMessage = new Schema(USER_MESSAGE, { timestamps: true });
export const clientMessage = new Schema(CLIENT_MESSAGE, { timestamps: true });

import React from "react";
import { MsgAlert } from "components";
import moment from "moment";

function DateWrapper(props) {
  const { message, nextMessage } = props;
  if (!nextMessage) return <></>;
  const nextDay = new Date(nextMessage.createdAt);
  const currentDay = new Date(message.createdAt);
  if (moment(currentDay).isSame(nextDay, "day")) return <></>;
  return <MsgAlert>{moment(currentDay).fromNow()}</MsgAlert>;
}
export default DateWrapper;

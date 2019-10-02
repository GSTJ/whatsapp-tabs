import React from "react";
import { Separator } from "global_styles";
import { Profile, User, Username, Email } from "./styles";
import defaultPicture from "./resources/profile-default.png";

export default props => {
  const { picture, email, name, status, ...rest } = props;
  return (
    <Profile {...rest}>
      <User status={status} src={picture || defaultPicture} />
      <Separator width="10" />
      <div style={{ display: "grid" }}>
        <Username>{name}</Username>
        <Email>{email}</Email>
      </div>
    </Profile>
  );
};

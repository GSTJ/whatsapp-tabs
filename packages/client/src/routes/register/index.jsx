import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Register } from "authentication";
import { useSnackbar } from 'notistack';
import { GoogleLogin } from "react-google-login";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaterialButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Separator } from "global_styles";
import { RegisterContainer, InnerContaner } from "./styles";
import { ReactComponent as WhatsappLogo } from "./resources/whatsapp-logo.svg";

function RegisterFunction() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSuccess = ({ tokenId }) =>
    Register({ username, password, tokenId }).catch(err => enqueueSnackbar(err, { variant: "error" }));;

  return (
    <RegisterContainer>
      <WhatsappLogo width={70} height={70} />
      <InnerContaner>
        <h1>Registre-se</h1>
        <div>
          <section>
            <TextField
              id="outlined-required"
              label="Usuário"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              InputLabelProps={{ shrink: true }}
              margin="normal"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </section>
          <section>
            <TextField
              id="outlined-required"
              label="Senha"
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              InputLabelProps={{ shrink: true }}
              style={{ width: "100%" }}
              margin="normal"
              variant="outlined"
            />
          </section>
        </div>
        <GoogleLogin
          clientId="584171373536-1hnha72magullogguvr3v71cmmlq7mnh.apps.googleusercontent.com"
          buttonText="Registrar"
          onSuccess={handleSuccess}
          onFailure={response => enqueueSnackbar(response.error, { variant: "error" })}
          cookiePolicy="single_host_origin"
        />
        <Separator />
        <MaterialButton component={Link} to="/" variant="contained" color="primary">
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 10 }} />
          voltar
          </MaterialButton>
      </InnerContaner>
    </RegisterContainer>
  );
}
export default RegisterFunction;

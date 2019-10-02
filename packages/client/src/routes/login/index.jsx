import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Authenticate, loginWithGoogle } from "authentication";
import MaterialButton from "@material-ui/core/Button";
import { useSnackbar } from 'notistack';
import { GoogleLogin } from "react-google-login";
import { faUserCircle, faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "global_styles";
import { ReactComponent as WhatsappLogo } from "./resources/whatsapp-logo.svg";
import { Login, InnerContaner } from "./styles";

export default function LoginFunction() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const authenticate = e => {
    e.preventDefault();
    Authenticate(username, password).catch(err => enqueueSnackbar(err, { variant: "error" }));
  };

  return (
    <Login>
      <WhatsappLogo width={70} height={70} />
      <InnerContaner>
        <h1>Autentique-se</h1>
        <form onSubmit={authenticate}>
          <section>
            <TextField
              id="outlined-required"
              label="Usuário"
              value={username}
              onChange={e => setUsername(e.target.value)}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </section>
          <section>
            <TextField
              id="outlined-required"
              label="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              InputLabelProps={{ shrink: true }}
              style={{ width: "100%" }}
              margin="normal"
              variant="outlined"
            />
          </section>
          <GoogleLogin
            clientId="584171373536-1hnha72magullogguvr3v71cmmlq7mnh.apps.googleusercontent.com"
            buttonText="Entre com o Google"
            onSuccess={loginWithGoogle}
            onFailure={() => false}
            cookiePolicy="single_host_origin"
          />
          <Separator height={10} />
          <MaterialButton type="submit" variant="contained" color="primary">
            <FontAwesomeIcon icon={faFingerprint} style={{ marginRight: 10 }} />
            Entrar
          </MaterialButton>
          <Separator height={10} />
          <MaterialButton component={Link} to="/register" variant="contained" color="secondary">
            <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: 10 }} />
            Registre-se
          </MaterialButton>
        </form>
      </InnerContaner>
    </Login>
  );
}

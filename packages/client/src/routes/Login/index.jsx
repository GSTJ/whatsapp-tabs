import React from 'react'
import { Authenticate } from 'authentication'
import { GoogleLogin } from 'react-google-login'
import { ReactComponent as WhatsappLogo } from './resources/whatsapp-logo.svg'
import { Login, InnerContaner } from './styles'

export default function LoginFunction() {
  return (
    <Login>
      <WhatsappLogo width={70} height={70} />
      <InnerContaner>
        <h1>Autentique-se</h1>
        <div style={{ margin: 25 }}>
          <GoogleLogin
            clientId="584171373536-1hnha72magullogguvr3v71cmmlq7mnh.apps.googleusercontent.com"
            buttonText="Entre com o Google"
            onSuccess={Authenticate}
            onFailure={() => false}
            cookiePolicy="single_host_origin"
          />
        </div>
      </InnerContaner>
    </Login>
  )
}

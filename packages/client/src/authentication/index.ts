import axios, { AxiosInstance, AxiosResponse } from 'axios'

const Axios: AxiosInstance = axios.create({
  baseURL: true //process.env.NODE_ENV === 'production'
    ? 'https://whatsapp-tabs.herokuapp.com/'
    : 'http://localhost:8087/'
})

export interface Props {
  username: string
  password: string
}

export async function Authenticate(props: Props): Promise<void> {
  const { data }: AxiosResponse = await Axios.post('/sessions', props)
  localStorage.setItem('token', data.token)
  window.location.reload()
}

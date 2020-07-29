import axios from 'axios'

const Axios = axios.create({
  baseURL: true //process.env.NODE_ENV === 'production'
    ? 'https://whatsapp-tabs.herokuapp.com/'
    : 'http://localhost:8087/'
})

export async function Authenticate(props) {
  const { data } = await Axios.post('/sessions', props)
  localStorage.setItem('token', data.token)
  window.location.reload()
}

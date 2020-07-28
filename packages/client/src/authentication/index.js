import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:8087/'
})

export async function Authenticate(username, password) {
  const { data } = await Axios.post('/authenticate', { username, password })
  localStorage.setItem('token', data.token)
  window.location.reload()
}
export async function loginWithGoogle(props) {
  const { data } = await Axios.post('/googleAuth', props)
  localStorage.setItem('token', data.token)
  window.location.reload()
}
export async function Register(props) {
  const { data } = await Axios.post('/register', props)
  localStorage.setItem('token', data.token)
  window.location.reload()
}

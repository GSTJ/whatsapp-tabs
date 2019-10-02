import axios from "axios";

export async function Authenticate(username, password) {
  const { data } = await axios.post("/authenticate", { username, password });
  if (data.error) throw data.error;
  window.location.reload();
  return data;
}
export async function loginWithGoogle(props) {
  const { data } = await axios.post("/googleAuth", props);
  if (data.error) throw data.error;
  window.location.reload();
  return data;
}
export async function Register(props) {
  const { data } = await axios.post("/register", props);
  if (data.error) throw data.error;
  window.location.reload();
  return data;
}

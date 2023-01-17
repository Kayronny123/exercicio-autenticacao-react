import axios from "axios";

const login = () => {
  const url = `https://cookenu-api.herokuapp.com/user/login`;
  const body = {
    email: "rogerioozaru@hotmail.com",
    password: "123456789"
  };
  axios
    .post(url, body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export default login;

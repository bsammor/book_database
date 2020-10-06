import { LoginForm } from "react-form-login";
import React from "react";
import axiosInstance from "../utils/axiosInstance";

//UseEffect to authitnciate user on reload, every refresh state is lost

function LoginView(props) {
  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return (
      <LoginForm
        onSubmit={(username, password, isRemember) => {
          axiosInstance
            .post("http://localhost:8000/users/auth/", {
              username: username,
              password: password,
            })
            .then((res) => {
              localStorage.setItem("accessToken", res.data.access);
              localStorage.setItem("refreshToken", res.data.refresh);
              props.history.replace("/register");
            })
            .catch((err) => {
              console.log("Invalid Credentials");
            });
        }}
      />
    );
  }
  props.history.replace("/register");

  return <div></div>;
}

export default LoginView;

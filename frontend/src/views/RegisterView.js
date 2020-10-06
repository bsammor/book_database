import React from "react";

function RegisterView() {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return <div>Logged in</div>;
  }
  return <div> Logged out</div>;
}

export default RegisterView;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props: { text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>{props.text}</button>;
};

export default LoginButton;
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./components/AuthContex";
import "./login.css";

const Login = () => {
  
  const { signInWithGoogle, signed, signInEmail } = useContext(AuthContext);

  async function loginGoogle() {
    await signInWithGoogle();
  }
  if (!signed) {
    return signInEmail();
  } else {
    return <Navigate to="/MainGameWindow" />;
  }
};

export default Login;
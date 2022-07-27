import { useContext } from "react";
import { AuthContext } from "./components/BackgrondTasks/AuthContex";
import { UpdateUserId } from "./components/BackgrondTasks/PreGameInitialization";
import "./components/Styles/login.css";

const Login = () => {

  const { signed, signInEmail } = useContext(AuthContext);

  if (!signed) {
    return signInEmail();

  } else {
    return <UpdateUserId />
  }

};

export default Login;
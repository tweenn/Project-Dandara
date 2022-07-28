import { useContext, useEffect } from "react";
import { AuthContext } from "./components/BackgrondTasks/AuthContex";
import { UpdateUserId } from "./components/BackgrondTasks/PreGameInitialization";
import "./components/Styles/login.css";

const Login = () => {

  const { signed, signInEmail2 } = useContext(AuthContext);

  const width = window.innerWidth;

  const checkOrientation = () => {
    if (width < 450) {
      return (
        <div className='fullscreencell'>
          <h4 className='virar'>Vire seu celular</h4>
          <img src="../img/cellphone.png" alt="" id="cellphone" />
        </div>
      )
    }
  }
  useEffect(() => {
    checkOrientation();
  }, [width])

  if (!signed) {
    return signInEmail2();

  } else {
    return <UpdateUserId />
  }

};

export default Login;
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase-config";
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContex';
import { UserContext } from './UserDataContext';
import { useNavigate } from 'react-router-dom';
import "../Styles/login.css";

export default function SetNewPlayerName() {
    const auth = getAuth(app);
    const { setEmail, setPassword, email, password } = useContext(AuthContext);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const createUserHandler = async (e) => {
        e.preventDefault();
        //usuario nao existe, criando conta no firebase
        const user = await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/MainMenuRegistered');
            })
            .catch((error) => {
                setError(true);
            });


    }
    return <div className="login">
        <form onSubmit={createUserHandler}>
            <input type="email" placeholder="Digite seu email:" onChange={event => setEmail(event.target.value)} required />
            <input type="password" placeholder="Digite sua senha:" onChange={event => setPassword(event.target.value)} required />
            <button type="submit">Registrar</button>
            {error && <span className="spanLogin">E-mail já existente e/ou E-mail/Senha inválidos.</span>}
        </form>
    </div>
}

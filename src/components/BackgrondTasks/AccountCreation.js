import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase-config";
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContex';
import { useNavigate, Link } from 'react-router-dom';
import "../Styles/login.css";
import click from "../../sounds/click.mp3";

export default function SetNewPlayerName() {
    const auth = getAuth(app);
    const { setEmail, setPassword, email, password } = useContext(AuthContext);
    const [error, setError] = useState(false);

    const width = window.innerWidth;

    const navigate = useNavigate();

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
            <button onClick={() => new Audio(click).play()} type="submit">Registrar</button>
            {error && <span className="spanLogin">E-mail já existente e/ou E-mail/Senha inválidos.</span>}
        </form>
        <br />
        <Link to="/MainGameWindow">
            <button onClick={() => new Audio(click).play()}>
                Voltar
            </button>
        </Link>
    </div>
}

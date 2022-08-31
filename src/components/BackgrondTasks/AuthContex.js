import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";
import { app } from "./firebase-config";
import { Navigate, Link } from "react-router-dom";
import click from "../../sounds/click.mp3";
import ReactPlayer from 'react-player'
import intro from "../../videos/Intro.mp4";

const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
            if (sessionToken && sessionUser) {
                setUser(sessionUser);
                let userParsed = JSON.parse(user);
                setUser(userParsed);
            }
        }
        loadStorageAuth();
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                const token = userCredential.accessToken;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));

            })
            .catch((error) => {
                setError(true);
            });
    }

    const signInEmail = () => {
        return <div className="loginWrapper">
            <div className="login">
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Digite o seu e-mail." onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Digite a sua senha." onChange={e => setPassword(e.target.value)} />
                    <button onClick={() => new Audio(click).play()} type="submit">Entrar</button>
                    {error && <span className="spanLogin">E-mail/Senha inválidos.</span>}
                </form>
                <Link to="/AccountCreation">
                    <button onClick={() => new Audio(click).play()}>Criar nova conta</button>
                </Link>
                <br />
                <button onClick={() => { signInWithGoogle(); new Audio(click).play() }}>Entrar com o Google</button>
                <button onClick={() => { signInFacebook(); new Audio(click).play() }}>Entrar com o Facebook</button>
            </div>
        </div>
    };

    const signInEmail2 = () => {
        return <div className="loginWrapper">
            <div className="login">
                <h3>Conta criada com sucesso!</h3>
                <h3>Favor efetuar o login:</h3>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Digite o seu e-mail." onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Digite a sua senha." onChange={e => setPassword(e.target.value)} />
                    <button onClick={() => new Audio(click).play()} type="submit">Entrar</button>
                    {error && <span className="spanLogin">E-mail/Senha inválidos.</span>}
                </form>
            </div>
        </div>
    };

    const signInWithGoogle = () => {

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));


            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    };

    const signInFacebook = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider2)
            .then((result) => {
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(error);

            });
    }

    function signOut() {
        sessionStorage.clear()
        setUser(null);

        return <Navigate to='/' />
    }


    return (
        <AuthContext.Provider

            value={{ signInWithGoogle, signed: !!user, user, signOut, auth, handleLogin, signedEmail: !!user, signInEmail, signInEmail2, setEmail, setPassword, password, email }}>
            {children}

        </AuthContext.Provider>
    )
};


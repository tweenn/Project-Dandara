import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase-config";
import { Navigate } from "react-router-dom";


const provider = new GoogleAuthProvider();

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState("");

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
                // navigate("/MainGameWindow");
            })
            .catch((error) => {
                setError(true);
            });
    }

    const signInEmail = () => {
        return <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Digite o seu e-mail." onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Digite a sua senha." onChange={e => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
                {error && <span>E-mail/Senha inválidos.</span>}
            </form>
            <br />
            <button onClick={() => signInWithGoogle()}>Entrar com o Google</button>
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

    function signOut() {
        sessionStorage.clear()
        setUser(null);

        return <Navigate to='/' />
    }


    return (
        <AuthContext.Provider

            value={{ signInWithGoogle, signed: !!user, user, signOut, auth, handleLogin, signedEmail: !!user, signInEmail }}>
            {children}

        </AuthContext.Provider>
    )
};


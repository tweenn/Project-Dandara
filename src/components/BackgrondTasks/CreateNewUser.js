import { db } from "./firebase-config";
import { setDoc, doc } from 'firebase/firestore';
import { useContext } from 'react';
import { AuthContext } from './AuthContex';
import { UserContext } from './UserDataContext';
import { useNavigate } from 'react-router-dom';
import "../Styles/login.css";

export const SetNewPlayerName = () => {
    const { user } = useContext(AuthContext);
    const { setMoney, setPlayerName, playerName, setId, setCurrentQuest } = useContext(UserContext);

    const navigate = useNavigate();

    const createUserHandler = async (e) => {
        e.preventDefault();
        //usuario nao existe, criando entrada no firebase
        await setDoc(doc(db, "users", user.email), {
            name: playerName,
            money: 1000,
            email: user.email,
            quest: 1,
            disabledSede: false,
        });
        setId(user.email);
        setMoney(1000);
        setCurrentQuest(1);
        navigate('/MainGameWindow');
    }
    return <div className="login">
        <form onSubmit={createUserHandler}>
            <h2>Escolha um nome para seu personagem:</h2>
            <input type="text" placeholder="Nome:" onChange={event => setPlayerName(event.target.value)} required />
            <button type="submit">Jogar!</button>
        </form>
    </div>
}

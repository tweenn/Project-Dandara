import { db } from "../firebase-config";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { React, useContext, useState, createContext } from 'react';
import { AuthContext } from './AuthContex';

const userCollectionRef = collection(db, "users");

export const UserContext = createContext({})

export const UserDataContext = ({ children }) => {

    const { user, signed } = useContext(AuthContext);
    const [id, setId] = useState('0');
    const [money, setMoney] = useState('');
    const [playerName, setPlayerName] = useState();

    if (signed) {

        const q = query(userCollectionRef, where("email", "==", user.email))


        getDocs(q)
            .then((snapshot) => {
                let userData = []
                snapshot.docs.forEach((doc) => {
                    userData.push({ ...doc.data(), id: doc.id })
                    setId(doc.id);
                    setMoney(doc.data().money);
                    setPlayerName(doc.data().name);
                })
                if (userData.length > 0) {

                } else {
                    const createUser = async () => {
                        await addDoc(userCollectionRef, { name: user.displayName, money: Number(money), email: user.email })
                    };
                    createUser();
                    getDocs(q)
                        .then((snapshot) => {
                            let userData = []
                            snapshot.docs.forEach((doc) => {
                                userData.push({ ...doc.data(), id: doc.id })
                                setId(doc.id);
                                setMoney(doc.data().money);
                                setPlayerName(doc.data().name);
                            })
                        })
                }
            })
    }

    return (
        <UserContext.Provider

            value={{ id, money, playerName, setMoney }}>
            {children}

        </UserContext.Provider>
    )
}

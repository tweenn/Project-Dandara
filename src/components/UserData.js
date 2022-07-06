import { db } from "../firebase-config";
import { collection, doc, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from './AuthContex'

const userCollectionRef = collection(db, "users");

function UserData() {

    const [money, setMoney] = useState('0');
    const { user } = useContext(AuthContext);


    const checkData = async () => {
        const q = query(userCollectionRef, where("email", "==", user.email));

        getDocs(q)
            .then((snapshot) => {
                let userExists = []
                snapshot.docs.forEach((doc) => {
                    userExists.push({ ...doc.data(), id: doc.id })
                })
                if (userExists.length > 0) {
                    console.log("user exists");
                } else {
                    const createUser = async () => {
                        await addDoc(userCollectionRef, { name: user.displayName, money: money, email: user.email })
                    };
                    createUser();
                }
            })
    }
    checkData();

}

export default UserData;
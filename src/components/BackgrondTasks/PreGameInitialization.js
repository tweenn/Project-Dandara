import { db } from "./firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import React, { useContext } from "react";
import { UserContext } from './UserDataContext';
import { AuthContext } from './AuthContex';
import { UserDataInit } from "./UserDataInitialization";

const userCollectionRef = collection(db, "users");

export const UpdateUserId = () => {

    const { user } = useContext(AuthContext);
    const { setId } = useContext(UserContext);

    const q = query(userCollectionRef, where("email", "==", user.email));

    getDocs(q)
        .then((snapshot) => {
            let userData = []

            snapshot.docs.forEach((doc) => {
                userData.push({ ...doc.data(), id: doc.id })
                setId(doc.id);

            })
        })
    return <UserDataInit />
}
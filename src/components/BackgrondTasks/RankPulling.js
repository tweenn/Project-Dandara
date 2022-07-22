import { db } from "./firebase-config";
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { useContext, useEffect } from "react";
import { UserContext } from './UserDataContext';

const userCollectionRef = collection(db, "users");

export const RankPulling = () => {

    const { setRank, id, setTotalPlayers } = useContext(UserContext);

    const q = query(userCollectionRef, orderBy('followers'), limit(100));

    useEffect(() => {
        const getRank = async () => {
            const data = await getDocs(userCollectionRef);
            const users = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            const emails = users.map(el => el.email)
            const position = emails.indexOf(id)
            setRank(position + 1);
            setTotalPlayers(users.length);
        };
        getRank();
    }, []);

}
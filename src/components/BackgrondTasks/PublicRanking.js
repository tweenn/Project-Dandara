import { motion } from "framer-motion";
import { db } from "./firebase-config";
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { useContext, useEffect } from "react";
import { UserContext } from './UserDataContext';
import click from "../../sounds/click.mp3";
import { Link } from 'react-router-dom';

const userCollectionRef = collection(db, "users");

function PublicRanking() {

    const q = query(userCollectionRef, orderBy("followers", "desc"), limit(100));

    const { setRankingAll, rankingAll } = useContext(UserContext);

    useEffect(() => {
        const getRank = async () => {
            const data = await getDocs(q);
            const users = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setRankingAll(users);

        }
        getRank();
    }, []);

    if (rankingAll) {

        return (
            <motion.div className="ranking"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <h1>RANKING</h1>
                <div className="rankingSections">
                    <h3 className="leftRankTitle">Nome</h3>
                    <h3 className="centerRank">Seguidores</h3>
                    <h3>Respeito</h3>
                </div>
                <ul className="rankingscroll">
                    {rankingAll.map((rankingAll) => {
                        return (
                            <div key={rankingAll.email}>
                                <li className="rankingSections">
                                    <img src={rankingAll.avatarref ? rankingAll.avatarref : '../../img/defaultProfile.png'} className="rankingAvatar" alt="profilePicture" />
                                    <h4 className="leftRank">{rankingAll.name}</h4>
                                    <h4 className="centerRank">{rankingAll.followers}</h4>
                                    <h4 className="rightRank">{rankingAll.respect}</h4>
                                </li>
                            </div>
                        )
                    })}
                </ul>
                <Link to="/">
                    <button onClick={() => { new Audio(click).play(); }}>Jogar!</button>
                </Link>
            </motion.div>
        )
    }
};



export default PublicRanking
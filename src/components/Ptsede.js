import { db } from "../firebase-config";
import styles from './insideplace.module.css'
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { UserContext } from './UserDataContext';
import { doc, updateDoc } from 'firebase/firestore';


function Ptsede() {

    const { money, setMoney, id } = useContext(UserContext)

    const moneyRef = doc(db, 'users', id)

    let newMoney = money + 1000

    const updateMoney = async (id, money) => {
        await updateDoc(moneyRef, {
            money: newMoney
        })
    };

    return (
        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <p>Sede do Partido</p>
            <p>Orcamento: {money}</p>
            <button onClick={() => { updateMoney(); setMoney(newMoney); }}>
                Receber Orcamento
            </button><br />
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>
        </motion.div>
    )
}

export default Ptsede
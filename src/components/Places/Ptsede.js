import { db } from "../BackgrondTasks/firebase-config";
import styles from '../Styles/insideplace.module.css'
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { UserContext } from '../BackgrondTasks/UserDataContext';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { SpeechBubbleContext } from "../BackgrondTasks/SpeechBubble";


function Ptsede() {

    const { money, setMoney, id, currentQuest, setCurrentQuest } = useContext(UserContext)
    const [disable, setDisable] = useState(false);

    const Ref = doc(db, 'users', id)

    let newMoney = money + 1000

    const updateMoney = async (id, money) => {
        await updateDoc(Ref, {
            money: newMoney
        })
    };

    const updateDisabledSede = async (id, disabledSede) => {
        await updateDoc(Ref, {
            disabledSede: true
        })
    };

    onSnapshot(Ref, (doc) => {
        setDisable(doc.data().disabledSede);
    })

    const updateQuest = async (id, quest) => {
        if (currentQuest === 2) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
    }
    useEffect(() => {
        updateQuest();
    });

    return (
        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <h1>Sede do Partido</h1>
            <p>Seu Orçamento: {money}</p>
            <button disabled={disable} onClick={() => { updateDisabledSede(); updateMoney(); setMoney(newMoney); setDisable(true); }}>
                Receber Orçamento
            </button><br />
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>
            <SpeechBubbleContext />
        </motion.div>
    )
}

export default Ptsede
import { db } from "../BackgrondTasks/firebase-config";
import styles from '../Styles/insideplace.module.css'
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { UserContext } from '../BackgrondTasks/UserDataContext';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { SpeechBubbleContext } from "../BackgrondTasks/SpeechBubble";
import Countdown from 'react-countdown';


function Ptsede() {

    const { money, setMoney, id, currentQuest, setCurrentQuest, respect } = useContext(UserContext)
    const [disable, setDisable] = useState(false);
    const [countdownTimer, setCountdownTimer] = useState('');

    const Ref = doc(db, 'users', id)

    let newMoney = money + (1000 * respect)

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

    const reenableButton = async (id, disabledSede) => {
        setDisable(false);
        await updateDoc(Ref, {
            disabledSede: false
        })
    };

    const updateSedeCountdown = async (id, sedeCountdown) => {
        await updateDoc(Ref, {
            sedeCountdown: Date.now() + 86400000
        })
    };

    const ShowCountdown = () => {
        return (
            <Countdown Countdown date={countdownTimer} onComplete={reenableButton} daysInHours={true} className={styles.countdown} />
        )
    }

    const checkCountDown = () => {
        if (countdownTimer) {
            if (Date.now() >= countdownTimer) {
                reenableButton();
            }
        }
    }

    onSnapshot(Ref, (doc) => {
        setDisable(doc.data().disabledSede);
        setCountdownTimer(doc.data().sedeCountdown);
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
        checkCountDown();
    });

    return (
        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.wrapper}>
                <h1>Sede do Partido</h1>
                <div className={styles.headergrouped}>
                    <h4>Orçamento total: {money}</h4><br />
                    <h4>Nível de respeito: {respect}</h4><br />
                    <h4>Orçamento diário: {1000 * respect}</h4><br />
                </div>
                <div className={styles.grouped}>
                    <button disabled={disable} onClick={() => { updateDisabledSede(); updateSedeCountdown(); updateMoney(); setMoney(newMoney); setDisable(true); setCountdownTimer(Date.now() + 86400000) }}>
                        Receber Orçamento
                    </button><ShowCountdown /><br />
                </div>
                <h2>Criar Campanha Publicitária:</h2>
                <div className={styles.Campanha}>
                    <div>
                        <button>
                            Outdoors
                        </button>
                        <button>
                            Jornais e Revistas
                        </button>
                    </div>
                    <div>
                        <button>
                            Rádio
                        </button>
                        <button>
                            Redes Sociais
                        </button>
                    </div>
                    <div>
                        <button>
                            Televisão
                        </button>
                    </div>
                </div>
                <br />
                <Link to="/MainGameWindow">
                    <button>
                        Voltar
                    </button>
                </Link>
            </div>
            <SpeechBubbleContext />
        </motion.div>
    )
}

export default Ptsede
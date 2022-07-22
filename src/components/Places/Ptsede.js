import { db } from "../BackgrondTasks/firebase-config";
import styles from '../Styles/insideplace.module.css'
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { UserContext } from '../BackgrondTasks/UserDataContext';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { SpeechBubbleContext } from "../BackgrondTasks/SpeechBubble";
import Countdown from 'react-countdown';
import { CampaignCreation } from "../BackgrondTasks/CampaignCreation";
import { CampaignResults, UpdateStars } from "../BackgrondTasks/CampaignResultsPage";


function Ptsede() {

    const { money, setMoney, id, currentQuest, setCurrentQuest, respect, setCampaign, setCampaignCost, setActiveCampaign } = useContext(UserContext);
    const [disable, setDisable] = useState(false);
    const [disableCampaign, setDisableCampaign] = useState(false);
    const [countdownTimer, setCountdownTimer] = useState();
    const [countdownTimerCampaign, setCountdownTimerCampaign] = useState(null);

    const Ref = doc(db, 'users', id)

    let newMoney = money + (1000 * respect)

    const updateMoney = async (id, money) => await updateDoc(Ref, { money: newMoney })
    const updateDisabledSede = async (id, disabledSede) => await updateDoc(Ref, { disabledSede: true })
    const updateSedeCountdown = async (id, sedeCountdown) => await updateDoc(Ref, { sedeCountdown: (Date.now() + 86400000) })

    const reenableButton = async (id, disabledSede) => {
        setDisable(false);
        await updateDoc(Ref, {
            disabledSede: false
        })
    };

    const reenableButtonCampaign = async (id, disabledCampaign) => {
        setDisableCampaign(false);
        await updateDoc(Ref, {
            disabledCampaign: false
        })
    };


    const ShowCountdown = () => <Countdown Countdown date={countdownTimer} onComplete={reenableButton} daysInHours={true} className={styles.countdown} />
    const ShowCountdownCampaign = () => <Countdown Countdown date={countdownTimerCampaign} onComplete={reenableButtonCampaign} daysInHours={true} className={styles.countdown} />

    const checkCountDown = () => {
        if (countdownTimer) {
            if (Date.now() >= countdownTimer) {
                reenableButton();
            }
        }
    }

    const checkCountDownCampaign = () => {
        if (countdownTimerCampaign) {
            if (Date.now() >= countdownTimerCampaign) {
                reenableButtonCampaign();
            }
        }
    }

    onSnapshot(Ref, (doc) => {
        setDisable(doc.data().disabledSede);
        setDisableCampaign(doc.data().disabledCampaign);
        setCountdownTimer(doc.data().sedeCountdown);
        setCountdownTimerCampaign(doc.data().campaignCountdown);
        setActiveCampaign(doc.data().activeCampaign);
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

    useEffect(() => {
        checkCountDownCampaign();
    }, [countdownTimerCampaign]);

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
                        <button disabled={disableCampaign} onClick={() => { setCampaign('Outdoors'); setCampaignCost(1000); setDisableCampaign(true); }}>
                            Outdoors
                        </button>
                        <button disabled={disableCampaign} onClick={() => { setCampaign('Jornais e Revistas'); setCampaignCost(2000); setDisableCampaign(true); }}>
                            Jornais e Revistas
                        </button>
                    </div>
                    <div>
                        <button disabled={disableCampaign} onClick={() => { setCampaign('Internet'); setCampaignCost(4000); setDisableCampaign(true); }}>
                            Internet
                        </button>
                        <button disabled={disableCampaign} onClick={() => { setCampaign('Redes Sociais'); setCampaignCost(5000); setDisableCampaign(true); }}>
                            Redes Sociais
                        </button>
                    </div>
                    <div>
                        <button disabled={disableCampaign} onClick={() => { setCampaign('Rádio'); setCampaignCost(10000); setDisableCampaign(true); }}>
                            Rádio
                        </button>
                        <button disabled={disableCampaign} onClick={() => { setCampaign('Televisão'); setCampaignCost(50000); setDisableCampaign(true); }}>
                            Televisão
                        </button>
                    </div>
                </div>

                <ShowCountdownCampaign />

                <br />
                <Link to="/MainGameWindow">
                    <button>
                        Voltar
                    </button>
                </Link>
            </div>
            <SpeechBubbleContext />
            <CampaignCreation />
            <CampaignResults />
            <UpdateStars />
        </motion.div>
    )
}

export default Ptsede
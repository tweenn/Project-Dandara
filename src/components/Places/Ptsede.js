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
import { ShareCampaign } from "../BackgrondTasks/ShareCampaign";
import { RespectManager } from "../BackgrondTasks/RespectManager";

function Ptsede() {

    const { money, setMoney, id, currentQuest, setCurrentQuest, respect, setCampaign, setCampaignCost, setActiveCampaign, setSharePage } = useContext(UserContext);
    const [disable, setDisable] = useState(false);
    const [disableCampaign, setDisableCampaign] = useState(false);
    const [countdownTimer, setCountdownTimer] = useState();
    const [countdownTimerCampaign, setCountdownTimerCampaign] = useState(null);
    const [dailyMoney, setDailyMoney] = useState();

    const Ref = doc(db, 'users', id)

    const calcDailyMoney = () => {
        switch (respect) {
            case 1: setDailyMoney(1000); break;
            case 2: setDailyMoney(3000); break;
            case 3: setDailyMoney(5000); break;
            case 4: setDailyMoney(8000); break;
            case 5: setDailyMoney(13000); break;
            case 6: setDailyMoney(20000); break;
            case 7: setDailyMoney(30000); break;
            case 8: setDailyMoney(43000); break;
            case 9: setDailyMoney(59000); break;
            case 10: setDailyMoney(75000); break;
            case 11: setDailyMoney(100000); break;
            case 12: setDailyMoney(125000); break;
        }
    }

    const newMoney = money + dailyMoney

    const updateMoney = async () => await updateDoc(Ref, { money: newMoney })
    const updateDisabledSede = async () => await updateDoc(Ref, { disabledSede: true })
    const updateSedeCountdown = async () => await updateDoc(Ref, { sedeCountdown: (Date.now() + 86400000) })

    const reenableButton = async () => {
        setDisable(false);
        await updateDoc(Ref, {
            disabledSede: false
        })
    };

    const reenableButtonCampaign = async () => {
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

    const updateQuest = async () => {
        if (currentQuest === 3) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
        if (currentQuest === 11) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
    }

    const updateQuest2 = async () => {
        if (currentQuest === 5) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
        if (currentQuest === 13) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
    }

    useEffect(() => {
        updateQuest();
        checkCountDown();
        calcDailyMoney();
    });

    useEffect(() => {
        checkCountDownCampaign()
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
                    <h4>Orçamento diário: {dailyMoney}</h4><br />
                </div>
                <div className={styles.grouped}>
                    <button className="buttonMobile" disabled={disable} onClick={() => { updateDisabledSede(); updateSedeCountdown(); updateMoney(); setMoney(newMoney); setDisable(true); setCountdownTimer(Date.now() + 86400000); updateQuest2(); }}>
                        Receber Orçamento
                    </button><ShowCountdown />
                </div>
                <h2>Criar Campanha Publicitária:</h2>
                <div className={styles.Campanha}>
                    <div>
                        <button className="buttonMobile" disabled={disableCampaign} onClick={() => { setCampaign('Outdoors'); setCampaignCost(1000); setDisableCampaign(true); updateQuest2(); }}>
                            Outdoors
                        </button>
                        <button className="buttonMobile" disabled={disableCampaign} onClick={() => { setCampaign('Jornais e Revistas'); setCampaignCost(2000); setDisableCampaign(true); }}>
                            Jornais e Revistas
                        </button>
                    </div>
                    <div>
                        <button className="buttonMobile" disabled={disableCampaign} onClick={() => { setCampaign('Rádio'); setCampaignCost(4000); setDisableCampaign(true); }}>
                            Rádio
                        </button>
                        <button className="buttonMobile" disabled={disableCampaign} onClick={() => { setCampaign('Internet'); setCampaignCost(5000); setDisableCampaign(true); }}>
                            Internet
                        </button>
                    </div>
                    <div>
                        <button className="buttonMobile" disabled={disableCampaign} onClick={() => { setCampaign('Redes Sociais'); setCampaignCost(10000); setDisableCampaign(true); }}>
                            Redes Sociais
                        </button>
                        <button className="buttonMobile" disabled={disableCampaign} onClick={() => { setCampaign('Televisão'); setCampaignCost(50000); setDisableCampaign(true); }}>
                            Televisão
                        </button>
                    </div>
                </div>
                <ShowCountdownCampaign />
                <button onClick={() => setSharePage(true)}>Compartilhar Campanha</button>
                <Link to="/MainGameWindow">
                    <button className="buttonMobile">
                        Voltar
                    </button>
                </Link>
            </div>
            <CampaignCreation />
            <CampaignResults />
            <ShareCampaign />
            <SpeechBubbleContext />
            <UpdateStars />
            <RespectManager />
        </motion.div >
    )
}

export default Ptsede
import styles from '../Styles/insideplace.module.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useContext, useEffect } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from "../BackgrondTasks/firebase-config";
import { UserContext } from '../BackgrondTasks/UserDataContext';
import { SpeechBubbleContext } from "../BackgrondTasks/SpeechBubble";
import { FullscreenManager } from '../BackgrondTasks/FullscreenManager';
import click from "../../sounds/click.mp3";

function Hotel() {

    const { setGuest, guest, setMoney, money, guestCost, setGuestCost, id, currentQuest, setCurrentQuest } = useContext(UserContext);
    const UpdateMoney = async () => await updateDoc(Ref, { money: money - guestCost })
    const UpdateGuest = async () => await updateDoc(Ref, { guest: guest })
    const Ref = doc(db, 'users', id)

    useEffect(() => {
        if (guest) {
            UpdateMoney();
            setGuestCost(0);
            UpdateGuest();
        }
    }, [guestCost, guest])

    const updateQuest = async () => {
        if (currentQuest === 7) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
    }

    const updateQuest2 = async () => {
        if (currentQuest === 9) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
    }

    useEffect(() => {
        updateQuest();
    });

    if (window.innerWidth < 450) {
        return (
            <div className='fullscreencell'>
                <h4 className='virar'>Vire seu celular</h4>
                <img src="../img/cellphone.png" alt="" id="cellphone" />
            </div>
        )
    } else return (

        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.wrapper}>
                <h1>Hotel</h1>
                <div className={styles.box}>
                    <img src='../../img/localartists.png' alt="" className={styles.guests} />
                    <div className={styles.groupedHotel}>
                        <h3>Artista Local</h3>
                        <h4>Preço: 1000</h4>
                        <h4>Bônus: 2x</h4>
                    </div>
                    <button disabled={money < 1000 || guest != null} onClick={() => { new Audio(click).play(); setGuest(['Artista Local', 2]); updateQuest2(); setMoney(money - 1000); setGuestCost(1000); }}>Contratar</button>
                </div>
                <div className={styles.box}>
                    <img src='../../img/digitalinfluencer.png' alt="" className={styles.guests} />
                    <div className={styles.groupedHotel}>
                        <h3>Influecer Digital</h3>
                        <h4>Preço: 3000</h4>
                        <h4>Bônus: 4x</h4>
                    </div>
                    <button disabled={money < 3000 || guest != null} onClick={() => { new Audio(click).play(); setGuest(['Influencer Digital', 4]); setMoney(money - 3000); setGuestCost(3000); }}>Contratar</button>
                </div>
                <div className={styles.box}>
                    <img src='../../img/musician.png' alt="" className={styles.guests} />
                    <div className={styles.groupedHotel}>
                        <h3>Músico Famoso</h3>
                        <h4>Preço: 10000</h4>
                        <h4>Bônus: 8x</h4>
                    </div>
                    <button disabled={money < 10000 || guest != null} onClick={() => { new Audio(click).play(); setGuest(['Músico Famoso', 8]); setMoney(money - 10000); setGuestCost(10000); }}>Contratar</button>
                </div>
                <div className={styles.box}>
                    <img src='../../img/celebrity.png' alt="" className={styles.guests} />
                    <div className={styles.groupedHotel}>
                        <h3>Celebridade</h3>
                        <h4>Preço: 20000</h4>
                        <h4>Bônus: 16x</h4>
                    </div>
                    <button disabled={money < 20000 || guest != null} onClick={() => { new Audio(click).play(); setGuest(['Celebridade', 16]); setMoney(money - 20000); setGuestCost(20000); }}>Contratar</button>
                </div>



                <Link to="/MainGameWindow">
                    <button onClick={() => new Audio(click).play()}>
                        Voltar
                    </button>
                </Link>
            </div>
            <SpeechBubbleContext />
            <FullscreenManager />
        </motion.div >

    );
}

export default Hotel
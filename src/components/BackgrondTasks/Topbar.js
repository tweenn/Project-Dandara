import React, { useContext } from "react";
import styles from '../Styles/topbar.module.css';
import { UserContext } from "./UserDataContext";
import CountDownTimer from "@inlightmedia/react-countdown-timer"

function Topbar() {

    const { money, followers, respect, rank, totalPlayers } = useContext(UserContext)


    return (
        <div>
            <img src='../img/topbar.png' alt="" id="topbar" />
            <div className={styles.countdownbar}>
                <CountDownTimer shouldShowTimeUnits="true" shouldHidePrecedingZeros="true" dateTime="2022-10-02T06:00:00Z" />
            </div>
            <div className={styles.followersbar}>
                <p>{followers}</p>
            </div>
            <div className={styles.respectbar}>
                <p>{respect}</p>
            </div>
            <div className={styles.moneybar}>
                <p>{money}</p>
            </div>
            <div className={styles.rankbar}>
                <p>{rank}º/{totalPlayers}</p>
            </div>
        </div>
    );
}

export default Topbar

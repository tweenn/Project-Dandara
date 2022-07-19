import React, { useContext } from "react";
import styles from '../Styles/topbar.module.css';
import { UserContext } from "./UserDataContext";
import CountDownTimer from "@inlightmedia/react-countdown-timer"

function Topbar() {

    const { money } = useContext(UserContext)


    return (
        <div>
            <img src='../img/topbar.png' alt="" id="topbar" />
            <div className={styles.countdownbar}>
                <CountDownTimer shouldShowTimeUnits="true" shouldHidePrecedingZeros="true" dateTime="2022-10-02T06:00:00Z" />
            </div>
            <div className={styles.moneybar}>
                <p>{money}</p>
            </div>
        </div>
    );
}

export default Topbar

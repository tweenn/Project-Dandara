import React, { useContext } from "react";
import '../Styles/topbar.css';
import '../Styles/topbarmobile.css';
import { UserContext } from "./UserDataContext";
import CountDownTimer from "@inlightmedia/react-countdown-timer"

function Topbar() {

    const { money, followers, respect, rank, totalPlayers } = useContext(UserContext)

    return (
        <div>
            <img src='../img/topbar.png' alt="" id="topbar" />
            <div className='countdownbar'>
                <CountDownTimer shouldShowTimeUnits="true" shouldHidePrecedingZeros="true" dateTime="2022-10-02T06:00:00Z" />
            </div>
            <div className='followersbar'>
                <p>{followers}</p>
            </div>
            <div className='respectbar'>
                <p>{respect}</p>
            </div>
            <div className='moneybar'>
                <p>{money}</p>
            </div>
            <div className='rankbar'>
                <p>{rank}º/{totalPlayers}</p>
            </div>
        </div>
    );
}

export default Topbar

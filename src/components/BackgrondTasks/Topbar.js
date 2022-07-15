import React, { useContext } from "react";
import styles from '../Styles/topbar.module.css';
import { UserContext } from "./UserDataContext";

function Topbar() {

    const { money } = useContext(UserContext)


    return (
        <div>
            <img src='../img/topbar.png' alt="" id="topbar" />
            <div className={styles.moneybar}>
                <p>{money}</p>
            </div>
        </div>
    );
}

export default Topbar

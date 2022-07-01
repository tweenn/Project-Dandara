import React, { useContext } from "react";
import styles from './topbar.module.css';
import MoneyContext from './TopBarContext';

function Topbar() {

    const { money } = useContext(MoneyContext)

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

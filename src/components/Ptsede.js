import styles from './insideplace.module.css'
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import MoneyContext from './TopBarContext';

function Ptsede() {

    const { money, setMoney } = useContext(MoneyContext)

    return (
        <div className={styles.InsideP} >

            <p>Sede do Partido</p>
            <p>{money}</p>
            <button onClick={() => setMoney(parseInt(money) + 2000)}>
                Receber Orcamento
            </button><br></br>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>
        </div>
    )
}

export default Ptsede
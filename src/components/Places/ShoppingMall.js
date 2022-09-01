import styles from '../Styles/insideplace.module.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";
import React, { useContext } from "react";
import { UserContext } from "../BackgrondTasks/UserDataContext";
import SendPicture from "../BackgrondTasks/SendPicture";

function ShoppingMall() {

    const { setOpenSendPic, setPicOrigin } = useContext(UserContext)

    return (

        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>Shopping Center</h2>
            <div className='missions'>
                <h4>Sua missão aqui no Shopping é organizar uma atividade de rua em prol da nossa campanha: panfletagem, reúna grupos e divulgue nosso material!<br /><br /><h3>Vamos Dandarizar!</h3><br /><br />
                    Depois volte aqui e envie uma foto da sua ação e garanta sua recompensa de </h4> <h3>50000 créditos!</h3><br /><br />
            </div>
            <button onClick={() => { new Audio(click).play(); setOpenSendPic(true); setPicOrigin('Shopping'); }}>Enviar Foto</button>
            <Link to="/MainGameWindow">
                <button onClick={() => new Audio(click).play()}>Voltar</button>
            </Link>
            <SendPicture />
        </motion.div>

    );
}

export default ShoppingMall
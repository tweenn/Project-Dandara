import styles from '../Styles/insideplace.module.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";
import React, { useContext } from "react";
import { UserContext } from "../BackgrondTasks/UserDataContext";
import SendPicture from "../BackgrondTasks/SendPicture";

function University() {

    const { setOpenSendPic, setPicOrigin } = useContext(UserContext)

    return (

        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>Universidade Federal</h2>
            <div className='missions'>
                <h4>Bem vindo à nossa Universidadade! Sua missão aqui é reunir familiares, amigos e colegas para uma conversa pessoalmente com a <h3>Dandara!</h3><br /> <br />Ela irá bater um papo com todos e apresentar propostas e o projeto político.<br /><br />
                    E não se esqueça de tirar uma foto do encontro!<br />
                    Depois volte aqui para enviar a foto e garantir sua recompensa de </h4> <h3>50000 créditos!</h3>
            </div>
            <button onClick={() => { new Audio(click).play(); setOpenSendPic(true); setPicOrigin('University'); }}>Enviar Foto</button>
            <Link to="/MainGameWindow">
                <button onClick={() => new Audio(click).play()}>Voltar</button>
            </Link>
            <SendPicture />
        </motion.div>

    );
}

export default University
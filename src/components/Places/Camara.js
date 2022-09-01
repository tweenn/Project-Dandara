import styles from '../Styles/insideplace.module.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";
import React, { useContext } from "react";
import { UserContext } from "../BackgrondTasks/UserDataContext";
import SendPicture from "../BackgrondTasks/SendPicture";

function Camara() {

    const { setOpenSendPic, setPicOrigin } = useContext(UserContext)

    return (

        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>Câmara dos Deputados</h2>
            <div className='missions'>
                <h4>Bem vindo! Essa é uma de suas principais missões!<br /><br />
                    Você deve encontrar a <h3>Dandara</h3> pela cidade e tirar uma super foto com ela! (Dica: siga as suas redes socias, ela sempre posta os lugares por onde anda!)<br /><br />
                    Depois volte aqui para enviar a foto e garantir sua recompensa de <h3>50000 créditos!</h3><br /><br />
                    Ah! E não se esqueça de compartilhar também em suas redes socias e mostrar todo o seu apoio!</h4><br /><br />
            </div>
            <button onClick={() => { new Audio(click).play(); setOpenSendPic(true); setPicOrigin('Camara'); }}>Enviar Foto</button>
            <Link to="/MainGameWindow">
                <button onClick={() => new Audio(click).play()}>Voltar</button>
            </Link>
            <SendPicture />
        </motion.div>

    );
}

export default Camara
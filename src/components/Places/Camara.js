import styles from '../Styles/insideplace.module.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";

function Camara() {

    return (

        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <p>Câmara dos Deputados</p>
            <Link to="/MainGameWindow">
                <button onClick={() => new Audio(click).play()}>
                    Voltar
                </button>
            </Link>

        </motion.div>

    );
}

export default Camara
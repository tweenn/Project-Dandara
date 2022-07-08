import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Camara() {

    return (

        <motion.div className={styles.InsideP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <p>Câmara dos Deputados</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </motion.div>

    );
}

export default Camara
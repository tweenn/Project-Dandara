import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function Sports() {

    return (

        <div className={styles.InsideP}>
            <p>Centro de Esportes</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default Sports
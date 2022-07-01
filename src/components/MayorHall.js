import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function MayorHall() {

    return (

        <div className={styles.InsideP}>
            <p>Prefeitura</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default MayorHall
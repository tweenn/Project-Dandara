import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function Hotel() {

    return (

        <div className={styles.InsideP}>
            <p>Hotel</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default Hotel
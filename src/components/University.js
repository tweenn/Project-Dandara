import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function University() {

    return (

        <div className={styles.InsideP}>
            <p>Universidade Federal</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default University
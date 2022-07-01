import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function BusinessCenter() {

    return (

        <div className={styles.InsideP}>
            <p>Business Center</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default BusinessCenter
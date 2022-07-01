import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function Bank() {

    return (

        <div className={styles.InsideP}>
            <p>Banco</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default Bank
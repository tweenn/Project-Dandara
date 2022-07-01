import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function Apartment() {

    return (

        <div className={styles.InsideP}>
            <p>Seu Apartamento</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default Apartment
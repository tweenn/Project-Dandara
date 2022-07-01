import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function Camara() {

    return (

        <div className={styles.InsideP}>
            <p>Câmara dos Deputados</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default Camara
import styles from './insideplace.module.css'
import { Link } from 'react-router-dom';


function ShoppingMall() {

    return (

        <div className={styles.InsideP}>
            <p>Shopping Center</p>
            <Link to="/MainGameWindow">
                <button>
                    Voltar
                </button>
            </Link>

        </div>

    );
}

export default ShoppingMall
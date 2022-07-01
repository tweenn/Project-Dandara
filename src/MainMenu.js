import { Link } from 'react-router-dom';
import styles from './components/mainmenu.module.css'

function MainMenu() {

    return (

        <div className={styles.MainMenu}>

            <p>Menu Principal</p>
            <Link to="/MainGameWindow">
                <button>
                    Jogar
                </button>
            </Link>
        </div>
    )
}

export default MainMenu
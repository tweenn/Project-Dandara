import { useContext, useState } from 'react'
import { UserContext } from "./UserDataContext";

export const FullscreenManager = () => {

    const { fullscreen, setFullscreen, mobile } = useContext(UserContext);
    const [on, setOn] = useState(true);

    if (fullscreen === false) {
        const toggleFullSceen = () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        };
        return (
            <div className='overlayfullscreen'>
                <h3>Para uma melhor experiência, ative o modo Tela Cheia:</h3>
                <button onClick={() => { toggleFullSceen(); setFullscreen(true); }}>Tela Cheia</button>
            </div>
        )
    }
    if (fullscreen === true) {
        const toggleFullSceen = () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        };
        return (
            <button className='btnfullscreen' onClick={() => { toggleFullSceen(); setOn(!on) }}>◰ {on ? "Desativar " : "Ativar "}Modo Tela Cheia</button>
        )
    }

}
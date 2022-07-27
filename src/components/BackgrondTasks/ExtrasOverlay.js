import { useContext, useState } from 'react'
import { UserContext } from "./UserDataContext";

export const ExtrasOverlay = () => {

    const { billboard, fullscreen, setFullscreen } = useContext(UserContext);

    if (billboard) {
        return (
            <div className='extrasOverlay'>
                <img src='../../img/billboardfill.png' alt="" id="billboard" />
            </div>
        )
    }

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
                <button onClick={() => { toggleFullSceen(); setFullscreen(true); }}>
                    Tela Cheia
                </button>
            </div>
        )
    }
}
import { useContext, useState } from 'react'
import { UserContext } from "./UserDataContext";
import click from "../../sounds/click.mp3";

export const FullscreenManager = () => {

    const { fullscreen, setFullscreen } = useContext(UserContext);
    const [on, setOn] = useState(true);

    if (fullscreen === false) {
        // const toggleFullSceen = () => {
        //     if (!document.fullscreenElement) {
        //         document.documentElement.requestFullscreen();
        //     } else {
        //         if (document.exitFullscreen) {
        //             document.exitFullscreen();
        //         }
        //     }
        // };
        if (window.innerWidth < 450) {
            return (
                <div className='overlayfullscreenupright'>
                    <h3 className='h3upright'>Para uma melhor experiência, ative o modo Tela Cheia:</h3>
                    <h4 className='h4upright'>(Também utilize seu celular na horizontal)</h4>
                    <button onClick={() => { new Audio(click).play(); setFullscreen(true); }}>Tela Cheia</button>
                </div>
            )
        } else if (window.innerWidth < 950) return (
            <div className='overlayfullscreen'>
                <h3>Para uma melhor experiência, ative o modo Tela Cheia:</h3>
                <h4>(Também utilize seu celular na horizontal)</h4>
                <button onClick={() => { new Audio(click).play(); setFullscreen(true); }}>Tela Cheia</button>
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
        if (window.innerWidth < 950) return (
            <button className='btnfullscreen' onClick={() => { new Audio(click).play(); toggleFullSceen(); setOn(!on) }}>◰ {on ? "Desativar " : "Ativar "}Modo Tela Cheia</button>
        )
    }

}
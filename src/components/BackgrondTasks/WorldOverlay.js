import React, { useContext } from "react";
import { UserContext } from "./UserDataContext";

export const WorldOverlay = () => {

    const { mobile } = useContext(UserContext)

    if (window.innerWidth <= 950 && window.innerWidth > 450 || mobile) {

        return (
            <>
                <img src='../img/overlay_mobile.png' alt="" id="overlay" />
                <img src='../img/bgcity_mobile.png' alt="" id="bgcity" />
            </>
        )
    }
    if (window.innerWidth < 450) {
        return (
            <div className='fullscreencell'>
                <h4 className='virar'>Vire seu celular</h4>
                <img src="../img/cellphone.png" alt="" id="cellphone" />
            </div>
        )
    }
    else {

        return (
            <>
                <img src='../img/overlay.png' alt="" id="overlay" />
                <img src='../img/bgcity.png' alt="" id="bgcity" />
            </>
        )
    }
}
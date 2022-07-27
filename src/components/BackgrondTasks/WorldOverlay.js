import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserDataContext";

export const WorldOverlay = () => {

    const { mobile } = useContext(UserContext)

    console.log(mobile);

    if (window.innerWidth <= 950 && window.innerWidth > 450 || mobile) {

        return (
            <>
                <img src='../img/overlay_mobile.png' alt="" id="overlay" />
                <img src='../img/bgcity_mobile.png' alt="" id="bgcity" />
            </>
        )
    } else {

        return (
            <>
                <img src='../img/overlay.png' alt="" id="overlay" />
                <img src='../img/bgcity.png' alt="" id="bgcity" />
            </>
        )
    }
}
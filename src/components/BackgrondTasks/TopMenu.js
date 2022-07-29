import React, { useContext } from "react";
import { UserContext } from "./UserDataContext";
import { motion } from "framer-motion";
import { AuthContext } from './AuthContex'
import click from "../../sounds/click.mp3";

function TopMenu() {

    const { topMenuOpen, setRankingOpen, setTopMenuOpen, setSettingsOpen } = useContext(UserContext)
    const { signOut } = useContext(AuthContext)

    if (topMenuOpen) {

        return (
            <motion.div className="topMenu"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <button className="topMenuButtons">Seu Perfil</button>
                <button className="topMenuButtons" onClick={() => { new Audio(click).play(); setRankingOpen(true); setTopMenuOpen(false); }}>Ranking</button>
                <button className="topMenuButtons" onClick={() => { new Audio(click).play(); setTopMenuOpen(false); signOut(); }}>Sair</button>
            </motion.div>
        )


    }
}

export default TopMenu

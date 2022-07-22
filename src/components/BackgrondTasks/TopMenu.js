import React, { useContext } from "react";
import { UserContext } from "./UserDataContext";
import { motion } from "framer-motion";
import { AuthContext } from './AuthContex'

function TopMenu() {

    const { topMenuOpen, setRankingOpen, setTopMenuOpen } = useContext(UserContext)
    const { signOut } = useContext(AuthContext)

    if (topMenuOpen) {

        return (
            <motion.div className="topMenu"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <button className="topMenuButtons">Seu Perfil</button>
                <button className="topMenuButtons">Configurações</button>
                <button className="topMenuButtons" onClick={() => { setRankingOpen(true); setTopMenuOpen(false); }}>Ranking</button>
                <button className="topMenuButtons" onClick={() => signOut()}>Sair</button>
            </motion.div>
        )


    }
}

export default TopMenu

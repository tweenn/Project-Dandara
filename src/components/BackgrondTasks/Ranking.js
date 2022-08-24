import React, { useContext } from "react";
import { UserContext } from "./UserDataContext";
import { motion } from "framer-motion";
import { RespectManager } from "../BackgrondTasks/RespectManager";
import click from "../../sounds/click.mp3";

function Ranking() {

    const { rankingOpen, rankingAll, id, setRankingOpen } = useContext(UserContext)

    if (rankingOpen) {

        return (
            <motion.div className="ranking"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <h1>RANKING</h1>
                <div className="rankingSections">
                    <h3 className="leftRankTitle">Nome</h3>
                    <h3 className="centerRank">Seguidores</h3>
                    <h3>Respeito</h3>
                </div>
                <ul className="rankingscroll">
                    {rankingAll.map((rankingAll) => {
                        if (rankingAll.email === id) {
                            return (
                                <div key={id}>
                                    <li className="rankingSections">
                                        <h6 className="leftRank">{rankingAll.name}</h6>
                                        <h6 className="centerRank">{rankingAll.followers}</h6>
                                        <h6 className="rightRank">{rankingAll.respect}</h6>
                                    </li>
                                </div>
                            );
                        } else {
                            return (
                                <div key={rankingAll.email}>
                                    <li className="rankingSections">
                                        <h4 className="leftRank">{rankingAll.name}</h4>
                                        <h4 className="centerRank">{rankingAll.followers}</h4>
                                        <h4 className="rightRank">{rankingAll.respect}</h4>
                                    </li>
                                </div>
                            );
                        }
                    })}
                </ul>
                <div className="buttonVoltar" onClick={() => { setRankingOpen(false); }}>
                    <button onClick={() => new Audio(click).play()}>Voltar</button>
                </div>
                <RespectManager />
            </motion.div>
        )
    }
}

export default Ranking
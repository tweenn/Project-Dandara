import React, { useContext } from "react";
import { UserContext } from "./UserDataContext";
import { motion } from "framer-motion";

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
                    <h3>Nome</h3>
                    <h3 className="centerRank">Seguidores</h3>
                    <h3>Respeito</h3>
                </div>
                {rankingAll.map((rankingAll) => {
                    if (rankingAll.email === id) {
                        return (
                            <div>
                                <div className="rankingSections">
                                    <h6>{rankingAll.name}</h6>
                                    <h6 className="centerRank">{rankingAll.followers}</h6>
                                    <h6 className="centerRank2">{rankingAll.respect}</h6>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div>
                                <div className="rankingSections">
                                    <h4>{rankingAll.name}</h4>
                                    <h4 className="centerRank">{rankingAll.followers}</h4>
                                    <h4 className="centerRank2">{rankingAll.respect}</h4>
                                </div>
                            </div>
                        );
                    }
                })}
                <div className="buttonVoltar" onClick={() => { setRankingOpen(false); }}>
                    <button>Voltar</button>
                </div>
            </motion.div>
        )
    }
}

export default Ranking
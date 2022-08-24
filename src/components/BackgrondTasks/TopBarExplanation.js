import { useContext, useEffect } from "react";
import { db } from "../BackgrondTasks/firebase-config";
import { doc, updateDoc } from 'firebase/firestore';
import { UserContext, } from './UserDataContext';
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";

export const TopBarExplanationFront = () => {

    const { currentQuest, id } = useContext(UserContext);
    const questRef = doc(db, 'users', id)

    const updateQuest = async (id, quest) => {
        await updateDoc(questRef, {
            quest: currentQuest + 1
        })
    };

    if (currentQuest === 1) {
        return (
            <motion.div onClick={() => { new Audio(click).play(); updateQuest(); }} initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}>
                <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: .1 }} className='selector1'>
                    <h3 className="desc1">Tempo até as Eleições</h3>
                </motion.div>
                <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 1 }} className='selector2'>
                    <h3 className="desc2">Quantidade de Apoiadores da Campanha</h3>
                </motion.div>
                <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 2 }} className='selector3'>
                    <h3 className="desc3">Seu Nível de Reputação</h3>
                </motion.div>
                <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 3 }} className='selector4'>
                    <h3 className="desc4">Seus Créditos</h3>
                </motion.div>
                <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 4 }} className='selector5'>
                    <h3 className="desc5">Sua Posição no Ranking Geral</h3>
                </motion.div>
            </motion.div>
        );
    }
}

export const TopBarExplanationBack = () => {

    const { currentQuest, id, setCurrentQuest } = useContext(UserContext);

    const questRef = doc(db, 'users', id)

    const updateQuest = async (id, quest) => {
        await updateDoc(questRef, {
            quest: currentQuest + 1
        })
        setCurrentQuest(currentQuest + 1)
    };

    if (currentQuest === 1) {
        return (
            <div onClick={() => { updateQuest(); }} className='topbarexplanation'>
                <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 5 }} className='continuar'>
                    <h2 onClick={() => { new Audio(click).play(); updateQuest(); }}>Clique para continuar</h2>
                </motion.div>
            </div>
        );
    }
}
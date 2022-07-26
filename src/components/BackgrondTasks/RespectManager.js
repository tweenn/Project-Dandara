import { useContext, useEffect, useState } from "react";
import { db } from "../BackgrondTasks/firebase-config";
import { UserContext } from "./UserDataContext";
import { doc, updateDoc } from 'firebase/firestore';

export const RespectManager = () => {

    const { followers, setRespect, id, respect, showLevelOnce, setShowLevelOnce } = useContext(UserContext)
    const [showLevelUp, setShowLevelUp] = useState(false);

    const Ref = doc(db, 'users', id)

    const updateRespect = async () => respect ? await updateDoc(Ref, { respect: respect }) : console.log();
    const updateShowLevelOnce = async () => {
        if (showLevelOnce) {
            await updateDoc(Ref, { showlevelonce: showLevelOnce + 1 });
            setShowLevelOnce(showLevelOnce + 1);
        }
    }

    const calcRespect = () => {
        if (followers >= 300 && followers < 1500) setRespect(2); updateRespect(); setShowLevelUp(true);
        if (followers >= 1500 && followers < 3500) setRespect(3); updateRespect(); setShowLevelUp(true);
        if (followers >= 3500 && followers < 6000) setRespect(4); updateRespect(); setShowLevelUp(true);
        if (followers >= 6000 && followers < 10000) setRespect(5); updateRespect(); setShowLevelUp(true);
        if (followers >= 10000 && followers < 18000) setRespect(6); updateRespect(); setShowLevelUp(true);
        if (followers >= 18000 && followers < 29000) setRespect(7); updateRespect(); setShowLevelUp(true);
        if (followers >= 29000 && followers < 42000) setRespect(8); updateRespect(); setShowLevelUp(true);
        if (followers >= 42000 && followers < 60000) setRespect(9); updateRespect(); setShowLevelUp(true);
        if (followers >= 60000 && followers < 80000) setRespect(10); updateRespect(); setShowLevelUp(true);
        if (followers >= 80000 && followers < 150000) setRespect(11); updateRespect(); setShowLevelUp(true);
        if (followers >= 150000) setRespect(12); updateRespect(); setShowLevelUp(true);
    }

    useEffect(() => {
        calcRespect();
        updateRespect();
    }, [followers, respect])

    if (showLevelUp) {
        if (showLevelOnce === respect || respect > showLevelOnce) {
            return (
                <div className="overlaylevelup">
                    <h2>Parabéns!</h2>
                    <h4>Seu nível de respeito agora é:</h4><h1>{respect}</h1><br />
                    <h4>Continue ganhando mais seguidores </h4>
                    <h4>para evoluir ainda mais!</h4>
                    <button onClick={() => { updateShowLevelOnce(); setShowLevelUp(false); }}>Voltar</button>
                </div>
            )
        }
    }

}
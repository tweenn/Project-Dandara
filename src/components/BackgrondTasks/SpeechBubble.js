import React, { useState, createContext, useContext } from "react";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../BackgrondTasks/firebase-config";
import { UserContext } from './UserDataContext';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Typewriter from 'typewriter-effect';

export const BubbleContext = createContext({})

export const SpeechBubbleContext = ({ children }) => {

    const [bubble, setBubble] = useState(false);
    const [bubbleText, setBubbleText] = useState('');
    const [bubblePortrait, setBubblePortrait] = useState('');
    const { playerName, currentQuest, setCurrentQuest, id } = useContext(UserContext);

    const questRef = doc(db, 'users', id)

    const updateQuest = async (id, quest) => {
        await updateDoc(questRef, {
            quest: currentQuest + 1
        })
    };

    const RemoveBubble = () => {
        setCurrentQuest(currentQuest + 1);
        setBubble(false);
        setBubbleText('');
        updateQuest();
    }

    const clickedOutside = useDetectClickOutside({ onTriggered: RemoveBubble });

    if (bubble) {
        return (
            <div ref={clickedOutside} onClick={() => { RemoveBubble(); }}>
                <img src='../../img/speechbubble.png' alt="" id="speechbubble" />
                <img src={bubblePortrait} alt="" id="bubblePortrait" />
                <div className="speechbubbletext" >
                    <Typewriter options={{ delay: 30, cursor: null }} className="speechbubbletext"
                        onInit={(typewriter) => {
                            typewriter.typeString(bubbleText)
                                .start();
                        }}
                    />
                </div>
            </div>
        );
    }
    const QuestManager = () => {

        if (playerName) {
            if (currentQuest === 1) {
                const createBubbleText = () => {
                    setBubblePortrait('../../img/Port-Dandara.png');
                    setBubble(true);
                    setBubbleText('Olá <p2> ' + playerName + '</p2>! É um grande prazer lhe receber em nossa equipe! Se prepare para uma fantástica jornada cheia de desafios e recompensas! Seu papel, como assistente de campanha, é garantir o maior número de apoiadores antes da data das eleições! Para começar, clique na <p2>Sede do Partido</p2> localizada na parte <p2>superior esquerda</p2> do mapa.');
                }
                createBubbleText();
            }
        }
        if (currentQuest === 3) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('Olá <p2> ' + playerName + '</p2>! Eu sou o tesoureiro do partido. Todos os dias você deve visitar a nossa sede para garantir o recebimento do seu orçamento. O valor que você recebe diariamente aumentará de acordo com a sua <p2>reputação</p2>. Clique agora em <p2>Receber Orçamento</p2>.');
            }
            createBubbleText();
        }
    }

    return (
        <BubbleContext.Provider value={{ setBubble, setBubbleText }}>
            {children}
            {QuestManager()}
        </BubbleContext.Provider>
    )
}
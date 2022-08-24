import React, { useState, createContext, useContext, useEffect } from "react";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../BackgrondTasks/firebase-config";
import { UserContext } from './UserDataContext';
import Typewriter from 'typewriter-effect';
import bubblesound from "../../sounds/bubble.mp3";
import click from "../../sounds/click.mp3";

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
        setBubble(false);
        setBubbleText('');
        setCurrentQuest(currentQuest + 1);
        updateQuest();
    }

    useEffect(() => {
        return () => { setBubble(false); }
    }, [currentQuest]);


    if (bubble) {
        new Audio(bubblesound).play()
        return (
            <div onClick={() => { new Audio(click).play(); RemoveBubble(); }} className="bubblewrapper">
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
            if (currentQuest === 0) {
                const createBubbleText = () => {
                    setBubblePortrait('../../img/Port-Dandara.png');
                    setBubble(true);
                    setBubbleText('Olá <p2> ' + playerName + '</p2>! É um grande prazer lhe receber em nossa equipe! Se prepare para uma fantástica jornada cheia de desafios e recompensas! Seu papel, como assistente de campanha, é garantir o maior número de apoiadores antes da data das eleições! <br />Primeiro, vamos entender a nossa <p2>Barra de Informações</p2> localizada na parte superior da tela. <p2>(Clique para continuar).</p2>');
                }
                createBubbleText();
            }
        }
        if (playerName) {
            if (currentQuest === 2) {
                const createBubbleText = () => {
                    setBubblePortrait('../../img/Port-Dandara.png');
                    setBubble(true);
                    setBubbleText('Agora que você já conhece um pouco da nossa interface, vamos começar? Clique na <p2>Sede do Partido</p2> localizada na parte <p2>superior esquerda</p2> do mapa.');
                }
                createBubbleText();
            }
        }
        if (currentQuest === 4) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('Olá <p2> ' + playerName + '</p2>! Eu sou o tesoureiro do partido. Todos os dias você deve visitar a nossa sede para garantir o recebimento dos seus créditos. A quantidade que você recebe diariamente aumentará de acordo com a sua <p2>reputação</p2>. Clique agora em <p2>Receber Créditos</p2>.');
            }
            createBubbleText();
        }
        if (currentQuest === 6) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('Pronto! Agora você já pode criar a sua primeira campanha, mas antes disso, vá até o <p2>Hotel</p2>!');
            }
            createBubbleText();
        }
        if (currentQuest === 8) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Hotelmanager.png');
                setBubble(true);
                setBubbleText('Olá <p2> ' + playerName + '</p2>! Nosso Hotel é sempre visitado por diversos <p2>artistas e famosos</p2> que, por créditos, se juntarão à sua <p2>próxima campanha publicitária</p2>, garantindo um super <p2>bônus</p2> no seu resultado! <br />E você está com sorte! Nossa <p2>Artista Local</p2> está disponível, clique em <p2>contratar</p2>.');
            }
            createBubbleText();
        }
        if (currentQuest === 10) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Hotelmanager.png');
                setBubble(true);
                setBubbleText('Muito bem! Agora retorne até a <p2>Sede do Partido</p2> para criar a sua <p2>primeira campanha</p2>!');
            }
            createBubbleText();
        }
        if (currentQuest === 12) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('Vamos criar a nossa primeira campanha de <p2>Outdoors</p2>? Clique no botão para começar.');
            }
            createBubbleText();
        }
        if (currentQuest === 14) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('O sucesso de sua campanha depende de como voce distribui os <p2>pontos de recursos</p2> para cada categoria no processo de criação. A campanha para <p2>Outdoors</p2> é uma das mais fáceis de configurarmos, pois <p2>não são necessários</p2> pontos de vídeo e música. Distribua <p2>5 pontos para Arte Gráfica e 5 pontos para Texto</p2>, depois clique em <p2>Confirmar Campanha.</p2>');
            }
            createBubbleText();
        }
        if (currentQuest === 16) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('Parabéns! A sua primeira campanha foi um <p2>sucesso</p2>! Veja quantos <p2>novos seguidores</p2> ganhamos! <br />E não se preocupe com a sua nota nesse momento, à medida que sua <p2>reputação</p2> crescer, você terá mais pontos de recursos disponíveis para a criação das suas campanhas, garantindo assim resultados cada vez melhores!');
            }
            createBubbleText();
        }
        if (currentQuest === 18) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('Veja agora que um contador de <p2>60 minutos</p2> se iniciou. Durante esse tempo não podemos criar mais campanhas... <br />Mas vem cá, vou te contar um <p2>segredo</p2>: Se você clicar em <p2>Compartilhar Campanha</p2> e contar para os seus amigos sobre o <p2>Project: Dandara</p2>, eu <p2>zero o contador</p2> para você!');
            }
            createBubbleText();
        }
        if (currentQuest === 20) {
            const createBubbleText = () => {
                setBubblePortrait('../../img/Port-Tesoureiro.png');
                setBubble(true);
                setBubbleText('<p2>Muito obrigado</p2> por compartilhar, ' + playerName + '! Como agradecimento, eu zerei o contador e você já pode criar sua próxima campanha! E <p2>lembre-se</p2>, sempre que ver o botão de compartilhamento próximo a um contador, você pode compartilhar aquela ação que o contador será <p2>zerado</p2>! ');
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
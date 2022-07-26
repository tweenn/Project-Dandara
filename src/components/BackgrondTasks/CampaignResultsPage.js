import { useContext, useEffect, useState } from "react";
import { db } from "./firebase-config";
import { UserContext } from './UserDataContext';
import { doc, updateDoc } from 'firebase/firestore';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

export const CampaignResults = () => {

    const { activeCampaign, campaignResult, id, setActiveCampaign, ArtStars, TextStars, MusicStars, VideoStars, setArtStars, setTextStars, setMusicStars, setVideoStars, gradeLetter, tributeImportance, setTributeImportance, setGradeLetter, setFollowers, followers, guest, setGuest, currentQuest, setCurrentQuest, campaignDonations, setCampaignDonations, money, setMoney, setBillboard } = useContext(UserContext);

    const Ref = doc(db, 'users', id)

    const UpdateActiveCampaign = async () => await updateDoc(Ref, { activeCampaign: null })
    const UpdateFollowers = async () => await updateDoc(Ref, { followers: campaignResult + followers })
    const UpdateGuest = async () => { await updateDoc(Ref, { guest: null }); setGuest(null) }
    const UpdateBillboard = async () => { await updateDoc(Ref, { billboard: true }); setBillboard(true); }
    const UpdateMoney = async () => { await updateDoc(Ref, { money: money + campaignDonations }); setMoney(money + campaignDonations) }

    const updateQuest = async () => {
        if (currentQuest === 17) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1);
            UpdateBillboard();
        }
    }

    const resetStars = () => {
        setArtStars(null);
        setTextStars(null);
        setVideoStars(null);
        setMusicStars(null);
        setTributeImportance(null);
        setGradeLetter(null);
        setCampaignDonations(0);
    }

    if (activeCampaign && (ArtStars !== '-' || TextStars !== '-' || VideoStars !== '-' || MusicStars !== '-') && (ArtStars !== null || TextStars !== null || VideoStars !== null || MusicStars !== null) && (tributeImportance) && (setGradeLetter)) {

        return (
            <motion.div className="overlaypages"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <div>
                    <h3>Resultado da sua Campanha para </h3><h4>{activeCampaign}:</h4>
                </div>
                <h2 className="gradeTitle"><Typewriter options={{ delay: 10, cursor: null }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(7500)
                            .typeString('NOTA DA CAMPANHA:')
                            .start();
                    }} /></h2><br /><h2 className="grade"><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(8500)
                                .typeString(gradeLetter)
                                .start();
                        }} /></h2><br /><br />
                <div className="campaignResults">
                    <div className="campaignResultsAtributes">
                        <h5>Atributo</h5>
                        <h5>Importância</h5>
                        <h5>Qualidade</h5>
                    </div><br />
                    <div className="campaignResultsAtributes">
                        <h4><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Arte Gráfica')
                                    .start();
                            }} /></h4>
                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500)
                                    .typeString(tributeImportance[0])
                                    .start();
                            }} /></h4>
                        <h5 className="rating2"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(1000)
                                    .typeString(ArtStars)
                                    .start();
                            }} /> </h5>
                    </div>
                    <div className="campaignResultsAtributes">
                        <h4><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(1500)
                                    .typeString('Texto')
                                    .start();
                            }} /></h4>
                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000)
                                    .typeString(tributeImportance[1])
                                    .start();
                            }} /></h4>
                        <h5 className="rating2"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2500)
                                    .typeString(TextStars)
                                    .start();
                            }} /></h5>
                    </div>
                    <div className="campaignResultsAtributes">
                        <h4><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(3000)
                                    .typeString('Vídeo')
                                    .start();
                            }} /></h4>

                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(3500)
                                    .typeString(tributeImportance[2])
                                    .start();
                            }} /></h4>

                        <h5 className="rating2"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(4000)
                                    .typeString(VideoStars)
                                    .start();
                            }} /></h5>
                    </div>
                    <div className="campaignResultsAtributes">
                        <h4><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(4500)
                                    .typeString('Música')
                                    .start();
                            }} /></h4>

                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(5000)
                                    .typeString(tributeImportance[3])
                                    .start();
                            }} /></h4>

                        <h5 className="rating2"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(5500)
                                    .typeString(MusicStars)
                                    .start();
                            }} /></h5>
                    </div><br /><h5><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(6000)
                                .typeString('CONVIDADO: ' + (guest ? guest[0] : 'Nenhum'))
                                .start();
                        }} /></h5><br />
                    <h2><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(6500)
                                .typeString('NOVOS SEGUIDORES: ' + campaignResult)
                                .start();
                        }} /></h2>
                    <h4><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(7000)
                                .typeString('DOAÇÕES: ' + campaignDonations)
                                .start();
                        }} /></h4>
                </div>
                <button onClick={() => { UpdateActiveCampaign(); setActiveCampaign(null); UpdateMoney(); resetStars(); setFollowers(followers + campaignResult); UpdateFollowers(); UpdateGuest(); updateQuest(); }}>Voltar</button>
            </motion.div>
        )
    }
}

export const UpdateStars = () => {

    const { campaignStars, setArtStars, setTextStars, setMusicStars, setVideoStars, setGradeLetter, activeCampaign, setTributeImportance, campaignDonations, setCampaignDonations, campaignResult } = useContext(UserContext);

    const defineDonations = () => {
        setCampaignDonations(campaignDonations * campaignResult)
    }

    const setImportance = () => {
        if (activeCampaign === "Outdoors") {
            setTributeImportance(['MUITO ALTA', 'MUITO ALTA', 'N/A', 'N/A']);
        }
        if (activeCampaign === "Jornais e Revistas") {
            setTributeImportance(['ALTA', 'MUITO ALTA', 'N/A', 'N/A']);
        }
        if (activeCampaign === "Internet") {
            setTributeImportance(['ALTA', 'MUITO ALTA', 'BAIXA', 'BAIXA']);
        }
        if (activeCampaign === "Redes Sociais") {
            setTributeImportance(['ALTA', 'BAIXA', 'MUITO ALTA', 'ALTA']);
        }
        if (activeCampaign === "Rádio") {
            setTributeImportance(['N/A', 'MUITO ALTA', 'N/A', 'MUITO ALTA']);
        }
        if (activeCampaign === "Televisão") {
            setTributeImportance(['ALTA', 'BAIXA', 'MUITO ALTA', 'ALTA']);
        }
    }

    function calcGrade(w1, w2, w3, w4, parval) {
        return Math.floor(((campaignStars[0] * w1) + (campaignStars[1] * w2) + (campaignStars[2] * w3) + (campaignStars[3] * w4) / parval) / ((w1 / 2) + (w2 / 2) + (w3 / 2) + (w4 / 2)))
    }

    const defineGrade = () => {
        if (activeCampaign === "Outdoors") {
            const actualGrade = calcGrade(2, 2, 0, 0, 2)
            if (actualGrade >= 10) setGradeLetter('A+')
            if (actualGrade === 9) setGradeLetter('A')
            if (actualGrade === 8) setGradeLetter('B')
            if (actualGrade === 7) setGradeLetter('C')
            if (actualGrade >= 2 && actualGrade <= 6) setGradeLetter('D')
            if (actualGrade <= 1) setGradeLetter('F')
        }
        if (activeCampaign === "Jornais e Revistas") {
            const actualGrade = calcGrade(2, 3, 0, 0, 2)
            if (actualGrade >= 10) setGradeLetter('A+')
            if (actualGrade === 9) setGradeLetter('A')
            if (actualGrade === 8) setGradeLetter('B')
            if (actualGrade === 7) setGradeLetter('C')
            if (actualGrade >= 4 && actualGrade <= 6) setGradeLetter('D')
            if (actualGrade <= 3) setGradeLetter('F')
        }
        if (activeCampaign === "Rádio") {
            const actualGrade = calcGrade(0, 3, 0, 3, 2)
            if (actualGrade >= 8) setGradeLetter('A+')
            if (actualGrade === 7) setGradeLetter('A')
            if (actualGrade === 6) setGradeLetter('B')
            if (actualGrade === 5) setGradeLetter('C')
            if (actualGrade === 4) setGradeLetter('D')
            if (actualGrade <= 3) setGradeLetter('F')
        }
        if (activeCampaign === "Internet") {
            const actualGrade = calcGrade(2, 3, 1, 1, 4)
            if (actualGrade >= 10) setGradeLetter('A+')
            if (actualGrade === 9) setGradeLetter('A')
            if (actualGrade === 8) setGradeLetter('B')
            if (actualGrade === 7) setGradeLetter('C')
            if (actualGrade >= 4 && actualGrade <= 6) setGradeLetter('D')
            if (actualGrade <= 3) setGradeLetter('F')
        }
        if (activeCampaign === "Redes Sociais") {
            const actualGrade = calcGrade(2, 1, 3, 2, 4)
            if (actualGrade >= 10) setGradeLetter('A+')
            if (actualGrade === 9) setGradeLetter('A')
            if (actualGrade === 8) setGradeLetter('B')
            if (actualGrade === 7) setGradeLetter('C')
            if (actualGrade >= 3 && actualGrade <= 6) setGradeLetter('D')
            if (actualGrade <= 2) setGradeLetter('F')
        }
        if (activeCampaign === "Televisão") {
            const actualGrade = calcGrade(2, 1, 4, 2, 4)
            if (actualGrade >= 10) setGradeLetter('A+')
            if (actualGrade === 9) setGradeLetter('A')
            if (actualGrade === 8) setGradeLetter('B')
            if (actualGrade === 7) setGradeLetter('C')
            if (actualGrade === 6) setGradeLetter('D')
            if (actualGrade <= 5) setGradeLetter('F')
        }
    }

    const setStars = () => {

        if (campaignStars) {
            switch (campaignStars[0]) {
                case 0: setArtStars('☆☆☆☆☆'); break;
                case 1: setArtStars('★☆☆☆☆'); break;
                case 2: setArtStars('★★☆☆☆'); break;
                case 3: setArtStars('★★★☆☆'); break;
                case 4: setArtStars('★★★★☆'); break;
                case 5: setArtStars('★★★★★'); break;
                default: setArtStars('-'); break;
            }
            if (campaignStars[0] > 5) {
                setArtStars('★★★★★');
            }
            switch (campaignStars[1]) {
                case 0: setTextStars('☆☆☆☆☆'); break;
                case 1: setTextStars('★☆☆☆☆'); break;
                case 2: setTextStars('★★☆☆☆'); break;
                case 3: setTextStars('★★★☆☆'); break;
                case 4: setTextStars('★★★★☆'); break;
                case 5: setTextStars('★★★★★'); break;
                default: setTextStars('-'); break;
            }
            if (campaignStars[1] > 5) {
                setTextStars('★★★★★');
            }
            switch (campaignStars[2]) {
                case 0: setVideoStars('☆☆☆☆☆'); break;
                case 1: setVideoStars('★☆☆☆☆'); break;
                case 2: setVideoStars('★★☆☆☆'); break;
                case 3: setVideoStars('★★★☆☆'); break;
                case 4: setVideoStars('★★★★☆'); break;
                case 5: setVideoStars('★★★★★'); break;
                default: setVideoStars('-'); break;
            }
            if (campaignStars[2] > 5) {
                setVideoStars('★★★★★');
            }
            switch (campaignStars[3]) {
                case 0: setMusicStars('☆☆☆☆☆'); break;
                case 1: setMusicStars('★☆☆☆☆'); break;
                case 2: setMusicStars('★★☆☆☆'); break;
                case 3: setMusicStars('★★★☆☆'); break;
                case 4: setMusicStars('★★★★☆'); break;
                case 5: setMusicStars('★★★★★'); break;
                default: setMusicStars('-'); break;
            }
            if (campaignStars[3] > 5) {
                setMusicStars('★★★★★');
            }
        }
    }

    useEffect(() => {
        defineDonations();
        setStars();
        setImportance();
        defineGrade();
    }, [campaignStars]);
}
import { useContext, useEffect, useState } from "react";
import { db } from "./firebase-config";
import { UserContext } from './UserDataContext';
import { doc, updateDoc } from 'firebase/firestore';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";
import applause from "../../sounds/applause.mp3";
import weakapplause from "../../sounds/weakapplause.mp3";
import booing from "../../sounds/booing.mp3";
import typing from "../../sounds/typing.mp3";
import moneysound from "../../sounds/money.mp3";
import drumroll from "../../sounds/drumroll.mp3";
import star1 from "../../sounds/star1.mp3";
import star2 from "../../sounds/star2.mp3";
import star3 from "../../sounds/star3.mp3";
import star4 from "../../sounds/star4.mp3";
import star5 from "../../sounds/star5.mp3";
import nullsound from "../../sounds/nullsound.mp3";
import error2 from "../../sounds/error2.mp3";

export const CampaignResults = () => {

    const { activeCampaign, campaignResult, id, setActiveCampaign, ArtStars, TextStars, MusicStars, VideoStars, setArtStars, setTextStars, setMusicStars, setVideoStars, gradeLetter, tributeImportance, setTributeImportance, setGradeLetter, setFollowers, followers, guest, setGuest, currentQuest, setCurrentQuest, campaignDonations, setCampaignDonations, money, setMoney, setBillboard, ArtStarSound, TextStarSound, MusicStarSound, VideoStarSound, setArtStarSound, setTextStarSound, setVideoStarSound, setMusicStarSound, gradeSound, setGradeSound } = useContext(UserContext);

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
        setArtStarSound(null);
        setTextStarSound(null);
        setVideoStarSound(null);
        setMusicStarSound(null);
        setTributeImportance(null);
        setGradeLetter(null);
        setGradeSound(null);
        setCampaignDonations(0);
    }

    if (activeCampaign && (ArtStars !== '-' || TextStars !== '-' || VideoStars !== '-' || MusicStars !== '-') && (ArtStars !== null || TextStars !== null || VideoStars !== null || MusicStars !== null) && (tributeImportance) && (setGradeLetter) && (gradeSound)) {

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
                            .callFunction(() => new Audio(typing).play())
                            .typeString('NOTA DA CAMPANHA:')
                            .start();
                    }} /></h2><br /><br /><h2 className="grade"><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(7500)
                                .callFunction(() => new Audio(drumroll).play())
                                .pauseFor(4000)
                                .typeString(gradeLetter)
                                .start()
                                .callFunction(() => new Audio(gradeSound).play());
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
                                    .callFunction(() => new Audio(typing).play())
                                    .start();
                            }} /></h4>
                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500)
                                    .callFunction(() => new Audio(typing).play())
                                    .typeString(tributeImportance[0])
                                    .start();
                            }} /></h4>
                        <h5 className="rating2"><Typewriter options={{ delay: 20, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(1000)
                                    .callFunction(() => new Audio(ArtStarSound).play())
                                    .typeString(ArtStars)
                                    .start();
                            }} /> </h5>
                    </div>
                    <div className="campaignResultsAtributes">
                        <h4><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(1500)
                                    .callFunction(() => new Audio(typing).play())
                                    .typeString('Texto')
                                    .start();
                            }} /></h4>
                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000)
                                    .callFunction(() => new Audio(typing).play())
                                    .typeString(tributeImportance[1])
                                    .start();
                            }} /></h4>
                        <h5 className="rating2"><Typewriter options={{ delay: 20, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2500)
                                    .callFunction(() => new Audio(TextStarSound).play())
                                    .typeString(TextStars)
                                    .start();
                            }} /></h5>
                    </div>
                    <div className="campaignResultsAtributes">
                        <h4><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(3000)
                                    .callFunction(() => new Audio(typing).play())
                                    .typeString('Vídeo')
                                    .start();
                            }} /></h4>

                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(3500)
                                    .callFunction(() => new Audio(typing).play())
                                    .typeString(tributeImportance[2])
                                    .start();
                            }} /></h4>

                        <h5 className="rating2"><Typewriter options={{ delay: 20, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(4000)
                                    .callFunction(() => new Audio(VideoStarSound).play())
                                    .typeString(VideoStars)
                                    .start();
                            }} /></h5>
                    </div>
                    <div className="campaignResultsAtributes">
                        <h4><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(4500)
                                    .callFunction(() => new Audio(typing).play())
                                    .typeString('Música')
                                    .start();
                            }} /></h4>

                        <h4 className="rating"><Typewriter options={{ delay: 10, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(5000)
                                    .callFunction(() => new Audio(typing).play())
                                    .typeString(tributeImportance[3])
                                    .start();
                            }} /></h4>

                        <h5 className="rating2"><Typewriter options={{ delay: 20, cursor: null }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(5500)
                                    .callFunction(() => new Audio(MusicStarSound).play())
                                    .typeString(MusicStars)
                                    .start();
                            }} /></h5>
                    </div><br /><h5><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(6000)
                                .callFunction(() => new Audio(typing).play())
                                .typeString('CONVIDADO: ' + (guest ? guest[0] : 'Nenhum'))
                                .start();
                        }} /></h5>
                    <h2><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(6500)
                                .callFunction(() => new Audio(typing).play())
                                .typeString('NOVOS SEGUIDORES: ' + campaignResult)
                                .start();
                        }} /></h2>
                    <h4><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(7000)
                                .callFunction(() => new Audio(moneysound).play())
                                .typeString('DOAÇÕES: ' + campaignDonations)
                                .start();
                        }} /></h4>
                    <button onClick={() => { new Audio(click).play(); UpdateActiveCampaign(); setActiveCampaign(null); UpdateMoney(); resetStars(); setFollowers(followers + campaignResult); UpdateFollowers(); UpdateGuest(); updateQuest(); }}>Voltar</button>
                </div>
            </motion.div>
        )
    }
}

export const UpdateStars = () => {

    const { campaignStars, setArtStars, setTextStars, setMusicStars, setVideoStars, setGradeLetter, activeCampaign, setTributeImportance, campaignDonations, setCampaignDonations, campaignResult, setArtStarSound, setTextStarSound, setMusicStarSound, setVideoStarSound, setGradeSound } = useContext(UserContext);

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
            if (actualGrade >= 10) { setGradeLetter('A+'); setGradeSound(applause) }
            if (actualGrade === 9) { setGradeLetter('A'); setGradeSound(applause) }
            if (actualGrade === 8) { setGradeLetter('B'); setGradeSound(applause) }
            if (actualGrade === 7) { setGradeLetter('C'); setGradeSound(weakapplause) }
            if (actualGrade >= 2 && actualGrade <= 6) { setGradeLetter('D'); setGradeSound(weakapplause) }
            if (actualGrade <= 1) { setGradeLetter('F'); setGradeSound(booing) }
        }
        if (activeCampaign === "Jornais e Revistas") {
            const actualGrade = calcGrade(2, 3, 0, 0, 2)
            if (actualGrade >= 10) { setGradeLetter('A+'); setGradeSound(applause) }
            if (actualGrade === 9) { setGradeLetter('A'); setGradeSound(applause) }
            if (actualGrade === 8) { setGradeLetter('B'); setGradeSound(applause) }
            if (actualGrade === 7) { setGradeLetter('C'); setGradeSound(weakapplause) }
            if (actualGrade >= 4 && actualGrade <= 6) { setGradeLetter('D'); setGradeSound(weakapplause) }
            if (actualGrade <= 3) { setGradeLetter('F'); setGradeSound(booing) }
        }
        if (activeCampaign === "Rádio") {
            const actualGrade = calcGrade(0, 3, 0, 3, 2)
            if (actualGrade >= 8) { setGradeLetter('A+'); setGradeSound(applause) }
            if (actualGrade === 7) { setGradeLetter('A'); setGradeSound(applause) }
            if (actualGrade === 6) { setGradeLetter('B'); setGradeSound(applause) }
            if (actualGrade === 5) { setGradeLetter('C'); setGradeSound(weakapplause) }
            if (actualGrade === 4) { setGradeLetter('D'); setGradeSound(weakapplause) }
            if (actualGrade <= 3) { setGradeLetter('F'); setGradeSound(booing) }
        }
        if (activeCampaign === "Internet") {
            const actualGrade = calcGrade(2, 3, 1, 1, 4)
            if (actualGrade >= 10) { setGradeLetter('A+'); setGradeSound(applause) }
            if (actualGrade === 9) { setGradeLetter('A'); setGradeSound(applause) }
            if (actualGrade === 8) { setGradeLetter('B'); setGradeSound(applause) }
            if (actualGrade === 7) { setGradeLetter('C'); setGradeSound(weakapplause) }
            if (actualGrade >= 4 && actualGrade <= 6) { setGradeLetter('D'); setGradeSound(weakapplause) }
            if (actualGrade <= 3) { setGradeLetter('F'); setGradeSound(booing) }
        }
        if (activeCampaign === "Redes Sociais") {
            const actualGrade = calcGrade(2, 1, 3, 2, 4)
            if (actualGrade >= 10) { setGradeLetter('A+'); setGradeSound(applause) }
            if (actualGrade === 9) { setGradeLetter('A'); setGradeSound(applause) }
            if (actualGrade === 8) { setGradeLetter('B'); setGradeSound(applause) }
            if (actualGrade === 7) { setGradeLetter('C'); setGradeSound(weakapplause) }
            if (actualGrade >= 3 && actualGrade <= 6) { setGradeLetter('D'); setGradeSound(weakapplause) }
            if (actualGrade <= 2) { setGradeLetter('F'); setGradeSound(booing) }
        }
        if (activeCampaign === "Televisão") {
            const actualGrade = calcGrade(2, 1, 4, 2, 4)
            if (actualGrade >= 10) { setGradeLetter('A+'); setGradeSound(applause) }
            if (actualGrade === 9) { setGradeLetter('A'); setGradeSound(applause) }
            if (actualGrade === 8) { setGradeLetter('B'); setGradeSound(applause) }
            if (actualGrade === 7) { setGradeLetter('C'); setGradeSound(weakapplause) }
            if (actualGrade === 6) { setGradeLetter('D'); setGradeSound(weakapplause) }
            if (actualGrade <= 5) { setGradeLetter('F'); setGradeSound(booing) }
        }
    }

    const setStars = () => {

        if (campaignStars) {
            switch (campaignStars[0]) {
                case 0: setArtStars('☆☆☆☆☆'); setArtStarSound(error2); break;
                case 1: setArtStars('★☆☆☆☆'); setArtStarSound(star1); break;
                case 2: setArtStars('★★☆☆☆'); setArtStarSound(star2); break;
                case 3: setArtStars('★★★☆☆'); setArtStarSound(star3); break;
                case 4: setArtStars('★★★★☆'); setArtStarSound(star4); break;
                case 5: setArtStars('★★★★★'); setArtStarSound(star5); break;
                default: setArtStars('-'); setArtStarSound(nullsound); break;
            }
            if (campaignStars[0] > 5) {
                setArtStarSound(star5);
                setArtStars('★★★★★');
            }
            switch (campaignStars[1]) {
                case 0: setTextStars('☆☆☆☆☆'); setTextStarSound(error2); break;
                case 1: setTextStars('★☆☆☆☆'); setTextStarSound(star1); break;
                case 2: setTextStars('★★☆☆☆'); setTextStarSound(star2); break;
                case 3: setTextStars('★★★☆☆'); setTextStarSound(star3); break;
                case 4: setTextStars('★★★★☆'); setTextStarSound(star4); break;
                case 5: setTextStars('★★★★★'); setTextStarSound(star5); break;
                default: setTextStars('-'); setTextStarSound(nullsound); break;
            }
            if (campaignStars[1] > 5) {
                setTextStarSound(star5);
                setTextStars('★★★★★');
            }
            switch (campaignStars[2]) {
                case 0: setVideoStars('☆☆☆☆☆'); setVideoStarSound(error2); break;
                case 1: setVideoStars('★☆☆☆☆'); setVideoStarSound(star1); break;
                case 2: setVideoStars('★★☆☆☆'); setVideoStarSound(star2); break;
                case 3: setVideoStars('★★★☆☆'); setVideoStarSound(star3); break;
                case 4: setVideoStars('★★★★☆'); setVideoStarSound(star4); break;
                case 5: setVideoStars('★★★★★'); setVideoStarSound(star5); break;
                default: setVideoStars('-'); setVideoStarSound(nullsound); break;
            }
            if (campaignStars[2] > 5) {
                setVideoStarSound(star5);
                setVideoStars('★★★★★');
            }
            switch (campaignStars[3]) {
                case 0: setMusicStars('☆☆☆☆☆'); setMusicStarSound(error2); break;
                case 1: setMusicStars('★☆☆☆☆'); setMusicStarSound(star1); break;
                case 2: setMusicStars('★★☆☆☆'); setMusicStarSound(star2); break;
                case 3: setMusicStars('★★★☆☆'); setMusicStarSound(star3); break;
                case 4: setMusicStars('★★★★☆'); setMusicStarSound(star4); break;
                case 5: setMusicStars('★★★★★'); setMusicStarSound(star5); break;
                default: setMusicStars('-'); setMusicStarSound(nullsound); break;
            }
            if (campaignStars[3] > 5) {
                setMusicStarSound(star5);
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
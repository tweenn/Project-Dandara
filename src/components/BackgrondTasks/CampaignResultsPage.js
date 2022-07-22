import { useContext, useEffect, useState } from "react";
import { db } from "./firebase-config";
import { UserContext } from './UserDataContext';
import { doc, updateDoc } from 'firebase/firestore';
import Typewriter from 'typewriter-effect';

export const CampaignResults = () => {

    const { activeCampaign, campaignResult, id, setActiveCampaign, ArtStars, TextStars, MusicStars, VideoStars, setArtStars, setTextStars, setMusicStars, setVideoStars, campaignStars } = useContext(UserContext);

    const [gradeLetter, setGradeLetter] = useState();

    const Ref = doc(db, 'users', id)

    const UpdateActiveCampaign = async (id, activeCampaign) => await updateDoc(Ref, { activeCampaign: null })

    const resetStars = () => {
        setArtStars(null);
        setTextStars(null);
        setVideoStars(null);
        setMusicStars(null);
    }

    if (activeCampaign && (ArtStars !== '-' || TextStars !== '-' || VideoStars !== '-' || MusicStars !== '-') && (ArtStars !== null || TextStars !== null || VideoStars !== null || MusicStars !== null)) {

        return (
            <div className="overlaypages" >
                <div>
                    <h3>Resultado da sua Campanha para {activeCampaign}:</h3>
                </div>
                <h2 className="gradeTitle"><Typewriter options={{ delay: 10, cursor: null }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(7000)
                            .typeString('NOTA DA CAMPANHA:')
                            .start();
                    }} /></h2><br /><h2 className="grade"><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(8000)
                                .typeString('D')
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
                                    .typeString('MUITO ALTA')
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
                                    .typeString('MUITO ALTA')
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
                                    .typeString('N/A')
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
                                    .typeString('N/A')
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
                                .typeString('CONVIDADO: -')
                                .start();
                        }} /></h5><br />
                    <h2><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(6500)
                                .typeString('NOVOS SEGUIDORES: ' + campaignResult)
                                .start();
                        }} /></h2>
                </div>
                <button onClick={() => { UpdateActiveCampaign(); setActiveCampaign(null); resetStars(); }}>Voltar</button>
            </div >
        )
    }
}

export const UpdateStars = () => {

    const { campaignStars, setArtStars, setTextStars, setMusicStars, setVideoStars } = useContext(UserContext);

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
            switch (campaignStars[1]) {
                case 0: setTextStars('☆☆☆☆☆'); break;
                case 1: setTextStars('★☆☆☆☆'); break;
                case 2: setTextStars('★★☆☆☆'); break;
                case 3: setTextStars('★★★☆☆'); break;
                case 4: setTextStars('★★★★☆'); break;
                case 5: setTextStars('★★★★★'); break;
                default: setTextStars('-'); break;
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
            switch (campaignStars[3]) {
                case 0: setMusicStars('☆☆☆☆☆'); break;
                case 1: setMusicStars('★☆☆☆☆'); break;
                case 2: setMusicStars('★★☆☆☆'); break;
                case 3: setMusicStars('★★★☆☆'); break;
                case 4: setMusicStars('★★★★☆'); break;
                case 5: setMusicStars('★★★★★'); break;
                default: setMusicStars('-'); break;
            }
        }
    }

    useEffect(() => {
        setStars();
    }, [campaignStars]);
}
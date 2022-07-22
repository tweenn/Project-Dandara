import { useContext, useEffect, useState } from "react";
import { db } from "../BackgrondTasks/firebase-config";
import { UserContext } from '../BackgrondTasks/UserDataContext';
import { doc, updateDoc } from 'firebase/firestore';

export const CampaignCreation = () => {

    const { campaign, campaignCost, respect, setCampaign, campaignResult, setCampaignResult, id, setActiveCampaign, setCampaignStars } = useContext(UserContext);

    const [AvaliablePoints, setAvaliablePoints] = useState(respect * 10);
    const [ArtPoints, setArtPoints] = useState(0);
    const [ArtMultiplier, setArtMultiplier] = useState();
    const [TextPoints, setTextPoints] = useState(0);
    const [TextMultiplier, setTextMultiplier] = useState();
    const [VideoPoints, setVideoPoints] = useState(0);
    const [VideoMultiplier, setVideoMultiplier] = useState();
    const [MusicPoints, setMusicPoints] = useState(0);
    const [MusicMultiplier, setMusicMultiplier] = useState();

    const Ref = doc(db, 'users', id)

    function resultFollowers(min, max) {
        return Math.random() * (max - min) + min;
    }

    function weights(art, text, video, music) {
        return (
            (Math.max(0, (art - ArtPoints)) + Math.max(0, (text - TextPoints)) + Math.max(0, (video - VideoPoints)) + Math.max(0, (music - MusicPoints))) * 10
        )
    }

    const StarsCount = () => {
        let ArtStars = ArtMultiplier ? Math.floor(ArtPoints / 5) : null
        let TextStars = TextMultiplier ? Math.floor(TextPoints / 5) : null
        let VideoStars = VideoMultiplier ? Math.floor(VideoPoints / 5) : null
        let MusicStars = MusicMultiplier ? Math.floor(MusicPoints / 5) : null
        let newArr = [ArtStars, TextStars, VideoStars, MusicStars];
        setCampaignStars(newArr);
    }

    const UpdateResult = async (id, money) => await updateDoc(Ref, { campaignResult: campaignResult })
    const UpdateCountdown = async (id, money) => await updateDoc(Ref, { campaignCountdown: (Date.now() + 10000) })
    const UpdateDisabledCampaign = async (id, disabledCampaign) => await updateDoc(Ref, { disabledCampaign: true })
    const UpdateActiveCampaign = async (id, activeCampaign) => await updateDoc(Ref, { activeCampaign: campaign })

    const resetResources = () => {
        setAvaliablePoints(respect * 10);
        setArtPoints(0);
        setTextPoints(0);
        setVideoPoints(0);
        setMusicPoints(0);
    }

    const Comfirm = () => {
        if (AvaliablePoints === 0) {
            console.log(campaignResult);
            setActiveCampaign(campaign);
            UpdateActiveCampaign();
            UpdateDisabledCampaign();
            UpdateResult();
            UpdateCountdown();
            StarsCount();
            setCampaign('');
            resetResources();
        }
    }

    useEffect(() => {
        Comfirm();
    }, [campaignResult])

    if (campaign === "Outdoors") {

        const CampaignTotal = () => {
            setCampaignResult(Math.floor(((ArtMultiplier * ArtPoints) + (TextMultiplier * TextPoints) + (VideoMultiplier * VideoPoints) + (MusicMultiplier * MusicPoints)) * resultFollowers(6, 8) - weights(5, 5, 0, 0)));
        }

        const SetMultipliers = () => {
            setArtMultiplier(2);
            setTextMultiplier(2);
            setVideoMultiplier(null);
            setMusicMultiplier(null);
        }

        return (

            <div className="overlaypages" >
                <div>
                    <h3>Criação de Campanha para {campaign}</h3>
                    <h4 className="alignright">Custo: {campaignCost}</h4>
                </div>
                <div>
                    <h4>Alocação de Recursos Disponíveis:</h4> <h5>{AvaliablePoints}</h5>
                </div>
                <div>
                    <div className="atributeslist">
                        <h4>Arte Gráfica:</h4>
                        <div className="points">
                            <h5>{ArtPoints}</h5>
                        </div>
                        <div>
                            <button className="smallbutton" onClick={() => { setArtPoints(ArtPoints + 1); setAvaliablePoints(AvaliablePoints - 1); SetMultipliers() }} disabled={AvaliablePoints <= 0}>+</button>
                            <button className="smallbutton" onClick={() => { setArtPoints(ArtPoints - 1); setAvaliablePoints(AvaliablePoints + 1); SetMultipliers() }} disabled={ArtPoints <= 0}>-</button>
                        </div>
                    </div>
                    <div className="atributeslist">
                        <h4>Texto:</h4>
                        <div className="points">
                            <h5>{TextPoints}</h5>
                        </div>
                        <div>
                            <button className="smallbutton" onClick={() => { setTextPoints(TextPoints + 1); setAvaliablePoints(AvaliablePoints - 1); SetMultipliers() }} disabled={AvaliablePoints <= 0}>+</button>
                            <button className="smallbutton" onClick={() => { setTextPoints(TextPoints - 1); setAvaliablePoints(AvaliablePoints + 1); SetMultipliers() }} disabled={TextPoints <= 0}>-</button>
                        </div>
                    </div>
                    <div className="atributeslist">
                        <h4>Vídeo:</h4>
                        <div className="points">
                            <h5>{VideoPoints}</h5>
                        </div>
                        <div>
                            <button className="smallbutton" onClick={() => { setVideoPoints(VideoPoints + 1); setAvaliablePoints(AvaliablePoints - 1); SetMultipliers() }} disabled={AvaliablePoints <= 0}>+</button>
                            <button className="smallbutton" onClick={() => { setVideoPoints(VideoPoints - 1); setAvaliablePoints(AvaliablePoints + 1); SetMultipliers() }} disabled={VideoPoints <= 0}>-</button>
                        </div>
                    </div>
                    <div className="atributeslist">
                        <h4>Música:</h4>
                        <div className="points">
                            <h5>{MusicPoints}</h5>
                        </div>
                        <div>
                            <button className="smallbutton" onClick={() => { setMusicPoints(MusicPoints + 1); setAvaliablePoints(AvaliablePoints - 1) }} disabled={AvaliablePoints <= 0}>+</button>
                            <button className="smallbutton" onClick={() => { setMusicPoints(MusicPoints - 1); setAvaliablePoints(AvaliablePoints + 1) }} disabled={MusicPoints <= 0}>-</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => { CampaignTotal() }} disabled={AvaliablePoints > 0}>Confirmar Campanha</button>
                    <button onClick={() => { setCampaign(''); resetResources() }}>Cancelar Campanha</button>
                </div>
            </div>

        );
    }
}

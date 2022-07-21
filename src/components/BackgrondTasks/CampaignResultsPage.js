import { useContext } from "react";
import { db } from "./firebase-config";
import { UserContext } from './UserDataContext';
import { doc, updateDoc } from 'firebase/firestore';
import Typewriter from 'typewriter-effect';

export const CampaignResults = () => {

    const { activeCampaign, campaignResult, id, setCampaignOver, setActiveCampaign } = useContext(UserContext);

    const Ref = doc(db, 'users', id)

    const UpdateActiveCampaign = async (id, activeCampaign) => await updateDoc(Ref, { activeCampaign: null })

    if (activeCampaign) {

        return (
            <div className="overlaypages" >
                <div>
                    <h3>Resultado da sua Campanha para {activeCampaign}:</h3>
                </div>
                <h2 className="gradeTitle"><Typewriter options={{ delay: 10, cursor: null }}
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(6000)
                            .typeString('NOTA DA CAMPANHA:')
                            .start();
                    }} /></h2><br /><h2 className="grade"><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(7000)
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
                                    .typeString('★★☆☆☆')
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
                                    .typeString('★★☆☆☆')
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
                                    .typeString('-')
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
                                    .typeString('-')
                                    .start();
                            }} /></h5>
                    </div><br /><h5><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(5500)
                                .typeString('CONVIDADO: -')
                                .start();
                        }} /></h5><br />
                    <h2><Typewriter options={{ delay: 10, cursor: null }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(5500)
                                .typeString('NOVOS SEGUIDORES: ' + campaignResult)
                                .start();
                        }} /></h2>
                </div>
                <button onClick={() => { UpdateActiveCampaign(); setActiveCampaign(null) }}>Voltar</button>
            </div >
        )
    }
}
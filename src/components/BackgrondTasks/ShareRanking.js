import { useContext } from "react";
import { UserContext } from './UserDataContext';
import { db } from "./firebase-config";
import { doc, updateDoc } from 'firebase/firestore';
import { FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import click from "../../sounds/click.mp3";

export const ShareRanking = () => {

    const { id, setShareRanking, shareRanking, currentQuest, setCurrentQuest } = useContext(UserContext);

    const Ref = doc(db, 'users', id)

    const shareUrl = 'https://projectdandara.netlify.app/PublicRanking'
    const quote = 'Já conhece o Dandaraverso? Veja só o nosso ranking e venha jogar com a gente!'
    const hashtag = '#dandara'
    const title = 'Já conhece o Dandaraverso? Veja só o nosso ranking e venha jogar com a gente!'

    const shareOthers = () => {
        navigator.share({
            text: 'Já conhece o Dandaraverso? Veja só o nosso ranking e venha jogar com a gente!',
            url: 'https://projectdandara.netlify.app/PublicRanking',
            title: 'DandaraVerso',
        })
    }

    const resetCampaignCountdown = async () => await updateDoc(Ref, { campaignCountdown: 0 })

    const updateQuest = async () => {
        if (currentQuest === 19) {
            await updateDoc(Ref, {
                quest: currentQuest + 1
            })
            setCurrentQuest(currentQuest + 1)
        }
    }

    if (shareRanking) {
        return (
            <div className="overlayshare">
                <h3>Compartilhe com seus amigos:</h3>
                <FacebookShareButton onClick={() => { new Audio(click).play(); setShareRanking(false) }} url={shareUrl} quote={quote} hashtag={hashtag}>
                    Facebook
                </FacebookShareButton>
                <TwitterShareButton onClick={() => { new Audio(click).play(); setShareRanking(false) }} url={shareUrl} title={title} hashtag={hashtag}>
                    Twitter
                </TwitterShareButton>
                <WhatsappShareButton onClick={() => { new Audio(click).play(); setShareRanking(false) }} url={shareUrl} title={title}>
                    WhatsApp
                </WhatsappShareButton>
                <TelegramShareButton onClick={() => { new Audio(click).play(); setShareRanking(false) }} url={shareUrl} title={title}>
                    Telegram
                </TelegramShareButton>
                <button onClick={() => { new Audio(click).play(); shareOthers(); setShareRanking(false); }}>
                    Outras Opções
                </button>
            </div>
        )
    }
}

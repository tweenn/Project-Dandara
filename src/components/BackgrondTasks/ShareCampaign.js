import { useContext } from "react";
import { UserContext } from './UserDataContext';
import { db } from "../BackgrondTasks/firebase-config";
import { doc, updateDoc } from 'firebase/firestore';
import { FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import click from "../../sounds/click.mp3";

export const ShareCampaign = () => {

    const { id, setSharePage, sharePage, currentQuest, setCurrentQuest } = useContext(UserContext);

    const Ref = doc(db, 'users', id)

    const shareUrl = 'https://www.dandara1334.com/dandaraverso'
    const quote = 'Acabei de criar uma mega campanha no Project: Dandara! Venha jogar comigo também!'
    const hashtag = '#dandara'
    const title = 'Acabei de criar uma mega campanha no Project: Dandara! Venha jogar comigo também!'

    const shareOthers = () => {
        navigator.share({
            text: 'Acabei de criar uma mega campanha no Project: Dandara! Venha jogar comigo também!',
            url: 'https://www.dandara1334.com/dandaraverso',
            title: 'Project: Dandara',
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

    if (sharePage) {
        return (
            <div className="overlayshare">
                <h3>Compartilhe com seus amigos:</h3>
                <FacebookShareButton onClick={() => { new Audio(click).play(); resetCampaignCountdown(); setSharePage(false); updateQuest(); }} url={shareUrl} quote={quote} hashtag={hashtag}>
                    Facebook
                </FacebookShareButton>
                <TwitterShareButton onClick={() => { new Audio(click).play(); resetCampaignCountdown(); setSharePage(false); updateQuest(); }} url={shareUrl} title={title} hashtag={hashtag}>
                    Twitter
                </TwitterShareButton>
                <WhatsappShareButton onClick={() => { new Audio(click).play(); resetCampaignCountdown(); setSharePage(false); updateQuest(); }} url={shareUrl} title={title}>
                    WhatsApp
                </WhatsappShareButton>
                <TelegramShareButton onClick={() => { new Audio(click).play(); resetCampaignCountdown(); setSharePage(false); updateQuest(); }} url={shareUrl} title={title}>
                    Telegram
                </TelegramShareButton>
                <button onClick={() => { new Audio(click).play(); shareOthers(); resetCampaignCountdown(); setSharePage(false); updateQuest(); }}>
                    Outras Opções
                </button>
            </div>
        )
    }
}

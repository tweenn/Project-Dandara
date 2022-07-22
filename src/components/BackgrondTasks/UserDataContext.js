
import { React, useState, createContext } from 'react';

export const UserContext = createContext({})

export const UserDataContext = ({ children }) => {

    const [money, setMoney] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [id, setId] = useState('');
    const [currentQuest, setCurrentQuest] = useState('');
    const [followers, setFollowers] = useState();
    const [respect, setRespect] = useState();
    const [campaign, setCampaign] = useState('');
    const [activeCampaign, setActiveCampaign] = useState('');
    const [campaignCost, setCampaignCost] = useState('');
    const [campaignResult, setCampaignResult] = useState(null);
    const [campaignStars, setCampaignStars] = useState([]);
    const [ArtStars, setArtStars] = useState(null);
    const [TextStars, setTextStars] = useState(null);
    const [MusicStars, setMusicStars] = useState(null);
    const [VideoStars, setVideoStars] = useState(null);
    const [gradeLetter, setGradeLetter] = useState();
    const [tributeImportance, setTributeImportance] = useState([]);


    return (
        <UserContext.Provider

            value={{ money, setMoney, playerName, setPlayerName, id, setId, currentQuest, setCurrentQuest, followers, setFollowers, respect, setRespect, campaign, setCampaign, campaignCost, setCampaignCost, campaignResult, setCampaignResult, activeCampaign, setActiveCampaign, campaignStars, setCampaignStars, ArtStars, setArtStars, TextStars, setTextStars, MusicStars, setMusicStars, VideoStars, setVideoStars, gradeLetter, setGradeLetter, tributeImportance, setTributeImportance }}>
            {children}

        </UserContext.Provider>
    )
}

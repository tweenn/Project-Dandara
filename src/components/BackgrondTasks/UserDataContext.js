
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

    return (
        <UserContext.Provider

            value={{ money, setMoney, playerName, setPlayerName, id, setId, currentQuest, setCurrentQuest, followers, setFollowers, respect, setRespect, campaign, setCampaign, campaignCost, setCampaignCost, campaignResult, setCampaignResult, activeCampaign, setActiveCampaign }}>
            {children}

        </UserContext.Provider>
    )
}

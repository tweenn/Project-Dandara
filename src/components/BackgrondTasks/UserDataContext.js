
import { React, useState, createContext } from 'react';

export const UserContext = createContext({})

export const UserDataContext = ({ children }) => {

    const [money, setMoney] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [id, setId] = useState('');
    const [currentQuest, setCurrentQuest] = useState('');
    const [followers, setFollowers] = useState();
    const [respect, setRespect] = useState();

    return (
        <UserContext.Provider

            value={{ money, setMoney, playerName, setPlayerName, id, setId, currentQuest, setCurrentQuest, followers, setFollowers, respect, setRespect }}>
            {children}

        </UserContext.Provider>
    )
}

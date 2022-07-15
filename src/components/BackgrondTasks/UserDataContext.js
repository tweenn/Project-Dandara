
import { React, useState, createContext } from 'react';

export const UserContext = createContext({})

export const UserDataContext = ({ children }) => {

    const [money, setMoney] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [id, setId] = useState('');

    return (
        <UserContext.Provider

            value={{ money, setMoney, playerName, setPlayerName, id, setId }}>
            {children}

        </UserContext.Provider>
    )
}

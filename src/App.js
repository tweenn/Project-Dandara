import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import MoneyContext from './components/TopBarContext';
import Ptsede from "./components/Ptsede";
import MainGameWindow from './MainGameWindow';
import BusinessCenter from './components/BusinessCenter';
import Apartment from './components/Apartment';
import Bank from './components/Bank';
import Camara from './components/Camara';
import Hospital from './components/Hospital';
import Hotel from './components/Hotel';
import MayorHall from './components/MayorHall';
import ShoppingMall from './components/ShoppingMall';
import Sports from './components/Sports';
import University from './components/University';
import MainMenu from './MainMenu';

function App() {

    const [money, setMoney] = useState('0')

    return (
        <div>
            <MoneyContext.Provider value={{ money, setMoney }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainMenu />} />
                        <Route path="/MainGameWindow" element={<MainGameWindow />} />
                        <Route path="/BusinessCenter" element={<BusinessCenter />} />
                        <Route path="/Ptsede" element={<Ptsede />} />
                        <Route path="/Apartment" element={<Apartment />} />
                        <Route path="/Bank" element={<Bank />} />
                        <Route path="/Camara" element={<Camara />} />
                        <Route path="/Hospital" element={<Hospital />} />
                        <Route path="/Hotel" element={<Hotel />} />
                        <Route path="/MayorHall" element={<MayorHall />} />
                        <Route path="/ShoppingMall" element={<ShoppingMall />} />
                        <Route path="/Sports" element={<Sports />} />
                        <Route path="/University" element={<University />} />
                    </Routes>
                </Router>
            </MoneyContext.Provider>
        </div>
    )
}

export default App;
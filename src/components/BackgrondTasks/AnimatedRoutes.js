import { React } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Ptsede from "../Places/Ptsede";
import MainGameWindow from '../../MainGameWindow'
import BusinessCenter from '../Places/BusinessCenter';
import Apartment from '../Places/Apartment';
import Bank from '../Places/Bank';
import Camara from '../Places/Camara';
import Hospital from '../Places/Hospital';
import Hotel from '../Places/Hotel';
import MayorHall from '../Places/MayorHall';
import ShoppingMall from '../Places/ShoppingMall';
import Sports from '../Places/Sports';
import University from '../Places/University';
import MainMenu from '../../MainMenu';
import AccountCreation from '../BackgrondTasks/AccountCreation';
import MainMenuRegistered from '../../MainMenuRegistered';
import { PrivateRoutes } from './PrivateIndex';


export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainMenu />} />
            <Route path="/MainMenuRegistered" element={<MainMenuRegistered />} />
            <Route path="/AccountCreation" element={<AccountCreation />} />
            <Route path="/MainGameWindow" element={<PrivateRoutes />}>
                <Route path="/MainGameWindow" element={<MainGameWindow />} />
            </Route>
            <Route path="/BusinessCenter" element={<PrivateRoutes />}>
                <Route path="/BusinessCenter" element={<BusinessCenter />} />
            </Route>
            <Route path="/Ptsede" element={<PrivateRoutes />}>
                <Route path="/Ptsede" element={<Ptsede />} />
            </Route>
            <Route path="/Apartment" element={<PrivateRoutes />}>
                <Route path="/Apartment" element={<Apartment />} />
            </Route>
            <Route path="/Bank" element={<PrivateRoutes />}>
                <Route path="/Bank" element={<Bank />} />
            </Route>
            <Route path="/Camara" element={<PrivateRoutes />}>
                <Route path="/Camara" element={<Camara />} />
            </Route>
            <Route path="/Hospital" element={<PrivateRoutes />}>
                <Route path="/Hospital" element={<Hospital />} />
            </Route>
            <Route path="/Hotel" element={<PrivateRoutes />}>
                <Route path="/Hotel" element={<Hotel />} />
            </Route>
            <Route path="/MayorHall" element={<PrivateRoutes />}>
                <Route path="/MayorHall" element={<MayorHall />} />
            </Route>
            <Route path="/ShoppingMall" element={<PrivateRoutes />}>
                <Route path="/ShoppingMall" element={<ShoppingMall />} />
            </Route>
            <Route path="/Sports" element={<PrivateRoutes />}>
                <Route path="/Sports" element={<Sports />} />
            </Route>
            <Route path="/University" element={<PrivateRoutes />}>
                <Route path="/University" element={<University />} />
            </Route>
        </Routes>
    )
}
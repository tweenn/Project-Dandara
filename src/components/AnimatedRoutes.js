import { React } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Ptsede from "./Ptsede";
import MainGameWindow from '../MainGameWindow';
import BusinessCenter from './BusinessCenter';
import Apartment from './Apartment';
import Bank from './Bank';
import Camara from './Camara';
import Hospital from './Hospital';
import Hotel from './Hotel';
import MayorHall from './MayorHall';
import ShoppingMall from './ShoppingMall';
import Sports from './Sports';
import University from './University';
import MainMenu from '../MainMenu';
import { PrivateRoutes } from './PrivateIndex';


export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainMenu />} />
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
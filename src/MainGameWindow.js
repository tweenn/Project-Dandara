import React from "react";
import { Link } from 'react-router-dom';
import Topbar from './components/Topbar';
import { motion } from "framer-motion";

function MainGameWindow() {

  return (
    <motion.div className="MainGameWindow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="gamescreen">
        <Link to="/Ptsede">
          <img src='../img/ptsede.png' alt="" id="ptsede" />
        </Link>
        <Link to="/BusinessCenter">
          <img src='../img/businesscenter.png' alt="" id="businesscenter" />
        </Link>
        <Link to="/Apartment">
          <img src='../img/apartment.png' alt="" id="apartment" />
        </Link>
        <Link to="/Hospital">
          <img src='../img/hospital.png' alt="" id="hospital" />
        </Link>
        <Link to="/University">
          <img src='../img/university.png' alt="" id="university" />
        </Link>
        <Link to="/MayorHall">
          <img src='../img/mayorhall.png' alt="" id="mayorhall" />
        </Link>
        <img src='../img/kindamall.png' alt="" id="kindamall" />
        <img src='../img/convenience.png' alt="" id="convenience" />
        <Link to="/Hotel">
          <img src='../img/hotel.png' alt="" id="hotel" />
        </Link>
        <Link to="/Bank">
          <img src='../img/bank.png' alt="" id="bank" />
        </Link>
        <Link to="/ShoppingMall">
          <img src='../img/shoppingmall.png' alt="" id="shoppingmall" />
        </Link>
        <Link to="/Sports">
          <img src='../img/sports.png' alt="" id="sports" />
        </Link>
        <img src='../img/convenience2.png' alt="" id="convenience2" />
        <img src='../img/supermarket.png' alt="" id="supermarket" />
        <Link to="/Camara">
          <img src='../img/camara.png' alt="" id="camara" />
        </Link>
        <img src='../img/overlay.png' alt="" id="overlay" />
        <Topbar />
      </div>
    </motion.div>
  )
}

export default MainGameWindow;

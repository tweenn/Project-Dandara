import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Topbar from './components/BackgrondTasks/Topbar';
import { motion } from "framer-motion";
import { SpeechBubbleContext } from "./components/BackgrondTasks/SpeechBubble";
import { RankPulling } from "./components/BackgrondTasks/RankPulling";
import Ranking from "./components/BackgrondTasks/Ranking"
import TopMenu from "./components/BackgrondTasks/TopMenu";
import { UserContext } from "./components/BackgrondTasks/UserDataContext";
import { TopBarExplanationBack, TopBarExplanationFront } from "./components/BackgrondTasks/TopBarExplanation";
import { RespectManager } from "./components/BackgrondTasks/RespectManager";
import { ExtrasOverlay } from "./components/BackgrondTasks/ExtrasOverlay";
import { WorldOverlay } from "./components/BackgrondTasks/WorldOverlay";
import { FullscreenManager } from "./components/BackgrondTasks/FullscreenManager";
import click from "./sounds/clickplace.mp3";
import menu from "./sounds/menu.mp3";

function MainGameWindow() {

  const { topMenuOpen, setTopMenuOpen, currentQuest, setMobile, mobile } = useContext(UserContext)

  const [animateSede, setAnimateSede] = useState(false);
  const [animateHotel, setAnimateHotel] = useState(false);
  const [animateUniversity, setAnimateUniversity] = useState(false);
  const [animateApartment, setAnimateApartment] = useState(false);
  const [animateHospital, setAnimateHospital] = useState(false);
  const [animateBusiness, setAnimateBusiness] = useState(false);
  const [animateMayor, setAnimateMayor] = useState(false);
  const [animateBank, setAnimateBank] = useState(false);
  const [animateShopping, setAnimateShopping] = useState(false);
  const [animateSports, setAnimateSports] = useState(false);
  const [animateCamara, setAnimateCamara] = useState(false);
  const [camara, setCamara] = useState();

  const updateAnimations = () => {
    if (currentQuest === 2 || currentQuest === 11) {
      setAnimateSede(true);
    }
    if (currentQuest === 7) {
      setAnimateHotel(true);
    }

  }

  React.useEffect(() => {
    const updateMobileState = () => {
      if (window.innerWidth <= 950 && window.innerWidth > 450) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    window.addEventListener('resize', updateMobileState);
    window.screen.orientation.addEventListener('change', updateMobileState);
  })

  useEffect(() => {
    updateAnimations();
  }, [currentQuest])

  const camaraMobile = () => {
    if (window.innerWidth <= 950 && window.innerWidth > 450) {
      setCamara('../img/camara_mobile.png');
    } if (window.innerWidth < 450 || window.innerWidth > 950) {
      setCamara('../img/camara.png');
    }
  }

  useEffect(() => {
    camaraMobile();
  }, [mobile])

  return (
    <motion.div className="MainGameWindow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="gamescreen">
        <motion.div animate={animateSede ? {
          scale: [.9, 1, .9],
          x: [-20, 0, -20],
          y: [10, 0, 10]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/Ptsede">
            <img onClick={() => new Audio(click).play()} src='../img/ptsede.png' alt="" id="ptsede" />
          </Link>
        </motion.div>
        <motion.div animate={animateBusiness ? {
          scale: [.9, 1, .9],
          x: [-15, 0, -15],
          y: [20, 0, 20]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/BusinessCenter">
            <img onClick={() => new Audio(click).play()} src='../img/businesscenter.png' alt="" id="businesscenter" />
          </Link>
        </motion.div>
        <motion.div animate={animateApartment ? {
          scale: [.9, 1, .9],
          x: [-10, 0, -10],
          y: [10, 0, 10]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/Apartment">
            <img onClick={() => new Audio(click).play()} src='../img/apartment.png' alt="" id="apartment" />
          </Link>
        </motion.div>
        <motion.div animate={animateHospital ? {
          scale: [.9, 1, .9],
          x: [-10, 0, -10],
          y: [25, 0, 25]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/Hospital">
            <img onClick={() => new Audio(click).play()} src='../img/hospital.png' alt="" id="hospital" />
          </Link>
        </motion.div>
        <motion.div animate={animateUniversity ? {
          scale: [.9, 1, .9],
          x: [-20, 0, -20],
          y: [30, 0, 30]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/University">
            <img onClick={() => new Audio(click).play()} src='../img/university.png' alt="" id="university" />
          </Link>
        </motion.div>
        <motion.div animate={animateMayor ? {
          scale: [.9, 1, .9],
          y: [20, 0, 20]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/MayorHall">
            <img onClick={() => new Audio(click).play()} src='../img/mayorhall.png' alt="" id="mayorhall" />
          </Link>
        </motion.div>
        <img src='../img/kindamall.png' alt="" id="kindamall" />
        <img src='../img/convenience.png' alt="" id="convenience" />
        <motion.div animate={animateHotel ? {
          scale: [.9, 1, .9],
          x: [20, 0, 20],
          y: [10, 0, 10]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/Hotel">
            <img onClick={() => new Audio(click).play()} src='../img/hotel.png' alt="" id="hotel" />
          </Link>
        </motion.div>
        <motion.div animate={animateBank ? {
          scale: [.9, 1, .9],
          x: [30, 0, 30],
          y: [20, 0, 20]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/Bank">
            <img onClick={() => new Audio(click).play()} src='../img/bank.png' alt="" id="bank" />
          </Link>
        </motion.div>
        <motion.div animate={animateShopping ? {
          scale: [.9, 1, .9],
          x: [10, 0, 10],
          y: [30, 0, 30]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/ShoppingMall">
            <img onClick={() => new Audio(click).play()} src='../img/shoppingmall.png' alt="" id="shoppingmall" />
          </Link>
        </motion.div>
        <motion.div animate={animateSports ? {
          scale: [1.2, 1, 1.2],
          x: [20, 0, 20],
          y: [-70, 0, -70]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/Sports">
            <img onClick={() => new Audio(click).play()} src='../img/sports.png' alt="" id="sports" />
          </Link>
        </motion.div>
        <img src='../img/convenience2.png' alt="" id="convenience2" />
        <img src='../img/supermarket.png' alt="" id="supermarket" />
        <motion.div animate={animateCamara ? {
          scale: [1.1, 1, 1.1],
          x: [10, 0, 10],
          y: [-45, 0, -45]
        } : false} transition={{ repeat: Infinity, duration: 1 }}>
          <Link to="/Camara">
            <img onClick={() => new Audio(click).play()} src={camara} alt="" id="camara" />
          </Link>
        </motion.div>
        <WorldOverlay />
        <SpeechBubbleContext />
        <ExtrasOverlay />
        <FullscreenManager />
        <TopBarExplanationBack />
        <Topbar />
        <TopMenu />
        <TopBarExplanationFront />
        <RankPulling />
        <Ranking />
        <RespectManager />
        <button id="topbutton" onClick={() => { new Audio(menu).play(); setTopMenuOpen(!topMenuOpen) }} />
      </div>
    </motion.div>
  )
}

export default MainGameWindow;

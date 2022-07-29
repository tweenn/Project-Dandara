import { useContext, useState } from 'react'
import { AuthContext } from "./AuthContex";
import Retro from "../../sounds/Music/Retro.mp3";
import Cook from "../../sounds/Music/Cook.mp3";
import Coffee from "../../sounds/Music/Coffee.mp3";
import Life from "../../sounds/Music/Life.mp3";
import Bunny from "../../sounds/Music/Bunny.mp3";
import ReactHowler from 'react-howler'

export const Music = () => {

    const { user } = useContext(AuthContext);

    const [songPlaying, setSongPlaying] = useState(Cook);
    const [songName, setSongName] = useState('Cook');
    const [volume, setVolume] = useState(.2);

    const changeSong = () => {
        switch (songPlaying) {
            case Cook: setSongPlaying(Retro); setSongName('Retro'); break;
            case Retro: setSongPlaying(Coffee); setSongName('Coffee'); break;
            case Coffee: setSongPlaying(Life); setSongName('Life'); break;
            case Life: setSongPlaying(Bunny); setSongName('Bunny'); break;
            case Bunny: setSongPlaying(Cook); setSongName('Cook'); break;
        }
    }



    if (user) {
        return (
            <div className='player'>
                <h4 className='music'>Música: </h4><h5 className='music2'>{songName}</h5>
                <button className='changesong' onClick={() => changeSong()}></button>
                <button className='volumeminus' onClick={() => setVolume(volume - .1)}></button>
                <button className='volumeplus' onClick={() => setVolume(volume + .1)}></button>
                <ReactHowler
                    src={songPlaying}
                    playing={true}
                    onEnd={changeSong}
                    volume={volume}
                />
            </div >
        )
    }
}
import React, { useState, createContext } from "react";
import Typewriter from 'typewriter-effect';

export const BubbleContext = createContext({})

function SpeechBubbleContext() {

    const [bubble, setBubble] = useState(false);
    const [bubbleText, setBubbleText] = useState('');

    if (bubble) {
        return (

            <>
                <img src='../../img/speechbubble.png' alt="" id="speechbubble" />
                <div className="speechbubbletext">
                    <Typewriter options={{ delay: 30, cursor: null }} className="speechbubbletext"
                        onInit={(typewriter) => {
                            typewriter.typeString(bubbleText)
                                .start();
                        }}
                    />
                </div>
            </>

        );
    }
}

export default SpeechBubbleContext
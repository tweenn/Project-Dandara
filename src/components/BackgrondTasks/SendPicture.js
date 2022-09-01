import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserDataContext";
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";
import { storage, db } from "./firebase-config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';


function Profile() {


    const { openSendPic, id, setOpenSendPic, picOrigin, money, setMoney } = useContext(UserContext)

    const Ref = doc(db, 'users', id)

    const [imageUpload, setImageUpload] = useState(null);
    const [picRef, setPicRef] = useState(null);
    const [imageReady, setImageReady] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const imageRef = imageUpload ? ref(storage, id + picOrigin) : null

    const updateMoney = async () => await updateDoc(Ref, { money: newMoney })

    const newMoney = money + 50000

    const uploadImage = async () => {
        if (imageUpload) {
            await uploadBytes(imageRef, imageUpload)
        }
    }

    useEffect(() => {
        if (imageReady === true) {
            getDownloadURL(imageRef).then(setPicRef);
        }
    }, [imageReady, picRef])

    if (openSendPic) {
        return (
            <motion.div className="ranking"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <div>
                    <img src={picRef ? picRef : '../../img/defaultProfile.png'} className="picUpload" alt="picUpload" />
                    <input name="file" className="filePic" type={'file'} onClick={() => { new Audio(click).play() }} onChange={(event) => { setImageUpload(event.target.files[0]); }} />
                    <button disabled={disabled} className="picBtn" onClick={() => { new Audio(click).play(); uploadImage().then(() => setImageReady(true)); updateMoney(); setMoney(newMoney); setDisabled(true) }}>{'Enviar Imagem'}</button>
                </div>
                <div className="buttonVoltar">
                    <button onClick={() => { new Audio(click).play(); setOpenSendPic(false) }}>Voltar</button>
                </div>
            </motion.div>
        )
    }
}

export default Profile
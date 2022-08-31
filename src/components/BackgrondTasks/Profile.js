import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserDataContext";
import { motion } from "framer-motion";
import click from "../../sounds/click.mp3";
import { storage, db } from "./firebase-config";
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';


function Profile() {


    const { profileOpen, id, setProfileOpen, avatarRef, setAvatarRef, playerName, setPlayerName } = useContext(UserContext)

    const Ref = doc(db, 'users', id)

    const [imageUpload, setImageUpload] = useState(null);
    const [imageReady, setImageReady] = useState(false);
    const [newName, setNewName] = useState('');

    const imageRef = imageUpload ? ref(storage, id) : null

    const removeImage = async () => {
        await updateDoc(Ref, { avatarref: null });
        deleteObject(ref(storage, id));
        setAvatarRef(null);
        setImageUpload(null);
        setImageReady(false);
    }

    const uploadImage = async () => {
        if (imageUpload) {
            await uploadBytes(imageRef, imageUpload)
        }
    }

    const updateAvatarRef = async () => {
        if (avatarRef != null) {
            await updateDoc(Ref, { avatarref: avatarRef })
        }
    }

    onSnapshot(Ref, (doc) => {
        setAvatarRef(doc.data().avatarref);
        setPlayerName(doc.data().name);
    })

    useEffect(() => {
        if (imageReady === true) {
            getDownloadURL(imageRef).then(setAvatarRef);
            updateAvatarRef();
        }
    }, [imageReady, avatarRef])

    if (profileOpen) {
        return (
            <motion.div className="ranking"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <div>
                    <img src={avatarRef ? avatarRef : '../../img/defaultProfile.png'} className="profileAvatar" alt="profilePicture" />
                    <input name="file" className="file" type={avatarRef ? 'hidden' : 'file'} onClick={() => { new Audio(click).play() }} onChange={(event) => { setImageUpload(event.target.files[0]); }} />
                    <button className="profilePicBtn" onClick={() => { new Audio(click).play(); avatarRef ? removeImage() : uploadImage().then(() => setImageReady(true)); }}>{avatarRef ? 'Remover Imagem' : 'Enviar Imagem'}</button>
                    <div className="profileData">
                        <h4>Nome:</h4><input type="text" defaultValue={playerName} onChange={e => setNewName(e.target.value)} />
                        <button onClick={() => { new Audio(click).play(); updateDoc(Ref, { name: newName }) }}>Atualizar</button>
                    </div>
                </div>
                <div className="buttonVoltar">
                    <button onClick={() => { new Audio(click).play(); setProfileOpen(false) }}>Voltar</button>
                </div>
            </motion.div>
        )
    }
}

export default Profile
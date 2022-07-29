import { useContext, useState } from 'react'
import { UserContext } from "./UserDataContext";

export const ExtrasOverlay = () => {

    const { billboard, music } = useContext(UserContext);
    const [on, setOn] = useState(true);

    if (billboard) {
        return (
            <div className='extrasOverlay'>
                <img src='../../img/billboardfill.png' alt="" id="billboard" />
            </div>
        )
    }
}
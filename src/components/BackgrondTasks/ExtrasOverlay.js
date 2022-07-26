import { useContext } from 'react'
import { UserContext } from "./UserDataContext";

export const ExtrasOverlay = () => {

    const { billboard } = useContext(UserContext);

    if (billboard) {
        return (
            <div className='extrasOverlay'>
                <img src='../../img/billboardfill.png' alt="" id="billboard" />
            </div>
        )
    }
}
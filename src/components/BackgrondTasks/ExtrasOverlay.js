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

// 0 = Ptsede // 1 = BusinessCenter // 2 = Apartment // 3 = Hospital // 4 = University // 5 = MayorHall
// 6 = Hotel // 7 = Bank // 8 = ShoppingMall // 9 = Sports // 10 = Camara
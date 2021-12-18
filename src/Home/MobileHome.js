import './MobileHome.scss';
import {PickyButtonXL} from "../components/PickyButton/PickyButton";
import RegisterModal from "../register_wizard/RegisterModal";
import {useState} from "react";
import page1 from '../Mobile01.png'
import page2 from '../Mobile02.png'
import page3 from '../Mobile03.png'
console.log(page1, page2, page3);

function MobileHome() {
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    async function toRegister() {
        setRegisterModalOpen(true)
    }
    async function closeRegisterModal() {
        setRegisterModalOpen(false);
    }
    return(
        <div className="picky-home-mobile">
            <RegisterModal open={registerModalOpen} onClose={closeRegisterModal}/>
            <div className="tile tile-white">
                <div className="tile-content page1">
                    <div className="register-button-positioner">
                        <PickyButtonXL pickycolor="orange" variant="contained" onClick={toRegister} >Registrate</PickyButtonXL>
                    </div>
                </div>
            </div>
            <div className="tile tile-orange">
                <div className="tile-content page2">
                </div>
            </div>
            <div className="tile tile-orange">
                <div className="tile-content page3">
                    <div className="register-button-positioner">
                        <PickyButtonXL pickycolor="black" variant="contained" onClick={toRegister} >Registrate</PickyButtonXL>
                    </div>
                </div>
            </div>
            {/*<div className="tile tile-white">*/}
            {/*    <div className="tile-content page4">*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="tile tile-white">*/}
            {/*    <div className="tile-content page5">*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="tile tile-white">*/}
            {/*    <div className="tile-content page6">*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="tile tile-white">*/}
            {/*    <div className="tile-content page7">*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default MobileHome;
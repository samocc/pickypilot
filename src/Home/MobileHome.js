import './MobileHome.scss';
import {PickyButtonBlackXL, PickyButtonOrangeXL} from "../components/PickyButton/PickyButton";
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
                        <PickyButtonOrangeXL variant="contained" onClick={toRegister} size="large">Registrate</PickyButtonOrangeXL>
                        {/*<PickyButtonFlex variant="contained" scale={scale} pickycolor="orange" onClick={toRegister} size="large">Registrate</PickyButtonFlex>*/}
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
                        <PickyButtonBlackXL variant="contained" onClick={toRegister} size="large">Registrate</PickyButtonBlackXL>
                        {/*<PickyButtonFlex variant="contained" scale={scale} pickycolor="black" onClick={toRegister} size="large">Registrate</PickyButtonFlex>*/}
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
import './MobileFlex.scss';
import {PickyButtonMobileFlex} from "../components/PickyButton/PickyButton";
import RegisterModal from "../register_wizard/RegisterModal";
import {useState} from "react";
import page1 from '../Mobile01.png'
import page2 from '../Mobile02.png'
import page3 from '../Mobile03.png'
console.log(page1, page2, page3);

function MobileFlex() {
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    function toRegister() {
        setRegisterModalOpen(true)
    }
    function closeRegisterModal() {
        setRegisterModalOpen(false);
    }
    return(
        <div className="picky-mobile-flex">
            <RegisterModal open={registerModalOpen} onClose={closeRegisterModal}/>
            <div className="tile tile-white">
                <div className="tile-content page1">
                    <img src={page1} alt="page1"/>
                    <div className="mobile-img-overlay"/>
                    <div className="register-button-positioner">
                        <PickyButtonMobileFlex pickycolor="orange" variant="contained" onClick={toRegister} >Registrate</PickyButtonMobileFlex>
                    </div>
                </div>
            </div>
            <div className="tile tile-orange">
                <div className="tile-content page2">
                    <img src={page2} alt="page2"/>
                    <div className="mobile-img-overlay"/>
                    <div className="register-button-positioner">
                        <PickyButtonMobileFlex pickycolor="black" variant="contained" onClick={toRegister} >Registrate</PickyButtonMobileFlex>
                    </div>
                </div>
            </div>
            <div className="tile tile-orange">
                <div className="tile-content page3">
                    <img src={page3} alt="page3"/>
                    <div className="mobile-img-overlay"/>
                    <div className="register-button-positioner">
                        <PickyButtonMobileFlex pickycolor="black" variant="contained" onClick={toRegister} >Registrate</PickyButtonMobileFlex>
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

export default MobileFlex;
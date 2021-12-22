import './DesktopFlex.scss';
import {PickyButtonScaled} from "../components/PickyButton/PickyButton";
import RegisterModal from "../register_wizard/RegisterModal";
import {useState} from "react";
import page1 from '../Home01.png'
import page2 from '../Home02.png'
import page3 from '../Home03.png'
import page4 from '../Home04.png'
import page5 from '../Home05.png'
import page6 from '../Home06.png'
import page7 from '../Home07.png'
import Button from "@mui/material/Button";
import {NotificationService} from "../services/global-notifications/GlobalNotifications.service";
console.log(page1, page2, page3, page4, page5, page6, page7);

function DesktopFlex() {
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    function toRegister() {
        setRegisterModalOpen(true)
    }
    function closeRegisterModal() {
        setRegisterModalOpen(false);
    }

    function successNotification () {
        NotificationService.success('Global notification message', {});
    }
    function errorNotification () {
        NotificationService.error('Global notification message', {});
    }

    return(
        <div className="picky-desktop-flex">
            <RegisterModal open={registerModalOpen} onClose={closeRegisterModal}/>
            <div className="font-test-wrapper">
                {/*<span className="font-test demasiado">Demasiado</span>*/}
                {/*<span className="font-test ft-Heebo"> Picky </span>*/}
                {/*<span className="font-test ft-Inter"> Picky </span>*/}
                {/*<span className="font-test ft-Poppins"> Picky </span>*/}
                {/*<span className="font-test ft-PublicSans"> Picky </span>*/}
                {/*<span className="font-test ft-Roboto"> Picky </span>*/}
                <Button onClick={successNotification}>Success</Button>
                <Button onClick={errorNotification}>Error</Button>
            </div>
            <div className="tile tile-white">
                <div className="tile-content page1">
                    <div className="register-button-positioner">
                        <PickyButtonScaled onClick={toRegister} pickycolor="orange" text="Registrate"/>
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
                        <PickyButtonScaled onClick={toRegister} pickycolor="black" text="Registrate"/>
                    </div>
                </div>
            </div>
            <div className="tile tile-white">
                <div className="tile-content page4">
                </div>
            </div>
            <div className="tile tile-white">
                <div className="tile-content page5">
                </div>
            </div>
            <div className="tile tile-white">
                <div className="tile-content page6">
                </div>
            </div>
            <div className="tile tile-white">
                <div className="tile-content page7">
                </div>
            </div>
        </div>
    )
}

export default DesktopFlex;
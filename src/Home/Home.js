import './Home.scss';
import {useNavigate} from "react-router-dom";
import {
    PickyButtonBlackXL,
    PickyButtonOrangeXL
} from "../components/PickyButton/PickyButton";
import RegisterModal from "../register_wizard/RegisterModal";
import {useState} from "react";
import './Home01.PNG'
import './Home02.PNG'
import './Home03.PNG'
import './Home04.PNG'
import './Home05.PNG'
import './Home06.PNG'
import './Home07.PNG'

function Home() {
    const navigate = useNavigate();
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    async function toRegister2() {
        navigate('/register');
    }
    async function toRegister() {
        setRegisterModalOpen(true)
    }
    async function closeRegisterModal() {
        setRegisterModalOpen(false);
    }
    return(
        <div className="picky-home">
            <RegisterModal open={registerModalOpen} onClose={closeRegisterModal}/>
            <div className="font-test-wrapper">
                <PickyButtonBlackXL variant="contained" onClick={toRegister2} size="large"> Registrate </PickyButtonBlackXL>
                <div className="font-test demasiado">Demasiado</div>
                <div className="font-test ft-Heebo">Picky</div>
                <div className="font-test ft-Inter">Picky</div>
                <div className="font-test ft-Poppins">Picky</div>
                <div className="font-test ft-PublicSans">Picky</div>
                <div className="font-test ft-Roboto">Picky</div>
            </div>
            <div className="tile tile-white">
                <div className="tile-content page1">
                    <div className="register-button-positioner">
                        <PickyButtonOrangeXL variant="contained" onClick={toRegister} size="large">Registrate</PickyButtonOrangeXL>
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

export default Home;
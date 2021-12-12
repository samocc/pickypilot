import './Home.scss';
import {useNavigate} from "react-router-dom";
import {
    PickyButtonBlackXL,
    PickyButtonOrangeXL
} from "../components/PickyButton/PickyButton";
import RegisterModal from "../register_wizard/RegisterModal";
import {useState} from "react";

function Home() {
    const navigate = useNavigate();
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    async function toRegister() {
        navigate('/register');
    }
    async function toRegister2() {
        setRegisterModalOpen(true)
    }
    async function closeRegisterModal() {
        setRegisterModalOpen(false);
    }
    return(
        <div className="picky-home">
            <div>
                <span className="font-test ft-Heebo">Picky</span>
                <span className="font-test ft-Inter">Picky</span>
                <span className="font-test ft-Poppins">Picky</span>
                <span className="font-test ft-PublicSans">Picky</span>
                <span className="font-test ft-Roboto">Picky</span>
            </div>
            <PickyButtonBlackXL variant="contained" onClick={toRegister2} size="large"> Registrate (modal) </PickyButtonBlackXL>
            <PickyButtonOrangeXL variant="contained" onClick={toRegister} size="large"> Registrate (page) </PickyButtonOrangeXL>

            <div className="tile tile-white">
                <div className="tile-content page1">
                    <div className="register-button-positioner">
                        <PickyButtonOrangeXL variant="contained" onClick={toRegister} size="large">Registrate</PickyButtonOrangeXL>
                    </div>
                </div>
            </div>
            <div className="tile tile-orange">
                <div className="tile-content">

                </div>
            </div>
            <RegisterModal open={registerModalOpen} onClose={closeRegisterModal}/>
        </div>
    )
}

export default Home;
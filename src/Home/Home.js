import './Home.scss';
import {useNavigate} from "react-router-dom";
import {PickyButtonBlack, PickyButtonOrange} from "../components/PickyButton/PickyButton";
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
            <div className="tile tile-white">
                <div className="tile-content">
                    <div>
                        <span className="font-test ft-Heebo">Picky</span>
                        <span className="font-test ft-Inter">Picky</span>
                        <span className="font-test ft-Poppins">Picky</span>
                        <span className="font-test ft-PublicSans">Picky</span>
                        <span className="font-test ft-Roboto">Picky</span>
                    </div>
                    <PickyButtonBlack variant="contained" onClick={toRegister2}> Registrate (modal) </PickyButtonBlack>
                    <PickyButtonOrange variant="contained" onClick={toRegister}> Registrate (page) </PickyButtonOrange>
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
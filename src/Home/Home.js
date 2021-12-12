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
            <div className="tile">
                <PickyButtonBlack variant="contained" onClick={toRegister2}> Registrate (modal) </PickyButtonBlack>
                <PickyButtonOrange variant="contained" onClick={toRegister}> Registrate (page) </PickyButtonOrange>
            </div>
            <RegisterModal open={registerModalOpen} onClose={closeRegisterModal}/>
        </div>
    )
}

export default Home;
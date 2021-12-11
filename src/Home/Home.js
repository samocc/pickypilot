import './Home.scss';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {PickyButtonBlack, PickyButtonOrange} from "../components/PickyButton/PickyButton";

function Home() {
    const navigate = useNavigate();

    async function toRegister() {
        navigate('/register');
    }
    return(
        <div className="picky-home">
            <div className="tile">
                <Button variant="contained" onClick={toRegister}> Registrate </Button>
                <PickyButtonBlack variant="contained" onClick={toRegister}> Registrate </PickyButtonBlack>
                <PickyButtonOrange variant="contained" onClick={toRegister}> Registrate </PickyButtonOrange>
            </div>
        </div>
    )
}

export default Home;
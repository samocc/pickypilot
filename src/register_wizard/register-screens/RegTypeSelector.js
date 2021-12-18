import React from "react";
import './RegisterScreen.scss'
import {PickyButton} from "../../components/PickyButton/PickyButton";
import useWindowDimensions from "../../services/useWindowDimensions.hook";


function RegTypeSelector(props) {
    const {selectUser, selectChef} = props;
    const {isMobile} = useWindowDimensions();

    return (
        <div className="register-screen">
            <div className="rs-header">Eres... Picky??</div>
            <div className="rs-body">
                <div className={isMobile ? "rs-overlay mobile" : "rs-overlay"}>
                    <div className="overlay-column user-column">
                        <PickyButton pickycolor="orange" onClick={selectUser}>Registrar como usuario</PickyButton>
                    </div>
                    <div className="overlay-column chef-column">
                        <PickyButton pickycolor="black" onClick={selectChef}>Registrar como proveedor</PickyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegTypeSelector;
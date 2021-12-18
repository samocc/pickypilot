import React from "react";
import './RegisterScreen.scss'
import {PickyButtonBlack, PickyButtonOrange} from "../../components/PickyButton/PickyButton";
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
                        <PickyButtonOrange onClick={selectUser}>Registrar como usuario</PickyButtonOrange>
                    </div>
                    <div className="overlay-column chef-column">
                        <PickyButtonBlack onClick={selectChef}>Registrar como proveedor</PickyButtonBlack>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegTypeSelector;
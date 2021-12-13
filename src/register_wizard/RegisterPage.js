import './RegisterPage.scss'
import PickyRegister from "./PickyRegister";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React from "react";
// import {useNavigate} from "react-router-dom";

function RegisterPage() {
    // const navigate = useNavigate();
    async function toHome() {
        // navigate('/');
    }

    return (
        <div className="register-page">
            <div className="register-page-content">
                <PickyRegister />
            </div>
            <div className="page-return-wrapper">
                <Button startIcon={<KeyboardArrowLeftIcon />} onClick={toHome}>
                    Regresar a Picky.com
                </Button>
            </div>
        </div>
    )
}

export default RegisterPage;

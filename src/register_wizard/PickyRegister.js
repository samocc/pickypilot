import './PickyRegister.scss'
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {deleteRegistry as deleteRegistryMutation} from "../graphql/mutations";
import {IconButton} from "@mui/material";
import {PickyButtonBlack, PickyButtonOrange} from "../components/PickyButton/PickyButton";
import ChefRegister from "./ChefRegister";
import UserRegister from "./UserRegister";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import {listRegistries} from "../graphql/queries";

function PickyRegister() {
    const [registry, setRegistry] = useState([]);
    const [advanced, setAdvanced] = useState(false);
    const [displayOverlay, setDisplayOverlay] = useState(true);

    useEffect(() => {
        fetchRegistry();
    }, []);

    async function fetchRegistry() {
        const apiData = await API.graphql({ query: listRegistries });
        setRegistry(apiData.data.listRegistries.items);
    }
    function onRegister(added) {
        setRegistry([ ...registry, added ]);
    }
    async function showOverlay () {
        setDisplayOverlay(true);
    }
    async function selectUser() {
        setAdvanced(false);
        setDisplayOverlay(false);
    }
    async function selectChef() {
        setAdvanced(true);
        setDisplayOverlay(false);
    }

    async function deleteRegistry ({ id }) {
        const newRegistryArray = registry.filter(note => note.id !== id);
        setRegistry(newRegistryArray);
        await API.graphql({ query: deleteRegistryMutation, variables: { input: { id } }});
    }

    return(
        <div className="picky-register-wrapper">
            <div className="picky-register">
                <div className="return-wrapper">
                    <Button startIcon={<KeyboardArrowLeftIcon />} onClick={showOverlay}>
                        <span>Regresar</span>
                    </Button>
                </div>
                {displayOverlay === true ? (
                    <div className="picky-register-overlay">
                        <div className="overlay-title">
                            <div className="picky-register-header">Eres... Picky??</div>
                        </div>
                        <div className="overlay-content">
                            <div className="overlay-column user-column">
                                <PickyButtonOrange onClick={selectUser}>Registrar como usuario</PickyButtonOrange>
                            </div>
                            <div className="overlay-column chef-column">
                                <PickyButtonBlack onClick={selectChef}>Registrar como proveedor</PickyButtonBlack>
                            </div>
                        </div>
                    </div>
                ):null}
                <div className="picky-register-body">
                    {advanced === true ? <ChefRegister onRegister={onRegister} /> : <UserRegister onRegister={onRegister}/>}
                </div>
            </div>
            <div className="registry-list">
                {
                    registry.map(reg => (
                        <div className="email-list-item" key={reg.id || reg.email}>
                            <span className="email">{reg.email}</span>
                            <span className="ciudad">{reg.region}</span>
                            {reg.esp ? <span className="data"> | Esp: {reg.esp}</span> : null}
                            {reg.desc ? <span className="data"> | Desc: <CheckIcon fontSize="inherit" /></span> : null}
                            {reg.portfolio ? <span className="data"> | Portfolio: <CheckIcon fontSize="inherit" /></span> : null}
                            {reg.exp ? <span className="data"> | Exp: {reg.exp}</span> : null}
                            <IconButton aria-label="delete" size="small" onClick={() => deleteRegistry(reg)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default PickyRegister;
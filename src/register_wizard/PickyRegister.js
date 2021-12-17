import './PickyRegister.scss'
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {deleteRegistry as deleteRegistryMutation} from "../graphql/mutations";
import {IconButton} from "@mui/material";
import ChefRegister from "./register-screens/ChefRegister";
import UserRegister from "./register-screens/UserRegister";
import RegTypeSelector from "./register-screens/RegTypeSelector";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import {listRegistries} from "../graphql/queries";
import useWindowDimensions from "../services/useWindowDimensions.hook";

function PickyRegister() {
    const [registry, setRegistry] = useState([]);
    const [selectionScreen, setSelectionScreen] = useState(0);
    const {width} = useWindowDimensions();

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
    async function showSelectionScreen () {
        setSelectionScreen(0);
    }
    async function selectUser() {
        setSelectionScreen(1);
    }
    async function selectChef() {
        setSelectionScreen(2);
    }

    async function deleteRegistry ({ id }) {
        const newRegistryArray = registry.filter(note => note.id !== id);
        setRegistry(newRegistryArray);
        await API.graphql({ query: deleteRegistryMutation, variables: { input: { id } }});
    }

    return(
        <div className="picky-register-wrapper">
            <div className="picky-register">
                {selectionScreen === 0 ? null :
                    <div className="return-wrapper">
                        <Button startIcon={<KeyboardArrowLeftIcon/>} onClick={showSelectionScreen}>
                            <span>Regresar</span>
                        </Button>
                    </div>
                }
                <div className={`picky-register-body ${width > 880 ? "" : "mobile"}`}>
                    {selectionScreen === 0 ? <RegTypeSelector selectUser={selectUser} selectChef={selectChef} /> : null}
                    {selectionScreen === 1 ? <UserRegister onRegister={onRegister}/> : null}
                    {selectionScreen === 2 ? <ChefRegister onRegister={onRegister}/> : null}
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
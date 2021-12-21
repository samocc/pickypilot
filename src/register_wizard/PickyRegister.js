import './PickyRegister.scss'
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {deleteRegistry as deleteRegistryMutation, deleteUserRegistry as deleteUserRegistryMutation} from "../graphql/mutations";
import {IconButton} from "@mui/material";
import ChefRegister from "./register-screens/ChefRegister";
import UserRegister from "./register-screens/UserRegister";
import RegTypeSelector from "./register-screens/RegTypeSelector";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import {listRegistries, listUserRegistries} from "../graphql/queries";
import useWindowDimensions from "../services/useWindowDimensions.hook";
import RegSuccess from "./register-screens/RegSuccess";
import {ChefSuccessChoro, UserSuccessChoro} from "../services/DataConfig";

function PickyRegister() {
    const [registry, setRegistry] = useState([]);
    const [userRegistry, setUserRegistry] = useState([]);
    const [selectionScreen, setSelectionScreen] = useState(0);
    const [regSuccessState, setRegSuccessState] = useState({
        title: '',
        message: '',
        choro: ''
    });
    const {isMobile} = useWindowDimensions();

    useEffect(() => {
        fetchRegistry();
        fetchUserRegistry();
    }, []);

    async function fetchRegistry() {
        const apiData = await API.graphql({ query: listRegistries });
        setRegistry(apiData.data.listRegistries.items);
    }
    async function fetchUserRegistry() {
        const apiData = await API.graphql({ query: listUserRegistries });
        setUserRegistry(apiData.data.listUserRegistries.items);
    }
    function onUserRegister(added) {
        const successState = {
            title: 'Registrar como usuario',
            message: `Registro exitoso: ${added.email}`,
            choro: UserSuccessChoro
        }
        setRegSuccessState(successState);
        setUserRegistry([ ...userRegistry, added ]);
        setSelectionScreen(3);
    }
    function onRegister(added) {
        const successState = {
            title: 'Registrar como proveedor',
            message: `Registro exitoso: ${added.email}`,
            choro: ChefSuccessChoro
        }
        setRegSuccessState(successState);
        setRegistry([ ...registry, added ]);
        setSelectionScreen(3);
    }
    function showSelectionScreen () {
        setSelectionScreen(0);
    }
    function selectUser() {
        setSelectionScreen(1);
    }
    function selectChef() {
        setSelectionScreen(2);
    }

    async function deleteRegistry ({ id }) {
        const newRegistryArray = registry.filter(note => note.id !== id);
        setRegistry(newRegistryArray);
        await API.graphql({ query: deleteRegistryMutation, variables: { input: { id } }});
    }
    async function deleteUserRegistry ({ id }) {
        const newRegistryArray = userRegistry.filter(note => note.id !== id);
        setUserRegistry(newRegistryArray);
        await API.graphql({ query: deleteUserRegistryMutation, variables: { input: { id } }});
    }

    return(
        <div className={isMobile ? "picky-register-wrapper mobile": "picky-register-wrapper"}>
            <div className="picky-register">
                {selectionScreen === 0 ? null :
                    <div className="return-wrapper">
                        <Button startIcon={<KeyboardArrowLeftIcon/>} onClick={showSelectionScreen}>
                            <span>Regresar</span>
                        </Button>
                    </div>
                }
                {selectionScreen === 0 ? <RegTypeSelector selectUser={selectUser} selectChef={selectChef} /> : null}
                {selectionScreen === 1 ? <div className="picky-register-padded"><UserRegister onRegister={onUserRegister}/></div> : null}
                {selectionScreen === 2 ? <div className="picky-register-padded"><ChefRegister onRegister={onRegister}/></div> : null}
                {selectionScreen === 3 ? <div className="picky-register-padded"><RegSuccess {...regSuccessState}/></div> : null}
            </div>
            <div className="registry-list">
                {
                    registry.map((reg) => (
                        <div className="email-list-item" key={reg.id + '-reg'}>
                            <span className="email">{reg.email}</span>
                            <span className="ciudad">{reg.region}</span>
                            {reg.esp.length ? <span className="data"> | Esp: {reg.esp.length}</span> : null}
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
            <div className="registry-list left-aligned">
                {
                    userRegistry.map((reg) => (
                        <div className="email-list-item" key={reg.id + '-user-reg'}>
                            <span className="email">{reg.email}</span>
                            <span className="ciudad">{reg.region}</span>
                            {reg.categories.length ? <span className="data"> | Cat: {reg.categories.length}</span> : null}
                            <IconButton aria-label="delete" size="small" onClick={() => deleteUserRegistry(reg)}>
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
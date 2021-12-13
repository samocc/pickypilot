import React, {useState, useEffect} from 'react';
import './UserRegister.scss'
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation} from "../graphql/mutations";
import {listRegistries} from "../graphql/queries";
import Button from '@mui/material/Button';
import {Autocomplete, TextField} from "@mui/material";
import {estados} from "../regionselector/estados";
import SuccessPanel from "./sucess-panel/SuccessPanel";

const initialFormState = {
    email: '',
    ciudad: ''
}

const defaultProps = {
    options: estados,
    getOptionLabel: (option) => option.name,
};

const initialErrorState = {
    email: '',
    ciudad: '',
    esp: '',
    desc: '',
    portfolio: ''
}

function UserRegister() {
    const [registry, setRegistry] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorState, setErrorState] = useState(initialErrorState);

    useEffect(() => {
        fetchRegistry();
    }, []);

    async function fetchRegistry() {
        const apiData = await API.graphql({ query: listRegistries });
        setRegistry(apiData.data.listRegistries.items);
    }

    async function registerUser() {
        if (!validateForm(formData)) return;
        await API.graphql({ query: createRegistryMutation, variables: { input: formData } });

        setRegistry([ ...registry, formData ]);
        setSuccessMessage('Registro exitoso: ' + formData.email);
        setFormData({...initialFormState, 'ciudad': formData.ciudad});
    }

    function validateForm(data) {
        const eState = {...initialErrorState};
        let valid = true;
        if(!data.email) {
            eState.email = 'Ingresa un correo electrónico';
            valid = false;
        }
        if(!data.ciudad) {
            eState.ciudad = 'Selecciona ciudad'
            valid = false;
        }
        setErrorState({...initialErrorState, ...eState});
        return valid
    }

    function clearErrorField(fieldName) {
        setErrorState(prevState => {return {...prevState, [fieldName]: false}});
    }

    async function onEmailChange (e) {
        setFormData({ ...formData, 'email': e.target.value});
        clearErrorField('email');
    }

    async function onRegionChange (e, nv) {
        setFormData({ ...formData, 'ciudad': nv.name})
        clearErrorField('ciudad');
    }

    return (
        <div className="user-register">
            <div className="user-register-header">User register</div>
            <div className="user-register-body">
                {successMessage.length ? (
                    <SuccessPanel message={successMessage}/>
                ) :
                    <div className='user-register-form'>
                        <div className="register-choro">
                            <p>
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                aoiefjwsef ofiaehfn foaifhiae ofiaej
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                POI9DJaidj CPOAJFDOAIE  dopaeijdiae doiaejd poidjae doaiejdeai oi
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                aoiefjwsef ofiaehfn foaifhiae ofiaej
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                aoiefjwsef ofiaehfn foaifhiae ofiaej
                            </p>
                            <p>
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                aoiefjwsef ofiaehfn foaifhiae ofiaej
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                POI9DJaidj CPOAJFDOAIE  dopaeijdiae doiaejd poidjae doaiejdeai oi
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                aoiefjwsef ofiaehfn foaifhiae ofiaej
                                Bla bla blaaa blabla bla blaaa bla ldijeaiof aifhaei oaeihfdae oiaeufhaeu ofihaef
                                aoiefjwsef ofiaehfn foaifhiae ofiaej
                            </p>
                        </div>
                        <div className="columns-container">
                            <div className="columns">
                                <div className="column is-half">
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        onChange={onEmailChange}
                                        label="Email"
                                        value={formData.email}
                                        required={true}
                                        error={errorState.email.length > 0}
                                        helperText={errorState.email}
                                    />
                                </div>
                                <div className="column is-half">
                                    <Autocomplete
                                        {...defaultProps}
                                        disableClearable
                                        onChange={onRegionChange}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Estado de residencia"
                                                variant="standard"
                                                required={true}
                                                error={errorState.ciudad.length > 0}
                                                helperText={errorState.ciudad}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="user-register-footer">
                <div className="register-button">
                    <Button
                        variant="contained"
                        onClick={registerUser}
                        disabled={successMessage.length > 0 }
                    >Registrar</Button>
                </div>
            </div>
        </div>
    );
}

export default UserRegister;
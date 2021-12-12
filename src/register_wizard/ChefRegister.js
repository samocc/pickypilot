import React, {useState, useEffect} from 'react';
import './UserRegister.scss'
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation} from "../graphql/mutations";
import {listRegistries} from "../graphql/queries";
import Button from '@mui/material/Button';
import {Autocomplete, TextField} from "@mui/material";
import {estados} from "../regionselector/estados";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SuccessPanel from "./sucess-panel/SuccessPanel";

const initialFormState = {
    email: '',
    ciudad: '',
    esp: '',
    desc: '',
    portfolio: ''
}

const initialErrorState = {
    email: '',
    ciudad: '',
    esp: '',
    desc: '',
    portfolio: ''
}

const defaultProps = {
    options: estados,
    getOptionLabel: (option) => option.name,
};

function ChefRegister() {
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

    async function onExpChange (e, nv) {
        setFormData({ ...formData, 'exp': nv})
        clearErrorField('exp');
    }

    return (
        <div className="user-register">
            <div className="user-register-header">Chef register</div>
            <div className="user-register-body">
                {successMessage.length ? (
                        <SuccessPanel message={successMessage}/>
                    ) :
                    <div className='user-register-form'>
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
                                        error={errorState.email}
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
                                                error={errorState.ciudad}
                                                helperText={errorState.ciudad}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column-grow">
                                    <TextField
                                        fullWidth
                                        onChange={e => setFormData({ ...formData, 'esp': e.target.value})}
                                        label="Especialidad"
                                        value={formData.esp}
                                    />
                                </div>
                                <div className="column-narrow">
                                    <div className="exp-label">
                                        Nivel de experiencia
                                    </div>
                                    <ToggleButtonGroup
                                        size="small"
                                        value={formData.exp}
                                        exclusive
                                        onChange={onExpChange}
                                        aria-label="text alignment"
                                    >
                                        <ToggleButton value={1}>
                                            Aficionado
                                        </ToggleButton>
                                        <ToggleButton value={2}>
                                            Experimentado
                                        </ToggleButton>
                                        <ToggleButton value={3}>
                                            Experto
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                            <div className="single-column">
                                <TextField
                                    fullWidth
                                    label="Descripción"
                                    multiline
                                    rows={4}
                                    value={formData.desc}
                                    onChange={e => setFormData({ ...formData, 'desc': e.target.value})}
                                    placeholder="Describe tu experiencia culinaria"
                                />
                            </div>
                            <div className="single-column">
                                <TextField
                                    fullWidth
                                    label="Portfolio"
                                    value={formData.portfolio}
                                    onChange={e => setFormData({ ...formData, 'portfolio': e.target.value})}
                                    placeholder="Ingresa un link donde se muestre tu trabajo (página web, red social, etc)"
                                />
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

export default ChefRegister;
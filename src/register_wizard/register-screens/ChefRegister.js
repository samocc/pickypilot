import React, {useState} from 'react';
import './RegisterScreen.scss'
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation} from "../../graphql/mutations";
import Button from '@mui/material/Button';
import {Autocomplete, TextField} from "@mui/material";
import {estados} from "../../regionselector/estados";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SuccessPanel from "../sucess-panel/SuccessPanel";
import Grid from '@mui/material/Grid';

const initialFormState = {
    email: '',
    region: '',
    esp: '',
    desc: '',
    portfolio: ''
}

const initialErrorState = {
    email: '',
    region: '',
    esp: '',
    desc: '',
    portfolio: ''
}

const defaultProps = {
    options: estados,
    getOptionLabel: (option) => option.name,
};

function ChefRegister(props) {
    const {onRegister} = props;
    const [formData, setFormData] = useState(initialFormState);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorState, setErrorState] = useState(initialErrorState);

    async function registerUser() {
        if (!validateForm(formData)) return;
        await API.graphql({ query: createRegistryMutation, variables: { input: formData } });
        onRegister(formData);
        setSuccessMessage('Registro exitoso: ' + formData.email);
        setFormData({...initialFormState, 'region': formData.region});
    }

    function validateForm(data) {
        const eState = {...initialErrorState};
        let valid = true;
        if(!data.email) {
            eState.email = 'Ingresa un correo electrónico';
            valid = false;
        }
        if(!data.region) {
            eState.region = 'Selecciona región'
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
        setFormData({ ...formData, 'region': nv.name})
        clearErrorField('region');
    }

    async function onExpChange (e, nv) {
        setFormData({ ...formData, 'exp': nv})
        clearErrorField('exp');
    }

    return (
        <div className="register-screen">
            <div className="rs-header">Chef register</div>
            <div className="rs-body">
                <div className="rs-form">
                    {successMessage.length ? (
                            <SuccessPanel message={successMessage}/>
                        ) :
                        <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
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
                                </Grid>
                                <Grid item xs={12} sm={6}>
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
                                                error={errorState.region.length > 0}
                                                helperText={errorState.region}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm>
                                    <TextField
                                        fullWidth
                                        onChange={e => setFormData({ ...formData, 'esp': e.target.value})}
                                        label="Especialidad"
                                        value={formData.esp}
                                    />
                                </Grid>
                                <Grid item xs={12} sm="auto">
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
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        label="Descripción"
                                        multiline
                                        rows={4}
                                        value={formData.desc}
                                        onChange={e => setFormData({ ...formData, 'desc': e.target.value})}
                                        placeholder="Describe tu experiencia culinaria"
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        label="Portfolio"
                                        value={formData.portfolio}
                                        onChange={e => setFormData({ ...formData, 'portfolio': e.target.value})}
                                        placeholder="Ingresa un link donde se muestre tu trabajo (página web, red social, etc)"
                                    />
                                </Grid>
                            </Grid>
                    }
                </div>
            </div>
            <div className="rs-footer">
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
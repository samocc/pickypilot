import React, {useState} from 'react';
import './RegisterScreen.scss'
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation} from "../../graphql/mutations";
import Button from '@mui/material/Button';
import SuccessPanel from "../sucess-panel/SuccessPanel";
import Grid from "@mui/material/Grid";
import RegionSelector from "../../components/region-selector/RegionSelector";
import {TextField} from "@mui/material";

const initialFormState = {
    email: '',
    region: ''
}

const initialErrorState = {
    email: '',
    region: '',
    esp: '',
    desc: '',
    portfolio: ''
}

function UserRegister(props) {
    const {onRegister} = props;
    const [formData, setFormData] = useState(initialFormState);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorState, setErrorState] = useState(initialErrorState);

    async function registerUser() {
        if (!validateForm(formData)) return;
        API.graphql({ query: createRegistryMutation, variables: { input: formData } })
            .then(registerSuccess, registerError)
    }

    function registerSuccess() {
        onRegister(formData);
        setSuccessMessage('Registro exitoso: ' + formData.email);
        setFormData({...initialFormState, 'region': formData.region});
    }

    function registerError(e) {
        console.log(e);
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

    async function onRegionChange (e) {
        setFormData({ ...formData, 'region': e.target.value})
        clearErrorField('region');
    }

    return (
        <div className="register-screen">
            <div className="rs-header">User register</div>
            <div className="rs-body">
                <div className="rs-form">
                {successMessage.length ? (
                    <SuccessPanel message={successMessage}/>
                ) :
                    <div>
                        <div className="rs-choro">
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
                        <Grid container rowSpacing={3} columnSpacing={2}>
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
                                <RegionSelector
                                    onRegionChange={onRegionChange}
                                    error={errorState.region}
                                    required={true}
                                    value={formData.region}
                                />
                            </Grid>
                        </Grid>
                    </div>
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

export default UserRegister;
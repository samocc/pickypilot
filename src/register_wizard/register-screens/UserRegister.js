import React, {useState} from 'react';
import './RegisterScreen.scss'
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createUserRegistry as createRegistryMutation} from "../../graphql/mutations";
import Grid from "@mui/material/Grid";
import RegionSelector from "../../components/region-selector/RegionSelector";
import {TextField} from "@mui/material";
import CategoryPicker from "../../components/category-picker/CategoryPicker";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LoadingButton from "@mui/lab/LoadingButton";
import RegErrors from "./RegErrors";

const initialFormState = {
    email: '',
    region: '',
    categories: []
}

const initialErrorState = {
    email: '',
    region: '',
    categories: ''
}

function UserRegister(props) {
    const {onRegister} = props;
    const [formData, setFormData] = useState(initialFormState);
    const [errorState, setErrorState] = useState(initialErrorState);
    const [isLoading, setIsLoading] = useState(false);
    const [regErrors, setRegErrors] = useState([]);

    async function registerUser() {
        setRegErrors([]);
        if (!validateForm(formData)) return;
        setIsLoading(true);
        API.graphql({ query: createRegistryMutation, variables: { input: formData } })
            .then(registerSuccess, registerError)
    }

    function registerSuccess(resp) {
        setIsLoading(false);
        onRegister(resp.data.createUserRegistry);
    }

    function registerError({errors}) {
        setIsLoading(false);
        setRegErrors(errors);
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

    function onEmailChange (e) {
        setFormData({ ...formData, 'email': e.target.value});
        clearErrorField('email');
    }

    function onRegionChange (e) {
        setFormData({ ...formData, 'region': e.target.value})
        clearErrorField('region');
    }

    function removeError(index) {
        setRegErrors(regErrors.filter((err, i) => i !== index));
    }

    return (
        <div className="register-screen">
            <div className="rs-header">Registrar como usuario</div>
            <div className="rs-body">
                <div className="rs-form">
                    <RegErrors errors={regErrors} removeError={removeError}/>
                    <div className="rs-section">
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
                    <div className="rs-section">
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
                                    label="Estado de residencia"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div className="form-instruction">Selecciona las experiencias Picky que despiertan tu interés:</div>
                                <CategoryPicker value={formData.categories} onChange={(nv) => setFormData({ ...formData, 'categories': nv})}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className="rs-footer">
                <div className="register-button">
                    <LoadingButton
                        variant="contained"
                        onClick={registerUser}
                        loading={isLoading}
                        startIcon={<AddTaskIcon/>}
                        loadingPosition="start"
                    >
                        Registrar
                    </LoadingButton>
                </div>
            </div>
        </div>
    );
}

export default UserRegister;
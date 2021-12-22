import React, {useState} from 'react';
import './RegisterScreen.scss'
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation} from "../../graphql/mutations";
import LoadingButton from '@mui/lab/LoadingButton';
import {TextField} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Grid from '@mui/material/Grid';
import EspSelector from "../../components/esp-selector/EspSelector";
import RegionSelector from "../../components/region-selector/RegionSelector";
import ErrorsList from "../../components/errors-list/ErrorsList";
import toInt from "validator/es/lib/toInt";
import MenuItem from "@mui/material/MenuItem";
import {BirthYears, Genders, MenuProps} from "../../services/DataConfig";

const initialFormState = {
    email: '',
    region: '',
    birth: 2010,
    gender: '',
    esp: [],
    desc: '',
    portfolio: ''
}

const initialErrorState = {
    email: '',
    region: '',
    birth: '',
    gender: '',
    esp: '',
    desc: '',
    portfolio: ''
}

function ChefRegister(props) {
    const {onSuccess, onError} = props;
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
        onSuccess(resp.data.createRegistry);
    }

    function registerError({errors}) {
        setIsLoading(false);
        setRegErrors(errors);
        onError(errors);
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

    function onExpChange (e, nv) {
        setFormData({ ...formData, 'exp': nv})
        clearErrorField('exp');
    }

    function removeError(index) {
        setRegErrors(regErrors.filter((err, i) => i !== index));
    }

    return (
        <div className="register-screen">
            <div className="rs-header">Registrar como proveedor</div>
            <div className="rs-body">
                <div className="rs-form">
                    <ErrorsList errors={regErrors} removeError={removeError}/>
                    <div className="rs-section">
                        <div className="form-instruction">Información personal</div>
                        <Grid container rowSpacing={3} columnSpacing={2}>
                            <Grid item xs={12} sm={8}>
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
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    select
                                    variant="standard"
                                    onChange={(e) => setFormData({...formData, birth: toInt(e.target.value)})}
                                    label="Año de nacimiento"
                                    value={formData.birth}
                                    SelectProps={{MenuProps: MenuProps}}
                                >
                                    {BirthYears.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <RegionSelector
                                    onRegionChange={onRegionChange}
                                    error={errorState.region}
                                    required={true}
                                    variant="standard"
                                    value={formData.region}
                                    label="Estado de residencia"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    select
                                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                    label="Género"
                                    variant="standard"
                                    value={formData.gender}
                                >
                                    {Genders.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            {/*<Grid item xs={12} sm={4}>*/}
                            {/*    <div className="exp-label">*/}
                            {/*        Género*/}
                            {/*    </div>*/}
                            {/*    <ToggleButtonGroup*/}
                            {/*        size="small"*/}
                            {/*        exclusive*/}
                            {/*        fullWidth*/}
                            {/*        value={testFields.gender}*/}
                            {/*        onChange={(e, nv) => setTestFields({...testFields, gender: nv}) }*/}
                            {/*        aria-label="text alignment"*/}
                            {/*    >*/}
                            {/*        <ToggleButton value="Masculino">*/}
                            {/*            Masculino*/}
                            {/*        </ToggleButton>*/}
                            {/*        <ToggleButton value="Femenino">*/}
                            {/*            Femenino*/}
                            {/*        </ToggleButton>*/}
                            {/*        <ToggleButton value="Otro">*/}
                            {/*            Otro*/}
                            {/*        </ToggleButton>*/}
                            {/*    </ToggleButtonGroup>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12} sm={4}>*/}
                            {/*    <div className="exp-label">*/}
                            {/*        Género*/}
                            {/*    </div>*/}
                            {/*    <ToggleButtonGroup*/}
                            {/*        size="small"*/}
                            {/*        value={testFields.gender}*/}
                            {/*        exclusive*/}
                            {/*        fullWidth*/}
                            {/*        onChange={(e, nv) => setTestFields({...testFields, gender: nv}) }*/}
                            {/*        aria-label="text alignment"*/}
                            {/*    >*/}
                            {/*        <ToggleButton value="Masculino">*/}
                            {/*            <MaleIcon />*/}
                            {/*        </ToggleButton>*/}
                            {/*        <ToggleButton value="Femenino">*/}
                            {/*            <FemaleIcon />*/}
                            {/*        </ToggleButton>*/}
                            {/*        <ToggleButton value="Otro">*/}
                            {/*            <TransgenderIcon />*/}
                            {/*        </ToggleButton>*/}
                            {/*    </ToggleButtonGroup>*/}
                            {/*</Grid>*/}

                        </Grid>
                    </div>

                    <div className="rs-section extra-margin">
                        <div className="form-instruction">Queremos saber más de ti:</div>
                        <div style={{margin: '20px 0 0'}}>
                            <Grid container rowSpacing={2} columnSpacing={2}>
                                <Grid item xs={12} sm>
                                    <EspSelector
                                        value={formData.esp}
                                        onChange={(nv) => setFormData({ ...formData, 'esp': nv})}
                                        max={4}
                                        label="Especialidades culinarias (4 max)"
                                        enableCustomFields={true}
                                        autoscroll={true}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={"auto"}>
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
                        </div>

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

export default ChefRegister;
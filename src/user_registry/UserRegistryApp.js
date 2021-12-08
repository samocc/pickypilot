import React, {useState, useEffect} from 'react';
import './UserRegistryApp.css';
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation, deleteRegistry as deleteRegistryMutation} from "../graphql/mutations";
import {listRegistries} from "../graphql/queries";
import Button from '@mui/material/Button';
import {Autocomplete, Collapse, FormControlLabel, IconButton, Switch, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import {estados} from "../regionselector/estados";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const initialFormState = {
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

function UserRegistryApp() {
    const [registry, setRegistry] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [advanced, setAdvanced] = useState(false);

    useEffect(() => {
        fetchRegistry();
    }, []);

    async function fetchRegistry() {
        const apiData = await API.graphql({ query: listRegistries });
        setRegistry(apiData.data.listRegistries.items);
    }

    async function registerUser() {
        if (!formData.email || !formData.ciudad) return;
        await API.graphql({ query: createRegistryMutation, variables: { input: formData } });

        setRegistry([ ...registry, formData ]);
        setFormData({...initialFormState, 'ciudad': formData.ciudad});
    }

    async function deleteRegistry ({ id }) {
        const newRegistryArray = registry.filter(note => note.id !== id);
        setRegistry(newRegistryArray);
        await API.graphql({ query: deleteRegistryMutation, variables: { input: { id } }});
    }

    async function onRegionChange (e, nv) {
        setFormData({ ...formData, 'ciudad': nv.name})
    }

    async function onExpChange (e, nv) {
        setFormData({ ...formData, 'exp': nv})
    }

    async function toggleAdvanced (e, nv) {
        setAdvanced(nv);
    }

    return (
        <div className="User-registry">
            <h1>Registrar Email</h1>
            <div className="columns-container">
                <div className="columns">
                    <div className="column is-half">
                        <TextField
                            fullWidth
                            variant="standard"
                            onChange={e => setFormData({ ...formData, 'email': e.target.value})}
                            label="Email"
                            value={formData.email}
                        />
                    </div>
                    <div className="column is-half">
                        <Autocomplete
                            {...defaultProps}
                            disableClearable
                            onChange={onRegionChange}
                            renderInput={(params) => (
                                <TextField {...params} label="Estado" variant="standard" />
                            )}
                        />
                    </div>
                </div>
                <div className="single-column">
                    <FormControlLabel
                        control={<Switch checked={advanced} onChange={toggleAdvanced} />}
                        label="Avanzado"
                    />
                </div>
                <Collapse in={advanced}>
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
                </Collapse>

            </div>

            <div className="register-button">
                <Button variant="contained" onClick={registerUser}>Registrar!</Button>
            </div>

            <div className="registry-list">
                {
                    registry.map(reg => (
                        <div className="email-list-item" key={reg.id || reg.email}>
                            <span className="email">{reg.email}</span>
                            <span className="ciudad">{reg.ciudad}</span>
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
    );
}

export default UserRegistryApp;
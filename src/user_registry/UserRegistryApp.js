import React, {useState, useEffect} from 'react';
import './UserRegistryApp.css';
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation, deleteRegistry as deleteRegistryMutation} from "../graphql/mutations";
import {listRegistries} from "../graphql/queries";
import Button from '@mui/material/Button';
import {Autocomplete, IconButton, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {estados} from "../regionselector/estados";

const initialFormState = {
    email: '',
    ciudad: ''
}

const defaultProps = {
    options: estados,
    getOptionLabel: (option) => option.name,
};

function UserRegistryApp() {
    const [registry, setRegistry] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

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
        setFormData({...formData, 'email': initialFormState.email});
    }

    async function deleteRegistry ({ id }) {
        const newRegistryArray = registry.filter(note => note.id !== id);
        setRegistry(newRegistryArray);
        await API.graphql({ query: deleteRegistryMutation, variables: { input: { id } }});
    }

    async function onChange (e, nv) {
        setFormData({ ...formData, 'ciudad': nv.name})
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
                            onChange={(e, nv) =>  onChange(e, nv)}
                            renderInput={(params) => (
                                <TextField {...params} label="Estado" variant="standard" />
                            )}
                        />
                    </div>
                </div>
            </div>

            <div className="register-button">
                <Button variant="contained" onClick={registerUser}>Registrar!</Button>
            </div>

            <div className={"registry-list"}>
                {
                    registry.map(reg => (
                        <div className={"email-list-item"} key={reg.id || reg.email}>
                            <span className={"email"}>{reg.email}</span>
                            <span className={"ciudad"}>Estado: {reg.ciudad}</span>
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
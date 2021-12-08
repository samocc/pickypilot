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

// const estados = [
//     { name: 'Aguascalientes', code: 'AS' },
//     { name: 'Baja California', code: 'BC' },
//     { name: 'Baja California Sur', code: 'BS' },
//     { name: 'Campeche', code: 'CC' },
//     { name: 'Chiapas', code: 'CS' },
//     { name: 'Chihuahua', code: 'CH' },
//     { name: 'Coahuila', code: 'CL' },
//     { name: 'Colima', code: 'CM' },
//     { name: 'Distrito Federal', code: 'DF' },
//     { name: 'Durango', code: 'DG' },
//     { name: 'Guanajuato', code: 'GT' },
//     { name: 'Guerrero', code: 'GR' },
//     { name: 'Hidalgo', code: 'HG' },
//     { name: 'Jalisco', code: 'JC' },
//     { name: 'México', code: 'MC' },
//     { name: 'Michoacan', code: 'MN' },
//     { name: 'Morelos', code: 'MS' },
//     { name: 'Nayarit', code: 'NT' },
//     { name: 'Nuevo León', code: 'NL' },
//     { name: 'Oaxaca', code: 'OC' },
//     { name: 'Puebla', code: 'PL' },
//     { name: 'Querétaro', code: 'QT' },
//     { name: 'Quintana Roo', code: 'QR' },
//     { name: 'San Luis Potosí', code: 'SP' },
//     { name: 'Sinaloa', code: 'SL' },
//     { name: 'Sonora', code: 'SR' },
//     { name: 'Tabasco', code: 'TC' },
//     { name: 'Tlaxcala', code: 'TL' },
//     { name: 'Tamaulipas', code: 'TS' },
//     { name: 'Veracruz', code: 'VZ' },
//     { name: 'Yucatán', code: 'YN' },
//     { name: 'Zacatecas', code: 'ZS' }
// ]

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
        setFormData(initialFormState);
    }

    async function deleteRegistry ({ id }) {
        const newRegistryArray = registry.filter(note => note.id !== id);
        setRegistry(newRegistryArray);
        await API.graphql({ query: deleteRegistryMutation, variables: { input: { id } }});
    }

    async function onChange (e, nv) {
        console.log(nv);
        setFormData({ ...formData, 'ciudad': nv.name})
    }

    return (
        <div className="User-registry">
            <h1>Registrar Email</h1>
            <div className="form-wrapper">
                <TextField
                    variant="standard"
                    onChange={e => setFormData({ ...formData, 'email': e.target.value})}
                    label="Email"
                    value={formData.email}
                />
            </div>
            <div className="form-wrapper">
                <Autocomplete
                    {...defaultProps}
                    disableClearable
                    onChange={(e, nv) =>  onChange(e, nv)}
                    renderInput={(params) => (
                        <TextField {...params} label="Estado" variant="standard" />
                    )}
                />
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
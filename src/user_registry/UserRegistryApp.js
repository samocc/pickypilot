import React, {useState, useEffect} from 'react';
import './UserRegistryApp.css';
import '@aws-amplify/ui-react/styles.css';
import {API} from "aws-amplify";
import {createRegistry as createRegistryMutation, deleteRegistry as deleteRegistryMutation} from "../graphql/mutations";
import {listRegistries} from "../graphql/queries";

const initialFormState = {
    email: '',
    ciudad: ''
}

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

    return (
        <div className="App">
            <h1>Registrar Email</h1>
            <input
                onChange={e => setFormData({ ...formData, 'email': e.target.value})}
                placeholder="Email"
                value={formData.email}
            /><input
            onChange={e => setFormData({ ...formData, 'ciudad': e.target.value})}
            placeholder="Ciudad"
            value={formData.ciudad}
            />
            <button onClick={registerUser}>Registrar!</button>
            <div className={"registry-list"}>
                {
                    registry.map(reg => (
                        <div className={"email-list-item"} key={reg.id || reg.email}>
                            <span className={"email"}>{reg.email}</span>
                            <span className={"ciudad"}>Ciudad {reg.ciudad}</span>
                            <button onClick={() => deleteRegistry(reg)}>Delete email</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UserRegistryApp;
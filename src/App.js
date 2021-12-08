import React from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import UserRegistryApp from "./user_registry/UserRegistryApp";

function App() {
    return (
        <div className="App">
            <UserRegistryApp />
        </div>
    );
}

export default App;
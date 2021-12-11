import React from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route, Link } from "react-router-dom";
import UserRegistryForm from "./user_registry/UserRegistryForm";
import Home from "./Home/Home";

function App() {
    return (
        <div className="App">
            <h1>APP HEADER</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/register" element={<UserRegistryForm/>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
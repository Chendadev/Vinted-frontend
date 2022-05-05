import React from 'react'
import { useState } from "react";

export default function Signup() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUserChange = event => {
        const value = event.target.value;
        setUser(value);
    };

    const handleEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = event => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleSubmit = event => {
        event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
        console.log(email, password);
    };
    return (
        <div className="form-signup">
            <h1>Vous inscrire</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="jdupont09"
                    type="text"
                    name="user"
                    value={user}
                    onChange={handleUserChange} />
                <input
                    placeholder="jean_dupont@lereacteur.io"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleEmailChange} />
                <input
                    placeholder="1eg6H3*f7sn0"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

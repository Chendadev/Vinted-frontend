import React from 'react'
import { useState } from "react";
import "../Login/Login.scss"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        <div className="container-header">
            <div className="form-signup">
                <div className="title">
                    <h1>Se connecter</h1>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
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
                        <div>
                            <input type="submit" value="Continuer" className="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

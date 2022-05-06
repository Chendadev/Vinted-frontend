import axios from "axios";
import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

export default function Login({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = event => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleLogin = async event => {
        try {
            event.preventDefault();
            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login",
                {
                    email: email,
                    password: password
                }
            );

            console.log(response.data);
            if (response.data.token) {
                setUser(response.data.token); // setUser(token) donc le token est truthy donc :
                // Le user peut être redirigé vers :  
                navigate("/"); // page d'accueil
            }

        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="container-header">
            <div className="form-signup">
                <div className="title">
                    <h1>Se connecter</h1>
                </div>
                <div className="form">
                    <form onSubmit={handleLogin}>
                        <input
                            placeholder="jean_dupont@lereacteur.io"
                            type="email"
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

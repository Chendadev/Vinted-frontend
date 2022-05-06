import React from 'react'
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.scss"

export default function Signup({ setUser }) {
    const [user, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    // const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleUserChange = event => {
        const value = event.target.value;
        setUsername(value);
    };

    const handleEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = event => {
        const value = event.target.value;
        setPassword(value);
    };

    // const handleConfirmPasswordChange = event => {
    //     const value = event.target.value;
    //     setConfirmPassword(value);
    // };

    const navigate = useNavigate()

    const handleSignup = async event => {
        try {
            event.preventDefault();
            // reset du message d'erreur à chaque tentative de connexion
            setErrorMessage("");

            const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                {
                    username: user,
                    email: email,
                    password: password,
                    newsletter: newsletter,
                }
            );
            if (response.data) {
                console.log("Le compte a été crée avec succès");
                setUser(response.data.token) // On cible le token généré par la création du compte
                navigate("/") // Redirection vers la page d'accueil en statut "connecté"
            }

        } catch (error) {
            console.log(error.response.status);
            if (error.response.status === 409) {
                setErrorMessage("Cet email existe déjà !")
            }
        }
    }
    return (
        <div className="container">
            <div className="form-signup">
                <h1>Vous inscrire</h1>
                <form onSubmit={handleSignup}>
                    <input
                        placeholder="jdupont09"
                        type="text"
                        name="user"
                        value={user}
                        onChange={handleUserChange} />
                    <input
                        placeholder="jean_dupont@gmail.com"
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
                    <input
                        type="checkbox"
                        name="newsletter"
                        value={newsletter}
                        onChange={setNewsletter} />

                    <input type="submit" value="S'inscrire" />
                    <p className="error">{errorMessage}</p>
                </form>
            </div>
        </div>

    )

}

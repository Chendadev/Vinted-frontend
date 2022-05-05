import React from 'react'
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    // const [confirmPassword, setConfirmPassword] = useState("");

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

    // const handleConfirmPasswordChange = event => {
    //     const value = event.target.value;
    //     setConfirmPassword(value);
    // };

    const navigate = useNavigate()
    const handleSubmit = async event => {
        event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
        // if (password === confirmPassword) {
        // } else {
        //     alert("mot de passe différents")
        // }

        try {
            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup",
                {
                    username: user,
                    email: email,
                    password: password,
                    newsletter: newsletter,
                })
            if (response.data.token !== null) {
                const newToken = response.data.token;
                const in30Minutes = 1 / 48;
                Cookies.set("token", newToken, { // mon cookie nommé token
                    expires: in30Minutes
                });
            }
            console.log(Cookies.get("token"));

            navigate("/login")
        } catch (error) {
            console.log(error.response)
        }
    }
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
                <input
                    type="checkbox"
                    name="newsletter"
                    onClick={() => {
                        setNewsletter = (!newsletter)
                    }} />

                <input type="submit" value="Submit" />
            </form>
            {/* <button
                onClick={() => {
                    console.log(Cookies.get("token", token));
                }}
            >
                Get Token Value
            </button> */}
        </div>
    )

}

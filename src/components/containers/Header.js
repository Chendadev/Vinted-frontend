import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <div className="header-div">
            <Link to="/signup">s'inscrire</Link>

            <Link to="/login">se connecter</Link>
        </div>
    )
}

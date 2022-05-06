import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/img/logo_vinted.svg";
import './Header.scss';

export default function Header({ token, setUser }) {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="header-left">
                <img src={headerLogo} alt="logo vinted" className="logo" />
            </div>
            {token === null ? (
                <div className="header-right">
                    <Link to="/signup"><button>S'inscrire</button></Link>
                    <Link to="/login"><button>Se connecter</button></Link>
                </div>
            ) : (
                <button
                    onClick={() => {
                        // Je me déconnecte et je redirige l'utilsateur vers la home page
                        setUser(null);
                        navigate("/");
                    }}
                >
                    Se déconnecter
                </button>
            )}
        </div>
    )
};

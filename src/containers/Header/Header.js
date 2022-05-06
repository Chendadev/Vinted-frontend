import '../Header/Header.scss';
import { Link } from "react-router-dom";
import headerLogo from "../../assets/img/logo_vinted.svg";

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={headerLogo} alt="logo vinted" className="logo" />
            </div>
            <div className="header-right">
                <Link to="/signup"><button>S'inscrire</button></Link>
                <Link to="/login"><button>Se connecter</button></Link>
            </div>
        </div>
    )
};

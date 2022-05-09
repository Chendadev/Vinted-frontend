import './Header.scss';
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/img/logo_vinted.svg";
import bannerImg from "../../assets/img/banner-header.png";
import effectSvg from "../../assets/img/effect-header.svg";

export default function Header({ token, setUser }) {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="header-top-first">
                <div className="header-left">
                    <Link to="/">
                        <img src={headerLogo} alt="logo vinted" className="logo" />
                    </Link>
                </div>
                <div className="header-middle">
                    <p>dropdown place</p>
                </div>
                {token === null ? (
                    <div className="header-right">
                        <div className="user-button">
                            <Link to="/signup"><button>S'inscrire</button></Link>
                            <Link to="/login"><button>Se connecter</button></Link>
                            <Link to="/sale"><button className="sale-button">Vends maintenant</button></Link>
                        </div>
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
            <div className="header-down">
                <div className="nav">
                    <span>Femmes</span>
                    <span>Hommes</span>
                    <span>Enfants</span>
                    <span>Maison</span>
                    <span>Divertissement</span>
                    <span>Animaux</span>
                    <span>À propos</span>
                    <span>Notre plateforme</span>
                </div>
                {/* banner image place */}
            </div>
        </div>
    )
};

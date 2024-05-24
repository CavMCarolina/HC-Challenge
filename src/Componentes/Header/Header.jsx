import logo from "../../assets/logo_reduzido-MedKids.png";
import Navbar from "../Navbar/Navbar";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header_container">
      <div id="cabecalho">
        <Link to="/">
          <img src={logo} alt="logo MedKids" />
        </Link>
        <Link to="/" className="titulo-cabecalho">
          <h1>MedKids</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

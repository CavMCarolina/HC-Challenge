import logo from "../../assets/logo_reduzido-MedKids.png";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header id="header_container">
      <div id="cabecalho">
        <img src={logo} alt="logo MedKids" />
        <h1>MedKids</h1>
      </div>
      <Navbar />
    </header>
  );
}

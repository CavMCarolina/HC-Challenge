import logo from "../../Imagens/logo_reduzido-MedKids.png";

export default function Header() {
    return(
        <header>
            <div id="header_container">
                <div id="cabecalho">
                    <img src={logo} alt="logo MedKids"/>
                    <h1>MedKids</h1>
                </div>
            </div>
        </header>
    )
}

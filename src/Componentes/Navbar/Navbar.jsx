import icr from '../../assets/icr.png'
import agendamentos from '../../assets/agendamentos.svg'
import voluntario from '../../assets/voluntario.png'
import exame from '../../assets/exame.png'
import location from '../../assets/location.svg'
import {Link} from 'react-router-dom'


export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav" id="nav-bar">
                        <li className="nav-item dropdown">
                            <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <a href="https://icr.usp.br/">
                                    <img src={icr} alt="ICr"/>
                                    <span>ICr</span>
                                </a>
                            </button>
                            <ul className="dropdown-menu menu">
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/">
                                        <img src=""/>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/portal-do-paciente/">
                                        <img src=""/>
                                        <span>Portal do Paciente</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/telemedicina/">
                                        <img src=""/>
                                        <span>Telemedicina</span>
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/sobre-icr/">
                                        <img src=""/>
                                        <span>Sobre o ICr</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <a href="" id="agendamentos">
                                    <img src={agendamentos} alt="Agendamentos"/>
                                    <span>Agendamentos</span>
                                </a>
                            </button>
                            <ul className="dropdown-menu menu">
                                <li>
                                    <Link to='agendamentos/comoagendar' className="dropdown-item">
                                        <img src=""/>
                                        <span>Como agendar?</span>
                                    </Link>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src=""/>
                                        <span>Meus agendamentos</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <a href="" id="voluntario">
                                    <img src={voluntario} alt="Voluntário"/>
                                    <span>Voluntário</span>
                                </a>
                            </button>
                            <ul className="dropdown-menu menu">
                                <li>
                                    <Link to='voluntario/saibamais' className="dropdown-item">
                                        <img src=""/>
                                        <span>Saiba Mais</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='voluntario/cadastro' className="dropdown-item">
                                        <img src=""/>
                                        <span>Candidate-se</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                                <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <a href="" id="exame">
                                    <img src={exame} alt="Exames"/>
                                    Exames
                                </a>
                            </button>
                            <ul className="dropdown-menu menu">
                                <li>
                                    <Link to='exames/sangue' className="dropdown-item">
                                        <img src=""/>
                                        <span>Exames de Sangue</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='exames/ultrassom' className="dropdown-item">
                                        <img src=""/>
                                        <span>Ultrassom</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='exames/raiox' className="dropdown-item">
                                        <img src=""/>
                                        <span>Raio-X</span>
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src=""/>
                                        <span>Ver mais exames</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <a href="./espaco_interativo.html">
                                    <img src={location}/>
                                    Espaço Interativo
                                </a>
                            </button>
                            <ul className="dropdown-menu menu">
                                <li>
                                    <Link to='/' className="dropdown-item">
                                        <img src=""/>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='nossaequipe' className="dropdown-item">
                                        <img src=""/>
                                        <span>Nossa equipe</span>
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src=""/>
                                        <span>Sobre Nós</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
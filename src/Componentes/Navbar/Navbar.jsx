import icr_preto from '../../assets/icr_preto.png'
import medkids from '../../assets/logo_reduzido-MedKids.png'
import agendamentos from '../../assets/agenda.png'
import voluntario from '../../assets/voluntario.png'
import exame from '../../assets/exame.png'
import home from '../../assets/home.png'
import paciente from '../../assets/paciente.png'
import telemedicina from '../../assets/telemedicina.png'
import sobre from '../../assets/info.png'
import mais from '../../assets/saiba_mais.png'
import candidatar from '../../assets/candidatar.png'
import ultrassom from '../../assets/ultrassom.png'
import raiox from '../../assets/raiox.png'
import coleta from '../../assets/coleta.png'
import como from '../../assets/ponto-de-interrogacao.png'
import meus_agendamentos from '../../assets/agenda (1).png'
import equipe from '../../assets/equipe.png'
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
                                    <img src={icr_preto} alt="ICr"/>
                                    <span>ICr</span>
                                </a>
                            </button>
                            <ul className="dropdown-menu menu">
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/">
                                        <img src={home}/>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/portal-do-paciente/">
                                        <img src={paciente}/>
                                        <span>Portal do Paciente</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/telemedicina/">
                                        <img src={telemedicina}/>
                                        <span>Telemedicina</span>
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a className="dropdown-item" href="https://icr.usp.br/sobre-icr/">
                                        <img src={sobre}/>
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
                                        <img src={como}/>
                                        <span>Como agendar?</span>
                                    </Link>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src={meus_agendamentos}/>
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
                                        <img src={mais}/>
                                        <span>Saiba Mais</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='voluntario/cadastro' className="dropdown-item">
                                        <img src={candidatar}/>
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
                                        <img src={coleta}/>
                                        <span>Exames de Sangue</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='exames/ultrassom' className="dropdown-item">
                                        <img src={ultrassom}/>
                                        <span>Ultrassom</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='exames/raiox' className="dropdown-item">
                                        <img src={raiox}/>
                                        <span>Raio-X</span>
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src={mais}/>
                                        <span>Ver mais exames</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <a href="./espaco_interativo.html">
                                    <img src={medkids} id="logo"/>
                                    Espaço Interativo
                                </a>
                            </button>
                            <ul className="dropdown-menu menu">
                                <li>
                                    <Link to='/' className="dropdown-item">
                                        <img src={home}/>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='nossaequipe' className="dropdown-item">
                                        <img src={equipe}/>
                                        <span>Nossa equipe</span>
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src={sobre}/>
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
import bg from '../assets/background.jpg'
import data from '../../dados/integrantes.json'

export default function NossaEquipe() {
    return (
        <main>
            <hr className="hr-normal"/>
            <img src={bg} alt="Foto de fundo"/>
            <h1>Nosso Time</h1>
            <div className="lista-integrantes">
                {
                    data.map(
                        (integrante, index) => (
                            <div id="card" key={index}>
                                <img src={integrante.foto}/>
                                <div>
                                    <h2>{integrante.nome}</h2>
                                    <p>Email: {integrante.email}</p>
                                    <p>Telefone: {integrante.telefone}</p>
                                </div>
                            </div>
                        )
                    )
                    }
            </div>
        </main>
    )
}
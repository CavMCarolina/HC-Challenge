import data from '../../dados/integrantes.json'

export default function NossaEquipe() {
    return (
        <>
            <h1>Nosso Time</h1>
            <div className="lista-integrantes">
                {
                    data.map(
                        (integrante, index) => (
                            <div id="card" key={index}>
                                <img src={integrante.foto}/>
                                <h2>{integrante.nome}</h2>
                                <p>Contato: {integrante.Contato}</p>
                            </div>
                        )
                    )
                    }
            </div>
        </>
    )
}
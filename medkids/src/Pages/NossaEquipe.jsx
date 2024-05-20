import { useEffect,useState } from 'react'

export default function NossaEquipe() {
    const [integrantes, setIntegrantes] = useState([])

    useEffect(() => {
        fetch('https://664ab280a300e8795d42a416.mockapi.io/challenge/v1/time')
            .then(response => response.json())
            .then(data => setIntegrantes(data))
        })
      
    return (
        <>
            <h1>Nosso Time</h1>
            <div className="lista-integrantes">
                {integrantes.map(integrante => (
                            <div id="card" key={integrante.id}>
                                <img  src={integrante.foto}/>
                                <h2>{integrante.nome}</h2>
                                <p>Contato: {integrante.email}</p>
                                <a href={integrante.linkedin}><p>linkedIn</p></a>
                            </div>
                        )
                    )
                    }
            </div>
        </>
    )
}
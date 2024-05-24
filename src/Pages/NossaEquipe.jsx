import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
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
      <main>
        <hr className="hr-normal" />
        <div className="main_container">
          <h1>Nossa Equipe</h1>
          <div className="lista-integrantes">
            {integrantes.map((integrante, index) => (
              <div id="card" key={index}>
                <img src={integrante.foto} className="foto_integrante" />
                <h2>{integrante.nome}</h2>
                <p>
                  <img src={email} className="icone" />
                  {integrante.email}
                </p>
                <p>
                  <img src={linkedin} className="icone" />
                  <a href={integrante.linkedin}>Linkedin de: {integrante.nome}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

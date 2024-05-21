import bg from "../assets/background.jpg";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import data from "../../dados/integrantes.json";
import Footer from "../Componentes/Footer/Footer";

export default function NossaEquipe() {
  return (
    <>
      <main>
        <hr className="hr-normal" />
        <div className="main_container">
          <h1>Nosso Time</h1>
          <div className="lista-integrantes">
            {data.map((integrante, index) => (
              <div id="card" key={index}>
                <img src={integrante.foto} className="foto_integrante" />
                <h2>{integrante.nome}</h2>
                <p>
                  <img src={email} className="icone" />
                  {integrante.email}
                </p>
                <p>
                  <img src={linkedin} className="icone" />
                  <a href={integrante.linkedin}>{integrante.linkedin}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

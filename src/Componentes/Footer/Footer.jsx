import telefone from "../../assets/telefone.png";
import lupa from "../../assets/lupa.png";
import icr from "../../assets/logo_icr.png";
import parceiros from "../../assets/logo_parceiros.png";
import parceria from "../../assets/parceria.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="div-footer">
            <div className="div-icone">
              <img src={telefone} />
            </div>
            <h3>Contatos</h3>
            <ul>
              <li>Beatriz Silva: +55 11 96613-9243</li>
              <li>Carolina Machado: +55 11 99632-9582</li>
              <li>Edson Leonardo: +55 11 95990-0026</li>
              <li>Eduardo Mazelli: +55 11 97649-4397</li>
              <li>Nathan Uflacker: +55 11 96302-4160</li>
            </ul>
          </div>
          <div className="div-footer">
            <div className="div-icone">
              <img src={lupa} />
            </div>
            <h3>Links Úteis</h3>
            <ul>
              <li>
                <a href="https://sigma.icr.usp.br/login.aspx?ReturnUrl=%2frestrito%2fdefault.aspx">
                  Portal Sigma
                </a>
              </li>
              <li>
                <a href="https://portalpaciente.icr.usp.br/portal/">
                  Portal do Paciente
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.icr.portalpaciente&hl=pt_BR&gl=US">
                  APP ICr - Android
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/br/app/portal-do-paciente-icr/id1592303573">
                  APP ICr - Apple
                </a>
              </li>
              <li>
                <a href="https://www.itaci.org.br/">Itaci</a>
              </li>
            </ul>
          </div>
          <div className="div-footer">
            <div className="div-icone">
              <img src={parceria} />
            </div>
            <h3>Parceiros</h3>
            <div className="parceria">
              <img src={icr} />
              <img src={parceiros} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

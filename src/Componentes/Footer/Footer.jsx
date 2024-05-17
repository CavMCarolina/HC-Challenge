import bg from '../../assets/footer.svg'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div>
            <img src="" className="icone_footer"/>
            <h3>Contatos</h3>
            <ul>
              <li>Beatriz Silva: biasrocha@uol.com.br</li>
              <li>Carolina Machado: cavm.carolina@gmail.com</li>
              <li>Edson Leonardo: edsonleonardo0708@gmail.com</li>
              <li>Eduardo Mazelli: eduardo.mazelli@gmail.com</li>
              <li>Nathan Uflacker: nathanuflacker@hotmail.com</li>
            </ul>
          </div>
          <div>
            <img src="" className="icone_footer"/>
            <h3>Links Úteis</h3>
            <ul>
              <li>
                <a href="https://sigma.icr.usp.br/login.aspx?ReturnUrl=%2frestrito%2fdefault.aspx">Portal Sigma</a>
              </li>
              <li>
                <a href="https://portalpaciente.icr.usp.br/portal/">Portal do Paciente</a>
              </li>
              <li>
                <a href="https://www.itaci.org.br/">Itaci</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
}

import em_manutencao from '../assets/em_manutencao.png';

export default function MaisExames() {
  return (
    <main>
      <hr className="hr-normal" />
      <div className="main_container">
        <h1>Mais Exames:</h1>
        <p>
          Essa página é uma ideia futura, na qual colocaremos mais opções de
          exames para os usuários conseguirem acessar
        </p>
        <div className="div_manutencao">
          <img src={em_manutencao} className="manutencao" />
        </div>
      </div>
    </main>
  );
}

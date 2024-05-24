import em_manutencao from '../assets/em_manutencao.png';

export default function MeusAgendamentos() {
  return (
    <main>
      <hr className="hr-normal" />
      <div className="main_container">
        <h1>Meus Agendamentos</h1>
        <p>
          Essa página é uma ideia futura, na qual precisaríamos de acesso ao
          sistema do ICr para conseguir mostrar os agendamentos para os usuários
        </p>
        <div className="div_manutencao">
          <img src={em_manutencao} className="manutencao" />
        </div>
      </div>
    </main>
  );
}

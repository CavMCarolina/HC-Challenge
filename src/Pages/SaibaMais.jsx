import em_manutencao from '../assets/em_manutencao.png';

export default function SaibaMais() {
  return (
    <main>
      <hr className="hr-normal" />
      <div className="main_container">
        <h1>Voluntário - Saiba Mais</h1>
        <div className='div_manutencao'>
          <img src={em_manutencao} className='manutencao'/>
        </div>
      </div>
    </main>
  );
}

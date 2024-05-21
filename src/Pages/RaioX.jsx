import em_manutencao from '../assets/em_manutencao.png';

export default function RaioX() {
  return (
    <main>
      <hr className="hr-normal" />
      <div className="main_container">
        <h1>Exames - Raio-X</h1>
        <div className='div_manutencao'>
          <img src={em_manutencao} className='manutencao'/>
        </div>
      </div>
    </main>
  );
}

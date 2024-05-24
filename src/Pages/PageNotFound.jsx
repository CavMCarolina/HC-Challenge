import bg from "../assets/404.png";

export default function PageNotFound() {
  return (
    <main>
      <hr className="hr-normal" />
      <div className="main_container">
        <h1>404 - Página não encontrada</h1>
        <h4>Infelizmente, não encontramos essa página. Tente voltar para a página anterior e abrir novamente</h4>
        <div className="page_not_found">
          <img src={bg} />
        </div>
      </div>
    </main>
  );
}

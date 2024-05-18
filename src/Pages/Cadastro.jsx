import React from "react";
import bg from "../assets/background.jpg";
import Footer from "../Componentes/Footer/Footer";

export default function Cadastro() {
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [preferencia, setPreferencia] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [pais, setPais] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [tocar, setTocar] = React.useState("");
  const [instrumentos, setInstrumentos] = React.useState("");
  const [piadas, setPiadas] = React.useState("");
  const [fantasia, setFantasia] = React.useState("");
  const [palhaco, setPalhaco] = React.useState("");
  const [termos, setTermos] = React.useState("");
  const [call, setCall] = React.useState("");

  const onChangeN = (event) => {
    localStorage.setItem("nome", event.target.value);

    setNome(event.target.value);
  };

  const onChangeS = (event) => {
    localStorage.setItem("sobrenome", event.target.value);

    setSobrenome(event.target.value);
  };

  const onChangeE = (event) => {
    localStorage.setItem("email", event.target.value);

    setEmail(event.target.value);
  };

  const onChangeT = (event) => {
    localStorage.setItem("telefone", event.target.value);

    setTelefone(event.target.value);
  };

  const onChangeP = (event) => {
    localStorage.setItem("preferencia", event.target.value);

    setPreferencia(event.target.value);
  };

  const onChangeC = (event) => {
    localStorage.setItem("cep", event.target.value);

    setCep(event.target.value);
  };

  const onChangeEn = (event) => {
    localStorage.setItem("endereco", event.target.value);

    setEndereco(event.target.value);
  };

  const onChangeNu = (event) => {
    localStorage.setItem("numero", event.target.value);

    setNumero(event.target.value);
  };

  const onChangePa = (event) => {
    localStorage.setItem("pais", event.target.value);

    setPais(event.target.value);
  };

  const onChangeEs = (event) => {
    localStorage.setItem("estado", event.target.value);

    setEstado(event.target.value);
  };

  const onChangeCi = (event) => {
    localStorage.setItem("cidade", event.target.value);

    setCidade(event.target.value);
  };

  const onChangeM = (event) => {
    localStorage.setItem("mensagem", event.target.value);

    setMensagem(event.target.value);
  };

  const onChangeTo = (event) => {
    localStorage.setItem("tocar", event.target.value);

    setTocar(event.target.value);
  };

  const onChangeI = (event) => {
    localStorage.setItem("instrumentos", event.target.value);

    setInstrumentos(event.target.value);
  };

  const onChangePi = (event) => {
    localStorage.setItem("piadas", event.target.value);

    setPiadas(event.target.value);
  };

  const onChangeF = (event) => {
    localStorage.setItem("fantasia", event.target.value);

    setFantasia(event.target.value);
  };

  const onChangePal = (event) => {
    localStorage.setItem("palhaco", event.target.value);

    setPalhaco(event.target.value);
  };

  const onChangeTe = (event) => {
    localStorage.setItem("termos", event.target.value);

    setTermos(event.target.value);
  };

  const onChangeCa = (event) => {
    localStorage.setItem("call", event.target.value);

    setCall(event.target.value);
  };

  function submit(event) {
    event.preventDefault();

    console.log(
      `nome: ${localStorage.getItem("nome")}, sobrenome: ${localStorage.getItem(
        "sobrenome"
      )}, email: ${localStorage.getItem(
        "email"
      )}, telefone: ${localStorage.getItem(
        "telefone"
      )}, prefencia: ${localStorage.getItem(
        "preferencia"
      )}, cep: ${localStorage.getItem("cep")}, endereco: ${localStorage.getItem(
        "endereco"
      )}, numero: ${localStorage.getItem(
        "numero"
      )}, pais: ${localStorage.getItem("pais")}, estado: ${localStorage.getItem(
        "estado"
      )}, cidade: ${localStorage.getItem(
        "cidade"
      )} mensagem: ${localStorage.getItem("mensagem")}`,
      `tocar: ${localStorage.getItem(
        "tocar"
      )}, instrumentos: ${localStorage.getItem(
        "instrumentos"
      )}, piadas: ${localStorage.getItem(
        "piadas"
      )}, fantasia: ${localStorage.getItem(
        "fantasia"
      )}, palhaco: ${localStorage.getItem(
        "palhaco"
      )}, termos: ${localStorage.getItem(
        "termos"
      )}, contactado: ${localStorage.getItem("call")}`
    );
  }

  return (
    <body className="body-cadastro">
      <main>
        <hr className="hr-normal" />
        <div className="container">
          <div className="text-center py-3">
            <h1 className="fs-1">Torne-se um Voluntário!</h1>
            <h3 className="fs-5 p-2">Faça a diferença na vida de alguém.</h3>
            <p className="lead d-lg">
              O Hospital das Clínicas está buscando voluntários dedicados e
              compassivos para se juntarem à nossa equipe. Oferecemos uma
              variedade de oportunidades para você doar seu tempo e talentos, e
              fazer um impacto real na vida de nossos pacientes.
            </p>
          </div>
          <hr className="my-4" />
          <div className="row justify-content-center" id="cadastro_container">
            <div className="col-lg-8">
              <h4>Dados Pessoais:</h4>
              <form className="needs-validation">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nome" className="form-label">
                      Nome
                    </label>
                    <input
                      value={nome}
                      onChange={onChangeN}
                      type="text"
                      id="nome"
                      className="form-control"
                      placeholder="Ex: João"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="sobrenome" className="form-label">
                      Sobrenome
                    </label>
                    <input
                      value={sobrenome}
                      onChange={onChangeS}
                      type="text"
                      id="sobrenome"
                      className="form-control"
                      placeholder="Ex: Oliveira"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                      value={email}
                      onChange={onChangeE}
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="nome@hotmail.com"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="tel">Telefone:</label>
                    <input
                      value={telefone}
                      onChange={onChangeT}
                      type="tel"
                      id="tel"
                      className="form-control"
                      placeholder="(DDD) 94002-8922"
                      required
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="preferencia">Pref. de Contato:</label>
                    <select
                      value={preferencia}
                      onChange={onChangeP}
                      name="preferencia"
                      id="preferencia"
                      className="form-select"
                      required
                    >
                      <option value="">Escolha...</option>
                      <option value="tel">Telefone</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cep" className="form-label">
                      CEP
                    </label>
                    <input
                      value={cep}
                      onChange={onChangeC}
                      type="text"
                      id="cep"
                      className="form-control"
                      placeholder="Ex: 12345-678"
                      required
                    />
                  </div>
                  <div className="col-md-7 mb-3">
                    <label htmlFor="endereco" className="form-label">
                      Endereço
                    </label>
                    <input
                      value={endereco}
                      onChange={onChangeEn}
                      type="text"
                      id="endereco"
                      className="form-control"
                      placeholder="Ex: Rua Abilio Soares"
                      required
                    />
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="numero" className="form-label">
                      Número
                    </label>
                    <input
                      value={numero}
                      onChange={onChangeNu}
                      type="text"
                      id="numero"
                      className="form-control"
                      placeholder="Ex: 52"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="país" className="form-label">
                      País
                    </label>
                    <input
                      value={pais}
                      onChange={onChangePa}
                      type="text"
                      id="país"
                      className="form-control"
                      placeholder="Ex: Brasil"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="Estado" className="form-label">
                      Estado
                    </label>
                    <select
                      value={estado}
                      onChange={onChangeEs}
                      name="Estado"
                      id="Estado"
                      className="form-select"
                      required
                    >
                      <option value="">Escolha...</option>
                      <option value="ac">Acre</option>
                      <option value="al">Alagoas</option>
                      <option value="ap">Amapá</option>
                      <option value="am">Amazonas</option>
                      <option value="ba">Bahia</option>
                      <option value="ce">Ceará</option>
                      <option value="df">Distrito Federal</option>
                      <option value="es">Espírito Santo</option>
                      <option value="go">Goiás</option>
                      <option value="ma">Maranhão</option>
                      <option value="mt">Mato Grosso</option>
                      <option value="ms">Mato Grosso do Sul</option>
                      <option value="mg">Minas Gerais</option>
                      <option value="pa">Pará</option>
                      <option value="pb">Paraíba</option>
                      <option value="pr">Paraná</option>
                      <option value="pe">Pernambuco</option>
                      <option value="pi">Piauí</option>
                      <option value="rj">Rio de Janeiro</option>
                      <option value="rn">Rio Grande do Norte</option>
                      <option value="rs">Rio Grande do Sul</option>
                      <option value="ro">Rondônia</option>
                      <option value="rr">Roraima</option>
                      <option value="sc">Santa Catarina</option>
                      <option value="sp">São Paulo</option>
                      <option value="se">Sergipe</option>
                      <option value="to">Tocantins</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="cidade" className="form-label">
                      Cidade
                    </label>
                    <input
                      value={cidade}
                      onChange={onChangeCi}
                      type="text"
                      id="cidade"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <h4>Área do voluntariado:</h4>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="comentario" className="form-label">
                      Por que você deseja trabalhar conosco?
                      <span className="text-muted">(Obrigatório)</span>
                    </label>
                    <textarea
                      value={mensagem}
                      onChange={onChangeM}
                      name="comentario"
                      id="comentario"
                      rows="3"
                      className="form-control"
                      maxLength="200"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="tocar">Você toca algum instrumento?</label>
                    <select
                      value={tocar}
                      onChange={onChangeTo}
                      name="tocar"
                      id="tocar"
                      className="form-select"
                      required
                    >
                      <option value="">Escolha...</option>
                      <option value="sim">Sim</option>
                      <option value="não">Não</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="instrumentos">Se sim, quais?</label>
                    <textarea
                      value={instrumentos}
                      onChange={onChangeI}
                      name="instrumentos"
                      id="instrumentos"
                      rows="1"
                      className="form-control"
                      maxLength="200"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="piadas">Gosta de contar piadas?</label>
                    <select
                      value={piadas}
                      onChange={onChangePi}
                      name="piadas"
                      id="piadas"
                      className="form-select"
                      required
                    >
                      <option value="">Escolha...</option>
                      <option value="sim">Sim</option>
                      <option value="não">Não</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="fantasia">Aceitaria se fantasiar?</label>
                    <select
                      value={fantasia}
                      onChange={onChangeF}
                      name="fantasia"
                      id="fantasia"
                      className="form-select"
                      required
                    >
                      <option value="">Escolha...</option>
                      <option value="sim">Sim</option>
                      <option value="não">Não</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="palhaco">
                      Aceitaria se vestir de palhaço?
                    </label>
                    <select
                      value={palhaco}
                      onChange={onChangePal}
                      name="palhaco"
                      id="palhaco"
                      className="form-select"
                      required
                    >
                      <option value="">Escolha...</option>
                      <option value="sim">Sim</option>
                      <option value="não">Não</option>
                    </select>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-check">
                  <input
                    value={termos}
                    onChange={onChangeTe}
                    type="checkbox"
                    className="form-check-input"
                    id="termos"
                    required
                  />
                  <label htmlFor="termos">
                    Aceito os termos e politicas do Hospital das Clínicas
                    <a href=""></a>
                  </label>
                </div>
                <br />
                <div className="form-check">
                  <input
                    value={call}
                    onChange={onChangeCa}
                    type="checkbox"
                    className="form-check-input"
                    id="call"
                    required
                  />
                  <label htmlFor="call">
                    Aceito ser contatado pelo Hospital das Clinicas<a href=""></a>
                  </label>
                </div>
                <hr className="my-4" />
                <button
                  onClick={submit}
                  type="submit"
                  className="btn btn-outline-primary w-100"
                >
                  Finalizar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </body>
  );
}

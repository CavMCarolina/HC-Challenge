export default function Cadastro() {
    return (
        <body>
            <div className="container">
                <div className="text-center py-3">
                    <h1 className="fs-1">Torne-se um Voluntário!</h1>
                    <h3 className="fs-5">Faça a diferença na vida de alguém.</h3>
                    <p className="lead d-lg">O Hospital das Clínicas está buscando voluntários dedicados e compassivos para se juntarem à nossa equipe. Oferecemos uma variedade de oportunidades para você doar seu tempo e talentos, e fazer um impacto real na vida de nossos pacientes.</p>
                </div>
                <hr className="my-4"/>
                <h4>Dados Pessoais</h4>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-6 mb-3"> 
                                    <label htmlFor="nome" className="form-label">Nome</label>
                                    <input type="text" id="nome" className="form-control" placeholder="Ex: João" required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                                    <input type="text" id="sobrenome" className="form-control" placeholder="Ex: Oliveira" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 mb-4">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control" placeholder="nome@hotmail.com" required/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="tel">Telefone:</label>
                                    <input type="tel" id="tel" className="form-control" placeholder="(DDD) 94002-8922" required/>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="tel">Pref. de Contato:</label>
                                    <select type="tel" id="tel" className="form-select" required>
                                        <option value="">Escolha...</option>
                                        <option value="tel">Telefone</option>
                                        <option value="email">Email</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cep" className="form-label">CEP</label>
                                    <input type="text" id="cep" className="form-control" placeholder="Ex: 12345-678" required/>
                                </div>
                                <div className="col-md-7 mb-3">
                                    <label htmlFor="endereco" className="form-label">Endereço</label>
                                    <input type="text" id="endereco" className="form-control" placeholder="Ex: Rua Abilio Soares" required/>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <label htmlFor="numero" className="form-label">Número</label>
                                    <input type="text" id="numero" className="form-control" placeholder="Ex: 52" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="país" className="form-label">País</label>
                                    <input type="text" id="país" className="form-control" placeholder="Ex: Brasil" required/>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="Estado" className="form-label">Estado</label>
                                    <select name="Estado" id="Estado" className="form-select" required>
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
                                    <label htmlFor="cidade" className="form-label">Cidade</label>
                                    <input type="text" id="cidade" className="form-control" required />
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <h4>Área do voluntariado</h4>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="comentario" className="form-label">
                                    Por que você deseja trabalhar conosco?
                                    <span className="text-muted">(Obrigatório)</span>
                                    </label>
                                    <textarea name="comentario" id="comentario" rows="3" className="form-control" maxLength="200" required ></textarea>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <p>Você toca algum instrumento?</p>
                                    <input type="checkbox" className="form-check-input" value="positivo" id="positivoI" required/>
                                    <label htmlFor="positivoI" className="me-5">Sim</label>
                                    <input type="checkbox" className="form-check-input" value="negativo" id="negativoI" required/>
                                    <label htmlFor="negativoI">Não</label>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="instrumentos">Se sim, quais?</label>
                                    <textarea name="instrumentos" id="instrumentos" rows="1" className="form-control" maxLength="200" required ></textarea>
                                </div>
                                <div className="col-md-4">
                                    <p>Gosta de contar piadas?</p>
                                    <input type="checkbox" className="form-check-input" value="positivo" id="positivoP" required/>
                                    <label htmlFor="positivoP" className="me-5">Sim</label>
                                    <input type="checkbox" className="form-check-input" value="negativo" id="negativoP" required/>
                                    <label htmlFor="negativoP">Não</label>
                                </div>
                                <div className="col-md-4">
                                    <p>Aceitaria se fantasiar?</p>
                                    <input type="checkbox" className="form-check-input" value="positivo" id="positivoF" required/>
                                    <label htmlFor="positivoF" className="me-5">Sim</label>
                                    <input type="checkbox" className="form-check-input" value="negativo" id="negativoF" required/>
                                    <label htmlFor="negativoF">Não</label>
                                </div>
                                <div className="col-md-4">
                                    <p>Aceitaria se vestir de palhaço?</p>
                                    <input type="checkbox" className="form-check-input" value="positivo" id="positivoPa" required/>
                                    <label htmlFor="positivoPa" className="me-5">Sim</label>
                                    <input type="checkbox" className="form-check-input" value="negativo" id="negativoPa" required/>
                                    <label htmlFor="negativoPa">Não</label>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="doacaoAlma" id="alma" required/>
                                <label htmlFor="alma">Aceito os termos e politicas do Hospital das Clínicas<a href=""></a></label>
                            </div>
                            <br/>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="doacaoAlma" id="call" required/>
                                <label htmlFor="call">Aceito ser contatado pelo Hospital das Clinicas<a href=""></a></label>
                            </div>
                            <hr className="my-4"/>
                            <button type="submit" className="btn btn-outline-primary w-100">Finalizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )
}
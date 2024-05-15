import bg from '../assets/background.jpg'

export default function Cadastro() {
    return (
        <body>
            <main>
                <hr className="hr-normal"/>
                <img src={bg} alt="Foto de fundo" className="bg"/>
                <div className="container">
                    <div className="text-center py-3">
                        <h1 className="fs-1">Torne-se um Voluntário!</h1>
                        <h3 className="fs-5">Faça a diferença na vida de alguém.</h3>
                        <p className="lead d-lg-none">O Hospital ds Clínicas está buscando voluntários dedicados e compassivos para se juntarem à nossa equipe. Oferecemos uma variedade de oportunidades para você doar seu tempo e talentos, e fazer um impacto real na vida de nossos pacientes.</p>
                    </div>
                    <hr className="my-4"/>
                    <h4>Dados Pessoais</h4>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <form class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6 mb-3"> 
                                        <label for="nome" class="form-label">Nome</label>
                                        <input type="text" id="nome" class="form-control" placeholder="Ex: João" required/>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="sobrenome" class="form-label">Sobrenome</label>
                                        <input type="text" id="sobrenome" class="form-control" placeholder="Ex: Oliveira" required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5 mb-3">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" class="form-control" placeholder="nome@hotmail.com" required/>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="tel">Telefone:</label>
                                        <input type="tel" id="tel" class="form-control" placeholder="(DDD) 94002-8922" required/>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="tel">Pref. de Contato:</label>
                                        <select type="tel" id="tel" class="form-select" required>
                                            <option value="">Escolha...</option>
                                            <option value="tel">Telefone</option>
                                            <option value="email">Email</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <label for="cep" class="form-label">CEP</label>
                                        <input type="text" id="cep" class="form-control" placeholder="Ex: 12345-678" required/>
                                    </div>
                                    <div class="col-md-7 mb-3">
                                        <label for="endereco" class="form-label">Endereço</label>
                                        <input type="text" id="endereco" class="form-control" placeholder="Ex: Rua Abilio Soares" required/>
                                    </div>
                                    <div class="col-md-2 mb-3">
                                        <label for="numero" class="form-label">Número</label>
                                        <input type="text" id="numero" class="form-control" placeholder="Ex: 52" required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label for="país" class="form-label">País</label>
                                        <input type="text" id="país" class="form-control" placeholder="Ex: Brasil" required/>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="Estado" class="form-label">Estado</label>
                                        <select name="Estado" id="Estado" class="form-select" required>
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
                                    <div class="col-md-4 mb-3">
                                        <label for="cidade" class="form-label">Cidade</label>
                                        <input type="text" id="cidade" class="form-control" required />
                                    </div>
                                </div>
                                <hr class="my-4"/>
                                <h4>Área do voluntariado</h4>
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <label for="comentario" class="form-label">
                                        Por que você deseja trabalhar conosco?
                                        <span class="text-muted">(Obrigatório)</span>
                                        </label>
                                        <textarea name="comentario" id="comentario" rows="3" class="form-control" maxlength="200" required ></textarea>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <p>Você toca algum instrumento?</p>
                                        <input type="checkbox" class="form-check-input" value="positivo" id="positivo" required/>
                                        <label for="positivo" class="me-5">Sim</label>
                                        <input type="checkbox" class="form-check-input" value="negativo" id="negativo" required/>
                                        <label for="negativo">Não</label>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="instrumentos">Se sim, quais?</label>
                                        <textarea name="instrumentos" id="instrumentos" rows="1" class="form-control" maxlength="200" required ></textarea>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Gosta de contar piadas?</p>
                                        <input type="checkbox" class="form-check-input" value="positivo" id="positivo" required/>
                                        <label for="positivo" class="me-5">Sim</label>
                                        <input type="checkbox" class="form-check-input" value="negativo" id="negativo" required/>
                                        <label for="negativo">Não</label>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Aceitaria se fantasiar?</p>
                                        <input type="checkbox" class="form-check-input" value="positivo" id="positivo" required/>
                                        <label for="positivo" class="me-5">Sim</label>
                                        <input type="checkbox" class="form-check-input" value="negativo" id="negativo" required/>
                                        <label for="negativo">Não</label>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Aceitaria se vestir de palhaço?</p>
                                        <input type="checkbox" class="form-check-input" value="positivo" id="positivo" required/>
                                        <label for="positivo" class="me-5">Sim</label>
                                        <input type="checkbox" class="form-check-input" value="negativo" id="negativo" required/>
                                        <label for="negativo">Não</label>
                                    </div>
                                </div>
                                <hr class="my-4"/>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" value="doacaoAlma" id="alma" required/>
                                    <label for="alma">Aceito os termos e politicas do Hospital das Clínicas<a href=""></a></label>
                                </div>
                                <br/>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" value="doacaoAlma" id="call" required/>
                                    <label for="call">Aceito ser contatado pelo Hospital das Clinicas<a href=""></a></label>
                                </div>
                                <hr class="my-4"/>
                                <button type="submit" class="btn btn-outline-primary w-100">Finalizar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}
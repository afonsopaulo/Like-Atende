// ids das divs pra pegar e substituir 
let passo01 = document.getElementById("passo01")
let passo02 = document.getElementById("passo02")
let passo03 = document.getElementById("passo03")
let passo04 = document.getElementById("passo04")
let passo05 = document.getElementById("passo05")
let passo06 = document.getElementById("passo06")
let passo07 = document.getElementById("passo07")
let passo08 = document.getElementById("passo08")
let passo09 = document.getElementById("passo09")
let passo10 = document.getElementById("passo10")
let passo11 = document.getElementById("passo11")

// aqui vai ficar as ids do relatorio final
let rel01 = document.getElementById("rel01")
let rel02 = document.getElementById("rel02")
let rel03 = document.getElementById("rel03")
let rel04 = document.getElementById("rel04")
let rel05 = document.getElementById("rel05")
let rel06 = document.getElementById("rel06")
let rel07 = document.getElementById("rel07")
let rel08 = document.getElementById("rel08")
let rel09 = document.getElementById("rel09")
let rel10 = document.getElementById("rel10")
let rel11 = document.getElementById("rel11")

//funçao de enviar recebe o nome do cliente
function enviar(){
    let nome = document.getElementById("nome").value
    console.log("Nome = " + nome)
    
    let passo01 = document.getElementById("passo01")// id passo01

    passo01.innerHTML = 
    ` <div class="pos"> 
        <h4>${nome} é cliente?</h4>
        <div>
            <button onclick="clienteSim()">Sim</button>
            <button onclick="clienteNao()">Não</button>
        </div>             
    </div>`

    //dados do relatorio
    rel01.innerText = ` Nome : ${nome}`
    
}

//funçao se o cliente clicar em sim
function clienteSim(){
    // passo 2
    passo02.innerHTML = `
    <div class="pos">
            <h4>Escolha uma das opções</h4>
            <div>
                <button onclick="finaceiro()">Finaceiro</button>
                <button onclick="suporteTecnico()">Suporte Tecnico</button>
            </div>
    </div>
    `  
    // <button onclick="comercial()">Comercial</button> 
    //dados do relatorio
    rel02.innerText = `Cliente: Sim`
    console.log("Cliente: sim")
}

// função se o cliente clicar em não 
// botoes comercial , administrativo
let clienteNao = function(){

    //passo 2
    passo02.innerHTML = `
        <div class="pos">
            <h4>Escolha uma das opções</h4>
            <div>
                <button onclick="comercial()">Comercial</button>
                <button onclick="administrativo()">Administrativo</button>  
            </div>
        </div>
    `
    // dados relatorio
    rel02.innerText = `Cliente: Não` 
} 

// funcao comercial e seus filhos
// filhos: jose de freitas , santa teresa
let comercial = function(){
    // passo 3
    passo03.innerHTML = `
        <div class="pos">
            <h4>Comercial</h4>
            <div>
                <button onclick="comercialJoseDeFreitas()">José de Freitas</button>
                <button onclick="comercialSantaTeresa()">Santa Teresa</button>
            </div>
        </div>
    `
    rel03.innerText = `Clicou: Comercial`
}

// botao jose de freitas e seus filhos
// filhos: zonaRural , Cidade
let comercialJoseDeFreitas = function(){
    // passo 4
    passo04.innerHTML = `
        <div class="pos">
            <h4>Jose de Freitas</h4>
            <div>
                <button onclick="josedefreitasZonaRural()">Zona rural</button>
                <button onclick="joseDeFreitasCidade()">Cidade</button>
            </div>
        </div>  
    `
    
}

// botao zona rural jose de freitas e seus filhos
let josedefreitasZonaRural = function(){
    // passo 5
    passo05.innerHTML = `
        <div class="pos">
            <h4>Zona rural: Cliente ja tem internet?</h4>
            <div>
                <button onclick="ClienteJaTemInternetSim()">Sim</button>
                <button onclick="ClienteJaTemInternetNao()">Não</button>
            </div>
        </div>
    `
    rel05.innerText = `Zona rural: Jose de Freitas`
}

// botao cidade jose de freitas e seus filhos
let joseDeFreitasCidade = function(){
    // passo 5
    passo05.innerHTML = `
        <div class="pos">
            <h4>Cidade: Cliente ja tem internet?</h4>
            <div>
                <button onclick="ClienteJaTemInternetSim()">Sim</button>
                <button onclick="ClienteJaTemInternetNao()">Não</button>
            </div>
        </div>
    `
    rel05.innerText = `Cidade: Jose de Freitas `
}

let ClienteJaTemInternetSim = function(){
    // passo 6
    passo06.innerHTML = `
        <div class="texto-info">
            <p>Entender a necessidade?<br> Viabilidade do local?<br> Saber Qual internet ele usa?<br> Quanto paga por mes?<br> Quantos megas?<br> Motivo de estar procurando outra internet e Tentar vender o que melhor se adequa no Cliente</p>
        </div>
    `
    //passo 7
    passo07.innerHTML = `
        <div class="texto_finalizar" onclick="load()">
            <p>Finalizar com o Cliente</p>
        </div>
    `

    let nome = document.getElementById("nome").value
    rel06.innerText = `${nome} ja tem internet`
    rel07.innerText = `Enteder qual e a necessidade? Plano atual do Cliente`
}

let ClienteJaTemInternetNao = function(){
    //passo 6
    passo06.innerHTML = `
        <div class="texto-info">
            <p>Viabilidade do local?<br> Necessidade do Cliente?<br> Falar nosso diferencial e tentar fechar a venda com instalação ja marcada! </p>
        </div>
    `
    //passo 7
    passo07.innerHTML = `
        <div class="texto_finalizar" onclick="load()">
            <p>Finalizar com o Cliente</p>
        </div>
    `

    let nome = document.getElementById("nome").value
    rel06.innerText = `${nome} não tem internet`
    rel07.innerText = `Tentar fechar venda com instalação ja marcada`

}
// comercial opçoes se clicar em santa teresa.
let comercialSantaTeresa = function(){
     // passo 5
     passo05.innerHTML = `
     <div class="pos">
         <h4>Santa Teresa: Cliente ja tem internet?</h4>
         <div>
             <button onclick="ClienteJaTemInternetSim()">Sim</button>
             <button onclick="ClienteJaTemInternetNao()">Não</button>
         </div>
     </div>
    `
    rel05.innerText = `Povoado: Santa Teresa `

    // essa função tem os msm caminhos da funcão de jose de freitas ou seja ela vai chamar as funcoes de cima
}


// administrativo e seus filhos
let administrativo = function(){
    
    //passo 3
    passo03.innerHTML = `
        <div class="texto-info">
            <p>Todo e qualquer assunto relacionado a Administração , Fornecedores , Parcerias , Patrocinio, Relacionado a Gerencia!</p>
        </div>
    `
    // passo 4
    passo04.innerHTML = `
        <div class="texto-info">
            <p>Repassar a Solicitação para Camila</p>
        </div>
    `
     //passo 5
     passo05.innerHTML = `
     <div class="texto_finalizar" onclick="load()">
         <p>Finalizar com o Cliente</p>
     </div>
 `

    rel03.innerText = "Clicou em administrativo"
    rel04.innerText = "Todo e qualquer assunto relacionado a Administração , Fornecedores , Parcerias , Patrocinio, Relacionado a Gerencia! Repassar para Camila"

}


//funcão se clicar em finaceiros e seus caminhos
function finaceiro(){

    let finaceiro = document.getElementById("passo03")// id passo03

    finaceiro.innerHTML = `
    <div class="pos">
            <h4>Finaceiro</h4>
            <div>
                <button onclick="sViaBoleto()">2 Via Boleto</button>
                <button onclick="pagamentoPix()">Pagamento via Pix</button>
                <button onclick="negociacao()">Negociação</button>
                <button onclick="enviarComprovante()">Enviar Comprovante</button>
                <button onclick="promessaDePagamento()">Promessa De Pagamento</button>
            </div> 
    </div>
    `  
    rel03.innerText = `Clicou em: Finaceiro`

    //let relatorioFinaceiro = document.getElementById("rel03")
    //relatorioFinaceiro.innerText = `Clicou em: Finaceiro`
    console.log("Clicou em : Finaceiro")    
}


//via boleto e seus caminhos
function sViaBoleto(){
    
    console.log("boleto")
    // passo 4
    let sViaBoleto = document.getElementById("passo04")
    sViaBoleto.innerHTML = `
    <div class="pos">
        <h4>Segunda Via Boleto</h4>
        <div>
            <button onclick="pdf()">Pdf</button>
            <button onclick="linkCentralDeAtendimento()">Link Central De Atendimento</button>
            <button onclick="videoExplicativo()">Video Explicativo</button>
        </div>
    </div>
    ` 
    rel04.innerText = `Segunda Via Boleto`
}

// via boletos botao pdf
function pdf(){
    console.log("pdf")
}

// via boletos botao like Central De Atendimento
function linkCentralDeAtendimento(){
    console.log("link Central de atendimento")
}

// via boletos botao do video explicativo
function videoExplicativo(){
    console.log("video explicativo")
    //passo 5
    let videoExplicativo = document.getElementById("passo05")
    videoExplicativo.innerHTML = `
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/BTYAsjAVa3I" title="3 A.M Study Session 📚 - [lofi hip hop/chill beats]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    rel05.innerText = `Assistindo video explicativo do pagamento via Boleto`
}


//pagamento via pix e seus caminhos
function pagamentoPix(){
    
    console.log("pix")
    //passo 4
    let pagamentoPix = document.getElementById("passo04")
    pagamentoPix.innerHTML = `
    <div class="pos">
        <h4>Pagamento Via Pix</h4>
        <div>
            <button onclick="fazerPix()">Fazer Pix</button>
            <button onclick="comprovante()">Comprovante</button>
        </div>
    </div>
    `
    rel04.innerText = `Clicou: Pagamento Via Pix`
}

//pagamento via pix botao fazerpix
function fazerPix(){
    console.log("pix feito")

    let fazerPix = document.getElementById("passo05") // passo 5
    fazerPix.innerHTML = `
    <div class="video_pix">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/bzD2ZB4IShA" title="Moonlight - AlcNdr (Cyberpunk Edgerunners)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `
    rel05.innerText = `Assistindo video explicativo...`

    let centralDoPix = document.getElementById("passo06") // passo 6
    centralDoPix.innerHTML = `
    <div class="pos">
        <button>Central do pix</button>
    </div>
    `
}

function comprovante(){
    console.log("comprovante")
}

//negociação e seus caminhos
function negociacao(){
    
    console.log("negociaçao")

    let negociacao = document.getElementById("passo04") //passo 4
    negociacao.innerHTML = `
        <div class="pos">
            <h4>Negociação</h4>
            <div>
                <button>Reativação</button>
                <button>Boleto em Atraso</button>
            </div>
        </div>
    `
    rel04.innerText = `Clicou: Negociaçâo`
}

function reativacao(){
    console.log("Reativação")
}
let boletoEmAtraso = function(){
    console.log("ta atrasado")
}


//enviar comprovante e seus caminhos
function enviarComprovante(){
    
    console.log("enviar comprovante")

    let enviarComprovante = document.getElementById("passo04")// Passo 4
    enviarComprovante.innerHTML = `
    <div class="pos">
        <h4>Enviar Comprovante</h4>
        <div>
            <button onclick="enviarComprovanteBoleto()">Boleto</button>
            <button onclick="enviarComprovantePix()">Pix</button>
        </div>
    </div>
    `
    rel04.innerText = `Clicou: Enviar Comprovante`
}

// caixa de msg que mostra informação do que fazer com o boleto
function enviarComprovanteBoleto(){
    console.log("comprovante boleto")

    let enviarComprovanteBoleto = document.getElementById("passo05") // passo 5
    enviarComprovanteBoleto.innerHTML = `
        <div class="texto_info_promessa">
            <p>Colocar promessa de pagamento referente a boleto pago para 48 horas.</p>
        </div>
    ` 
    rel05.innerText = `Coloque a promessa de pagamento pra 48 horas`

    let finalizarComCliente = document.getElementById("passo06") // passo 6
    finalizarComCliente.innerHTML = `
        <div class="texto_finalizar" onclick="load()">
            <p>Finalizar com o Cliente</p>
        </div>
    `
    rel06.innerText = `Finalizar com o cliente` 
}

// caixa de msg que mostra informação do que fazer com o pix
function enviarComprovantePix(){
    console.log("comprovante pix")

    let enviarComprovantePix = document.getElementById("passo05") // passo 5
    enviarComprovantePix.innerHTML = `
        
        <div class="texto_info_anexar">
            <p>Anexar o comprovante do pix do cliente no cadastro do SGP e avisar no grupo para baixar o boleto.</p>
        </div>
    `
    rel05.innerText = `Anexar o comprovante do pix do cliente no cadastro do SGP e avisar no grupo para baixar o boleto.`

    let finalizarComClientePix = document.getElementById("passo06") // passo 6
    finalizarComClientePix.innerHTML = `
        <div class="texto_finalizar" onclick="load()">
            <p>Finalizar com o Cliente</p>
        </div>
    `
    rel06.innerText = `Finalizar com o Cliente`
}


//promessa de pagamento e seus caminhos
function promessaDePagamento(){
    
    console.log("promessa de pagamento")

    let promessaDePagamento = document.getElementById("passo04") // passo 4
    promessaDePagamento.innerHTML = `
        <div class="pos">
            <h4>Promessa De Pagamento</h4>
            <p>Verificar se o cliente ainda promessa ou se pediu nesse més</p>
            <div>
                <button>Sim</button> 
                <button>Não</button>
            </div>
        </div>
    `
    rel04.innerText = `Clicou: Promessa de Pagamento`
    // esses dois botoes vao pro passo 5
}


//função se clicar em suporte tecnico e seus caminhos
function suporteTecnico(){

    let suporteTecnico = document.getElementById("passo03") // id passo03

    suporteTecnico.innerHTML = `
    <div class="pos">
            <h4>Conexão</h4>
            <div>
                <button onclick="JoseDeFreitas()">José De Freitas</button>
                <button onclick="santaTeresa()">Santa Teresa</button>
            </div>
    </div>
    `
    rel03.innerText = `Clicou: Suporte Tecnico`
}

function JoseDeFreitas(){
    let JoseDeFreitas = document.getElementById("passo04")// id passo04

    JoseDeFreitas.innerHTML = `
    <div class="pos">
            <h4>Conexão José De Freitas</h4>
            <div>
                <button onclick="fibraJs()">Fibra</button>
                <button onclick="radioJs()">Radio</button>
            </div>
    </div>
    `
   rel04.innerText = `Conexão De Jose de Freitas`
}

function santaTeresa(){
    let santaTeresa = document.getElementById("passo04")// id passo04

    santaTeresa.innerHTML = `
        <div class="pos">
            <h4>Conexão Santa Teresa</h4>
            <div>
                <button onclick="fibraSt()">Fibra</button>
                <button onclick="radioSt()">Radio</button>
            </div>
        </div>
    `
    rel04.innerText = `Conexão da Santa teresa`
}

//funcoes de codigo pra mostrar as opçoes de tipos de problemas jose de freitas

function fibraJs(){
    let fibra = document.getElementById("passo05")// id passo05

    fibra.innerHTML = `
        <div class="pos">
            <h4>Jose De Freitas: Fibra</h4>
            <div>
                <button onclick="lentidao_f()">Lentidão</button>
                <button onclick="queda_f()">Queda</button>
                <button onclick="Offline_f()">Offline</button>
                <button onclick="nao_Conectado_f()">Não conectando</button> 
            </div>
        </div>
    `
    rel05.innerText = `Via: Fibra`
}
function radioJs(){
    let radio = document.getElementById("passo05")// id passo05

    radio.innerHTML = `
        <div class="pos">
            <h4>Jose De Freitas: Radio</h4>
            <div>
                <button onclick="lentidao_r()">Lentidão</button>
                <button onclick="queda_r()">Queda</button>
                <button onclick="Offline_r()">Offline</button>
                <button onclick="nao_Conectado_r()">Não conectando</button> 
            </div>
        </div>
    `
    rel05.innerText = `Via Radio`

    console.log("Via: Radio")
}

//funcoes de codigo pra mostrar as opçoes de tipos de problemas Santa Teresa
function fibraSt(){

    let fibra = document.getElementById("passo05")// id passo05

    fibra.innerHTML = `
    <div class="pos">
            <h4>Santa Teresa: Fibra</h4>
            <div>
                <button onclick="lentidao_f()">Lentidão</button>
                <button onclick="queda_f()">Queda</button>
                <button onclick="Offline_f()">Offline</button>
                <button onclick="nao_Conectado_f()">Não conectando</button> 
            </div>
    </div>
    `
    rel05.innerText = `Via: Fibra`
}
function radioSt(){

    let radio = document.getElementById("passo05")// id passo05

    radio.innerHTML = `
    <div class="pos">
            <h4>Santa Teresa: Radio</h4>
            <div>
                <button onclick="lentidao_r()">Lentidão</button>
                <button onclick="queda_r()">Queda</button>
                <button onclick="Offline_r()">Offline</button>
                <button onclick="nao_Conectado_r()">Não conectando</button> 
            </div>
    </div>
    `
    rel05.innerText = `Via Radio`
}










//funcoes que mostram o motivo da solicitação pra radio (lembra de cofigurar ela pra radio)
//lentidao , queda , offline , nao-conectado
function lentidao_r(){
    //passo 6
    rel06.innerText = `Motivo: Lentidão`
    console.log("Motivo lentidão")

     //passo 07
     passo07.innerHTML = `
     <div class="pos">
         <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
         <div>
             <button onclick="verificadoEquipamentos_sim()">Sim</button>
             <button onclick="verificadoEquipamentos_nao()">Não</button>
         </div>
     </div>
    `

    console.log("lentidão radio ")
}
function queda_r(){
    //passo 6
    rel06.innerText = `Motivo: Queda`
    console.log("Motivo Queda de Sinal")

     //passo 07
     passo07.innerHTML = `
     <div class="pos">
         <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
         <div>
             <button onclick="verificadoEquipamentos_sim()">Sim</button>
             <button onclick="verificadoEquipamentos_nao()">Não</button>
         </div>
     </div>
 `
}
function Offline_r(){
    //passo 6
    rel06.innerText = `Motivo: Offline`
    console.log("Motivo Offline")

     //passo 07
     passo07.innerHTML = `
     <div class="pos">
         <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
         <div>
             <button onclick="verificadoEquipamentos_sim()">Sim</button>
             <button onclick="verificadoEquipamentos_nao()">Não</button>
         </div>
     </div>
 `
}
function nao_Conectado_r(){
    //passo 6
    rel06.innerText = `Motivo: Não Conectado`
    console.log("Motivo Não Conectado")

    //passo 07
    passo07.innerHTML = `
        <div class="pos">
            <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
            <div>
                <button onclick="verificadoEquipamentos_sim()">Sim</button> 
                <button onclick="verificadoEquipamentos_nao()">Não</button>
            </div>
        </div>
    `
    
}

function verificadoEquipamentos_nao(){
    //passo 8
    passo08.innerHTML = `
        <div class="texto-info">
            <p>Abrir (OS) Equipe de Moto enviar ONU e Roteador e Fonte Novas</p>
        <div>
    `
    //rel
    rel08.innerText = "Equipe de Moto enviar ONU e Roteador e Fonte Novas"
}

function verificadoEquipamentos_sim(){
    //passo 8
    passo08.innerHTML = `
        <div class="pos">
            <p>Peça pra desligar e ligar com 5 minutos</p>
            <div>
                <button onclick="pecaPraDesligar_sim()">Sim</button> 
                <button onclick="pecaPraDesligar_nao()">Não</button>
            </div>
        </div> 
    `
    //rel
    rel08.innerText = "Clicou Verificar equipamentos: Sim "
}

function pecaPraDesligar_sim(){
    //passo 9
    passo09.innerHTML = `
        <div class="texto-info">
            <p>Agradecer o cliente e perguntar se precisar de algo a mais?</p>
        </div>
    `
    //rel
    rel09.innerText = "Agradecer ao cliente"

    //passo 10
    passo10.innerHTML = `
        <div class="texto_finalizar" onclick="load()">
            <p>Finalizar com o Cliente</p>
        </div>
    `
    //rel
    rel10.innerText = "finalizou com o cliente"
}

function pecaPraDesligar_nao(){
    //passo 9 
    passo09.innerHTML = `
        <div class="pos">
            <p>Verificar Sinal na Radio tem sinal?</p>
            <div>
                <button onclick="VerificarSinalRadio_sim()">Sim</button>
                <button onclick="VerificarSinalRadio_nao()">Não</button>
            </div>
        </div>
    `
    //rel
    rel09.innerText = "Verificar sinal da radio"
    //passo 10
    passo10.innerHTML = ` <div id="passo10"></div>`
}

function VerificarSinalRadio_sim(){
    //passo 10
    passo10.innerHTML = `
    <div class="texto-info">
        <p>Verificar se nome ta aparecendo a rede wifi?</p>
    </div>
    `
    //rel
    rel10.innerText = "Verificar se nome ta aparecendo a rede wifi"

    // passo 11
    passo11.innerHTML = `
    <div class="texto-info">
        <p>Nome diferente da Padrão e Roteador Resetado, abrir OS (MOTO)</p>
    </div>
    `
    //rel
    rel11.innerText = "Nome diferente do padrão e Roteador Resetado, abrir OS (MOTO)"
}

function VerificarSinalRadio_nao(){
    //passo 10
    passo10.innerHTML = `
    <div class="texto-info">
        <p>abrir (OS) Equipe de carro e informar para o cliente o Horario</p>
    </div>
    `
    //rel
    rel10.innerText = "Clicou Sinal de radio: Não"

    //passo 11
    passo11.innerHTML = `<div id="passo10"></div>`
    //rel
    rel11.innerText = "abrir (OS) Equipe de carro e informar para o cliente o Horario"
}


















//funcoes que mostram o motivo da solicitação pra fibra (lembra de cofigurar ela pra fibra)
//lentidao , queda , offline , nao-conectado
function lentidao_f(){
    //passo 6
    rel06.innerText = `Motivo: Lentidão`
    console.log("Motivo lentidão")

     //passo 07
     passo07.innerHTML = `
     <div class="pos">
         <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
         <div>
             <button onclick="verificadoEquipamentos_sim_f()">Sim</button>
             <button onclick="verificadoEquipamentos_nao_f()">Não</button>
         </div>
     </div>
    `

    console.log("lentidao fibra")
}
function queda_f(){
    //passo 6
    rel06.innerText = `Motivo: Queda`
    console.log("Motivo Queda de Sinal")

     //passo 07
     passo07.innerHTML = `
     <div class="pos">
         <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
         <div>
            <button onclick="verificadoEquipamentos_sim_f()">Sim</button>
            <button onclick="verificadoEquipamentos_nao_f()">Não</button>
         </div>
     </div>
 `
}
function Offline_f(){
    //passo 6
    rel06.innerText = `Motivo: Offline`
    console.log("Motivo Offline")

     //passo 07
     passo07.innerHTML = `
     <div class="pos">
         <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
         <div>
            <button onclick="verificadoEquipamentos_sim_f()">Sim</button>
            <button onclick="verificadoEquipamentos_nao_f()">Não</button>
         </div>
     </div>
 `
}
function nao_Conectado_f(){
    //passo 6
    rel06.innerText = `Motivo: Não Conectado`
    console.log("Motivo Não Conectado")

    //passo 07
    passo07.innerHTML = `
        <div class="pos">
            <p>Verificado Equipamentos da forma correta Ligados? Fotos para o Cliente!!!</p>
            <div>
                <button onclick="verificadoEquipamentos_sim_f()">Sim</button>
                <button onclick="verificadoEquipamentos_nao_f()">Não</button>
            </div>
        </div>
    `
    
}

function verificadoEquipamentos_sim_f(){
    //passo 8
    passo08.innerHTML = `
        <div class="pos">
            <p>Peça pra desligar e ligar com 5 minutos</p>
            <div>
                <button onclick="agradecerOcliete()">Sim</button> 
                <button onclick="VericarSinalOnu_f()">Não</button>
            </div>
        </div> 
    `
}

function verificadoEquipamentos_nao_f(){
    //passo 8
    passo08.innerHTML = `
    <div class="texto-info">
        <p>Abrir (Os) Equipe de Moto Enviar onu e Roteador e Fonte Novas</p>
    </div>
    `
}

function agradecerOcliete(){
    //passo 9
    passo09.innerHTML = `
        <div class="texto-info">
            <p>Agradecer o cliente e perguntar se precisa de algo mais?</p>
        </div>
    `
}

function VericarSinalOnu_f(){
    //passo 9
    passo09.innerHTML = `
        <div class="pos">
            <p>Verificar Sinal na ONU tem sinal?</p>
            <div>
                <button onclick="VericarSinalOnu_f_sim()">Sim</button>
                <button onclick="VericarSinalOnu_f_nao()">Não</button>
            </div>
        </div>
    `
}

function VericarSinalOnu_f_nao(){
    //passo 10
    passo10.innerHTML = `
    <div class="texto-info">
        <p>Abrir (OS)  Equipe de Carro e informar para o Cliente o Horario</p>
    </div>
    `
    //passo 11
    passo11.innerHTML  = `<div id="passo10"></div>`
}

function VericarSinalOnu_f_sim(){
    //passo 10 
    passo10.innerHTML = `
        <div class="texto-info">
            <p>Verificar se o nome ta aparecendo a rede wifi?</p>
        </div>
    `
    //passo 11
    passo11.innerHTML = `
        <div class="texto-info">
            <p>Nome Diferente da Padrão e Roteador Resetado , abrir Os (Moto)</p>
        </div>
    `
}















//funcao do botao que vai regarregar a pagina

let load = function(){
    location.reload();
}

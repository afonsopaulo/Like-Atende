//funçao de enviar recebe o nome do cliente
function enviar(){
    let nome = document.getElementById("nome").value
    console.log("Nome = " + nome)
    
    let passo01 = document.getElementById("passo01")// id passo01

    passo01.innerHTML = 
    ` <div class="passo01"> 
        <h4>${nome} é cliente?</h4>
        <div>
            <button onclick="clienteSim()">Sim</button>
            <button onclick="clienteNao()">Não</button>
        </div>             
    </div>`

    //dados do relatorio
    let relatorioNome = document.getElementById("rel01")
    relatorioNome.innerText = ` Nome : ${nome}`
    
}

//funçao se o cliente clicar em sim
function clienteSim(){

    let passo02 = document.getElementById("passo02") // id passo02
    
    passo02.innerHTML = `
    <div class="passo02">
            <h4>Escolha uma das opções</h4>
            <div>
                <button onclick="finaceiro()">Finaceiro</button>
                <button onclick="suporteTecnico()">Suporte Tecnico</button>
                <button onclick="comercial()">Comercial</button> 
            </div>
    </div>
    `  
    //dados pro relatorio
    let relatorioCliente = document.getElementById("rel02")
    relatorioCliente.innerText = `Cliente: Sim`
    console.log("Cliente: sim")
}

//funcão se clicar em finaceiros e seus caminhos
function finaceiro(){

    let finaceiro = document.getElementById("passo03")// id passo03

    finaceiro.innerHTML = `
    <div class="finaceiro">
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

    let relatorioFinaceiro = document.getElementById("rel03")
    relatorioFinaceiro.innerText = `Clicou em: Finaceiro`
    console.log("Clicou em : Finaceiro")
}


//via boleto e seus caminhos
function sViaBoleto(){
    
    console.log("boleto")

    let sViaBoleto = document.getElementById("passo04")
    sViaBoleto.innerHTML = `
    <div class="segunda_via_boleto">
        <h4>Segunda Via Boleto</h4>
        <div>
            <button onclick="pdf()">Pdf</button>
            <button onclick="linkCentralDeAtendimento()">Link Central De Atendimento</button>
            <button onclick="videoExplicativo()">Video Explicativo</button>
        </div>
    </div>
    ` // html ja atualizado
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

    let videoExplicativo = document.getElementById("passo05")//passo 5
    videoExplicativo.innerHTML = `
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/BTYAsjAVa3I" title="3 A.M Study Session 📚 - [lofi hip hop/chill beats]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
}


//pagamento via pix e seus caminhos
function pagamentoPix(){
    
    console.log("pix")

    let pagamentoPix = document.getElementById("passo04")
    pagamentoPix.innerHTML = `
    <div class="pagamento_via_pix">
        <h4>Pagamento Via Pix</h4>
        <div>
            <button onclick="fazerPix()">Fazer Pix</button>
            <button onclick="comprovante()">Comprovante</button>
        </div>
    </div>
    `//Ja atualizado
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
    let centralDoPix = document.getElementById("passo06") // passo 6
    centralDoPix.innerHTML = `
    <div class="central_pix">
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
        <div class="negociacao">
            <h4>Negociação</h4>
            <div>
                <button>Reativação</button>
                <button>Boleto em Atraso</button>
            </div>
        </div>
    `
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
    <div class="enviar_comprovante">
        <h4>Enviar Comprovante</h4>
        <div>
            <button onclick="enviarComprovanteBoleto()">Boleto</button>
            <button onclick="enviarComprovantePix()">Pix</button>
        </div>
    </div>
    `//ja atualizado
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

    let finalizarComCliente = document.getElementById("passo06") // passo 6
    finalizarComCliente.innerHTML = `
        <div class="texto_finalizar">
            <button onclick="load()">
                <p>Finalizar com o Cliente</p>
            </button>
        </div>
    `
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

    let finalizarComClientePix = document.getElementById("passo06") // passo 6
    finalizarComClientePix.innerHTML = `
        <div class="texto_finalizar">
            <button onclick="load()">
                <p>Finalizar com o Cliente</p>
            </button>
        </div>
    `
}


//promessa de pagamento e seus caminhos
function promessaDePagamento(){
    
    console.log("promessa de pagamento")

    let promessaDePagamento = document.getElementById("passo04") // passo 4
    promessaDePagamento.innerHTML = `
        <div class="promessa_de_pagamento">
            <h4>Promessa de Pagamento</h4>
            <p>Verificar Se o cliente ainda promessa ou se pediu nesse més</p>
            <div>
                <button>Sim</button> 
                <button>Não</button>
            </div>
        </div>
    `    // esses dois botoes vao pro passo 5
}


//função se clicar em suporte tecnico e seus caminhos
function suporteTecnico(){

    let suporteTecnico = document.getElementById("passo03") // id passo03

    suporteTecnico.innerHTML = `
    <div class="suporte_Tecnico">
            <h4>Conexão</h4>
            <div>
                <button onclick="JoseDeFreitas()">José De Freitas</button>
                <button onclick="santaTeresa()">Santa Teresa</button>
            </div>
    </div>
    `
    let relatorioFinaceiro = document.getElementById("rel03")
    relatorioFinaceiro.innerText = `Clicou em: Suporte Tecnico`
    console.log("Clicou em: Suporte Tecnico")
}

function JoseDeFreitas(){
    let JoseDeFreitas = document.getElementById("passo04")// id passo04

    JoseDeFreitas.innerHTML = `
    <div class="tipo_da_conexao">
            <h4>Conexão José De Freitas</h4>
            <div>
                <button onclick="fibraJs()">Fibra</button>
                <button onclick="radioJs()">Radio</button>
            </div>
    </div>
    `
    let relatorioConexaoJoseDeFreitas = document.getElementById("rel04")
    relatorioConexaoJoseDeFreitas.innerText = `Conexão de Jose De Freitas`
    console.log("Conexão de Jose De Freitas")
}

function santaTeresa(){
    let santaTeresa = document.getElementById("passo04")// id passo04

    santaTeresa.innerHTML = `
        <div class="tipo_da_conexao">
            <h4>Conexão Santa Teresa</h4>
            <div>
                <button onclick="fibraSt()">Fibra</button>
                <button onclick="radioSt()">Radio</button>
            </div>
        </div>
    `
    let relatorioSantaTeresa = document.getElementById("rel04")
    relatorioSantaTeresa.innerText = `Conexão da Santa Teresa`
    console.log("Conexão da Santa Teresa")
}

//funcoes de codigo pra mostrar as opçoes de tipos de problemas jose de freitas

function fibraJs(){
    let fibra = document.getElementById("passo05")// id passo05

    fibra.innerHTML = `
        <div class="problemas">
            <h4>Jose De Freitas: Fibra</h4>
            <div>
                <button onclick="lentidao()">Lentidão</button>
                <button onclick="queda()">Queda</button>
                <button onclick="Offline()">Offline</button>
                <button onclick="nao_Conectado()">Não conectando</button> 
            </div>
        </div>
    `
    let relatorioFibraJs = document.getElementById("rel05")
    relatorioFibraJs.innerText = `Via: Fibra`
    console.log("Via: Fibra")
}
function radioJs(){
    let radio = document.getElementById("passo05")// id passo05

    radio.innerHTML = `
        <div class="problemas">
            <h4>Jose De Freitas: Radio</h4>
            <div>
                <button onclick="lentidao()">Lentidão</button>
                <button onclick="queda()">Queda</button>
                <button onclick="Offline()">Offline</button>
                <button onclick="nao_Conectado()">Não conectando</button> 
            </div>
        </div>
    `
    let relatorioRadioJs = document.getElementById("rel05")
    relatorioRadioJs.innerText = `Via: Radio`

    console.log("Via: Radio")
}

//funcoes de codigo pra mostrar as opçoes de tipos de problemas Santa Teresa
function fibraSt(){

    let fibra = document.getElementById("passo05")// id passo05

    fibra.innerHTML = `
    <div class="problemas">
            <h4>Santa Teresa: Fibra</h4>
            <div>
                <button onclick="lentidao()">Lentidão</button>
                <button onclick="queda()">Queda</button>
                <button onclick="Offline()">Offline</button>
                <button onclick="nao_Conectado()">Não conectando</button> 
            </div>
    </div>
    `
    let relatorioFibraSt = document.getElementById("rel05")
    relatorioFibraSt.innerText = `Via: Fibra`
    console.log("Via: Fibra")
}
function radioSt(){

    let radio = document.getElementById("passo05")// id passo05

    radio.innerHTML = `
    <div class="problemas">
            <h4>Santa Teresa: Radio</h4>
            <div>
                <button onclick="lentidao()">Lentidão</button>
                <button onclick="queda()">Queda</button>
                <button onclick="Offline()">Offline</button>
                <button onclick="nao_Conectado()">Não conectando</button> 
            </div>
    </div>
    `
    let relatorioRadioSt = document.getElementById("rel05")
    relatorioRadioSt.innerText = `Via: Radio`
    console.log("Via Radio")
}

//funcoes que mostram o motivo da solicitação
//lentidao , queda , offline , nao-conectado
function lentidao(){
    console.log("Motivo lentidão")
}
function queda(){
    console.log("Motivo Queda de Sinal")
}
function Offline(){
    console.log("Motivo Offline")
}
function nao_Conectado(){
    console.log("Motivo Não Conectado")
}


//função comercial ainda em desevolvimento
function comercial(){
    console.log("comer")
}





//objetos mostrados no console


//funcao do botao que vai regarregar a pagina

let load = function(){
    location.reload();
}

// ids das divs pra mim pegar e substituir 
let passo01 = document.getElementById("passo01")
let passo02 = document.getElementById("passo02")
let passo03 = document.getElementById("passo03")
let passo04 = document.getElementById("passo04")
let passo05 = document.getElementById("passo05")
let passo06 = document.getElementById("passo06")

// aqui vai ficar as ids do relatorio final
let rel01 = document.getElementById("rel01")
let rel02 = document.getElementById("rel02")
let rel03 = document.getElementById("rel03")
let rel04 = document.getElementById("rel04")
let rel05 = document.getElementById("rel05")
let rel06 = document.getElementById("rel06")
let rel07 = document.getElementById("rel07")

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
            <p>Enteder a Necessidade? Plano atual do cliente!</p>
        </div>
    `
    let nome = document.getElementById("nome").value
    rel06.innerText = `${nome} ja tem internet`
    rel07.innerText = `Enteder qual e a necessidade? Plano atual do Cliente`
}

let ClienteJaTemInternetNao = function(){
    console.log("em desvolvimento")
}

let comercialSantaTeresa = function(){
    console.log("em desevolvimento")
}

// administrativo e seus filhos
let administrativo = function(){
    console.log("clicou em: administrativo")
}// ainda em desevolvimento


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

    let relatorioFinaceiro = document.getElementById("rel03")
    relatorioFinaceiro.innerText = `Clicou em: Finaceiro`
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
                <button onclick="lentidao()">Lentidão</button>
                <button onclick="queda()">Queda</button>
                <button onclick="Offline()">Offline</button>
                <button onclick="nao_Conectado()">Não conectando</button> 
            </div>
        </div>
    `
    rel05.innerText = `Via: Fibra`
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
    rel05.innerText = `Via Radio`

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
    rel05.innerText = `Via: Fibra`
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
    rel05.innerText = `Via Radio`
}

//funcoes que mostram o motivo da solicitação
//lentidao , queda , offline , nao-conectado
function lentidao(){
    //passo 6
    rel06.innerText = `Motivo: Lentidão`
    console.log("Motivo lentidão")
}
function queda(){
    //passo 6
    rel06.innerText = `Motivo: Queda`
    console.log("Motivo Queda de Sinal")
}
function Offline(){
    //passo 6
    rel06.innerText = `Motivo: Offline`
    console.log("Motivo Offline")
}
function nao_Conectado(){
    //passo 6
    rel06.innerText = `Motivo: Não Conectado`
    console.log("Motivo Não Conectado")
}


//função comercial ainda em desevolvimento





//objetos mostrados no console


//funcao do botao que vai regarregar a pagina

let load = function(){
    location.reload();
}

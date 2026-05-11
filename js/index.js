// Verificando se há alguema informação salva (Nome do Usuário)
let nome
let nomeSalvo = localStorage.getItem("nomeUsuario");

// Caso não tenha nenhuma informação salva = solicita o nome do usuário nome e armazena (Trata-se de um dado persistente, ou seja, ela é solicitada apenas uma vez e é salva no navegador do usuário)
if (nomeSalvo == null){
    nome = prompt("Digite seu nome")
    localStorage.setItem("nomeUsuario", nome)
}

//Caso o usuário já tenha acessado o sistema antes = recupera a informação
else{
    nome = nomeSalvo
}

// Modificando elementos HTML de acordo com as infomações encontradas|informadas (Nome do Usuário)
document.getElementById("nomeUsuario").innerText = nome
document.getElementById("avatar").innerText = nome[0]

// TROCANDO PÁGINA
//Lista todas as páginas/setores
let paginas = document.querySelectorAll(".setor button")

//Percorre cada página/setor
paginas.forEach(function(pagina){

    //Esculta o clique
    pagina.addEventListener("click",function(){

        //Remove a classe ativa  de todas as páginas/setores
        paginas.forEach(function(paginaAtual){
            paginaAtual.classList.remove("ativa")
        })
        
        //Adiciona ativa no botão clicado
        pagina.classList.add("ativa")
    })
})

//ABRINDO CALENDÁRIO E NOTIFICAÇÃO
//Resgatando documentos necessários
let calendarioElementos = document.querySelector(".recursos .armazenaCalendario")
let notificacaoElementos = document.querySelector(".recursos .armazenaNotificacao")

//Esculta o clique
document.addEventListener("click", function(evento){

    //Clique no Calendário
    if(calendarioElementos.contains(evento.target)){
        
        //Fecha notificação
        notificacaoElementos.classList.remove("aberto")

        //Abre os elementos de calendário
        calendarioElementos.classList.toggle("aberto")
    }

    //Clique em notificação
    else if(notificacaoElementos.contains(evento.target)){

        //Fecha calendário
        calendarioElementos.classList.remove("aberto")
    
        //Abre os elementos da notificação
        notificacaoElementos.classList.toggle("aberto")
    }
    
    //Clique fora
    else{
        
        //Fecha ambos elementos
        calendarioElementos.classList.remove("aberto")
        notificacaoElementos.classList.remove("aberto")
    }
})

//GERANDO CALENDARIO
//Data atual completa
let data = new Date()
let diaAtual = data.getDate()
let mesAtual = data.getMonth()
let anoAtual = data.getFullYear()

//Quantidade de dias que o mês atual possui
let quantidadeDias = new Date(anoAtual, mesAtual +1, 0).getDate()

//Meses do calendário
let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

//Resgatando documentos necessários
let tituloCalendario = document.querySelector(".recursos .elementoCalendario .tituloCalendario")

//Relaciona o mês(Número) com o seu mês correspondete
let mes = meses[mesAtual]

//Título com mês e ano do calendário
tituloCalendario.innerText = mes + " " + anoAtual

//Resgatando documento necessário
let dias = document.querySelector(".recursos .gridDiasCalendario")

//Descobrindo qual dia da semana cai o primeiro dia do mês
let primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay()

//Descobrindo quantos dias o mês anterior possui
let ultimoDiaMesAnterior = new Date(anoAtual, mesAtual, 0).getDate()

//Descobrindo onde o calendário inicia
let inicionMesAnterior = ultimoDiaMesAnterior - primeiroDiaSemana + 1

//Contador que trará a quantidade de dias do mês antrior foram adicionados ao calendário atual
let diasdoMesAnterior = 0

//Cria loop para os dias do mês anterior
for(let diaAnterior = inicionMesAnterior; diaAnterior <= ultimoDiaMesAnterior; diaAnterior++){
    let quadradoAnterior = document.createElement("div")
    quadradoAnterior.innerText = diaAnterior
    quadradoAnterior.classList.add("outroMes")
    dias.appendChild(quadradoAnterior)
    diasdoMesAnterior ++
}

//Cria loop pra listar todos os dias do mês atual
for(let dia = 1; dia <= quantidadeDias; dia++){

    //Cria div pra cada dia e adiona-os no HTML
    let quadradoDia = document.createElement("div")
    quadradoDia.innerText = dia
    dias.appendChild(quadradoDia)

    //Sinalizador do dia atual
    if (dia == diaAtual){
        quadradoDia.classList.add("diaAtual")
    }
}

//Descobrindo a quantidade de dias do próximo mês necessários para completar o calendário
let DiasProximoMes = 42 - (diasdoMesAnterior + quantidadeDias)

//Cria o loop com a quantidade de dias necessários para completar o calendário 
for(let i = 1; i <= DiasProximoMes ; i++){

    //Cria a div para cada dia e adiciona-os no HTML
    let quadradoDiaProximoMes = document.createElement("div")
    quadradoDiaProximoMes.innerText = i
    quadradoDiaProximoMes.classList.add("outroMes")
    dias.appendChild(quadradoDiaProximoMes)
}


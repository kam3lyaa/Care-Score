//Verificando se há alguema informação salva (Nome do Usuário)
let nome
let nomeSalvo = localStorage.getItem("nomeUsuario");

//Caso não tenha nenhuma informação salva = solicita o nome do usuário nome e armazena (Trata-se de um dado persistente, ou seja, ela é solicitada apenas uma vez e é salva no navegador do usuário)
if (nomeSalvo == null){
    nome = prompt("Digite seu nome")
    localStorage.setItem("nomeUsuario", nome)
}

//Caso o usuário já tenha acessado o sistema antes = recupera a informação
else{
    nome = nomeSalvo
}

//Modificando elementos HTML de acordo com as infomações encontradas|informadas (Nome do Usuário)
document.getElementById("nomeUsuario").innerText = nome
document.getElementById("avatar").innerText = nome[0]

document.getElementById("nomeUsuarioPageUm").innerText = nome
document.getElementById("nomeUsuarioPageDois").innerText = nome
document.getElementById("avatarUm").innerText = nome[0]
document.getElementById("avatarDois").innerText = nome[0]

//BOTÕES PARA TROCAR PÁGINA
//Lista todas as páginas/setores
let paginas = document.querySelectorAll(".setor button")

//Percorre cada página/setor
paginas.forEach(function(pagina){

    //Escuta o clique
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

//Escuta o clique
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


//CONECTANDO AS PÁGINAS DE NAVEGAÇÕES COM SEUS RESPECTIVOS BOTÕES
//Resgatando documentos necessários

//Botões
let botaoHome = document.querySelector(".setor .home")
let botaoMeuProgresso = document.querySelector(".setor .progresso")

//Elementos das páginas correspondente
let paginaHome = document.querySelector("main .paginaHome")
let paginaMeuProgresso = document.querySelector("main .meuProgressoPage")

//Escuta o clique no botão Home
botaoHome.addEventListener("click", function(){

    //Remove classe ativa de todas as páginas
    paginaHome.classList.remove("ativaPagina")
    paginaMeuProgresso.classList.remove("ativaPagina")

    //Aplica a classe ativa na página correspondente 
    paginaHome.classList.add("ativaPagina")
})

//Escuta o clique no botão Meu progresso
botaoMeuProgresso.addEventListener("click",function(){

    //Remove classe ativa de todas as páginas
    paginaHome.classList.remove("ativaPagina")
    paginaMeuProgresso.classList.remove("ativaPagina")

    //Aplica a classe ativa na página correspondente 
    paginaMeuProgresso.classList.add("ativaPagina")
})


//MAPA
//Armazenando endereços das clínicas
const clinicas = [

    { //Localização Cliníca 1
        nome: "Barueri, Unidade Alphaville",
        lat: -23.498192,
        lng: -46.853034,
    },

    { //Localização Clínica 2
        nome: "São Paulo, Unidade Brooklin",
        lat: -23.609930,
        lng: -46.696056,
    },

    { //Localização Clínica 3
        nome: "São Paulo, Unidade Campo Belo",
        lat: -23.616163,
        lng: -46.674416,
    },

    { //Localização Clínica 4
        nome: "São Paulo, Unidade Morumbi",
        lat: -23.622160,
        lng: -46.698201,
    },

    { //Localização Clínica 5
        nome: "São Paulo, Unidade Paulista",
        lat: -23.556605,
        lng: -46.659591,
    },

    { //Localização Clínica 6
        nome: "São Paulo, Unidade Vila Olímpia",
        lat: -23.594726,
        lng: -46.686230,
    },

    { //Localização Clínica 7
        nome: "Rio de Janeiro, Unidade Rio Sul",
        lat: -22.957236,
        lng: -43.176265,
    },

    { //Localização Clínica 8
        nome: " São Paulo, Unidade Pinheiros",
        lat: -23.566841,
        lng: -46.688522
    }

]

//Pede acesso ao usuário da localização
navigator.geolocation.getCurrentPosition((position) => {

    //Se for permitido, ele armazena as informações de localização do usuário
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;

    console.log(userLatitude, userLongitude)

    //Criando variáveis que armazenára a unidade mais próxima e a menor distância
    let unidadeMaisProxima = null
    let menorDistancia = Infinity;

    //Descobrindo a clínica com menor distância
    clinicas.forEach((clinica) =>{
        const distancia = calcularDistancia(
            userLatitude,
            userLongitude,
            clinica.lat,
            clinica.lng
        )

        if(distancia < menorDistancia){
            menorDistancia = distancia;
            unidadeMaisProxima = clinica;
        }

    })

    //Criando mapa a partir da localização do usuário
    const map = L.map('elementoMapa',{

        //Mapa estático
        zoomControl: false,
        attributionControl: false

    }).setView([unidadeMaisProxima.lat, unidadeMaisProxima.lng], 16);

    //Layer/Design do mapa
    const layer = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

    //Adicionando layer ao mapa
    layer.addTo(map)

    //Marcador que sinaliza a localização do usuário no mapa
    L.marker([userLatitude, userLongitude]).addTo(map)

    //Marcar todas as clínicas no mapa
    clinicas.forEach((clinica) => {
        L.marker([clinica.lat, clinica.lng]).addTo(map)
    })


    //Calculando tempo de deslocamento aproximadamente (não é exato)
    function calcularDistancia(lat1, lon1, lat2, lon2) {

        return Math.sqrt(
        Math.pow(lat2 - lat1, 2) +
        Math.pow(lon2 - lon1, 2)
    )
    }

    const distanciaKm = menorDistancia * 111;

    //Velocidade fixa utilizada
    const velocidadeMedia = 55;
    
    //Calculando a média de tempo que o usuário levará de deslocamento (fixo)
    const tempoHoras = distanciaKm / velocidadeMedia
    const tempoMinutos = tempoHoras * 60;
    const tempoFinal = Math.round(tempoMinutos);

    //Corrigindo o horário
    const horas = Math.floor(tempoFinal / 60);
    const minutos = tempoFinal % 60;

    const horario = document.getElementById("horario")
    horario.innerText = `${horas}h ${minutos}min`;

    //Craindo link de rota de acordo com a localização do usuário e da clínica mais próxima
    const rotaGoogleMaps = `https://www.google.com/maps/dir/${userLatitude},${userLongitude}/${unidadeMaisProxima.lat},${unidadeMaisProxima.lng}`;

    //Resgatando documentos necessários
    const linkRota = document.getElementById("linkRota")
    linkRota.href = rotaGoogleMaps

    linkRota.target = "_blanck"
});


var carta_seiya = {
    nome: 'Seiya de Pagasus',
    atributos:{
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}
var carta_vader = {
    nome: 'Lorde Darth Vader',
    atributos:{
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var carta_buba = {
    nome: 'Bubassauro',
    atributos:{
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var carta_maquina
var carta_jogador
var cartas = [carta_seiya, carta_vader, carta_buba]

function sortearCarta() {
    var numero_carta_maquina = parseInt(Math.random()*3)
    var dados_carta_jogador = document.getElementById('dados_carta_jogador')
    var dados_carta_selecionada_jogador = ''
    var dados_jogo = document.getElementById('retorno_do_jogo')
    dados_jogo.innerHTML = ''
    carta_maquina = cartas[numero_carta_maquina]
    
    var numero_carta_jogador = parseInt(Math.random()*3)
    while (numero_carta_jogador == numero_carta_maquina) {
        numero_carta_jogador = parseInt(Math.random()*3)
    }
    carta_jogador = cartas[numero_carta_jogador]
    dados_carta_selecionada_jogador = ( '<br>' + carta_jogador.nome + '<br>' +'Ataque: ' + carta_jogador.atributos.ataque + '<br>' + 'Defesa: ' + carta_jogador.atributos.defesa + '<br>' + 'Magia: ' + carta_jogador.atributos.magia + '<br>')
    
    dados_carta_jogador.innerHTML = dados_carta_selecionada_jogador
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atibuto in carta_jogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atibuto + "'>" + atibuto
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
    var radio_atributo = document.getElementsByName('atributo')
    for (var i = 0; i < radio_atributo.length; i++){
        if(radio_atributo[i].checked){
            return radio_atributo[i].value
        }
    }   
}

function jogar(){
    var atributo_selecionado = obtemAtributoSelecionado()
    var dados_jogo = document.getElementById('retorno_do_jogo')
    var retorno_jogo = ''
    
    if (carta_jogador.atributos[atributo_selecionado] > carta_maquina.atributos[atributo_selecionado]) {
        retorno_jogo = ('Carta do Jogador: ' + carta_jogador.nome + '<br><br>Resultado: GANHOU!!!<br><br>' + 'Carta da máquina: ' + carta_maquina.nome + '<br> O atributo da máquina era: ' + carta_maquina.atributos[atributo_selecionado] + ' pontos')
        dados_jogo.innerHTML = retorno_jogo
        
    } else if (carta_jogador.atributos[atributo_selecionado] == carta_maquina.atributos[atributo_selecionado]){
        retorno_jogo = (carta_jogador.nome + ' empatou com ' +  carta_maquina.nome)
        dados_jogo.innerHTML = retorno_jogo
    } else {
        retorno_jogo = ('Carta do Jogador: ' + carta_jogador.nome + '<br><br>Resultado: PERDEU!!!<br><br>' + 'Carta da máquina: ' + carta_maquina.nome + '<br> O atributo da máquina era: ' + carta_maquina.atributos[atributo_selecionado] + ' pontos')
        dados_jogo.innerHTML = retorno_jogo
    }    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
}
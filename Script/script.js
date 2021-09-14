const tela = document.querySelector("canvas")
const pincel = tela.getContext("2d")
pincel.fillStyle = "lightgray"
pincel.fillRect(0,0,600,400)

var raio = 10;
    var xAleatorio;
    var yAleatorio;

    function alvo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);
    }

    function desenhaAlvo(x,y) {
        alvo(x, y, raio+30, 'blue');
        alvo(x, y, raio+20, 'red');
        alvo(x, y, raio+10, 'white');
        alvo(x, y, raio, 'red');
    }

    function Posicao(maximo) {

        return Math.floor(Math.random() * maximo);
    }

function atualizaTela() {
    limpaTela();
    xAleatorio = Posicao(600);
    yAleatorio = Posicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);
}

function leve (){
setInterval(atualizaTela, 1200);
}

function medio (){
    setInterval(atualizaTela, 900);
    }

function hard () {
    setInterval(atualizaTela, 600);
}

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x > xAleatorio - raio)
    && (x < xAleatorio + raio)
    && (y > yAleatorio - raio)
    && (y < yAleatorio + raio)) {

        alert('Boa 06!');
    }
}

tela.onclick = dispara;


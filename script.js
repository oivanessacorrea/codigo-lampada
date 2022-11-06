const lampada = document.getElementById('lampada');
const lampadaLigada = document.getElementById('lampadaLigada');
const lampadaDesligada = document.getElementById('lampadaDesligada');

function quebrouLampada () {
    return lampada.src.indexOf('quebrada') > -1;
}

function lampadaQuebrada () {
    lampada.src = './img/quebrada.jpg';
}

function ligarLampada () {
    if (!quebrouLampada ()) {
        lampada.src = './img/ligada.jpg';
    }
}

function desligarLampada () {
    if (!quebrouLampada ()) {
        lampada.src = './img/desligada.jpg';
    }
}

lampada.addEventListener('click', lampadaQuebrada);
lampada.addEventListener('mouseover', ligarLampada);
lampada.addEventListener('mouseleave', desligarLampada);

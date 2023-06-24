const bola = document.querySelectorAll('.ball');
const corParaAdvinhar = document.querySelector('#rgb-color');
const botaoResetarJogo = document.querySelector('#reset-game');
const lugarResultado = document.querySelector('#answer');
const placar = 0;

const gerarCor = () => {
    let r = parseInt(Math.random() *255);

    let g = parseInt(Math.random() *255);
     
    let b = parseInt(Math.random() *255);

    return `rgb(${r}, ${g}, ${b})`;
};

const retornaCorParaEspaco = () => {
    let r = parseInt(Math.random() *255);

    let g = parseInt(Math.random() *255);
     
    let b = parseInt(Math.random() *255);

    return `(${r}, ${g}, ${b})`;
};

const atribuiCor = () => {
    for(let bolinha of bola){
        bolinha.style.backgroundColor = gerarCor();
    }
};



const escolhaUmaCor = () => {
    lugarResultado.innerHTML = 'Escolha uma cor';
}



botaoResetarJogo.addEventListener('click', () => {
    corParaAdvinhar.innerHTML = gerarCor();
    atribuiCor();
    escolhaUmaCor();
    for(let bolinha of bola){
        bolinha.style.border = 'none';
    }
});

const verificaCor = () => {
    for(let index = 0; index < bola.length; index +=1){
        bola[index].addEventListener('click', (donoDoClick) => {
            donoDoClick.target.style.border = '1px solid blue';
            if(donoDoClick.target.style.backgroundColor === corParaAdvinhar.innerHTML) {
             lugarResultado.innerHTML = 'Acertou!';
            } else {
                lugarResultado.innerHTML = 'Errou! tente novamente!';
            }
        })
    }
};




atribuiCor();
escolhaUmaCor();
verificaCor();


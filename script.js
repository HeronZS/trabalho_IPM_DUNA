
//FUNCTION PARA EXIBIR O TÍTULO COM EFEITO DE ESMAECER E A PRIMEIRA SETA

    window.addEventListener("load", function() {
        const duna = document.querySelector(".duna");
        const setaBaixo = document.querySelector(".setaBaixo");
    
        duna.style.opacity = 1;
        setaBaixo.style.opacity = 1;
    });


//FUNCTION PARA INICIAR E ATIVAR/DESATIVAR A MÚSICA DE FUNDO DO SITE

  const audio = new Audio('music/dune-soundtrack.mp3');
  audio.loop = true;

  const botaoSom = document.querySelector('.botaoSom');
  const botaoMudo = document.querySelector('.botaoMudo');

    function ativarSom() {
        audio.play().then(() => {
        botaoSom.style.display = 'none';
        botaoMudo.style.display = 'inline';
        }).catch(error => {
        console.error("Não foi possível reproduzir o áudio", error);
        });
    }

    function desativarSom() {
        audio.pause();
        botaoSom.style.display = 'inline';
        botaoMudo.style.display = 'none';
    }

    botaoSom.addEventListener('click', ativarSom);
    botaoMudo.addEventListener('click', desativarSom);

    function iniciarSomNaInteracao() {
        ativarSom();
        window.removeEventListener('click', iniciarSomNaInteracao);
        window.removeEventListener('keydown', iniciarSomNaInteracao);
    }

    window.addEventListener('click', iniciarSomNaInteracao);
    window.addEventListener('keydown', iniciarSomNaInteracao);
    

//FUNCTION QUE MOSTRA O BOTÃO DE VOLTAR AO TOPO QUANDO O USUÁRIO ULTRAPASSA A TELA DE MENU

window.addEventListener('scroll', function() {
    const botao = document.getElementById('botaoUp');
    const menuSection = document.getElementById('menu');
    
    const menuBottomPosition = menuSection.offsetTop + menuSection.offsetHeight;
  
    if (window.scrollY >= menuBottomPosition) {
      botao.classList.add('mostrarBotao');
    } else {
      botao.classList.remove('mostrarBotao');
    }
  });
  

//FUNCTIONS QUE LEVAM O USUÁRIO A PRÓXIMA SECTION AO PRESSIONAR O BOTÃO ⮟


document.getElementById("botaoIntro").addEventListener("click", function(){
    const proxSection = document.getElementById("menu");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botaoMenu").addEventListener("click", function(){
    const proxSection = document.getElementById("autor");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botaoAutor").addEventListener("click", function(){
    const proxSection = document.getElementById("casas");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botaoCasas").addEventListener("click", function(){ //FAZER DEPOIS
    const proxSection = document.getElementById("arrakis");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botaoArrakis").addEventListener("click", function(){
    const proxSection = document.getElementById("fremen");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botaoFremen").addEventListener("click", function(){
    const proxSection = document.getElementById("lisan");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botaoLisan").addEventListener("click", function(){
    const proxSection = document.getElementById("trailer");

    proxSection.scrollIntoView({behavior:"smooth"})
});


//FUNCTION PARA QUE O TÍTULO "CASAS IMPERIAIS" APAREÇA E DESAPAREÇA


window.addEventListener("scroll", function() {
    const harkonnen = document.querySelector(".harkonnen");
    const atreides = document.querySelector(".atreides");
    const corrino = document.querySelector(".corrino");
    harkonnen.style.opacity = 1;
    atreides.style.opacity = 1;
    corrino.style.opacity = 1;

});


//FUNCTION PARA GERAR UMA DIV CONTENDO O TRAILER DO FILME DUNA

const botaoTrailer = document.getElementById('botaoTrailer');
const videoContainer = document.getElementById('videoContainer');

function gerarVideoDiv(){
   
    botaoTrailer.style.display = 'none';

    const videoDiv = document.createElement('div');
    videoDiv.id = 'youtubeVideo';

    const iframe = document.createElement('iframe');
    iframe.width = '1120px';
    iframe.height = '630px';
    iframe.src = 'https://www.youtube.com/embed/n9xhJrPXop4'
    iframe.title = 'Trailer Duna';
    iframe.border = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoDiv.appendChild(iframe)

    videoContainer.appendChild(videoDiv)
}
    botaoTrailer.addEventListener('click',gerarVideoDiv);



//FUNCTION QUE LEVA O USUÁRIO DE VOLTA AO MENU AO PRESSIONAR O BOTÃO ⮝

document.getElementById("return").addEventListener("click", function(){
    const inicio = document.getElementById("menu");

    inicio.scrollIntoView({behavior:"smooth"})
});
  
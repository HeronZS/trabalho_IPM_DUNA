window.addEventListener("load", function() {
    const duna = document.querySelector(".duna");
    const setaBaixo = document.querySelector(".setaBaixo");
  
    duna.style.opacity = 1;
    setaBaixo.style.opacity = 1;
  });


  const audio = new Audio('music/dune-soundtrack.mp3');
  audio.loop = true;

  const botaoSom = document.querySelector('.botaoSom');
  const botaoMudo = document.querySelector('.botaoMudo');

  function ativarSom() {
    audio.play().then(() => {
      botaoSom.style.display = 'none';
      botaoMudo.style.display = 'inline';
    }).catch(error => {
      console.error("Erro ao tentar reproduzir o áudio:", error);
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
  



  document.getElementById("botao1").addEventListener("click", function(){
    const proxSection = document.getElementById("menu");

    proxSection.scrollIntoView({behavior:"smooth"})
});


document.getElementById("botao2").addEventListener("click", function(){
    const proxSection = document.getElementById("conteudo1");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botao3").addEventListener("click", function(){
    const proxSection = document.getElementById("conteudo2");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botao4").addEventListener("click", function(){
    const proxSection = document.getElementById("conteudo3");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botao5").addEventListener("click", function(){
    const proxSection = document.getElementById("conteudo4");

    proxSection.scrollIntoView({behavior:"smooth"})
});

document.getElementById("botao6").addEventListener("click", function(){
    const proxSection = document.getElementById("trailer");

    proxSection.scrollIntoView({behavior:"smooth"})
});




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




document.getElementById("return").addEventListener("click", function(){
    const inicio = document.getElementById("menu");

    inicio.scrollIntoView({behavior:"smooth"})
});
  
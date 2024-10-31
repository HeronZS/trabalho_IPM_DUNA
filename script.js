window.addEventListener("load", function() {
    const duna = document.querySelector(".duna");
    const setaBaixo = document.querySelector(".setaBaixo");
  
    duna.style.opacity = 1;
    setaBaixo.style.opacity = 1;
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
    if(document.getElementById('youtubeVideo')){
        alert('O trailer já está sendo exibido!')
        return
    }

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
  
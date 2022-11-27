var lastSearch = 0;
var contt = 0

function pesquisarNoticia() {
    const urlParams = new URLSearchParams(window.location.search);
    const noticia = urlParams.get('search');
    var lowCaseBook = noticia.toLowerCase();
    var newName = lowCaseBook.replace(/ /g, ",");
    var searchValue = newName.split(",");

    var display = [
        "display-pesquisa1","display-pesquisa2","display-pesquisa3","display-pesquisa4","display-pesquisa5","display-pesquisa6"
    ];

    for(let i = 0; i < lastSearch; i++) {
        var displayDiv =  "display: none";
        var setDisplay = document.getElementById(display[i]);
        setDisplay.setAttribute("style", displayDiv);
    }

    var noticiasBDD = []
    noticiasBDD.push(["o","suspeito","oj","simpson","suicídio"])
    noticiasBDD.push(["a","vitíma","as","vitímas","nicole","brown","simpson","ronald","lyle","goldman"])
    noticiasBDD.push(["o","assassinato","linha","do","tempo"])
    noticiasBDD.push(["a","prisão","linha","do","tempo"])
    noticiasBDD.push(["as","evidências","prova","cenário","do","crime"])
    noticiasBDD.push(["as","transcrições","do","julgamento","do","crime","linha","do","tempo"])

    function noticiaTente(input, info) {
        for(var i = 0; i < input.length; i++) {
            for(var j = 0; j < info.length; j++) {
                if((JSON.stringify(input[i])==JSON.stringify(info[j]))== true)
                    return true;
            }
        }
    return false;
    }
    

    var situacaoNoticia = [
        "","","","","","",""
    ]

    for(let i = 0; i < 6; i++) {
        situacaoNoticia[i] = noticiaTente(searchValue, noticiasBDD[i]);
    }
    
    
    for(let i = 0; i < 6; i++) {
        if(situacaoNoticia[i] == true) {
            contt++;
            lastSearch++;
        }
    }
    

    var img = [
        "img1","img2","img3","img4","img5","img6"
    ]
    var title = [
        "title1","title2","title3","title4","title5","title6"
    ]

    var link = [
        "link1","link2","link3","link4","link5","link6"
    ]

    for(let i = 0; i < contt; i++) {
        var displayDiv =  " ";
        var setDisplay = document.getElementById(display[i]);
        setDisplay.setAttribute("style", displayDiv);
    }

    for(let i = 0; i < contt; i++) {
        if(situacaoNoticia[0] == true) {
            var noticiaImg =  "/images/pesquisa/suspeito.jpg";
            var setImg = document.getElementById(img[i]);
            setImg.setAttribute("src", noticiaImg);

            document.getElementById(title[i]).innerHTML = "O suspeito"

            var noticiaLink = "o-suspeito.html";
            var setLink = document.getElementById(link[i]);
            setLink.setAttribute("href", noticiaLink);

            situacaoNoticia[0] = false;
        } else if(situacaoNoticia[1] == true) {
            var noticiaImg =  "/images/pesquisa/vitimas.jpg";
            var setImg = document.getElementById(img[i]);
            setImg.setAttribute("src", noticiaImg);

            document.getElementById(title[i]).innerHTML = "As vitímas"

            var noticiaLink = "as-vitimas.html";
            var setLink = document.getElementById(link[i]);
            setLink.setAttribute("href", noticiaLink);

            situacaoNoticia[1] = false;
        }else if(situacaoNoticia[2] == true) {
            var noticiaImg =  "/images/pesquisa/assassinato.jpg";
            var setImg = document.getElementById(img[i]);
            setImg.setAttribute("src", noticiaImg);

            document.getElementById(title[i]).innerHTML = "O assassinato"

            var noticiaLink = "o-assassinato.html";
            var setLink = document.getElementById(link[i]);
            setLink.setAttribute("href", noticiaLink);

            situacaoNoticia[2] = false;
        }else if(situacaoNoticia[3] == true) {
            var noticiaImg =  "/images/pesquisa/prisao.jpg";
            var setImg = document.getElementById(img[i]);
            setImg.setAttribute("src", noticiaImg);

            document.getElementById(title[i]).innerHTML = "A prisão"

            var noticiaLink = "a-prisao.html";
            var setLink = document.getElementById(link[i]);
            setLink.setAttribute("href", noticiaLink);

            bookSituation[3] = false;
        }else if(situacaoNoticia[4] == true) {
            var noticiaImg =  "/images/pesquisa/eviencias.jpg";
            var setImg = document.getElementById(img[i]);
            setImg.setAttribute("src", noticiaImg);

            document.getElementById(title[i]).innerHTML = "As evidências"

            var noticiaLink = "as-evidencias.html";
            var setLink = document.getElementById(link[i]);
            setLink.setAttribute("href", noticiaLink);

            situacaoNoticia[4] = false;
        }else if(situacaoNoticia[5] == true) {
            var noticiaImg =  "/images/pesquisa/transcricoes-julg.jpg";
            var setImg = document.getElementById(img[i]);
            setImg.setAttribute("src", noticiaImg);

            document.getElementById(title[i]).innerHTML = "As trancrições do julgamento"

            var noticiaLink = "as-transcricoes.html";
            var setLink = document.getElementById(link[i]);
            setLink.setAttribute("href", noticiaLink);

            situacaoNoticia[5] = false;
        }
    }
    if(contt == 0) {
        const nextURL = 'pagina-erro.html';
        window.location.href = nextURL;
        window.location.assign(nextURL);
        window.location.replace(nextURL);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    pesquisarNoticia();
});
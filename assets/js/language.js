
   window.onload = function () { 
    var language = navigator.language || navigator.userLanguage; 
  
   if (language === 'pt-BR'){
    document.getElementById("btn-1Energy").innerHTML = "-1 Energia";
    document.getElementById("btn+1Energy").innerHTML = "+1 Energia";
    document.getElementById("btn+1card").innerHTML = "+1 Carta";
    document.getElementById("nextround").innerHTML = "Prox Round";
    document.getElementById("cleartable").innerHTML = "Limpar Tabela";
    document.getElementById("newgame").innerHTML = "Novo Jogo";
    document.getElementById("navtracker").innerHTML = "Contador";
    document.getElementById("lastupdates").innerHTML = "Ultimas Noticias";
    document.getElementById("howto").innerHTML = "Como Usar";
    document.getElementById("colormode").innerHTML = "Modo Escuro";
    document.getElementById("howto").innerHTML = "Como Usar";
    document.getElementById("footer").innerHTML = "NÃO somos afiliados ao Axie Infinity. Este site é feito de um fã para outros.<br>Conside fazer uma doação de qualquer valor, será de grande ajuda.<br><br>ronin:f82274d481f041ff3f8632832524ce19073be51";
    document.getElementById("parts").innerHTML = "Partes";
    document.getElementById("first").innerHTML = "1º Aparição";
    document.getElementById("second").innerHTML = "2º Aparição";

    return ;
   }else{
       return ;
   }
}
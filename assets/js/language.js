
function getLanguage(){
   const language = navigator.language;
    console.log(language);
   switch(language){
    case 'pt-BR': window.location.href = "indexpt-br.html";
    break;
    case 'en-US': window.location.href = "index.html";
    break;
    default :  window.location.href = "index.html";
    break;
   }
   
}
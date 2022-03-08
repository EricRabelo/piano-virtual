const teclas = document.querySelectorAll("div[data-tecla]");

teclas.forEach((tecla) => {
  tecla.addEventListener("click", () => playAudio(tecla));

});

document.body.addEventListener('keypress', function (event) {
 
  const key = event.key;
  console.log(key);

  var inicio = "./notas/";
  var nota;
  var extensao = ".mp3";

  if(key == 'a') { 
    nota = "C";
    teclas[0].classList.add("activeb");

  } else if(key == 'w') {
    nota = "Db";
    teclas[1].classList.add("activep");

  } else if(key == 's') {
    nota = "D";
    teclas[2].classList.add("activeb");

  } else if(key == 'e') {
    nota = "Eb";
    teclas[3].classList.add("activep");

  } else if(key == 'd') {
    nota = "E";
    teclas[4].classList.add("activeb");

  } else if(key == 'f') {
    nota = "F";
    teclas[5].classList.add("activeb");

  } else if(key == 't') {
    nota = "Gb";
    teclas[6].classList.add("activep");

  } else if(key == 'g') {
    nota = "G";
    teclas[7].classList.add("activeb");

  } else if(key == 'y') {
    nota = "Ab";
    teclas[8].classList.add("activep");

  } else if(key == 'h') {
    nota = "A";
    teclas[9].classList.add("activeb");

  } else if(key == 'u') {
    nota = "Bb";
    teclas[10].classList.add("activep");

  } else if(key == 'j') {
    nota = "B";
    teclas[11].classList.add("activeb");

  } else if(key == 'k') {
    nota = "C2";
    teclas[12].classList.add("activeb");

  }   


  var audio = new Audio(inicio+nota+extensao);
  audio.play();
   
 
});

document.body.addEventListener('keyup', function (event) {
  const key = event.key;

  if(key == 'a') { //a
    teclas[0].classList.remove("activeb");

  } else if(key == 'w') {
    teclas[1].classList.remove("activep");

  } else if(key == 's') {
    teclas[2].classList.remove("activeb");

  } else if(key == 'e') {
    teclas[3].classList.remove("activep");

  } else if(key == 'd') {
    teclas[4].classList.remove("activeb");

  } else if(key == 'f') {
    teclas[5].classList.remove("activeb");

  } else if(key == 't') {
    teclas[6].classList.remove("activep");

  } else if(key == 'g') {
    teclas[7].classList.remove("activeb");

  } else if(key == 'y') {
    teclas[8].classList.remove("activep");

  } else if(key == 'h') {
    teclas[9].classList.remove("activeb");

  } else if(key == 'u') {
    teclas[10].classList.remove("activep");

  } else if(key == 'j') {
    teclas[11].classList.remove("activeb");

  } else if(key == 'k') {
    teclas[12].classList.remove("activeb");

  }   
});

function playAudio(tecla) {
  const audio = document.getElementById(tecla.dataset.tecla);
  audio.currentTime = 0;
  audio.play();
}

function animacionTitulo() {
  var titulo = document.querySelector(".titulo");
  var mostrar = document.getElementById("mostrar");
  mostrar.classList.replace("titulo", "titulo2");
  titulo.style.textAlign = "center";
  titulo.style.fontFamily = "'Caveat', cursive";
  titulo.style.fontSize = "40px";
  titulo.style.position = "absolute";
  titulo.style.top = "100%";
  titulo.style.animation = "moveUp 5s ease-in-out forwards";
  titulo.style.opacity = "0";
  titulo.style.transition = "opacity 0.3s ease";

  // Definición de la animación
  var keyframes = [
    { top: "50%", opacity: "0" },
    { top: "50%", opacity: "1" },
    { top: "5%", opacity: "1" }
  ];

  var animationOptions = {
    duration: 10000,
    easing: "ease-in-out",
    fill: "forwards"
  };

  var moveUpAnimation = titulo.animate(keyframes, animationOptions);
}


function mostrarCarta() {
  var carta = document.querySelector(".carta");
  var mostrarDos = document.getElementById("mostrarDos");
  mostrarDos.classList.replace("carta", "carta2");
  carta.style.fontSize = "13px";
  carta.style.marginTop = "25%";
  carta.style.padding = "20px";
  carta.style.letterSpacing = "1.3px";
  carta.style.textAlign = "center";

  var textoRecortado = document.querySelector(".carta2");
  textoRecortado.style.backgroundImage = "linear-gradient(to right, #000000, #000000)";
  textoRecortado.style.webkitBackgroundClip = "text";
  textoRecortado.style.color = "transparent";
  textoRecortado.style.webkitTextFillColor = "transparent";
 // textoRecortado.style.clipPath = "inset(0 0 50% 0)";
  
  var keyframes = [
    { clipPath: "inset(0 0 100% 0)" },
    { clipPath: "inset(0 0 0% 0)" }
  ];

  // Crear la animación utilizando los keyframes
  var animation = carta.animate(keyframes, {
    duration: 60000, // Duración de la animación en milisegundos
    iterations: 1, // Número de repeticiones (1 para una sola vez)
    easing: 'ease-in-out' // Tipo de aceleración de la animación
  });

  // Iniciar la animación
  animation.play();

}

function reproducirMusica() {
  var audio = document.getElementById('myAudio');
  audio.play();
}

// Overlay principal Regalo //
window.onload = function() {
    var overlay = document.getElementById("overlay");
    var mainContent = document.getElementById("main");
    var body = document.querySelector("body");
  
    overlay.addEventListener("click", function() {
      overlay.style.opacity = "0";
      setTimeout(function() {
        overlay.style.display = "none";
        mainContent.classList.replace("hidden", "hidden2");
        body.style.backgroundImage = "url(img/Sprinkle.svg)";
      
        animacionTitulo();
        mostrarCarta();
        reproducirMusica();

      }, 1000); // Ajusta el tiempo de espera (en milisegundos) según tus necesidades
    });
  };
  
  
  
  

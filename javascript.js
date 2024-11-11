// JavaScript Document
function MiFuncion() {
       // aquí se define el ID del elemento que va a tomar la clase
     var x = document.getElementById("navegador");
     if (x.className === " ") {
         // esta es la clase que se agrega al elemento con eo id="navegador"
       x.className += "responsive";
     } else {
       x.className = " ";
     }
	
	window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('barrafija');
        } else {
            header.classList.remove('barrafija');
        }
    });
   }

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}
function mostrarMensaje(event) {
    event.preventDefault(); // Evita que el formulario se envíe de inmediato
    document.getElementById('mensajeGracias').style.display = 'block';}

<script type="text/javascript">
    const diapositivas = document.querySelectorAll('.diapositiva');
    let diapositivaActual = 0;
    const tiempoTransicion = 10000; // Tiempo en milisegundos entre diapositivas
 
    function cambiarDiapositiva(n) {
      diapositivas[diapositivaActual].classList.remove('activa');
      diapositivaActual = (diapositivaActual + n + diapositivas.length) % diapositivas.length;
      diapositivas[diapositivaActual].classList.add('activa');
    }
 
    const botonAnterior = document.getElementById('anterior');
    botonAnterior.addEventListener('click', () => {
      cambiarDiapositiva(-1);
    });
 
    const botonSiguiente = document.getElementById('siguiente');
    botonSiguiente.addEventListener('click', () => {
      cambiarDiapositiva(1);
    });
 
    // Temporizador automático
    setInterval(() => {
      cambiarDiapositiva(1);
    }, tiempoTransicion);
</script>

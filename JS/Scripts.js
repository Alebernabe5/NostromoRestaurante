
function modalBienvenida() {
	document.getElementById("modalBienvenida").style.display="block";
	document.getElementById("tituloEncabezado").style.animationPlayState ="paused";
	document.getElementById("subtituloEncabezado").style.animationPlayState ="paused";
	document.documentElement.style.overflow="hidden";
}

function cerrarMBB(){
	document.getElementById("modalBienvenida").style.display="none";
	document.getElementById("tituloEncabezado").style.animationPlayState ="running";
	document.getElementById("subtituloEncabezado").style.animationPlayState ="running";
	document.documentElement.style.overflowY="auto";
	setInterval(slideshowAnim,3000);

}


// aquí empieza el código del slideshow automático

var bgCounter=0;
function heroSlideshow() {

	var listaImgBg = [
		"url('Media/Hero01.jpg')",
		"url('Media/Hero02.jpg')",
		"url('Media/Hero03.jpg')"
	];

	bgCounter++;

	if (bgCounter== listaImgBg.length){
		bgCounter = 0;
	}

	document.getElementById("encabezado").style.backgroundImage  = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," + listaImgBg[bgCounter];

}

// aquí empieza el código del slideshow automático con animación
	
	var counterNext =0;
	var counterMain =0;

	function slideshowAnim(){

		var listaImBgAnim = document.getElementsByClassName("fondosHero");
		counterNext++;
		counterMain = counterNext-1;

		if(counterNext == listaImBgAnim.length) {

			counterNext = 0;
		}

		if (counterMain <0){
			counterMain= listaImBgAnim.length-1;
		}

		for (var i=0; i<listaImBgAnim.length; i++) {

			listaImBgAnim[i].classList.remove("nextSlide");
			listaImBgAnim[i].classList.remove("mainSlide");
			listaImBgAnim[i].classList.remove("hiddenSlide");


			if(i==counterNext){
				listaImBgAnim[i].classList.add("nextSlide");
			}

			else if (i == counterMain ){
				listaImBgAnim[i].classList.add("mainSlide");
			}

			else{
				listaImBgAnim[i].classList.add("hiddenSlide");
			}
		}


	}





// aquí empieza el código del modal de reserva



function modalReserva() {
	document.getElementById("modalReserva").style.display="block";
	document.documentElement.style.overflow="hidden";

	var nombre = document.getElementById("formNombre").value;
	var numero = document.getElementById("formNumero").value;
	var fecha = document.getElementById("formFecha").value;
	var correo = document.getElementById("formCorreo").value;


	var mensaje;



	(function formCheck(){
		if(!document.getElementById("formNombre").checkValidity()){
			mensaje ="Introduce un nombre correcto.";
			document.getElementById("mensajeReserva").innerHTML = mensaje;
		}

			else if (!document.getElementById("formNumero").checkValidity()){
				mensaje ="Introduce un número correcto.";
				document.getElementById("mensajeReserva").innerHTML = mensaje;
			}

				else if (!document.getElementById("formFecha").checkValidity()){
				mensaje ="Introduce una fecha correcta.";
				document.getElementById("mensajeReserva").innerHTML = mensaje;
				}

					else if (!document.getElementById("formCorreo").checkValidity()){
					mensaje ="Introduce una dirección correcta.";
					document.getElementById("mensajeReserva").innerHTML = mensaje;
					}

					else {

						mensaje = "Apreciado/a " + nombre +", le confirmamos que se ha realizado la reserva para " + numero + " personas en el dia " + fecha + ". Recibirá un correo de confirmación en la dirección: " + correo+ ".";

						document.getElementById("mensajeReserva").innerHTML = mensaje;
					}

	})();



}

function cerrarMBR(){
	document.getElementById("modalReserva").style.display="none";
	document.documentElement.style.overflowY="auto";

	document.getElementById("formNombre").value ="";
	document.getElementById("formNumero").value ="";
	document.getElementById("formFecha").value ="";
	document.getElementById("formCorreo").value ="";

}

// aquí empieza el código para el menú

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu() {

	var posActualScroll = document.documentElement.scrollTop;

	if (posPreviaScroll>posActualScroll) {
		// cuando estamos subiendo mostramos el menú
		document.getElementById("navbar").style.top ="0";

		if (posActualScroll>200) {
			document.getElementById("navbar").style.height ="50px";
			document.getElementById("navbar").style.fontSize ="1.75rem";
			document.getElementById("menu").style.lineHeight ="50px";
			document.getElementById("submenu").style.top="50px";
			document.getElementById("logo").style.padding="0px";
		}

		else {
			document.getElementById("navbar").style.height ="150px";
			document.getElementById("navbar").style.fontSize ="2rem";
			document.getElementById("menu").style.lineHeight ="150px";
			document.getElementById("submenu").style.top="100px";
			document.getElementById("logo").style.padding="23px";
		}
 
	}
	else {
		// cuando estamos bajando escondemos el menú

		if (posActualScroll<200) {
			document.getElementById("navbar").style.height ="50px";
			document.getElementById("navbar").style.fontSize ="1.75rem";
			document.getElementById("menu").style.lineHeight ="50px";
			document.getElementById("submenu").style.top="50px";
			document.getElementById("logo").style.padding="0px";
		}

		else {
		document.getElementById("navbar").style.top ="-150px";

		}
	}

	posPreviaScroll = posActualScroll;

}


// aquí empieza el código de la carta

function marcarPestana(contenedorAMostrar, tabClicada){

	var listaConPestanas = document.getElementsByClassName("contenedorPestana");

	for (var i=0; i<listaConPestanas.length; i++){
		listaConPestanas[i].style.display="none";
	}

	document.getElementById(contenedorAMostrar).style.display="block";


	var tabLinks= document.getElementsByClassName("etiquetaPestanas");
	for (var i=0; i<tabLinks.length; i++){
		tabLinks[i].classList.remove("pestanaActiva");
	}

	document.getElementById(tabClicada).classList.add("pestanaActiva");


	var platos= document.getElementsByClassName("plato");
	for (var i=0; i<platos.length; i++){
		platos[i].classList.remove("platoAnimado");
	}

	var platosC = document.getElementById(contenedorAMostrar).children;

	for (var i=0; i<platosC.length; i++){
		platosC[i].classList.add("platoAnimado");
	}


}




// Aquí empieza el código del lightbox

// function modalLightboxG(){
// 	document.getElementById("modalLightboxG").style.display = "block";
// 	document.documentElement.style.overflow = 'hidden';

// 	var listaImgGal = document.getElementsByClassName("imgGal");

// 	for (var i=0; i<listaImgGal.length; i++ ) {

// 		listaRutaImgGal.push(listaImgGal[i].src);
// 	}
// 	// console.log(listaRutaImgGal);



// 	document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src='Media/G01.jpg'>";
// }


var listaRutaImgGal = [];
var numeroIMG =0;


function readyLightbox() {

	var listaImgGal = document.getElementsByClassName("imgGal");

	for (var i=0; i<listaImgGal.length; i++ ) {

		listaRutaImgGal.push(listaImgGal[i].src);
	}



	for (var i= 0; i<listaImgGal.length; i++) {
		listaImgGal[i].addEventListener('click', openLightbox);
	}

	function openLightbox(){

		var rutaImgClicada = event.currentTarget.src;
		numeroIMG = listaRutaImgGal.indexOf(rutaImgClicada);
		// console.log(temp);
		document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src=" + listaRutaImgGal[numeroIMG]+">";
		document.getElementById("modalLightboxG").style.display = "block";
		document.documentElement.style.overflow = 'hidden';
		closeLightbox();
	}

	function closeLightbox(){

		window.addEventListener("click", function(event) {

			if (!event.target.matches(".imageLightbox") && !event.target.matches(".imgGal") && !event.target.matches(".lbButtons") && !event.target.matches(".fas")      ){
				// console.log("Se puede cerrar");
				document.getElementById("modalLightboxG").style.display = "none";
				document.documentElement.style.overflowY = 'auto';
			}
		});
	}


}


function nextImgGal() {

	numeroIMG++;

	if (numeroIMG ==listaRutaImgGal.length) {
		numeroIMG = 0;
	}

	document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src=" + listaRutaImgGal[numeroIMG]+">";
	// console.log(numeroIMG);
}

function prevImgGal() {

	numeroIMG--;

	if (numeroIMG < 0) {
		numeroIMG = listaRutaImgGal.length-1;
	}

	document.getElementById("imageToShow").innerHTML = "<img class='imageLightbox' src=" + listaRutaImgGal[numeroIMG]+">";
	// console.log(numeroIMG);
}
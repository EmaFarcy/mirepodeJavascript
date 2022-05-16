//let precioS_Works= 950000;

//let descuento=  0;

//let precioFinal=0;  

  
//function promocion(){
//  let codPromocion= parseInt(prompt("Ingresa un código de descuento para tu próxima S-works o 0 para terminar : "
//  	+ "\na) Presiona 1 si tu tarjeta promo dice Sworks Live!"
//  	+ "\nb) Presiona 2 si tu tarjeta promo dice Sworks Still Rock!"
//  	+ "\nc) Presiona 3 si tu tarjeta promo dice I want my Sworks!"
//  	));
//  while (codPromocion != 0) {
//  	switch (codPromocion) {
//  		case 1:
//  		descuento= 10000;
//  		break;

//  		case 2:
//  		descuento= 5000;
//  		break;

//  		case 3:
//  		descuento= 3000;
//  		break;

//  		default:
//        console.log("No ha introducido código promocional, o es erróneo");
//        break;
//    }
//  precioFinal = precioS_Works - descuento;
//  console.log("El precio final de tu S-Works es de: " + precioFinal + " pesos");
//  codPromocion= parseInt(prompt("Ingresa un código de descuento para tu próxima S-works o 0 para terminar: "
//  	+ "\na) Presiona 1 si tu tarjeta promo dice Sworks Live!"
//  	+ "\nb) Presiona 2 si tu tarjeta promo dice Sworks Still Rock!"
//  	+ "\nc) Presiona 3 si tu tarjeta promo dice I want my Sworks!"
//  	));
//  }
// }

//promocion();

let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText = ()=> {
  hideText.classList.toggle('show');

  if (hideText.classList.contains('show')){
    hideText_btn.innerHTML="Read Less";
  }else{
    hideText_btn.innerHTML="Read More";
  }
}
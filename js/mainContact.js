const contactForm= document.querySelector("#contact");

contactForm.addEventListener("submit", function(evento) {

	const valorDelUsername = contactForm.username.value;
	const valorDelSurname= contactForm.surname.value;
	const valorDelCorreo = contactForm.correo.value;


	valorDelUsername ==="" ||  valorDelCorreo ==="" || valorDelSurname ==="" ? evento.preventDefault(Swal.fire({text: "neither the email address nor the name nor the surname can be left empty", icon: "error"})): Swal.fire({icon: "success", timer: 30000, showConfirmButton: false})  
})

	/*if (valorDelUsername==="" ||  valorDelCorreo ==="" || valorDelSurname==="") {
		evento.preventDefault();
		alert("neither the email address nor the name nor the surname can be left empty");
	}*/	


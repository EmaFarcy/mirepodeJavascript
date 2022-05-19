const form= document.querySelector("#contactForm")

if (form){
form.addEventListener("submit", function(event){
	event.preventDefault();

	const valueOfUsername= form.username.value;
	if (valueOfUsername===''|| valueMail===''){
		event.preventDefault();
		alert("neither the email address nor the name can be left empty")
	}
})
}
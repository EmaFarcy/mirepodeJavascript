$(document).ready(function(){
    $('#box-form').submit(function(){
        const txt_user = $('#txt-user').val();
        const txt_password = $('#txt-password').val();

        //Ahora almaceno los valores en localStorage//
        localStorage.setItem('usuario',txt_user);
        localStorage.setItem('password',txt_password);
    });

    const txt_user = localStorage.getItem('usuario');
    const txt_password =localStorage.getItem('password');

    if(txt_user != null && txt_user != 'undefined'){
        //llamamos al documento sesion.html
        window.location = '../pages/sesion.html';
    }
});

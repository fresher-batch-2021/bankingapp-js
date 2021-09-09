// Getting value from Register form by using Id

function store() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('pswd').value;

    localStorage.setItem('registeremail', email);
    localStorage.setItem('registerpassword', password);

    window.location.href = "login.html";

}
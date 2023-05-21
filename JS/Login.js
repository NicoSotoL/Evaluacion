function validateLoginForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (email == "") {
      alert("Por favor ingresa tu correo electrónico");
      return false;
    }

    if (password == "") {
      alert("Por favor ingresa tu contraseña");
      return false;
    }
    var passwordRegex = /^(?=.\d)(?=.[!@#$%^&()_+-=[]{};':"\|,.<>/?])[a-zA-Z0-9!@#$%^&()_+-=[]{};':"\|,.<>/?]+$/;
if (!passwordRegex.test(password)) {
  alert("La contraseña debe contener al menos un número y un carácter especial");
  return false;
}

window.location.href = "Index.html";

return true;
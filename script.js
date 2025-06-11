function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const USER = "jordy";
  const PASS = "1234";

  if (user === USER && pass === PASS) {
    // Ocultar formulario de login
    document.getElementById('loginForm').style.display = 'none';

    // Mostrar pantalla de bienvenida
    document.getElementById('welcomeScreen').style.display = 'block';
    document.getElementById('welcomeMessage').textContent = `¡Bienvenido, ${user}!`;
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').textContent = 'Usuario o contraseña incorrectos.';
  }
}

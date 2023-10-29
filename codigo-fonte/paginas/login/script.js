/**
 * Verifica o login do usuário, loga e redireciona o usuário.
 */
function verifyLoginHandler() {
  const loginButton = document.querySelector('.registerButton');
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    redirectTo('../perfil/');
  });
}

verifyLoginHandler()

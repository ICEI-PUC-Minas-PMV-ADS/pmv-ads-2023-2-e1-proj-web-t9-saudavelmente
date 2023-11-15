/**
 * Verifica o login do usuário, loga e redireciona o usuário.
 */
function verifyLoginHandler() {
  const formElement = document.getElementById('login-form');
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formElement = event.target;
    const formData = new FormData(formElement);
    const email = formData.get('user-email');
    const password = formData.get('user-password');
    const isUserAuthenticated = Auth.checkLogin(email, password);
    if (!isUserAuthenticated) {
      alert('Verifique suas credenciais e tente novamente!');
    } else {
      Auth.login();
      redirectTo('../perfil/');
    }
  });
}

verifyLoginHandler()

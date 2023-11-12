/**
 * Classe global para lidar com a "autenticação" do sistema.
 */
class Auth {
  static register(userObj) {
    const { password, ...userData } = userObj;
    const hashedPassword = encodePassword(password);
    const newUser = { ...userData, hashedPassword };
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('registered', '1');
  }

  static isRegistered() {
    return localStorage.getItem('registered') === '1';
  }

  static login() {
    localStorage.setItem('logged', '1')
  }

  static logout() {
    localStorage.removeItem('logged')
  }

  static isLogged() {
    return localStorage.getItem('logged') === '1';
  }

  static checkLogin(email, password) {
    if (!Auth.isRegistered()) {
      return false;
    }
    const userObj = JSON.parse(localStorage.getItem('user'));
    return email == userObj.email && password == decodePassword(userObj.hashedPassword)
  }
}

/**
 * Redireciona para a página do caminho especificado.
 * 
 * @param {string} destinationPath caminho relativo da página para o qual será redirectionado. 
 */
function redirectTo(destinationPath) {
  location.replace(destinationPath);
}

/**
 * Codifica a senha passada.
 * 
 * @param {string} plainPassword senha para ser codificada.
 * @returns {string} a senha codificada.
 */
function encodePassword(plainPassword) {
  return btoa(plainPassword);
}

/**
 * Decodifica a senha passada.
 * 
 * @param {string} encodedPassword senha codificada para ser decodificada.
 * @returns {string} a senha decodificada.
 */
function decodePassword(encodedPassword) {
  return atob(encodedPassword);
}

/**
 * Condição de guarda para páginas e ações que necessitem que o usuário esteja logado
 * para acessar ou realizar a ação.
 */
function authGuard() {
  if (!Auth.isLogged() && !Auth.isRegistered()) {
    redirectTo('../cadastro/');
    return;
  }
  redirectTo('../login/');
}

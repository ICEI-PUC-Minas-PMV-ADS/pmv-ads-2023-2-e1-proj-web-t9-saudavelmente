/**
 * Lida com os eventos de logout na página de perfil.
 * Desloga o usuário e redireciona para a página inicial.
 * Apenas para usuários logados.
 */
function handleProfileLogout() {
  if (Auth.isLogged()) {
    document.getElementById('auth-profile-logout').addEventListener('click', () => {
      Auth.logout();
      redirectTo('../pagina-inicial/');
    });
  }
}

authGuard();
changePageHeader();
handleLogout();
handleProfileLogout();

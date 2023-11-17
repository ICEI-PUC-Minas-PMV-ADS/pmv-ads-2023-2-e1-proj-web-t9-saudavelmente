function changeLinkToProfile() {
  if (Auth.isLogged()) {
    document.getElementById('chat-redirect').href = '../perfil/';
  }
}

changeLinkToProfile();
changePageHeader();
handleLogout();

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

/**
 * Formata a data e horário da última consulta, caso não seja null. 
 * 
 * @param {Date | null} lastConsultationTime data e horário da última consulta
 * @returns {String} a data formatada ou uma mensagem caso lastConsultationTime seja null
 */
function getLastConsultationTime(lastConsultationTime) {
  if (!lastConsultationTime) {
    return 'Você ainda não iniciou uma consulta';
  } else {
    return lastConsultationTime.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}

/**
 * Retorna o caminho relativo completo da imagem do profissional.
 * 
 * @param {String} professionalImage nome da imagem do profissional
 * @returns {String} o caminho relativo completo da imagem do profissional
 */
function getProfessionalImagePath(professionalImage) {
  return `../profissionais/imagens/${professionalImage}`;
}

/**
 * Lida com o evento de clicar em iniciar a consulta.
 * 
 * @param {Event} event evento do clique do botão de iniciar consulta
 */
function handleStartConsultation(event) {
  // Lógica aqui.
  console.log('test');
}


/**
 * Lida com o evento de clicar em cancelar a consulta.
 * 
 * @param {Event} event evento do clique do botão de cancelar consulta
 */
function handleCancelConsultation(event) {
  // Lógica aqui.
  console.log('test');
}

/**
 * Carrega as consultas e lida com todos os eventos
 * relacionados às consultas.
 */
function handleLoadConsultations() {
  const userConsultations = localStorage.getItem('consultations');
  const consultationsWrapper = document.getElementById('user-consultations');
  const consultationsPagination = document.getElementById('consutations-pagination');
  if (!userConsultations) {
    consultationsPagination.style.display = 'none';
    consultationsWrapper.innerHTML += `
      <div class="alert alert-light" role="alert">
        Você ainda não possui consultas, você poderá adiciona consultas na <a href="../profissionais/">área dos profissionais</a>!
      </div>
    `;
  } else {
    consultationsPagination.style.display = 'block';
    const consultations = JSON.parse(userConsultations);
    consultations.forEach((consultation) => {
      consultationsWrapper.innerHTML += `
        <div class="card mb-3" id="${consultation.id}">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${getProfessionalImagePath(consultation.professionalImage)}" class="img-fluid rounded-start consultation-card-image"
                alt="Imagem do profissional ${consultation.professionalName}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${consultation.professionalName}</h5>
                <p class="card-text">Àrea de Atuação: <span class="fw-bold">${consultation.professionalArea}</span></p>
                <p class="card-text">
                  <small class="text-body-secondary">Último contato: <span class="fw-bold">${getLastConsultationTime(consultation.lastConsultationTime)}</span></small>
                </p>
                <div
                  class="card-footer d-flex justify-content-center justify-content-sm-evenly gap-2 flex-wrap">
                  <button type="button" class="btn btn-primary" onclick="handleStartConsultation()">
                    Iniciar Consulta <span class="bi bi-box-arrow-up-right"></span>
                  </button>
                  <button type="button" class="btn btn-outline-primary" onclick="handleCancelConsultation()">
                    Cancelar Consulta <span class="bi bi-x-square-fill"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
}

authGuard();
changePageHeader();
handleLogout();
handleProfileLogout();
handleLoadConsultations();

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
 * @param {String | null} lastConsultationTime data e horário da última consulta
 * @returns {String} a data formatada ou uma mensagem caso lastConsultationTime seja null
 */
function getLastConsultationTime(lastConsultationTime) {
  if (!lastConsultationTime) {
    return 'Você ainda não iniciou uma consulta';
  } else {
    return new Date(lastConsultationTime).toLocaleString('pt-BR', {
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
 * Lida com o evento de clicar em iniciar a consulta.
 * 
 * @param {Event} event evento do clique do botão de iniciar consulta
 */
function handleStartConsultation(event) {
  const startButton = event.target;
  const cardElement = startButton.parentElement.parentElement.parentElement.parentElement.parentElement;
  const consultationId = cardElement.id;
  const consultations = JSON.parse(localStorage.getItem('consultations'));
  const currentConsultationIndex = consultations.findIndex((consultation) => consultation.id === consultationId);
  const consultation = consultations[currentConsultationIndex];
  consultation.lastConsultationTime = new Date();
  consultations[currentConsultationIndex] = consultation;
  localStorage.setItem('consultations', JSON.stringify(consultations));
  localStorage.setItem('currentConsultation', JSON.stringify(consultation));
  redirectTo('../chat/');
}


/**
 * Lida com o evento de clicar em cancelar a consulta.
 * 
 * @param {Event} event evento do clique do botão de cancelar consulta
 */
function handleCancelConsultation(event) {
  const cancelButton = event.target;
  const cardElement = cancelButton.parentElement.parentElement.parentElement.parentElement.parentElement;
  const consultationId = cardElement.id;
  const consultations = JSON.parse(localStorage.getItem('consultations'));
  const currentConsultationIndex = consultations.findIndex((consultation) => consultation.id === consultationId);
  const consultation = consultations[currentConsultationIndex];
  const cancelConsultationConfirm = confirm(`Você realmente gostaria de remover a sua consulta com ${consultation.professionalName}?`);
  if (cancelConsultationConfirm) {
    const consultationsWrapper = document.getElementById('user-consultations');
    const consultationsPagination = document.getElementById('consutations-pagination');
    consultations.splice(currentConsultationIndex, 1);
    consultationsWrapper.removeChild(cardElement);
    localStorage.setItem('consultations', JSON.stringify(consultations));
    if (consultations.length === 0) {
      consultationsPagination.style.display = 'none';
      consultationsWrapper.innerHTML += `
        <div class="alert alert-light" role="alert">
          Você ainda não possui consultas, você poderá adicionar consultas na <a href="../profissionais/">área dos profissionais</a>!
        </div>
      `;
    }
    alert('Consulta cancelada com sucesso!');
  }
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
        Você ainda não possui consultas, você poderá adicionar consultas na <a href="../profissionais/">área dos profissionais</a>!
      </div>
    `;
  } else {
    const consultations = JSON.parse(userConsultations);
    if (consultations.length === 0) {
      consultationsPagination.style.display = 'none';
      consultationsWrapper.innerHTML += `
        <div class="alert alert-light" role="alert">
          Você ainda não possui consultas, você poderá adicionar consultas na <a href="../profissionais/">área dos profissionais</a>!
        </div>
      `;
    } else {
      consultationsPagination.style.display = 'block';
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
                    <button type="button" class="btn btn-primary" onclick="handleStartConsultation(event)">
                      Iniciar Consulta <span class="bi bi-box-arrow-up-right"></span>
                    </button>
                    <button type="button" class="btn btn-outline-primary" onclick="handleCancelConsultation(event)">
                      Cancelar Consulta <span class="bi bi-x-square-fill"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    };
  }
}

/**
 * Retorna a idade baseando-se na data passada.
 * 
 * @param {String} dateString data no formato ISO 
 * @returns {Number} idade
 */
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

/**
 * Formata o CPF passado borrando os últimos números.
 * 
 * @param {String} cpf cpf passado com 11 números
 * @returns {String} cpf formatado com pontuações e últimos números borrados
 */
function formattedCpf(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\*\*\*\-\*\*');
}

/**
 * Formata o número de telefone.
 * 
 * @param {String} cellPhoneNumber número de telefone com DDD
 * @returns {String} número de telefone formatado com pontuações
 */
function formattedCellPhoneNumber(cellPhoneNumber) {
  return cellPhoneNumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
}

/**
 * Faz o parse das informações que serão exibidas em "Suas informações"
 * na página de perfil do usuário.
 * 
 * @param {Object} userInfo objeto representando as informações armazenadas no localStorage do usuário 
 * @returns {Object} objeto com informações já formatadas para serem exibidas do usuário
 */
function parseUserInfo(userInfo) {
  const professionalAreaMap = {
    psicologiaGeral: 'Psicologia Geral',
    psiquiatriaGeral: 'Psiquiatria Geral',
    terapiaCongnitivoComportamental: 'Terapia Cognitivo-Comportamental',
    psicologiaClinica: 'Psicologia Clínica',
    psicologiaInfantil: 'Psicologia Infantil',
  }
  const parsedUserInfo = {
    fullName: userInfo.name,
    email: userInfo.email,
    cellPhoneNumber: formattedCellPhoneNumber(userInfo.tel),
    age: getAge(userInfo.date),
  };
  if (userInfo.profissionalSaude) {
    parsedUserInfo['cpf'] = formattedCpf(userInfo.cpf);
    parsedUserInfo['professionalArea'] = professionalAreaMap[userInfo.areaAtuacao];
  }
  return parsedUserInfo;
}

/**
 * Carrega as informações do usuário e exibe no elemento passado.
 * 
 * @param {Object} parsedUserInfo objeto com informações já formatadas para serem exibidas do usuário
 * @param {Element} userInfoWrapper elemento wrapper que serão exibidas as informações do usuário
 */
function loadUserInfo(parsedUserInfo, userInfoWrapper) {
  const fieldsMap = {
    fullName: 'Nome Completo',
    email: 'E-mail',
    cellPhoneNumber: 'Celular',
    age: 'Idade',
    cpf: 'CPF',
    professionalArea: 'Área de Atuação',
  };
  const userInfoEntries = Object.entries(parsedUserInfo);
  userInfoEntries.forEach(([key, value], index) => {
    const addHr = index !== (userInfoEntries.length - 1) ? '<hr>' : '';
    userInfoWrapper.innerHTML += `
      <div class="row">
        <div class="col-sm-6">
          <p class="mb-0">${fieldsMap[key]}</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0">${value}</p>
        </div>
      </div>
      ${addHr}
    `;
  });
}

/**
 * Retorna o primeiro nome do usuário.
 * 
 * @param {String} fullName nome completo do usuário 
 * @returns {String} primeiro nome do usuário
 */
function getUserFirstName(fullName) {
  const firstName = fullName.split(' ')[0];
  return firstName.at(0).toUpperCase() + firstName.slice(1).toLowerCase();
}

/**
 * Faz o parse das informações restantes do usuário,
 * como a imagem e o primeiro nome para serem exibidos
 * no perfil.
 * 
 * @param {Object} userInfo objeto representando as informações armazenadas no localStorage do usuário 
 * @returns {Object} objeto com informações já formatadas para serem exibidas do usuário
 */
function parseUserImageAndFirstName(userInfo) {
  return {
    imageUrl: userInfo.urlProfilePhoto,
    firstName: getUserFirstName(userInfo.name),
  }
}

/**
 * Carrega as informações do usuário e exibe no elemento passado.
 * 
 * @param {Object} parsedUserInfo objeto com informações já formatadas para serem exibidas do usuário
 * @param {Element} userImageAndFirstNameWrapper elemento wrapper que serão exibidas as informações do usuário
 */
function loadUserImageAndFirstName(parsedUserImageAndFirstName, userImageAndFirstNameWrapper) {
  userImageAndFirstNameWrapper.innerHTML += `
    <img src="${parsedUserImageAndFirstName.imageUrl}" alt="Imagem de perfil de ${parsedUserImageAndFirstName.firstName}"
      class="rounded-circle img-fluid img-thumbnail" style="width: 150px;">
    <h5 class="my-3">Olá, ${parsedUserImageAndFirstName.firstName}!</h5>
  `;
}

/**
 * Lida com o carregamento das informações do usuário logado na página de perfil.
 */
function handleLoadUserInfo() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const parsedUserInfo = parseUserInfo(userInfo);
  const parsedUserImageAndFirstName = parseUserImageAndFirstName(userInfo);
  const userInfoWrapper = document.getElementById('user-info');
  const userImageAndFirstNameWrapper = document.getElementById('user-image-firstname');
  loadUserInfo(parsedUserInfo, userInfoWrapper);
  loadUserImageAndFirstName(parsedUserImageAndFirstName, userImageAndFirstNameWrapper);
}

function handleLoadUserInfoOnEditForm() {
  const editInfoButton = document.getElementById('edit-info-button');
  const userInfo = JSON.parse(localStorage.getItem('user'));
  editInfoButton.addEventListener('click', () => {
    if (userInfo.profissionalSaude) {
      document.getElementById('cpf').value = userInfo.cpf;
      document.getElementById('professional-area').value = userInfo.areaAtuacao;
    } else {
      document.getElementById('cpf').parentElement.style.display = 'none';
      document.getElementById('professional-area').parentElement.style.display = 'none';
    }
    document.getElementById('full-name').value = userInfo.name;
    document.getElementById('photo-url').value = userInfo.urlProfilePhoto;
    document.getElementById('email').value = userInfo.email;
    document.getElementById('birth-date').value = userInfo.date;
    document.getElementById('cell-phone').value = userInfo.tel;
  });
}

authGuard();
changePageHeader();
handleLogout();
handleProfileLogout();
handleLoadConsultations();
handleLoadUserInfo();
handleLoadUserInfoOnEditForm();

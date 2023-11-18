
/**
 * Trata o clique ao adicionar o profissional na lista de consultas.
 */
function handleAddProfessional() {
  const toastsTriggers = Array.from(document.querySelectorAll('button'))
    .filter((element) => element.textContent.includes('Adicionar'));
  const toast = document.getElementById('toast');

  if (toastsTriggers.length) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
    toastsTriggers.forEach((toastTrigger) => {
      toastTrigger.addEventListener('click', () => {
        const targetCardElement = toastTrigger.parentElement.parentElement;
        const professionalName = targetCardElement.querySelector('.card-title').textContent;
        const professionalArea = targetCardElement.querySelector('.list-group > li').textContent.split(':')[1].trim();
        const professionalImage = targetCardElement.querySelector('img').src.split('/').at(-1);
        let consultations = localStorage.getItem('consultations');
        if (!consultations) {
          localStorage.setItem('consultations', JSON.stringify([]));
          consultations = localStorage.getItem('consultations');
        }
        const consultationsObj = Array.from(JSON.parse(consultations));
        const professionalAlreadyAdded = consultationsObj
          .find((consultation) => consultation.professionalName === professionalName);
        if (professionalAlreadyAdded) {
          toast.querySelector('.toast-header').innerHTML = `
            <span class="bi bi-person-fill-x"></span> 
            <strong class="me-auto">Não foi possível adicionar</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          `;
          toast.querySelector('.toast-body').innerHTML = `
            Profissional ${professionalName} já está na sua lista de consultas!
          `;
        } else {
          consultationsObj.push({
            professionalName,
            professionalArea,
            professionalImage,
            lastConsultationTime: null
          });
          localStorage.setItem('consultations', JSON.stringify(consultationsObj));
          toast.querySelector('.toast-header').innerHTML = `
            <span class="bi bi-person-add me-2"></span> 
            <strong class="me-auto">Adicionado com sucesso!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          `;
          toast.querySelector('.toast-body').innerHTML = `
            Você adicionou ${professionalName} à sua <a href="../perfil/">lista de
            consultas</a>!
          `;
        }
        toastBootstrap.show()
      })
    })
  }
}

/**
 * Trata a procura por profissionais mostrando apenas os profissionais
 * que deem match com o texto pesquisado, pelo nome ou pela área do profissional.
 */
function handleSearchProfissional() {
  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('input', (event) => {
    const allCards = Array.from(document.querySelectorAll('.col'));
    allCards.forEach((card) => {
      const name = card.querySelector('.card-title').textContent;
      const area = card.querySelector('ul > li').textContent;
      const match = new RegExp(event.target.value, 'i');
      if (match.test(name) || match.test(area)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

authGuard();
changePageHeader();
handleLogout();
handleAddProfessional();
handleSearchProfissional();

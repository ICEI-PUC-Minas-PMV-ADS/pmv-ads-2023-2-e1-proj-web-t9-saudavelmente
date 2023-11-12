
/**
 * Trata o clique ao adicionar o profissional na lista de consultas.
 */
function handleAddProfessional() {
  const toastsTriggers = Array.from(document.querySelectorAll('#toast-btn'));
  const toast = document.getElementById('toast');

  if (toastsTriggers.length) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
    toastsTriggers.forEach((toastTrigger) => {
      toastTrigger.addEventListener('click', () => {
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
handleAddProfessional();
handleSearchProfissional();

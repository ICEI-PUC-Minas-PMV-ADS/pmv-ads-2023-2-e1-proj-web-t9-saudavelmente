/**
 * Trata a procura por profissionais mostrando apenas os profissionais
 * que deem match com o texto pesquisado, pelo nome ou pela área do profissional.
 */
function handleSearchPosts() {
  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('input', (event) => {
    const allPosts = Array.from(document.querySelectorAll('.list-group-item'));
    allPosts.forEach((post) => {
      const title = post.querySelector('h6').textContent;
      const author = post.querySelector('p > span').textContent;
      const match = new RegExp(event.target.value, 'i');
      if (match.test(title) || match.test(author)) {
        console.log("teste");
        post.style.display = 'flex';
      } else {
        post.style.setProperty('display', 'none', 'important');
      }
    });
  });
}

handleSearchPosts();

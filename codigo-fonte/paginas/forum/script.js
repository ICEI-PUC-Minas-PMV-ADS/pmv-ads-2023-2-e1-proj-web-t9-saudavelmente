function handleShowHideCreatePostDiv() {
  const createPostDiv = document.getElementById('create-post-div');
  if (!Auth.isLogged()) {
    createPostDiv.style.display = 'none';
  } else {
    createPostDiv.style.display = 'block';
  }
}

function loadPostTags(tags) {
  const tagsMap = {
    ansiedade: 'Ansiedade',
    coping: 'Coping',
    autoconhecimento: 'Autoconhecimento',
    'bem-estar': 'Bem-Estar',
    positividade: 'Positividade',
    relacionamentos: 'Relacionamentos',
    transtorno: 'Transtorno',
    relax: 'Relax',
    ansiedade: 'Ansiedade',
    meditação: 'Meditação',
    relaxamento: 'Relaxamento',
    mindfulness: 'Mindfulness',
    autoeestima: 'Autoestima',
    aceitacao: 'Aceitação',
    foco: 'Foco',
  }
  let postTagsHtml = '';
  tags.forEach((tag) => {
    postTagsHtml += `<span class="badge bg-primary rounded-pill badge-bgc">${tagsMap[tag]}</span>`;
  });
  return postTagsHtml;
}

function formatPostCreatedAt(postCreatedAt) {
  return new Date(postCreatedAt).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function numPages(postsLength, recordsPerPage) {
  return Math.ceil(postsLength / recordsPerPage);
}

function changePage(posts, postsWrapper, nextButtonLi, prevButtonLi, currentPageLink, currentPage, recordsPerPage) {
  if (currentPage < 1) {
    currentPage = 1;
  }
  if (currentPage > numPages(posts.length, recordsPerPage)) {
    currentPage = numPages(posts.length, recordsPerPage);
  }
  postsWrapper.innerHTML = '';
  for (let i = (currentPage - 1) * recordsPerPage; i < (currentPage * recordsPerPage) && i < posts.length; i++) {
    const post = posts[i];
    postsWrapper.innerHTML += `
      <a href="#" id="${post.id}" class="list-group-item list-group-item-action d-flex gap-3 py-3" data-bs-toggle="modal" data-bs-target="#post-content" aria-current="true">
        <img src="./imagens/forum-post-image.png" alt="twbs" width="40" height="40" class="rounded-3 flex-shrink-0">
        <div class="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 class="mb-0 text-capitalize">${post.title}</h6>
            <p class="mb-0 opacity-75">
              por <span class="fw-bold text-capitalize">${post.author}</span>
            </p>
            <div class="d-flex flex-column flex-sm-row gap-1 align-items-start">
              ${loadPostTags(post.tags)}
            </div>
          </div>
          <small class="opacity-50 text-nowrap">${formatPostCreatedAt(post.createdAt)}</small>
        </div>
      </a>
    `;
  }
  currentPageLink.textContent = currentPage;
  if (currentPage === 1) {
    prevButtonLi.classList.add('disabled');
  } else {
    prevButtonLi.classList.remove('disabled');
  }
  if (currentPage === numPages(posts.length, recordsPerPage)) {
    nextButtonLi.classList.add('disabled');
  } else {
    nextButtonLi.classList.remove('disabled');
  }
}

function handlePostsPagination(postsWrapper, posts) {
  const nextButton = document.getElementById('next-btn');
  const nextButtonLi = nextButton.parentElement;
  const prevButton = document.getElementById('prev-btn');
  const prevButtonLi = prevButton.parentElement;
  const currentPageLink = document.getElementById('page');
  let currentPage = 1;
  let recordsPerPage = 5;
  prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      changePage(posts, postsWrapper, nextButtonLi, prevButtonLi, currentPageLink, currentPage, recordsPerPage);
    }
  });
  nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage < numPages(posts.length, recordsPerPage)) {
      currentPage++;
      changePage(posts, postsWrapper, nextButtonLi, prevButtonLi, currentPageLink, currentPage, recordsPerPage);
    }
  });
  changePage(posts, postsWrapper, nextButtonLi, prevButtonLi, currentPageLink, currentPage, recordsPerPage);
}

function handleLoadPosts() {
  const postsWrapper = document.getElementById('posts-wrapper');
  const postsPagination = document.getElementById('posts-pagination');
  let posts = localStorage.getItem('posts');
  if (!posts) {
    const postsJson = JSON.stringify([]);
    localStorage.setItem('posts', postsJson);
    posts = postsJson;
  }
  const postsObj = JSON.parse(posts);
  if (postsObj.length === 0) {
    postsPagination.style.display = 'none';
    postsWrapper.innerHTML = `
      <div class="alert alert-light" role="alert">
        Ainda não há posts por aqui, você precisa <a href="../cadastro/" class="primary-link-c">criar uma conta</a> ou <a href="../login/" class="primary-link-c">estar autenticado</a> para <strong>criar um post</strong>!
      </div>
    `;
  } else {
    postsPagination.style.display = 'block';
    handlePostsPagination(postsWrapper, postsObj);
  }
}

function formatLikesCount(likesCount) {
  return likesCount >= 100 ? '99+' : likesCount;
}

function loadPostLikesOnModal(currentLikesCount) {
  const postLikesSpan = document.getElementById('post-likes');
  postLikesSpan.title = currentLikesCount;
  postLikesSpan.textContent = formatLikesCount(currentLikesCount);
}

function handleLikePostButton(buttonElement) {
  const relatedPostId = buttonElement.getAttribute('data-post-id');
  const posts = JSON.parse(localStorage.getItem('posts'));
  const postIndex = posts.findIndex((post) => post.id === relatedPostId);
  const currentPost = posts[postIndex];
  currentPost.likesCount += 1;
  posts[postIndex] = currentPost;
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPostLikesOnModal(currentPost.likesCount);
}

function formatPostContent(postContent) {
  return postContent.replaceAll('\n', '<br>');
}

function handleLoadPostContentOnModal() {
  const postContentModal = document.getElementById('post-content');
  postContentModal.addEventListener('show.bs.modal', (event) => {
    const relatedPostId = event.relatedTarget.id;
    const posts = JSON.parse(localStorage.getItem('posts'));
    const relatedPost = posts.find((post) => post.id === relatedPostId);
    postContentModal.querySelector('#like-post-btn').setAttribute('data-post-id', relatedPostId);
    postContentModal.querySelector('.modal-title').textContent = relatedPost.title;
    postContentModal.querySelector('.modal-body').innerHTML = `
      <div class="d-flex align-items-start justify-content-between flex-wrap w-100">
        <p>por <strong class="text-body-emphasis text-capitalize">${relatedPost.author}</strong></p>
        <small class="text-body-emphasis">${formatPostCreatedAt(relatedPost.createdAt)}</small>
      </div>
      <p>${formatPostContent(relatedPost.content)}</p>
    `;
    loadPostLikesOnModal(relatedPost.likesCount);
  });
}

function handleCreatePostFormSubmit() {
  const createPostForm = document.getElementById('create-post-form');
  createPostForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formTarget = event.target;
    const formData = new FormData(formTarget);
    const postTags = formData.getAll('post-tags');
    if (postTags.length > 3) {
      alert('Escolha apenas 3 tags para o seu post');
      return;
    }
    const currentPosts = JSON.parse(localStorage.getItem('posts'));
    const newPost = {
      id: crypto.randomUUID(),
      title: formData.get('post-title'),
      content: formData.get('post-content'),
      tags: postTags,
      author: JSON.parse(localStorage.getItem('user')).name,
      createdAt: new Date(),
      likesCount: 0,
    }
    currentPosts.splice(0, 0, newPost);
    localStorage.setItem('posts', JSON.stringify(currentPosts));
    handleLoadPosts();
    formTarget.reset();
    alert('Seu post foi criado com sucesso!');
  });
}

/**
 * Trata a procura por posts mostrando apenas os posts
 * que deem match com o texto pesquisado, pelo título, nome do autor e tags.
 */
function handleSearchPosts() {
  const tagsMap = {
    ansiedade: 'Ansiedade',
    coping: 'Coping',
    autoconhecimento: 'Autoconhecimento',
    'bem-estar': 'Bem-Estar',
    positividade: 'Positividade',
    relacionamentos: 'Relacionamentos',
    transtorno: 'Transtorno',
    relax: 'Relax',
    ansiedade: 'Ansiedade',
    meditação: 'Meditação',
    relaxamento: 'Relaxamento',
    mindfulness: 'Mindfulness',
    autoeestima: 'Autoestima',
    aceitacao: 'Aceitação',
    foco: 'Foco',
  }
  const searchInput = document.getElementById('search-input');
  const postsWrapper = document.getElementById('posts-wrapper');
  const postsPagination = document.getElementById('posts-pagination');
  searchInput.addEventListener('input', (event) => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (posts.length === 0) {
      return;
    }
    const text = event.target.value;
    const filteredPosts = posts.filter((post) => {
      const match = new RegExp(text, 'i');
      return match.test(post.title) || match.test(post.author) || match.test(post.tags.map((tag) => tagsMap[tag]).join(' '));
    });
    if (filteredPosts.length === 0) {
      postsPagination.style.display = 'none';
      postsWrapper.innerHTML = `
        <div class="alert alert-light" role="alert">
          Nenhum post corresponde com a sua pesquisa "<span class="text-emphasis">${text}</span>"!
        </div>
      `;
    } else {
      postsPagination.style.display = 'block';
      handlePostsPagination(postsWrapper, filteredPosts);
    }
  });
}

changePageHeader();
handleLogout();
handleSearchPosts();
handleShowHideCreatePostDiv();
handleLoadPosts();
handleLoadPostContentOnModal();
handleCreatePostFormSubmit();

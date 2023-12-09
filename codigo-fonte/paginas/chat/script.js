/**
 * Recebe uma mensagem e a exibe no chat como mensagem recebida.
 *
 * @param {string} messageText - O texto da mensagem a ser exibido.
 */
function receiveMessage(messageText) {
  const messageDiv = createMessageDiv(messageText, 'received');
  addMessageToChat(messageDiv);
}

/**
 * Obtém a hora atual no formato HH:mm.
 *
 * @returns {string} - A hora atual formatada.
 */
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

/**
 * Cria um elemento de mensagem HTML com o texto fornecido e o tipo especificado.
 *
 * @param {string} text - O texto da mensagem.
 * @param {string} type - O tipo de mensagem (sent/received).
 * @returns {HTMLElement} - O elemento HTML da mensagem criada.
 */
function createMessageDiv(text, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;

  const messageText = document.createElement('span');
  messageText.innerText = text;
  messageDiv.appendChild(messageText);

  const messageTime = document.createElement('div');
  messageTime.className = 'message-time';
  messageTime.innerText = getCurrentTime();
  messageDiv.appendChild(messageTime);

  return messageDiv;
}

/**
 * Adiciona um elemento de mensagem ao chat e rola para o final do chat.
 *
 * @param {HTMLElement} messageDiv - O elemento da mensagem a ser adicionado.
 */
function addMessageToChat(messageDiv) {
  const chatMessages = document.querySelector('.chat-messages');
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Envia uma mensagem do usuário, exibe a mensagem enviada no chat e recebe a resposta da API.
 */
async function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const sendMessageBtn = document.getElementById('send-btn');
  const message = messageInput.value.trim();
  const { professionalArea, professionalName } = JSON.parse(localStorage.getItem('currentConsultation'));

  if (message !== '') {
    const messageDiv = createMessageDiv(messageInput.value, 'sent');
    addMessageToChat(messageDiv);
    messageInput.value = '';
    try {
      messageInput.disabled = true;
      sendMessageBtn.disabled = true;
      sendMessageBtn.innerHTML = '<span class="bi bi-three-dots"></span>';
      const response = await getApiResponse(message, professionalArea, professionalName);
      receiveMessage(response);
    } catch (err) {
      setTimeout(() => {
        receiveMessage('Desculpe, não estou apto a responder agora, tente novamente mais tarde!');
      }, 1000);
    } finally {
      messageInput.disabled = false;
      sendMessageBtn.disabled = false;
      sendMessageBtn.innerHTML = 'Enviar';
    }
  }
}

/**
 * Obtém uma resposta da API com base na mensagem do usuário e detalhes da consulta.
 *
 * @param {string} userMessage - A mensagem do usuário.
 * @param {string} professionalArea - A área profissional associada à consulta.
 * @param {string} professionalName - O nome profissional associado à consulta.
 * @returns {Promise<string>} - A resposta da API.
 */
async function getApiResponse(userMessage, professionalArea, professionalName) {
  const body = JSON.stringify({
    user_text: userMessage,
    professional_name: professionalName,
    professional_area: professionalArea,
  });
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const apiUrl = 'https://openai-chat-api.fly.dev';
  try {
    console.log(`Making request on API ${apiUrl} to get response...`);
    const response = await fetch(`${apiUrl}/chat`, {
      method: 'POST',
      body,
      headers,
    });
    if (!response.ok) {
      throw new Error(response);
    }
    const json = await response.json();
    return json.response;
  } catch (err) {
    console.error(`Error on getting api response: ${err.message}`);
    throw err;
  }
}

/**
 * Lida com o header do chat carregando informações importantes
 * do profissional.
 */
function handleChatHeader() {
  const currentConsultation = JSON.parse(localStorage.getItem('currentConsultation'));
  const headerChatWrapper = document.getElementById('header-chat');
  headerChatWrapper.innerHTML += `
    <img src='${getProfessionalImagePath(currentConsultation.professionalImage)}' alt='Imagem da profissional ${currentConsultation.professionalName}' class='avatar'>
    <span class='username'>${currentConsultation.professionalName}</span>
  `;
}

/**
 * Adiciona ouvintes de evento para enviar mensagens ao pressionar o botão ou a tecla Enter.
 */
function handleSendMessage() {
  const sendMessageBtn = document.getElementById('send-btn');
  const messageInput = document.getElementById('messageInput');
  sendMessageBtn.addEventListener('click', async () => {
    await sendMessage();
  });
  messageInput.addEventListener('keyup', async (event) => {
    if (event.key === 'Enter') {
      await sendMessage();
    }
  });
}

authGuard();
changePageHeader();
handleLogout();
handleChatHeader();
handleSendMessage();

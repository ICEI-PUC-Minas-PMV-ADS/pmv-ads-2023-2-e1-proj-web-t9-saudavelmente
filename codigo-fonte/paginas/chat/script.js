function attachFile() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
  fileInput.addEventListener("change", function () {
    // Aqui você pode lidar com o arquivo selecionado, talvez enviando para um servidor
    alert("Arquivo selecionado: " + fileInput.files[0].name);
  });
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const chatMessages = document.querySelector(".chat-messages");
  if (messageInput.value.trim() !== "") {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.innerText = messageInput.value;
    chatMessages.appendChild(messageDiv);
    messageInput.value = "";
  }
}

function receiveMessage(messageText) {
  const messageDiv = createMessageDiv(messageText, 'received');
  addMessageToChat(messageDiv);
}

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

function createMessageDiv(text, type) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;

  const messageText = document.createElement("span");
  messageText.innerText = text;
  messageDiv.appendChild(messageText);

  const messageTime = document.createElement("div");
  messageTime.className = 'message-time';
  messageTime.innerText = getCurrentTime();
  messageDiv.appendChild(messageTime);

  return messageDiv;
}

function addMessageToChat(messageDiv) {
  const chatMessages = document.querySelector(".chat-messages");
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;  // Auto-scroll para a última mensagem
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  if (messageInput.value.trim() !== "") {
    const messageDiv = createMessageDiv(messageInput.value, 'sent');
    addMessageToChat(messageDiv);
    messageInput.value = "";

    // Simulando resposta após 1 segundo
    setTimeout(() => {
      const response = simulateResponse(messageDiv.innerText);
      receiveMessage(response);
    }, 1000);
  }
}

function simulateResponse(message) {
  const lowercaseMessage = message.toLowerCase();

  if (lowercaseMessage.includes("olá") || lowercaseMessage.includes("oi")) {
    return "Olá! Tudo bem? Como posso ajudar?";
  } else if (lowercaseMessage.includes("como você está?")) {
    return "Estou bem, obrigado por perguntar!";
  } else if (lowercaseMessage.includes("obrigado")) {
    return "De nada!";
  } else {
    return "Desculpe, não entendi...";
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
    <img src="${getProfessionalImagePath(currentConsultation.professionalImage)}" alt="Imagem da profissional ${currentConsultation.professionalName}" class="avatar">
    <span class="username">${currentConsultation.professionalName}</span>
  `;
}

setTimeout(() => {
  receiveMessage("Olá!");
}, 2000);

authGuard();
changePageHeader();
handleLogout();
handleChatHeader();

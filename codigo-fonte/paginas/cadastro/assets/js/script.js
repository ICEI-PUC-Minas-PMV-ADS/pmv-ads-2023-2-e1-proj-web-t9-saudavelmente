// Capturando elementos do DOM
const profissionalCheckbox = document.getElementById("profissional_saude_checkbox");
const crpField = document.querySelector(".cpf");
const areaAtuacaoField = document.querySelector(".area_atuacao");

// Adicionando um ouvinte de evento para o checkbox "Sou profissional da saúde"
profissionalCheckbox.addEventListener("change", function () {
  if (this.checked) {
    // Se marcado, mostra os campos adicionais
    crpField.classList.remove("hidden");
    areaAtuacaoField.classList.remove("hidden");
  } else {
    // Se desmarcado, oculta os campos adicionais
    crpField.classList.add("hidden");
    areaAtuacaoField.classList.add("hidden");
  }
});

// Limitando a inserção de apenas 11 números na área do CPF
function limitInputLength(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
}

changePageHeader();
handleLogout();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.validation');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.querySelector('.name');
    const date = form.querySelector('.date');
    const email = form.querySelector('.email');
    const tel = form.querySelector('.tel');
    const password = form.querySelector('.password');
    const cPassword = form.querySelector('.cPassword');
    const aceitoTermos = form.querySelector('input[name="aceito_termos"]');
    const profissionalSaude = form.querySelector('input[name="profissional_saude"]');
    const areaAtuacaoSelect = form.querySelector('select[name="area_atuacao"]');
    const cpf = form.querySelector('#cpf');

    if (name.value.length < 4) {
      alert('Nome deve ter pelo menos 4 caracteres');
      return;
    }

    if (!isValidEmail(email.value)) {
      alert('Email inválido');
      return;
    }

    if (password.value.length < 6) {
      alert('Senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (password.value !== cPassword.value) {
      alert('As senhas não correspondem');
      return;
    }

    if (!aceitoTermos.checked) {
      alert('Você deve aceitar os termos e condições');
      return;
    }
    if (profissionalSaude.checked && cpf.value.length === 0) {
      alert('CPF é obrigatório para profissionais da saúde');
      cpf.focus();
      return;
    }

    const areaAtuacao = profissionalSaude.checked ? areaAtuacaoSelect.value : '';

    const userData = {
      name: name.value,
      date: date.value,
      email: email.value,
      tel: tel.value,
      password: password.value,
      areaAtuacao: areaAtuacao,
      profissionalSaude: profissionalSaude.checked,
      cpf: cpf.value,
      urlProfilePhoto: './imagens/profile-image-default.webp',
    };

    if (Auth.checkEmail(userData.email)) {
      const response = confirm('Email já está cadastrado, gostaria de tentar logar?');
      if (response) {
        redirectTo('../login/');
      }
    } else {
      Auth.register(userData);
      alert('Cadastro realizado com sucesso!');
      // Redireciona o usuário para a página de login.
      redirectTo('../login/');
    }
  });
});

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

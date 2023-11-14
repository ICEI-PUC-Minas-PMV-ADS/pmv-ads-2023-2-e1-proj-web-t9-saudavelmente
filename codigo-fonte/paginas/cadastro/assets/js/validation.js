document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.validation');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.querySelector('.name');
    const email = form.querySelector('.email');
    const tel = form.querySelector('.tel');
    const password = form.querySelector('.password');
    const cPassword = form.querySelector('.cPassword');
    const aceitoTermos = form.querySelector('input[name="aceito_termos"]');
    const profissionalSaude = form.querySelector('input[name="profissional_saude"]');
    const areaAtuacaoSelect = form.querySelector('select[name="area_atuacao"]');

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
      alert('As senhas não coincidem');
      return;
    }

    if (!aceitoTermos.checked) {
      alert('Você deve aceitar os termos e condições');
      return;
    }

    const existingData = localStorage.getItem('userList');
    const userList = existingData ? JSON.parse(existingData) : [];

    const areaAtuacao = profissionalSaude.checked ? areaAtuacaoSelect.value : '';

    const userData = {
      name: name.value,
      email: email.value,
      tel: tel.value,
      password: password.value,
      areaAtuacao: areaAtuacao,
      profissionalSaude: profissionalSaude.checked
    };

    userList.push(userData);

    localStorage.setItem('userList', JSON.stringify(userList));

    alert('Cadastro realizado com sucesso!');
    form.reset(); // Limpa o formulário após o cadastro

    // Redireciona o usuário para a página principal
    window.location.href = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t9-saudavelmente/codigo-fonte/paginas/login/';
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
});

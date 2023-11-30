# Registro de Testes de Software

Pré-requisitos:
- [Projeto de Interface](./04-Projeto%20de%20Interface.md)
- [Plano de Testes de Software](./07-Plano%20de%20Testes%20de%20Software.md)

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir:

### CT-01: Verificar o funcionamento dos links da Página Inicial

**Responsável**: William da Silva Rodrigues

- Navegação entre as páginas a partir da página inicial, como descrito no [Projeto de Interface](./04-Projeto%20de%20Interface.md):
![Teste dos links da Página Inicial](./img/teste-pagina-inicial-links.gif)

---

### CT-02: Verificar o funcionamento do filtro de pesquisa da página do Fórum

**Responsável**: Vinícius Simões dos Santos

- Filtro com resultados:
    <div>
        <img src="./img/teste-filtro-posts-1.png" alt="Registro de teste do filtro do fórum com resultados" width="70%">
    </div>

- Filtro sem resultados:
    <div>
        <img src="./img/teste-filtro-posts-2.png" alt="Registro de teste do filtro do fórum sem resultados" width="70%">
    </div>

---

### CT-03: Verificar o funcionamento do filtro de pesquisa da página de Profissionais

**Responsável**: William da Silva Rodrigues
    
- Filtro com resultados:
    <div>
        <img src="./img/teste-filtro-profissionais-1.png" alt="Registro de teste do filtro de profissionais com resultados" width="70%">
    </div>

- Filtro sem resultados:
    <div>
        <img src="./img/teste-filtro-profissionais-2.png" alt="Registro de teste do filtro de profissionais sem resultados" width="70%">
    </div>

---

### CT-04: Verificar o cadastro de usuários

**Responsável**: João Pedro Campos Carvalho dos Santos

- Usuário preenche os campos "Senha" e "Confirmaçāo de Senha" com valores diferentes.
    <div>
        <img src="img/teste-senhas-incompativeis.png" alt="Imagem da tela de cadastro com valores das senhas diferentes" width="70%">
    </div>

- Verificar se o usuário foi cadastrado.
    <div>
        <img src="img/test-cadastro-realizado.png" alt="Imagem da tela de um cadastro realizado" width="70%">
    </div>

- Informações armazenadas no LocalStorage após usuário se cadastrar.
     <div>
        <img src="img/teste-cadastro-localstorage.png" alt="Imagem das informações do usuário armazenadas no LocalStorage " width="70%">
    </div>

---

### CT-05: Verificar o funcionamento de autorização e autenticação

**Responsável**: William da Silva Rodrigues

- Usuário existe no "banco de dados", e o email e a senha são corretamente digitados.
    <div>
        <img src="./img/teste-login-1.png" alt="Registro de teste de login bem sucedido" width="70%">
    </div>

---

### CT-06: Verificar o funcionamento de autorização e autenticação em caso de falha

**Responsável**: William da Silva Rodrigues

- Usuário não existe no "banco de dados".
    <div>
        <img src="./img/teste-login-2.png" alt="Registro de teste de login mal sucedido" width="70%">
    </div>

- Usuário digita senha ou email incorretamente.
    <div>
        <img src="./img/teste-login-3.png" alt="Registro de teste de login mal sucedido" width="70%">
    </div>

---

### CT-07: Verificar adição de profissional na lista de consultas

**Responsável**: William da Silva Rodrigues

- Sucesso ao adicionar um profissional.
    <div>
        <img src="./img/teste-add-profissional-1.png" alt="Registro de teste de adição de profissional na lista de consultas sucesso" width="70%">
    </div>

- Erro ao adicionar o profissional, pois já existe.
    <div>
        <img src="./img/teste-add-profissional-2.png" alt="Registro de teste de adição de profissional na lista de consultas erro" width="70%">
    </div>

---

### CT-08: Verificar inicio e cancelamento de consultas

**Responsável**: William da Silva Rodrigues

- Ao Iniciar Consulta usuário deverá ser redirecionado para o chat da consulta e também a data de Último contato será atualizada.
    <div>
        <img src="./img/teste-iniciar-consulta-1.png" alt="Registro de teste de inicio de consulta com um profissional" width="70%">
    </div>
    <div>
        <img src="./img/teste-iniciar-consulta-2.png" alt="Registro de teste de inicio de consulta com um profissional" width="70%">
    </div>
    <div>
        <img src="./img/teste-iniciar-consulta-3.png" alt="Registro de teste de inicio de consulta com um profissional" width="70%">
    </div>

- Ao cancelar uma consulta, a consulta será removida e uma mensagem será exibida.
    <div>
        <img src="./img/teste-cancelar-consulta-1.png" alt="Registro de teste para cancelar consulta com um profissional" width="70%">
    </div>
    <div>
        <img src="./img/teste-cancelar-consulta-2.png" alt="Registro de teste para cancelar consulta com um profissional" width="70%">
    </div>

---

### CT-09: Verificar edição de informações do usuário

**Responsável**: William da Silva Rodrigues

- Ao atualizar suas informações com sucesso, o objeto `user` deverá ser atualizado no localStorage.
    - Antes:
        <div>
            <img src="./img/teste-edit-user-info-1.png" alt="Registro de teste para atualizar informações do usuário" width="70%">
        </div>
    - Depois:
        <div>
            <img src="./img/teste-edit-user-info-2.png" alt="Registro de teste para atualizar informações do usuário" width="70%">
        </div>

- Ao atualizar suas informações com sucesso, a tela de perfil com as informações do usuário deverá ser atualizada com as informações novas.
    - Antes:
        <div>
            <img src="./img/teste-edit-user-info-3.png" alt="Registro de teste para atualizar informações do usuário" width="70%">
        </div>
    - Depois:
        <div>
            <img src="./img/teste-edit-user-info-4.png" alt="Registro de teste para atualizar informações do usuário" width="70%">
        </div>

- Ao atualizar suas informações com sucesso, uma mensagem deverá ser exibida.
    <div>
        <img src="./img/teste-edit-user-info-5.png" alt="Registro de teste para atualizar informações do usuário" width="70%">
    </div>

---

### CT-10: Verificar inicio da consulta com o profissional

**Responsável**: Luan César Souza dos Santos

- Usuário inicia a sua consulta.
    <div>
        <img src="./img/teste-chat-inicio-consulta.png" alt="Inicio da consulta" width="70%">
    </div>

---

### CT-11: Verificar se a consulta atual é a mesma ao clicar em Iniciar Consulta

**Responsável**: Luan César Souza dos Santos

- Consulta a ser iniciada.
    <div>
        <img src="./img/teste-perfil-lista-consulta.png" alt="Consulta a ser iniciada" width="70%">
    </div>

- Verificando no localStorage imagem e nome do profissional
    <div>
        <img src="./img/teste-verifica-consulta-localstorage.png" alt="Consulta verificada" width="70%">
    </div>
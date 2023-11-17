# Registro de Testes de Software

Pré-requisitos:
- [Projeto de Interface](./04-Projeto%20de%20Interface.md)
- [Plano de Testes de Software](./07-Plano%20de%20Testes%20de%20Software.md)

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir:

### CT-01: Verificar o funcionamento dos links da Página Inicial

**Responsável**: William da Silva Rodrigues

- Navegação entre as páginas a partir da página inicial, como descrito no [Projeto de Interface](./04-Projeto%20de%20Interface.md):
[Teste dos links da Página Inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-saudavelmente/assets/47596121/c0668e1a-9da1-439c-aea6-f839f4e6b2f6)

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
        <img src="img/senhasnc_img.png" alt="Imagem da tela de cadastro com valores das senhas diferentes" width="70%">
    </div>

- Verificar se o usuário foi cadastrado.
    <div>
        <img src="img/cadastrorealizado_img.png" alt="Imagem da tela de um cadastro realizado" width="70%">
    </div>

- Informações armazenadas no LocalStorage após usuário se cadastrar.
     <div>
        <img src="img/localstorage_img.png" alt="Imagem das informações do usuário armazenadas no LocalStorage " width="70%">
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

---

# Projeto de Interface

## User Flow

O Fluxo de Usuário (User Flow) apresentado na **Figura 1** mostra o mapeamento do fluxo de navegação do usuário na aplicação entre as telas. Ela serve para alinhar os caminhos e as possíveis ações que o usuário pode fazer. Cada uma das telas descritas aqui está detalhada na seção de [Prótotipo de Baixa Fidelidade](#protótipo-de-baixa-fidelidade) que se segue.

<figure> 
  <img src="./img/simple-userflow.jpg" alt="Estrutura padrão do site" width="80%">
  <figcaption>Figura 1 - Fluxo de Telas do Usuário</figcaption>
</figure>


## Protótipo

### Protótipo de baixa fidelidade

Protótipos de baixa fidelidade apresentam de forma simplificada o design da interface e o relacionamento entre suas páginas, permitindo evolução da proposta da solução. Neste projeto, eles serão utilizados para apoiar a validação dos requisitos e efetuar mudanças dos mesmos, caso seja necessário, para menor impacto na codificação da aplicação.

As telas do sistema apresentam uma estrutura comum que é apresentada na **Figura 2**. Nesta estrutura existem 3 grandes blocos, descritos a seguir. São eles:

- **Cabeçalho** - local onde estão dispostos o nome da aplicação web e navegação principal do site (menu da aplicação);
- **Conteúdo** - apresenta o conteúdo da tela em questão;
- **Rodapé** - apresenta informações sobre os direitos autorais, entre outras informações relevantes.

<figure> 
  <img src="./img/wireframe-default-structure.jpg" alt="Estrutura padrão do site" width="80%">
  <figcaption>Figura 2 - Estrutura padrão do site</figcaption>
</figure>

### Telas

Em todas as telas o menu do cabeçalho irá sofrer uma pequena mudança quando o usuário estiver logado, ele ficará assim:

<figure> 
  <img src="./img/header-user-logged.jpg" alt="Header com o usuário logado" width="80%">
  <figcaption>Figura 3 - Header com o usuário logado</figcaption>
</figure>

---

#### Tela - Página Inicial

A tela de **Página Inicial** será o ponto inicial de qualquer usuário da plataforma. Nela estará presente:

- Um banner de boas vindas visando convidar o usuário à entender melhor o objetivo do projeto;
- Uma breve seção sobre as serviços oferecidos e o que o usuário poderá encontrar na plataforma;
- Uma seção com depoimentos de pacientes e profissionais da área de saúde sobre a plataforma;
- Uma breve explicação sobre o projeto e avisos legais.
- A partir dela você também poderá navegar para todos as páginas públicas do site tais como:
  - Página de cadastro;
  - Página de login;
  - Página do fórum.

<figure> 
  <img src="./img/prototype-homepage.jpg" alt="Tela Página Inicial" width="80%">
  <figcaption>Figura 4 - Tela Página Inicial</figcaption>
</figure>

---

#### Tela - Lista de Profissionais

A tela de **Lista de Profissionais** exibirá todos os profissionais cadastrados na platafoma, com um campo de pesquisa para filtrar os profissionais. Ela estará disponível para acesso ao usuário logado em usa página de perfil. Nela estará presente:

- Cards para cada profissional cadastrado, e detalhes como área de atuação, descrição, etc...;
- Nos cards, você poderá adicionar o profissional à sua lista de profissionais que você gostaria de ter uma consulta via chat;
- Terá uma forma do usuário voltar para a página de perfil do mesmo.

<figure> 
  <img src="./img/prototype-professional-list.jpg" alt="Tela Lista de Profissionais" width="80%">
  <figcaption>Figura 4 - Tela Lista de Profissionais</figcaption>
</figure>

---

### TELA - CADASTRO 

A tela de **CADASTRO**  apresentará os seguintes campos para a inserção das informações pessoais do usuário: 
- Nome Completo;
- Data de Nascimento; 
- E-mail;
- Telefone; 
- Senha; 
- Confirmação de Senha;
- Aceite dos Termos e Condições de Uso. 

Além disso, haverá uma opção para os profissionais da área da saúde  clicarem e, em seguida, inserirem mais duas informações para se cadastrem;
- CRM;
- Área de Atuação;

<figure> 
  <img src="img/Prot%C3%B3tipo%20-%20P%C3%A1gina%20de%20Cadastro.jpg" alt="Tela Lista de Profissionais" width="80%">
  <figcaption>Figura 5 - Tela de Cadastro</figcaption>
</figure>

<figure> 
  <img src="img/Informa%C3%A7%C3%A3o%20profissional.png" alt="Tela Lista de Profissionais" width="80%">
  <figcaption>Figura 6 - Tela para Informação Profissional</figcaption>
</figure>

---


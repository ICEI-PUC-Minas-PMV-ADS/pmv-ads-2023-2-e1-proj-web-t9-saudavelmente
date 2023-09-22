# Projeto de Interface

## User Flow

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de navegação do usuário na aplicação. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

[Adicione aqui o diagrama de fluxo de usuário da sua aplicação.] 

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


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

# Plano de Testes de Software

Pré-requisitos:
- [Especificação do Projeto](./02-Especificação%20do%20Projeto.md)
- [Projeto de Interface](./04-Projeto%20de%20Interface.md)

Os requisitos para realização dos testes de software são:
- Site publicado na internet;
- Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-01: Verificar o funcionamento dos links da Página Inicial</td>
        <td>
            <ul>
                <li>RF-01: A plataforma deve permitir ao usuário cadastrar uma conta.</li>
                <li>RF-02: A plataforma deve permitir ao usuário fazer login na sua conta.</li>
                <li>RF-06: A plataforma deve ter uma página inicial com informações claras sobre sua missão, valores e funcionalidades oferecidas.</li>
                <li>RF-07: A plataforma deve apresentar uma página principal do fórum onde os tópicos são listados. Caso haja muitos tópicos, eles devem ser divididos em páginas para facilitar a navegação.</li>
                <li>RF-08: Os usuários devem ter acesso a uma barra de pesquisa no fórum onde podem digitar palavras-chave. Ao realizar a pesquisa, os resultados relevantes devem ser exibidos.</li>
            </ul>
        </td>
        <td>Verificar se os links da Página Inicial estão encaminhando para as respectivas páginas corretamente.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Informar o endereço do site.</li>
                <li>Visualizar a Página Inicial.</li>
                <li>Clicar nos links da Página Inicial.</li>
            </ol>
        </td>
        <td>Todos os links da Página Inicial devem encaminhar os usuários para as páginas descritas.</td>
        <td>William da Silva Rodrigues</td>
    </tr>
</table>

<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-02: Verificar o funcionamento do filtro de pesquisa da página do Fórum</td>
        <td>
            <ul>
                <li>RF-07: A plataforma deve apresentar uma página principal do fórum onde os tópicos são listados. Caso haja muitos tópicos, eles devem ser divididos em páginas para facilitar a navegação.</li>
                <li>RF-08: Os usuários devem ter acesso a uma barra de pesquisa no fórum onde podem digitar palavras-chave. Ao realizar a pesquisa, os resultados relevantes devem ser exibidos.</li>
            </ul>
        </td>
        <td>Vefificar se o filtro está funcionando corretamente ao pesquisar parte do título ou do dono do post.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Informar o endereço do Fórum.</li>
                <li>Visualizar a Página do Fórum.</li>
                <li>Digitar palavras-chave de acordo com o título ou nome do dono do post</li>
            </ol>
        </td>
        <td>Apenas os posts com as palavras-chaves digitadas devem aparecer, se não tiver nenhum post com as palavras-chave, então nada deverá ser exibido.</td>
        <td>William da Silva Rodrigues</td>
    </tr>
</table>

<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-03: Verificar o funcionamento do filtro de pesquisa da página de Profissionais</td>
        <td>
            <ul>
                <li>RF-03: A plataforma deve fornecer uma lista de profissionais com possibilidade de pesquisa, permitindo que os usuários escolham um profissional alinhado com suas necessidades.</li>
                <li>RF-04: A plataforma deve permitir que os usuários tenham suas consultas.</li>
            </ul>
        </td>
        <td>Vefificar se o filtro está funcionando corretamente ao pesquisar parte do nome ou área do profissional.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Fazer login.</li>
                <li>Acessar área de profissionais, em "Profissionais".</li>
                <li>Visualizar a Página de Profissionais.</li>
                <li>Digitar palavras-chave de acordo com o nome ou área do profissional.</li>
            </ol>
        </td>
        <td>Apenas os profissionais com as palavras-chaves digitadas devem aparecer, se não tiver nenhum profissional com as palavras-chave, então nada deverá ser exibido.</td>
        <td>Vinícius Simões dos Santos</td>
    </tr>
</table>
<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-04: Verificar o cadastro de usuários</td>
        <td>
            <ul>
                <li>RF-03: A plataforma deve permitir ao usuário cadastrar uma conta.</li>
            </ul>
        </td>
        <td>Verificar se o cadastro está sendo feito corretamente.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Informar o endereço do site.</li>
                <li>Visualizar a página Home.</li>
                <li>Clicar no ícone que se encontra no menu superior e em seguida clicar em "Cadastre-se".</li>
                <li>Preencher o formulário e clicar em “Cadastrar”.</li>
            </ol>
        </td>
        <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Cadastrado realizado com sucesso".</td>
        <td>João Pedro Campos Carvalho dos Santos</td>
    </tr>
</table>

<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-05: Verificar o funcionamento de autorização e autenticação</td>
        <td>
            <ul>
                <li>RF-01: A plataforma deve permitir ao usuário cadastrar uma conta.</li>
                <li>RF-02: A plataforma deve permitir ao usuário fazer login na sua conta.</li>
                <li>RF-05: Os usuários devem ter acesso a uma seção em sua conta para exibir informações do seu perfil.</li>
            </ul>
        </td>
        <td>Verificar se o usuário que possui conta consegue acessar sua conta, e caso contrário ele não conseguirá acesso na plataforma.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Ir para página de login.</li>
                <li>Tentar fazer login com conta já existente.</li>
            </ol>
        </td>
        <td>O usuário será devidamente autenticado e será redirecionado para a página de perfil do mesmo.</td>
        <td>William da Silva Rodrigues</td>
    </tr>
</table>

<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-06: Verificar o funcionamento de autorização e autenticação em caso de falha</td>
        <td>
            <ul>
                <li>RF-01: A plataforma deve permitir ao usuário cadastrar uma conta.</li>
                <li>RF-02: A plataforma deve permitir ao usuário fazer login na sua conta.</li>
                <li>RF-05: Os usuários devem ter acesso a uma seção em sua conta para exibir informações do seu perfil.</li>
            </ul>
        </td>
        <td>Verificar se um usuário inexistente não consegue se autenticar.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Ir para página de login.</li>
                <li>Tentar fazer login com uma conta aleatória não existente.</li>
            </ol>
        </td>
        <td>O usuário não será autenticado e uma mensagem para tentar novamente será exibida.</td>
        <td>William da Silva Rodrigues</td>
    </tr>
</table>

<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-07: Verificar adição de profissional na lista de consultas</td>
        <td>
            <ul>
                <li>RF-03: A plataforma deve fornecer uma lista de profissionais com possibilidade de pesquisa, permitindo que os usuários escolham um profissional alinhado com suas necessidades.</li>
                <li>RF-04: A plataforma deve permitir que os usuários tenham suas consultas.</li>
            </ul>
        </td>
        <td>Verificar se o usuário consegue adicionar um profissional em sua lista de consultas e caso já tenha adicionado, o usuário não poderá adicionar mais aquele profissional.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Fazer login em sua conta.</li>
                <li>Acessar seu perfil, e ir em "Profissionais".</li>
                <li>Clicar em "Adicionar" embaixo do profissional selecionado.</li>
            </ol>
        </td>
        <td>Ao adicionar, o profissional deverá constar na lista de consultas do usuário e uma mensagem de sucesso será exibida, caso contrário o profissional não constará na lista de consulta e uma mensagem de erro será exibida.</td>
        <td>William da Silva Rodrigues</td>
    </tr>
</table>

<table>
    <tr>
        <th>Caso de Teste</th>
        <th>Requisitos Associados</th>
        <th>Objetivo do Teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-08: Verificar inicio e cancelamento de consultas</td>
        <td>
            <ul>
                <li>RF-04: A plataforma deve permitir que os usuários tenham suas consultas.</li>
            </ul>
        </td>
        <td>Verificar se o usuário consegue iniciar e cancelar uma consulta com um profissional já adicionado em sua lista de consulta.</td>
        <td>
            <ol>
                <li>Acessar o navegador.</li>
                <li>Fazer login em sua conta.</li>
                <li>Acessar seu perfil, ir em "Suas Consultas".</li>
                <li>Clicar em "Iniciar Consulta" ou "Cancelar Consulta".</li>
            </ol>
        </td>
        <td>Ao iniciar sua consulta com o profissional, o usuário deverá ser redirecionado para a página de chat e também a data de último contato será atualizada. Ao cancelar, a consulta deverá ser apagada e uma mensagem será exibida.</td>
        <td>William da Silva Rodrigues</td>
    </tr>
</table>

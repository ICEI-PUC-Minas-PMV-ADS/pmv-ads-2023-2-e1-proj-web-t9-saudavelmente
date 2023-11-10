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
        <td>Apenas os posts com as palavras-chaves digitadas devem aparecer, se e não tiver nenhum post com as palavras-chave, então nada deverá ser exibido.</td>
        <td>William da Silva Rodrigues</td>
    </tr>
</table>

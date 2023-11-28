# Template padrão da Aplicação

- O layout padrão do site foi construído com as linguagens de marcação [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS);
- A responsividade é tratada usando o framework de CSS [Bootsrap](https://getbootstrap.com/) e também flexível para quem quiser lidar com a responsividade utilizando **media-queries**;
- Os ícones são utilizados do próprio Bootstrap pelo [Bootstrap Icons](https://icons.getbootstrap.com/);
- As páginas terão como elementos padrões o **menu de navegação** onde o mesmo será alterado apenas quando o usuário estiver "logado", o **header** e o **footer**;
- Elementos de identidade visual:
    - **Cores**: você pode visualizar as cores utilizadas com mais detalhes clicando [neste link](https://coolors.co/0031b2-4eecc7-1f271b-787586-ffffff);  
        ![Paleta de cores da SaudávelMente](./img/color-pallete.png)
    - **Font-family**: você pode visualizar melho a font-family escolhida clicando [neste link](https://fonts.google.com/specimen/Varela+Round?query=Varela+Round);  
        ![Font-Family utilizada no SaudávelMente](./img/font-family.png)
    - **Font-size**: a font-size pode variar, mas foram utilizadas as padrões do próprio Bootstrap.
- O código utilizado para a construção dos elementos citados pode ser consultado [aqui](../codigo-fonte/): 
    - Repare que a estruturação do **código-fonte** é bem flexível, sendo possível tanta a utilização de elementos globais, encontrados no diretório `compartilhado`, quanto elementos relativos a cada página, que ficam localizados dentro de seus respectivos diretórios;
    - CSS, JS e imagens podem ser compartilhados, ou relativos a cada página.


## Estrutura padrão da aplicação

A aplicação terá a seguinte estrutura padrão em todas as páginas:

<figure> 
  <img src="./img/default-structure.png" alt="Estrutura padrão da aplicação" width="70%">
  <figcaption>Figura 1 - Estrutura padrão da aplicação</figcaption>
</figure>

<figure> 
  <img src="./img/default-structure-mobile.png" alt="Estrutura padrão da aplicação" width="70%">
  <figcaption>Figura 2 - Estrutura padrão da aplicação mobile</figcaption>
</figure>

> O restante da estrutura das páginas poderá ser conferido por agora na documentação de [Projeto de Interface](./04-Projeto%20de%20Interface.md), onde a mesma serviu de base para a construção de todas as páginas do projeto.

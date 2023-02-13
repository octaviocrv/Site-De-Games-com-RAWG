# Site-De-Games-com-RAWG
Portal de Games integrado com a API RAWG

Site-De-Games-com-RAWG/

Portal de Games integrado com a API RAWG

Nesse trabalho, vamos dar vida ao layout desenvolvido no trabalho anterior, apresentando informações reais sobre games, plataformas, creators, publishers e outras possibilidades ligadas ao universo de jogos digitais. Todas estas informações serão obtidas dinamicamente a partir da integração com a RAWG Video Games Database API Links to an external site..

IMPORTANTE: O trabalho agora tem foco exclusivamente na apresentação de informações sobre jogos digitais e você, OBRIGATORIAMENTE, deve utilizar esta API para o trabalho. NÃO SERÃO ACEITOS TRABALHOS COM OUTRA TEMÁTICA E COM OUTRA API.

A RAWG API oferece diversas funcionalidades por meio de endpoints no padrão RESTful. Você precisará criar uma conta no site RAWG.io Links to an external site. para receber a uma chave (API Key) que será utilizada em todas as requisições.

Neste trabalho, pode-se evoluir o layout do portal de games do trabalho anterior ou começar um projeto de layout do zero. Essa decisão fica a cargo de cada um. Você deverá montar um layout sobre jogos e apresentar funcionalidades para os seus usuários que são pessoas aficionadas pelo universo de jogos digitais.

Dentre os endpoints providos pela RAWG API, destacamos os seguintes que podem ser utilizados no seu projeto:

Games Links to an external site.- (OBRIGATÓRIO) fornece um conjunto rico de informações sobre cada um dos jogos digitais cobertos pela API tais como plataformas, lojas, gêneros, screenshots, tags, entre outras; Creators Links to an external site.- fornece uma lista das pessoas por trás da criação de jogos digitais, com detalhes do seu papel no processo e os jogos em que estão envolvidos; Developers Links to an external site.- fornece informações sobre as empresas que desenvolvem jogos, os jogos associados e seus detalhes; Plataformas Links to an external site.- fornece a lista das plataformas possíveis para jogar; Lojas Links to an external site.- fornece a lista de locais onde se pode adquirir os jogos digitais..

Requisitos do Projeto O site que você fará deve atender aos seguintes requisitos:

o site deve ser publicado em um ambiente da Internet (Repl.it, GitHub Pages, Netlify ou outro a sua escolha); o site deve trazer dados do aluno tais como seu nome completo, curso e número de matrícula, OBRIGATORIAMENTE visíveis na Home-Page; o site deverá ser responsivo permitindo a visualização em um celular de forma adequada; o site deve ter uma Home-Page (index.html) com duas (2) seções com dados dinâmicos obtidos via RAWG API. Uma seção deve, OBRIGATORIAMENTE, trazer uma lista de jogos digitais utilizando o endpoint GAMES Links to an external site.. Na primeira seção da Home-Page, você deve mostrar uma lista de jogos obedecendo os seguintes requisitos: para cada game deve ser exibidos um mínimo de três (3) dados textuais obtidos por meio da API que descrevam sucintamente o referido item (Ex: nome, data de liberação, rating, etc); para cada game, deve ser exibida uma imagem ilustrativa (background); para cada game, deve haver um link que leve o usuário para uma Página de Detalhes (detalhes.html) que exibirá mais informações sobre o game. O id do game, obtido via API deve ser passado como parâmetro na URL da página de detalhes conforme mostrado nas aulas síncronas realizadas na Semana 11. Na segunda seção (adicional) da Home-Page, você deve mostrar uma lista associada a outra informação fornecida pela API como: creators, plataformas, publishers, lojas, gêneros, etc. o site deve apresentar uma Página de pesquisa (pesquisa.html) de games ou a funcionalidade integrada no cabeçalho da home-page, que permita ao usuário informar um texto e obter, como resultado da pesquisa, a lista de games associados a partir da RAWG API. Na página de resultados da pesquisa, devem ser obedecidos os seguintes requisitos: o resultado da pesquisa poderá ser paginado ou não; 
o resultado deve mostrar uma lista de games tal qual a home-page com imagem e textos que descrevam os games retornado; na apresentação de cada game do resultado da pesquisa deve ter um link que, ao ser acionado, leve o usuário para a Página de Detalhes (detalhes.html) onde são exibidas mas informações sobre o game.


# :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: Integrar com a API
- `Funcionalidade 2`: o site deve ser publicado em um ambiente da Internet (Repl.it, GitHub Pages, Netlify ou outro a sua escolha); o site deve trazer dados do aluno 
- `Funcionalidade 2a`: Link que leve o usuário para uma Página de Detalhes (detalhes.html)
- `Funcionalidade 3`: Mostrar uma lista de jogos obedecendo os seguintes requisitos: para cada game deve ser exibidos um mínimo de três (3) 

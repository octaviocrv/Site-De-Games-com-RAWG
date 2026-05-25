<h1 align="center"> Portal de Games • RAWG API </h1>

<img width="1360" height="649" alt="image" src="https://github.com/user-attachments/assets/bdea75e0-7afe-49df-91e9-5a871a53ca17" />


<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/RAWG_API-000000?style=for-the-badge&logo=json&logoColor=white" alt="RAWG API" />
</p>

> Plataforma interativa para exploração, busca e detalhamento de jogos digitais, construída através do consumo da RAWG Video Games Database API.

## Sobre o Projeto

O **Portal de Games** é uma aplicação web voltada para aficionados pelo universo dos jogos digitais. O objetivo principal do projeto é apresentar informações reais e dinâmicas sobre games, plataformas, desenvolvedores e lojas, integrando diretamente com um ecossistema de dados externo via endpoints RESTful.

O projeto demonstra a capacidade de consumir APIs públicas, manipular o DOM dinamicamente com JavaScript Vanilla e estruturar um layout responsivo e agradável para exibição de catálogos de produtos.

---

## Principais Funcionalidades

- **Catálogo Dinâmico (Home):** Listagem automatizada de jogos utilizando o endpoint `/games` da API, exibindo imagem de capa (background) e dados textuais principais (nome, data de lançamento e avaliação).
- **Sessão Exploratória Secundária:** Exibição de dados adicionais do universo gamer (como criadores, plataformas, publishers ou gêneros) obtidos através de requisições paralelas.
- **Página de Detalhamento:** Roteamento dinâmico que captura o ID do jogo na URL e realiza uma nova requisição para buscar e renderizar informações profundas e específicas do título selecionado.
- **Motor de Busca Integrado:** Sistema de pesquisa que permite ao usuário buscar títulos específicos, retornando uma lista de resultados atualizada em tempo real a partir da API.
- **Design Responsivo:** Interface adaptada para visualização otimizada em dispositivos móveis e desktops.

---

## Tecnologias Utilizadas

- **HTML5 & CSS3** — Estruturação semântica e estilização completa da interface visual.
- **JavaScript (ES6+)** — Lógica central da aplicação, manipulação de interface e passagem de parâmetros via URL.
- **Fetch API** — Consumo assíncrono dos endpoints fornecidos pela RAWG API.
- **RAWG API** — Banco de dados robusto de videogames utilizado como fonte da verdade para o catálogo.

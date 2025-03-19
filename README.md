# 💻 GitHub Blog

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>

Uma página **desktop** web que utiliza da API do GitHub para buscar issues de um repositório, dados do seu perfil e exibir elas como um blog. Desenvolvida com base no design disponibilizado pela Rocketseat durante o curso de ReactJS.

<img src="./src/assets/screencapture-helzaaragao-github-io-GitHubBlog.png"/>*Imagem meramente ilustrativa, pois ela mudar dependendo do tamanho da tela do seu computador!
 

## 🚀 Funcionalidades

- **Listagem do perfil**: Exibe informações do perfil do GitHub, incluindo imagem, número de seguidores, nome e outros dados disponíveis na API do GitHub.
- **Listagem e filtragem de issues**: Lista todas as issues de um repositório, com um breve resumo do conteúdo de cada uma, e permite filtrá-las conforme necessário.
- **Barra de pesquisa**: Permite buscar issues por título e descrição, facilitando a localização de tópicos específicos.
- **Página de posts completos**: Exibe o conteúdo completo das issues (posts) em uma página dedicada.

## 📌 Desafios enfrentados 

Um dos principais desafios foi trabalhar com **requisições estáticas para buscar dados da API do GitHub**. Isso incluiu: Trazer informações do meu próprio perfil do GitHub e exibir issues de um repositório que não é de minha autoria, o que exigiu um cuidado adicional para garantir que os dados fossem carregados corretamente e de forma eficiente.


## 🌐 Deploy no GitHub Pages

O projeto está disponível online via GitHub Pages. Acesse <a href="helzaaragao.github.io/GitHubBlog/">aqui</a> para visualizar.


### 🛠️ Dependências e Versões Utilizadas

React: 18.3.1 | Typescript: 5.7.3 | Vite: 6.1.1 | Styled-components: 6.1.15 | Phosphor-icons/react: 2.1.7


### 📂 Como rodar o projeto na sua máquina local

OBS: é preciso já ter instalado o node.js, vscode ou um terminal da sua preferência para executar os comandos!

Clone esse repositório para os seus arquivos:
```
git clone https://github.com/helzaaragao/CoffeeDelivery.git
```

Depois, vá até a pasta que você acabou de criar com o comando anterior:

```
cd "CoffeeDelivery"
```
E instale todas as depedências e versões utilizadas por esse projeto:

```
npm install
```
Finalmente, rode no seu localhost:
```
npm run dev
```

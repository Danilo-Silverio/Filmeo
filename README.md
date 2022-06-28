# Filmeo - Aplicativo de Streaming

Está cansado de ficar horas encarando telas tentando as achar os melhores filmes para assistir no seu tempo livre? O Filmeo é a solução, apresento a vocês o aplicativo que mostra somente os filmes e séries mais populares  do momento para curtir com sua família.

Venha conhecer o <a href="https://filmeo-app.surge.sh/" target="_blank">Filmeo.</a>

# Projeto

## 📑 Qual seu objetivo?

Usando a API de filmes gratuita themoviedb em sua versão 3, foi desenvolvido uma listagem dos filmes e séries mais populares do momento, consultando os endpoints `GET ${/movie/popular} & ${tv/popular}` para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes da opção selecionada deve ser exibida. Para acessar mais detalhes sobre nosso catálogo, foram utilizados os endpoints `GET {/movie/{movie_id}} &{tv/{tv_id}`. Para garantir que o usuário encontre o seu contéudo ideal, essa lista está paginada, podendo navegar entre páginas e escolher a melhor opção para você.

As referências utilizadas para desenvolvimento desse projeto foram:
- Case Front End Promobit Danilo-Silverio: <a href="https://github.com/future4code/moreira-Danilo-Silverio/tree/master/rodada-cases-semana1" target="_blank">Danilo-Silverio GitHub</a> & <a href="https://case-frontend-promobit-danilo-silverio.surge.sh/" target="_blank">Link Surge.</a>
- Case Front End Promobit: <a href="https://github.com/Promobit/front-end-challenge" target="_blank">Promobit.</a>
- Design: <a href="https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End?node-id=16%3A1199" target="_blank">Figma.</a> 

## 📚 Tecnologias & Bibliotecas utilizadas:

    - Reactjs
    - Styled-Components
    - Axios
    - API's Rest
    - Global State.
    - useState & useEffect.
    - Router
    - Material UI.
    - Componentização & Estrutura de Pastas.


## ✅ Desafios do Projeto

### `Funcionais`

* O usuário deve ter acesso a uma listagem dos filmes mais populares do dia.
* O usuário deve conseguir paginar a lista para encontrar novos filmes.
* O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem.
* A página com detalhes de um filme deve possuir uma rota própria.

### `Não funcionais`

* O app deverá ser criado usando React.
* Na raiz do projeto, será necessário incluir um arquivo README md com as instruções para construir seu projeto localmente.
* O app deverá ser responsivo

## 🛠️ Como faço rodar projeto?

### `git clone`

Clone o link https do projeto no GitHub para seu repositório local através do terminal utilizando o comando `git clone link do projeto`

### `npm install`

Após ter o repósitorio clonado em seu computador utilize o comando `npm install` para instalar todas suas dependências.

### `npm run start`

O comando `npm run start` serve para iniciar o projeto e verificar como ele renderiza em seu computador.

# Interface & Design

## Home

<div>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172435294-8017ed1a-1232-4ffc-b456-d523651404ff.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172435640-4b28609f-b396-4f71-8c63-40b7a15aa05b.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172435992-ebda05d7-bfc7-4532-9f1f-178c34f2adbc.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172437475-8d59e351-1df9-4d79-9e6e-ab2d342d3a22.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172437882-3139837d-edbb-4610-9b60-91537c4e2a0c.png"/>  
</div>

## Feed

<div>
   <img align="center"  height="50" width="900" src="https://user-images.githubusercontent.com/94642853/176248635-55efbb5d-a53a-4d10-b0c4-9d78d26c3187.png"/>
   <img align="center"  height="400" width="900" src="https://user-images.githubusercontent.com/94642853/176248518-cfec6e2b-6ca5-42a4-b3f7-aa4a227e19f8.png"/>
   <img align="center"  height="400" width="900" src="https://user-images.githubusercontent.com/94642853/176249049-94611274-dc5e-4fa4-be60-e74fb38088da.png"/>
   <img align="center"  height="100" width="900" src="https://user-images.githubusercontent.com/94642853/176249285-69cc5ad4-2b85-4034-9324-4a203cbfeae6.png"/>
   <img align="center"  height="400" width="900" src="https://user-images.githubusercontent.com/94642853/176249392-c5050555-3895-4d39-a3a7-b2b62ee5a138.png"/
</div>

## Página Filme

<div>
   <img align="center"  height="100" width="900" src="https://user-images.githubusercontent.com/94642853/176246861-2af52d5c-7a8b-4d58-bc66-6f2d7bbf0720.png"/> 
   <img align="center"  height="400" width="900" src="https://user-images.githubusercontent.com/94642853/176246327-9a55fa55-79ec-43a2-b1b8-4193b118588a.png"/>
   <img align="center"  height="100" width="900" src="https://user-images.githubusercontent.com/94642853/176246658-74ca4a87-8902-4fbf-9809-aefce5bb1a58.png"/> 
   <img align="center"  height="400" width="900" src="https://user-images.githubusercontent.com/94642853/176245869-d9eb7e72-35b4-4f98-b7d9-226b19f2a4d9.png"/>
   <img align="center"  height="100" width="900" src="https://user-images.githubusercontent.com/94642853/176246658-74ca4a87-8902-4fbf-9809-aefce5bb1a58.png"/> 
   <img align="center"  height="400" width="900" src="https://user-images.githubusercontent.com/94642853/176246027-a9b35b7a-39ef-4296-99ef-4f75957fb31b.png"/>
</div>





# Docker Study – Cadastro de Produtos

![Docker](https://img.shields.io/badge/Docker-containers-2496ED?logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18-339933?logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-alpine-009639?logo=nginx&logoColor=white)

## Sobre o projeto

Este é um **projeto de estudo**, desenvolvido por **Bruna de Paula**, com roteiro e orientação do **professor Veríssimo**.

Foi realizado no **5º semestre** do curso de **Gestão em Tecnologia da Informação** do **Centro Universitário Senac Santo Amaro**, na matéria de **Microsserviços em Tecnologia da Informação**.

📅 **Data:** 11/2026

## O que o projeto faz

É uma aplicação simples de **cadastro de produtos**, dividida em três serviços independentes, cada um rodando em seu próprio container Docker:

- **Frontend:** página web com um formulário para informar o nome e o preço do produto e uma tabela que exibe os produtos cadastrados. A lista é carregada automaticamente ao abrir a página e atualizada após cada novo cadastro. 
- **Backend:** API que recebe os dados do frontend e se comunica com o banco. Possui dois endpoints:
  - `POST /cadprod` – cadastra um novo produto.
  - `GET /listprod` – lista todos os produtos cadastrados.
- **Banco de dados:** MySQL com o banco `loja` e a tabela `Produto` (id, nome e preço), criados automaticamente na inicialização do container, já com dois produtos de exemplo.

## Estrutura do projeto
```
cadProd
├── backend    → API em Node.js + Express (Dockerfile, db.js, index.js)
├── bd         → Banco MySQL (Dockerfile, init.sql)
└── frontend   → Página web servida pelo Nginx (Dockerfile, index.html, script.js, style.css)
```


## Tecnologias utilizadas

- **Docker** – criação e execução dos containers
- **Node.js 18** – ambiente de execução do backend
- **Express** – criação da API
- **CORS** – liberação da comunicação entre frontend e backend
- **MySQL 8.0** – banco de dados relacional (driver `mysql2`)
- **Nginx (Alpine)** – servidor web do frontend
- **HTML, CSS e JavaScript** – interface da aplicação
- **SQL** – criação do banco, da tabela e carga inicial de dados
- **Git e GitHub** – versionamento e publicação do código

## Conceitos aplicados

- Arquitetura de **microsserviços**, com frontend, backend e banco separados
- **Containerização** e criação de imagens com **Dockerfile**
- **API REST** com os métodos HTTP GET e POST
- Comunicação entre serviços via **HTTP e JSON**
- Conexão da aplicação com banco de dados relacional
- **Variáveis de ambiente** para configurar o banco (senha e nome do banco)
- Inicialização automática do banco por **script SQL**
- Exposição de **portas** dos containers
- Consumo de API no frontend com `fetch`
- Atualização dinâmica da página (manipulação do DOM)


## Como executar o projeto

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) instalado e em execução
- [Git](https://git-scm.com/) instalado

### 1. Clonar o repositório

```bash
git clone https://github.com/Brulibra/Docker-Study.git
cd Docker-Study
```

### 2. Construir as imagens

```bash
docker build -t cadprod-bd ./bd
docker build -t cadprod-backend ./backend
docker build -t cadprod-frontend ./frontend
```

### 3. Subir os containers

Suba o banco primeiro e aguarde cerca de 20 segundos para o MySQL terminar de iniciar:

```bash
docker run -d --name cadprod-bd -p 3306:3306 cadprod-bd
```

Depois suba o backend e o frontend:

```bash
docker run -d --name cadprod-backend -p 3000:3000 cadprod-backend
docker run -d --name cadprod-frontend -p 8080:80 cadprod-frontend
```

 O backend acessa o banco pelo endereço `host.docker.internal`. No Docker Desktop (Windows e Mac) isso funciona direto.

> **Linux:** No Linux, adicione `--add-host=host.docker.internal:host-gateway` ao comando do backend:
> ```bash
> docker run -d --name cadprod-backend -p 3000:3000 --add-host=host.docker.internal:host-gateway cadprod-backend
> ```

### 4. Acessar a aplicação

Abra no navegador: **http://localhost:8080**

A API também pode ser testada diretamente em: **http://localhost:3000/listprod**


---

Desenvolvido por **Bruna de Paula** 💙
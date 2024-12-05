# Library

## Overview
O nosso trabalho consiste num sistema de gestão de biblioteca. Na nossa aplicação é possível Adicionar livros, autores e géneros, assim como registar empréstimos dos livros, para além disso podemos atualizar as informações de todos estes recursos, criar novos registos e apagar caso necessário. Criamos filtros de pesquisa e relações entre os autores e livros, géneros e livros e por último, empréstimos e livros.

Projeto feito por:

-António Oliveira a044409@umaia.pt

-João Bernardo a045900@umaia.pt


### Repository organization
- **`.swagger-codegen`**  
  ficheiros utilizados pelo Swagger Codegen para geração de código.
 
- **`api/`**  
  Implementação das rotas da API, ficheiro openapi.yaml.
 
- **`controllers/`**  
  Lógica principal das rotas, responsável por processar pedidos e respostas.
 
- **`service/`**  
  Ficheiros javascript com a lógica para interagir com a base de dados.
 
- **`utils/`**  
  Ficheiros que definem uma conexão com a base de dados.
 
- **`Dockerfile`**  
  Especifica como a imagem Docker da aplicação deve ser construída.
 
- **`README.md`**  
  Ficheiro com a descrição do repositório.
 
- **`compose.yaml`**  
  Configuração para orquestração de serviços com Docker Compose.
 
- **`database.sql`**  
  Script SQL que cria e configura a base de dados necessária para o projeto.
 
- **`index.js`**  
  Ficheiro de entrada principal da aplicação Node.js.
 
- **`package.json`**  
  Declaração das dependências e configurações do projeto Node.js.
 
- **`package-lock.json`**  
  Detalha as versões exatas das dependências instaladas.

### Report

O desenvolvimento da aplicação seguiu os seguintes requisitos:

- Camada de Serviços REST:

Utilização de Node.js como servidor aplicacional.

- Documentação:

A API foi documentada utilizando o formato OpenAPI 3.0.
O ficheiro openapi.yaml descreve os endpoints, parâmetros e respostas disponíveis.

- Coleção Postman:

Foi disponibilizada uma coleção Postman para testar os serviços. Esta coleção inclui exemplos de requisições para todos os recursos.

- Configuração Multi-container:
Utilização do Docker para gerir os containers:

Container para o servidor de Node.js.

Container para a base de dados MySQL.

### Technologies

OpenAPI

Mysql

NodeJs

Javascript

### Frameworks and Libraries

NodeJs

### Ferramentas
Docker

Swagger editor

Postman

Visual studio code

Git hub

### Docker Links

https://hub.docker.com/repository/docker/inf24dw1g34/inf24dw1g34_rep1/general

https://hub.docker.com/repository/docker/inf24dw1g34/inf24dw1g34_rep2/general
 
### Equipa

António Oliveira a044409@umaia.pt

João Bernardo a045900@umaia.pt




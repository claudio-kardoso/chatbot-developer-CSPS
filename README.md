# API para Buscar Repositórios Mais Antigos em C# no GitHub

Esta API permite buscar os cinco repositórios mais antigos em C# de uma organização no GitHub. Foi projetada para integração com chatbots.

## Pré-requisitos
- Node.js (versão 14 ou superior)

## Instalação
1. Clone o repositório:
```bash
  git clone https://github.com/claudio-kardoso/chatbot-developer-CSPS
  cd chatbot-developer-CSPS
```

2. Instale as dependências:
```bash
  npm i
```
3. Inicie o servidor:
```bash
node index.js
```

## Como Testar
```bash
  npx jest
```
## Estrutura do Projeto
server.js: Contém as rotas e a lógica principal da API.
index.js: Responsável por inicializar o servidor.
server.test.js: Testes automatizados da rota /repositories.
mockData.js: Dados de exemplo para os testes.
```bash
challenge
├── chatbot-developer-CSPS
│   ├── index.js
│   ├── server.js
│   ├── server.test.js
│   ├── mockData.js
│   ├── package.json
│   ├── README.md
│   └── flow
│       └── flow-csps.json
```
## Documentação da API

#### Retorna os 5 repositorios mais antigos


-  GET https://chatbot-developer-csps.vercel.app/repositories

Retorna uma lista com os 5 primeiros repositórios da organização Takenet no GitHub.


# Central de Chamados

Sistema web para abertura, acompanhamento e gerenciamento de chamados internos. A aplicação permitirá que usuários registrem solicitações e acompanhem seu andamento, enquanto atendentes e administradores organizam o atendimento, atualizam a situação e mantêm o histórico de cada chamado.

## Objetivo

Desenvolver uma aplicação full stack que resolva um problema comum de organização de solicitações e demonstre conhecimentos em:

- Desenvolvimento de API REST;
- Criação e consumo de endpoints;
- Autenticação e autorização de usuários;
- Aplicação de regras de negócio;
- Integração com banco de dados relacional;
- Validação de dados no front-end e no back-end;
- Organização do código em camadas;
- Versionamento com Git e GitHub.

## Status do projeto

> Em planejamento e desenvolvimento inicial.

## Funcionalidades planejadas

- Cadastro e autenticação de usuários;
- Abertura de chamados;
- Classificação por categoria e prioridade;
- Atribuição de chamados a atendentes;
- Atualização da situação do chamado;
- Inclusão de comentários durante o atendimento;
- Registro do histórico de alterações;
- Pesquisa e filtragem de chamados;
- Dashboard com indicadores básicos;
- Gerenciamento de usuários, categorias e permissões.



## Regras de negócio planejadas

- Todo chamado deverá possuir título, descrição, categoria e prioridade;
- O solicitante poderá visualizar somente os próprios chamados;
- Apenas atendentes e administradores poderão alterar a situação de um chamado;
- Um chamado resolvido não poderá ser editado normalmente;
- A resolução de um chamado deverá possuir uma descrição da solução aplicada;
- O cancelamento deverá possuir uma justificativa;
- Toda mudança de situação deverá ser registrada no histórico;
- O e-mail de cada usuário deverá ser único;
- Senhas nunca serão armazenadas em texto puro;
- A API deverá validar os dados independentemente das validações realizadas na interface.

## Tecnologias previstas

### Front-end

- HTML5;
- CSS3;
- JavaScript;
- jQuery;
- Bootstrap.

### Back-end

- Node.js;
- Express;
- API REST;
- Autenticação com JSON Web Token (JWT);
- Hash de senhas.

### Banco de dados

- MySQL;



## Organização planejada

O back-end será organizado em camadas para separar as responsabilidades da aplicação:

```text
src/
├── config/          # Configurações da aplicação e do banco de dados
├── controllers/     # Entrada e saída das requisições HTTP
├── services/        # Regras de negócio
├── repositories/    # Acesso ao banco de dados
├── routes/          # Definição das rotas da API
├── middlewares/     # Autenticação, autorização e tratamento de erros
├── validators/      # Validação dos dados recebidos
└── public/          # Interface construída com HTML, Bootstrap e JavaScript
```


## Autor

Desenvolvido por **Felippe Castro**.

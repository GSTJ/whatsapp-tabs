# 👨‍💻 Whatsapp Tabs

## ❓ O que ~~é~~ foi o Whatsapp Tabs?

---

O Whatsapp Tabs foi um projeto criado em 2019 para facilitar a comunicação entre empresas e clientes. Hoje em dia, com a disponibilidade do Whatsapp Business e a integração de grandes ferramentas, descontinuei o projeto.

---

Atualmente o Whatsapp não suporta mais de uma conexão em seu cliente oficial. Isso dificulta a comunicação com clientes em empresas que precisam de mais de um funcionário respondendo as mensagens.

O Whatsapp parece disponibilizar algumas soluções, mas somente para empresas grandes (Tentamos, mas não obtivemos resposta), então decidi implementar a funcionalidade com o que tinhamos (um número aprovado no Twillio)

## 🙋‍♂️ Quais as diferenças do cliente?

Além de você conseguir utilizar várias abas, a aplicação te dá a possibilidade utilizar diferentes logins e identificar quem enviou quais mensagens!

Cada usuário tem suas conversas privadas, públicas e não assignadas. É possivel encaminhar as conversas e marca-las como finalizadas para melhor controle e organização.

O backend usa a api do Twillio para se comunicar com o whatsapp, e isso trás algumas limitações, como o fato dela não suportar áudio ou figurinhas. Por outro lado, todo o envio de imagens e vídeos estão prontos!

Alguns recursos também estão sendo implementados, como a comunicação local entre contas. 🎅

## 👨‍🔬 Algumas das técnologias utilizadas:

### Servidor

Nodejs, Graphql (Apollo Server), MongoDB, Mongoose, Express, JWT, OAuth2, Websockets (Subscriptions do Apollo)

### Cliente

React, Apollo Client, Storybooks, Redux e Styled-components

# Whatsapp client

## 🚀 Iniciando

1.  **Crie um clone do repositório**

    ```sh
    git clone https://github.com/GSTJ/whatsapp-client-public
    ```

2.  **Altere as configurações.**

    A aplicação não foi desenvolvida inicialmente para uso público, então algumas coisas precisam ser adaptadas, como o proxy ao seu backend.
    Altere o proxy no package.json para o seu backend

3.  **Comece a desenvolver.**

    Navegue ao diretório principal e inicie o Gatsby em modo de desenvolvimento.

    ```sh
    cd whatsapp-client-public/
    yarn start
    ```

## Quais os motivos para usar um cliente não oficial?

Atualmente o Whatsapp não suporta mais de uma conexão em seu cliente oficial. Isso dificulta a comunicação com clientes em empresas que precisam de mais de um funcionário respondendo as mensagens.

O Whatsapp parece disponibilizar algumas soluções, mas somente para empresas grandes (Tentamos, mas não obtivemos resposta), então decidi implementar a funcionalidade com o que tinhamos (um número aprovado no Twillio)

## Quais as diferenças do cliente?

Além de você conseguir utilizar várias abas, a aplicação te dá a possibilidade de identificar quais funcionários enviaram quais mensagens, podendo controlar a comunicação com o cliente.

Cada usuário tem suas conversas privadas, públicas e não assignadas. É possivel encaminhar as conversas e marca-las como finalizadas para um controle visual melhor.

O backend usa a api do Twillio para se comunicar com o whatsapp, e isso trás algumas limitações, como o fato dela não suportar áudio ou figurinhas, mas todo o envio de imagens e vídeos estão prontos.

Alguns recursos também estão sendo implementados, como a intercomunicação de funcionários. (que está bugada no momento)
O suporte ao status das mensagem já foi implementado, mas somente com as comunicações externas.

## Técnologias utilizadas

React, Graphql (Apollo), Storybooks, Redux e Styled-components

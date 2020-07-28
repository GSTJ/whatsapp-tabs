# 💬 Whatsapp Tabs

[![Author](https://img.shields.io/badge/author-GSTJ-F2C702?style=flat-square)](https://github.com/GSTJ)
[![Languages](https://img.shields.io/github/languages/count/GSTJ/Whatsapp-Tabs?color=%23F2C702&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/GSTJ/Whatsapp-Tabs?color=F2C702&style=flat-square)](https://github.com/GSTJ/Whatsapp-Tabs/stargazers)
[![Forks](https://img.shields.io/github/forks/GSTJ/Whatsapp-Tabs?color=%23F2C702&style=flat-square)](https://github.com/GSTJ/Whatsapp-Tabs/network/members)
[![Contributors](https://img.shields.io/github/contributors/GSTJ/Whatsapp-Tabs?color=F2C702&style=flat-square)](https://github.com/GSTJ/Whatsapp-Tabs/graphs/contributors)

> Multiple users on Whatsapp! 🎉

--- ---

# :pushpin: Table of Contents

* [Installation](#construction_worker-installation)
* [FAQ](#postbox-faq)
* [Contributing - Found a bug? Missing a specific feature?](#tada-contributing--bug-issues)
* [License](#closed_book-license)

# :construction_worker: Installation

1. **Install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/)**

2. **Clone the repository**

   Via HTTPS: `git clone https://github.com/GSTJ/Whatsapp-Tabs.git`

   Via SSH: `git clone git@github.com:GSTJ/Whatsapp-Tabs.git`

3. **Follow further instructions**

    This repository is a monorepo, so there are two projects here with different instructions.

    #### 💻 Client

    https://github.com/GSTJ/Whatsapp-Tabs/tree/master/packages/client

    #### 👨‍💻 Server

    https://github.com/GSTJ/Whatsapp-Tabs/tree/master/packages/server

# :postbox: FAQ

### 🙋‍ What ~~is~~ was Whatsapp Tabs?

--- ---
**Update:** Whatsapp Tabs was a project created in 2019 to facilitate communication between companies and customers. With the availability of Whatsapp Business and the integration of great tools, I discontinued the project.
--- ---
Currently, Whatsapp does not support more than one connection on its official client. That made it challenging to communicate with customers in companies that need more than one employee to respond to messages.
Whatsapp seems to offer some solutions for large companies (I tried, but didn't get a response), so I decided to implement the functionality with what we had (a number approved on Twilio)

### 🙋‍♂️ What are the client's differences?

This one gives you the possibility to use multiple tabs with unique logins and identify who sent which messages!

Each user has their private, public, and unsigned conversations. It is possible to forward the chats and mark them as finished for better control and organization.

The backend uses the Twilio API to communicate with Whatsapp, and this brings some limitations, such as the fact that it does not support audio or stickers. On the other hand, sending images and videos are working!

Some features are also being implemented, such as intercommunication between accounts. 🎅


### 👨‍🔬 What are the technologies used?

Here are some of them:

#### 💻 Client

React, Apollo Client, Storybooks, Redux and Styled-components

#### 👨‍💻 Server

Nodejs, Graphql (Apollo Server), MongoDB, Mongoose, Express, JWT, OAuth2, Websockets (Apollo subscriptions)

# :tada: Contributing + :bug: Issues

They make the open-source community such a fantastic place to learn, inspire, and create. Any contributions you make are much appreciated.

Feel free to **file a new issue** with a respective title and description on the [Whatsapp Tabs](https://github.com/GSTJ/Whatsapp-Tabs/issues) repository.

If you already found a solution to your problem, **I would love to review your pull request**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# :closed_book: License

The project was released in 2019 and is under the [MIT license](https://github.com/GSTJ/Whatsapp-Tabs/master/LICENSE).

Made with 💖 by [**Gabriel Taveira**](https://github.com/GSTJ)  🚀

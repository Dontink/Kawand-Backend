# Kawand-Backend  
![CI](https://github.com/fastify/fastify-leveldb/workflows/CI/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@fastify/leveldb.svg?style=flat)](https://www.npmjs.com/package/@fastify/leveldb)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)  
Kawand Backend API, made with fastify  
![banner](https://media.discordapp.net/attachments/1023598916857499680/1194737825816531045/Banner.png?ex=65b1714e&is=659efc4e&hm=a6dcb89d13d13a5f5572c882647a0f484f12533a7126818c48426bf4ccea5b47&=&format=webp&quality=lossless&width=1440&height=422)  
### Endpoints  
|Endpoints|Request                 |
|---------|------------------------|
|/register|{"email":"",password:""}|
|/login   |{"email":"",password:""}|  

### Code Structure
```
Kawand-Backend/
├── src/
│   ├── routes/
│   │   ├── register.js
│   │   ├── login.js
│   │   └── decode.js
│   ├── usersData.js  // Make sure this file is here
│   └── index.js
├── package.json
└── package-lock.json

```
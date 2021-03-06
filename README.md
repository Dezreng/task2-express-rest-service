<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# auth tests
$ npm run test:auth
```

# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser.


# Express

|                      |                                                               |                            |
| -------------------- | ------------------------------------------------------------- | -------------------------- |
| Requests             | [Scenarios launched, Scenatios completed, Requests completed] | 667, 667, 3335             |
| Pesponse time (msec) | [min, max, median, p95, p99]                                  | 3, 2862, 164, 2296.3, 2473 |
| Mean response/sec    | [Mean response]                                               | 57.64                      |
| Scenario counts      | [visit]                                                       | 667, 100.00%               |
| Status Codes         | [code:count]                                                  | 200:2668, 201:667          |


# Fastify

|                       |                                                                |                                        |
| --------------------- | -------------------------------------------------------------- | -------------------------------------- |
| Requests              | [Scenarios launched, Scenatios completed, Requests completed]  | 675, 675, 3375                         |
| Pesponse time (msec)  | [min, max, median, p95, p99]                                   | 2, 2251, 116, 1781, 2100.8             |
| Mean response/sec     | [Mean response]                                                | 59.14                                  |
| Scenario counts       | [visit]                                                        | 675, 100.00%                           |
| Status Codes          | [code:count]                                                   | 200:2700, 201:675                      |


## Running application using Docker

To start the postgres containers and the application, use the command

```
docker-compose up -d
```
An alternative pull docker image from [docker hub repository](https://hub.docker.com/r/dezreng/rest-api)

```
docker pull dezreng/rest-api:latest
```

```
docker run -p 4000:4000 rest-api
```

Run tests in docker
To do this, go to the container and enter the command

```
npm run test:auth
```


.env example

```
NODE_ENV=development
PORT=
POSTGRES_PASSWORD=
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PORT=
```
Go to the postgres container

```
docker exec -it ID_Container bash
```

Command to enter the database and display the databases

```
psql -h postgres -p 5432 -d db -U user -W
```

```
\l
```
Check image for vulnerabilities

```
docker scan dezreng/rest-api
```
## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).

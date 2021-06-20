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
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

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

# Trivia game

## Description

Trivia game using ReactJS,  NodeJS and https://opentdb.com/ for the trivias.

## Installation

```
git clone https://github.com/diegoalmesp/trivia-game.git

yarn // or `npm i`

cd client && yarn // or `npm i`

cd ..

yarn // or npm start
```

## .env files

There are two `.env` files that can be omitted since the app will fallback to defaults in the config files, for both server and client.

The first .env file should be created in the root of the project with the content:

```
PORT=5000 
```

And the second one should be created inside the client folder with the following content:

```
REACT_APP_ENDPOINT=http://localhost:5000
REACT_APP_ENVIRONMENT=develop
```

_
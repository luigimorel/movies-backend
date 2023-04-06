# Introduction

This repo contains my solution to the recruitment task at IFMA

## The task

- Build a REST API to show movie directors

## Tools used

- Typescript
- Node.js (Express)
- MongoDB
- Docker
- Yarn

### Set up instructions

1. Clone the repository

```sh
$ git clone https://github.com/morelmiles/backend-task
```

2. Install the dependencies

```sh
$ npm install
```

3. Create a database (I use Docker on local machine)

```sh
$ docker pull mongo # Pull the mongo image from Docker Hub
$ docker run --name some-name -d mongo:tag  # Create a container
$ docker exec -it some-name sh # Terminal for the mongo container
$ root@3fdfdadd6690:/# mongosh # Launch mongo's shell
$ test> use ifma_test # Create a database named ifma_test
$ ifma_test # Database created succesfully
```

4. Copy the `env` variables and fill in the details

```sh
$ cp .env.example .env
```

5. Start the `dev` server

```sh
$ npm run dev
```

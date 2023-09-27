# project Setup Guide

welcome to the soydev! we use the `bun` as the main package manager for this project. Follow the steps below to set up your development environment:

## [1] fork the repository

first, fork this repository by clicking the "Fork" button in the top right corner of this page. this will create a copy of the repository in your GitHub account.

## [2] create a branch

create a new branch in your forked repository with a name that's relevant to the changes you intend to make. you can create a branch directly on the GitHub website.

## [3] install dependencies

install project dependencies using `bun`. run the following command in your project's root directory:

```bash
bun install
```

this will download and install all required packages from the `package.json`

## [4] setup prisma client

```bash
bunx prisma generate
```

this command will generate prisma client based on the schema.

## [5] running the app

to run the app in your local dev environment. use this command

```bash
bun dev
```

## [6] create a pull request

once you've made your changes, push your branch to your forked repository. then, create a PR to the `dev` branch of the original repository (not the `main` branch). please note that all PRs must target the `dev` branch for review.

## [7] CI/CD Checks

your PR will be reviewed and merged only when all CI checks have passed. ensure that your code meets the project's coding standards and that all tests are passing.

thanks for contributing nerd!

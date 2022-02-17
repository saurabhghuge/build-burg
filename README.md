# Build-Burg
## Fancy UI based application let's user build custom burger with addtion of ingrediants as per their need .  

## Features
  - User can build custom burger with thier preference of ingrediants.
  - 4 ingrediants option available.
  - Price of burger increase/decrease in realtime as user changes quantity.
  - User have order history available to view all own orders.
  - Authentication and Authorization is done by google Authentication service.
  - Database is Firebase Realtime database with user identity encryption

## Getting started
### Development Setup

After cloning the repository, execute the following commands in the root folder:

1. Install dependencies

```bash
npm install 

#or

yarn

#or

yarn install
```
2. If you will be working on the components source code, you can use the following command to start the webpack dev server:

```bash
## Start the dev babel server 
npm start
```


Remember that these commands must be executed in the root folder of the project.

3. Create a branch for your feature or fix:

```bash
# Move into a new branch for your feature
git checkout -b feat/thing
```

```bash
# Move into a new branch for your fix
git checkout -b fix/something
```

4. If your code passes all the tests, then push your feature/fix branch:

All commits that fix bugs or add features need a test.

```
# Test current code
yarn test:update # or npm run test:update

```

5. Be sure the package builds.

```
# Build current code
yarn build # or npm run build
```

> Note: ensure your version of Node is 14 or higher to run scripts

6. Send your pull request:

- You must send your pull request to the `staging` branch
- Your pull request will be reviewed by the maintainers and the maintainers will decide if it is accepted or not
- Once the pull request is accepted, the maintainers will merge it to the `main` branch

## Contributing
I welcome pull requests, bug fixes and issue reports. Before proposing a change, please discuss your change by raising an issue.

## Maintainer 

[Ghuge Saurabh](https://www.linkedin.com/in/saurabh-ghuge-02a681176/)

## License

[MIT](LICENSE) © Ghuge Saurabh

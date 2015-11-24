## API Requirements

### Flask

Install python modules Flask and MySQL-python

```sh
pip install Flask
```

and

```sh
pip install MySQL-python
```

### Testing API

To make calls to the API for testing purposes, a simple script was designed with node. To install node:

```sh
apt-get install -y nodejs
```

To execute the tests, the node modules included in the package.json must first be installed with the node package manager (npm):

Edit 1: The following command is no longer needed as the node modules are included in the repo. This is due to a linking error on the server I gave up on fixing because npm is linked with the deprecated nodejs instead of the latest node.

```sh
npm install
```

To run the test:

```sh
node api_test.js
```

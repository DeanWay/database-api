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

```sh
npm install
```

To run the test:

```sh
node api_test.js
```
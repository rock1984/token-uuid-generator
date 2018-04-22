# Token Generator

Token Generator using universally unique identifier (UUID) to generate tokens like:
* 94Y-AW2-B2U
* 7XZ-C38-A5A
* QGQ-62P-557

However, you can change it to generate in a different pattern.
These tokens meant to be typed by users. Therefore, it will generate tokens without using 0, 1, I, L and O.

This generator is based on https://github.com/jeanlescure/short-unique-id/blob/master/src/short-unique-id.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you have to get a development env running

You can install it using npm:

```
npm install --save token-generator
```

### Usage (Server-side)

Node.js:

```
const TokenGenerator = require('token-generator');
var uuid = new TokenGenerator();

const token = uuid.generate(); // 94Y-AW2-B2U
```

## Running the tests

Tests run using Jasmine:

```
npm test
```

You can use the command below to run tests while changing the source:
```
npm run watch
```

You can use the command below to generate coverage reports (lcov format):
```
npm run coverage
```

## Authors

* **Roberto Rocha Rodrigues** - *Initial work* - [rock1984](https://github.com/rock1984)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://github.com/jeanlescure/short-unique-id/

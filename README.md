<h1 align="center">@compactjs/limit</h1>
<h3 align="center">Limits a value to a defined range</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/limit" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/limit.svg">
  </a>
  <a href="https://github.com/CompactJS/limit/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CompactJS/limit" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/limit#readme">Homepage</a>
  ·
  <a href="https://github.com/CompactJS/limit/issues">Report Bug / Request Feature</a>
  ·
</p>

<p align="center">
</p>

## Table of Contents

- [About](#What-it-does)
- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## What it does

@compactjs/limit limits any number to a given range. If it exceeds the range, it start back at 0 and equally starts from maximum value if it falls below 0.

Use it to easily calculate hours, minutes or degrees.

## Install

### NPM:

```sh
npm install @compactjs/limit
```

### CDN:

```html
<script src="https://unpkg.com/@compactjs/limit/dist/index.umd.js"></script>
```


## Usage

### As module:

```javascript
import { limit } from '@compactjs/limit';
```

### Example:

```javascript
// hours
limit(25, 24); // returns: 1

// degrees
limit(90 - 180, 360); // returns: 270
```


## Run tests

```sh
npm run test
```


## Contact


👤 **Timo Bechtel <timo@bechtel.solutions>**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/limit/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request



### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/limit/blob/master/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

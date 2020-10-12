# [@fav/test.cli][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Coverage status][coverage-img]][coverage-url]

The command line tool for `@fav/test`.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/test.cli
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old versions of Node.js support it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/test.cli/` directory manually.*


## Usage

```js
$ npx fav-test [options] [files]
```

### Options

* **`--color, -c, --colors`**
  <br>... Force-enable color output. [boolean]

* **`--delay`**
  <br> ... Delay initial execution of root suite. [boolean]

* **`--retries`**
  <br> ... Retries times for failed test cases. [number]

* **`--recursive`**
  <br> ... Look for tests in subdirectories. [boolean]

* **`--slow, -s`**
  <br> ... Specify "slow" test threshold (in milliseconds). [number]

* **`--timeout, -t, --timeouts`**
  <br> ... Specify test timout threshold (in milliseconds). [number]


### Configuration file

`.fav-test.json` / `.fav-test.js`

```
{
    "color": boolean,
    "delay": boolean,
    "recursive": boolean,
    "slow": number,
    "timeout": number
}
```

## Checked

### Node.js (11〜14)

| Platform  |   11   |   12   |   13   |   14   |
|:---------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (4〜10)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|


## License

Copyright (C) 2020 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE is this distribution for more details.

[repo-url]: https://github.com/sttk/fav-test.cli/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/test.cli
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-test.cli.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-test.cli
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-test.cli/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-test.cli?branch=maste

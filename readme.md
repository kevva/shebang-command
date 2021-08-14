# shebang-command [![Build Status](https://travis-ci.org/kevva/shebang-command.svg?branch=master)](https://travis-ci.org/kevva/shebang-command)

> Get the command from a shebang


## Install

```
$ npm install shebang-command
```


## Usage

```js
import shebangCommand from 'shebang-command';

shebangCommand('#!/usr/bin/env node');
//=> 'node'

shebangCommand('#!/bin/bash');
//=> 'bash'
```


## API

### shebangCommand(string)

#### string

Type: `string`

String containing a shebang.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-shebang-command?utm_source=npm-shebang-command&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

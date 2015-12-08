tnbot
===

[![Build Status](https://travis-ci.org/tnRaro/tnbot.svg?branch=master)](https://travis-ci.org/tnRaro/tnbot)

탄봇

# Installation

```sh
$ npm install tnbot
```

# Usage

```js
import * as tnbot from "tnbot";

tnbot.addPluginDirectory("path/to/plugins");

tnbot.input("echo hello!", { permission: 0 })
.then(res => {
	console.log(res); // hello!
}, err => {
	console.error(err);
});

```

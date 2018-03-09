# nixconfig-toml

This a plugin for [nixconfig](https://npm.im/nixconfig) to add support for
loading [TOML](https://github.com/toml-lang/toml) based configuration files.
It supports loading files with the extension `.toml`.

## Example

```js
const nixconfig = require('nixconfig')
const config = nixconfig({
  loaders: require('nixconfig-toml')
})
```

## License

[MIT License](http://jsumners.mit-license.org/)

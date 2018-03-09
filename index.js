'use strict'

const fs = require('fs')
const toml = require('toml')

function nixconfigTomlLoader (file) {
  return toml.parse(fs.readFileSync(file).toString())
}

module.exports = {
  '.toml': nixconfigTomlLoader
}

'use strict'

const path = require('path')
const nixconfig = require('nixconfig')
const test = require('tap').test
const plugin = require('../')

test('load toml file correctly', (t) => {
  t.plan(3)
  const result = plugin['.toml'](path.join(__dirname, 'fixtures', 'example-0.4.0.toml'))
  t.ok(result.products)
  t.type(result.products, Array)
  t.is(result.products.length, 3)
})

test('works with nixconfig', (t) => {
  t.plan(1)
  process.env.nixconfig_config_home = path.join(__dirname, 'fixtures')
  const config = nixconfig({
    loaders: plugin,
    parentName: 'example-0.4.0',
    parentPath: path.join(__dirname, '..')
  })
  t.strictDeepEqual(config.get('array.key6'), [1, 2])
})

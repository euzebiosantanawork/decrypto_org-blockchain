const Table = require('cli-table3')
const crypto = require('crypto')
const fs = require('fs')
const util = require ('util')

const readFile = util.promisify(fs.readFile)

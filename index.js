var fs = require('fs')
var wav = require('wav')
var filename = process.argv[2]

var input
var reader = new wav.Reader()

function Surfer(path, options) {
  //this.fileWriter = wav.FileWriter(path, options)
}

Surfer.read = function read () {
  if (filename) {
    console.log('Header info for: %s', filename)
    input = fs.createReadStream(filename)
  }

  input.pipe(reader)

  reader.once('readable', function () {
    console.log(reader)
  })
}

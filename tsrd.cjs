const Fs = require('fs')
const Path = require('path')

const ensure =
  path => {
    const basename = Path.basename(path, '.js')
    const tsrd = `/// <reference types="./${basename}.d.ts" />\n`
    const content = Fs.readFileSync(path, 'utf8')
    if (!content.startsWith(tsrd)) {
      Fs.writeFileSync(path, tsrd + content)
    }
  }

const scan =
  dir => {
    const files = Fs.readdirSync(dir)
    for (const file of files) {
      const path = Path.join(dir, file)
      if (Fs.statSync(path).isDirectory()) {
        scan(path)
      } else if (Path.extname(path) === '.js') {
        ensure(path)
      }
    }
  }

scan('esm')

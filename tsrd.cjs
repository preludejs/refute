const Fs = require('fs')
const Path = require('path')

/** Prepends tripple-slash reference directives for js files to support typy information in deno. */
const prepend =
  dir => {
    const files = Fs.readdirSync(dir)
    for (const file of files) {
      const path = Path.join(dir, file)
      if (Fs.statSync(path).isDirectory()) {
        scan(path)
        continue
      }
      if (Path.extname(path) === '.js') {
        const basename = Path.basename(path, '.js')
        const tsrd = `/// <reference types="./${basename}.d.ts" />\n`
        const content = Fs.readFileSync(path, 'utf8')
        if (!content.startsWith(tsrd)) {
          Fs.writeFileSync(path, tsrd + content)
        }
      }
    }
  }

prepend('esm')

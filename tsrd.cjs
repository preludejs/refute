const Fs = require('fs')
const Path = require('path')

/** Prepends tripple-slash reference directives for js files to support typings in deno. */
const walk =
  dir =>
    Fs.readdirSync(dir).forEach(file => {
      const path = Path.join(dir, file)
      if (Fs.statSync(path).isDirectory()) {
        walk(path)
        return
      }
      if (Path.extname(path) === '.js') {
        const basename = Path.basename(path, '.js')
        const tsrd = `/// <reference types="./${basename}.d.ts" />\n`
        const content = Fs.readFileSync(path, 'utf8')
        if (!content.startsWith(tsrd)) {
          Fs.writeFileSync(path, tsrd + content)
        }
      }
    })

walk('esm')

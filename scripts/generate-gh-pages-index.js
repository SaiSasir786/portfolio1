import fs from 'fs'
import path from 'path'

const clientDir = path.resolve('dist', 'client')
const assetsDir = path.resolve(clientDir, 'assets')

if (!fs.existsSync(clientDir) || !fs.existsSync(assetsDir)) {
  throw new Error('dist/client/assets not found. Build the project before generating the Pages index.')
}

const files = fs.readdirSync(assetsDir)
const entryFile = files.find((file) => /^index-[a-zA-Z0-9]+\.js$/.test(file))

if (!entryFile) {
  throw new Error('Could not find client entry JS file in dist/client/assets.')
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Sai Sasir K — Gen-AI & ML Engineer portfolio" />
    <title>Ssk</title>
    <base href="/portfolio1/" />
  </head>
  <body class="dark">
    <div id="root"></div>
    <script type="module" src="./assets/${entryFile}"></script>
  </body>
</html>
`

fs.writeFileSync(path.resolve(clientDir, 'index.html'), html)
console.log(`Generated dist/client/index.html -> ./assets/${entryFile}`)

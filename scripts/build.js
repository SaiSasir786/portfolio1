import { spawnSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js')

const build = spawnSync(process.execPath, [viteBin, 'build'], {
  cwd: rootDir,
  stdio: 'inherit',
})

if (build.status !== 0) {
  process.exit(build.status ?? 1)
}

const generateIndex = spawnSync(process.execPath, [path.join(__dirname, 'generate-gh-pages-index.js')], {
  cwd: rootDir,
  stdio: 'inherit',
})

if (generateIndex.status !== 0) {
  process.exit(generateIndex.status ?? 1)
}

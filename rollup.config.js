import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import svgr from '@svgr/rollup'
import pkg from './package.json'

const banner = `/*
 * ${pkg.name}
 * ${pkg.description}
 * v${pkg.version}
 * ${pkg.license} License
 */
`

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'cjs',
      strict: true,
      exports: 'named',
      banner,
    },
    {
      file: pkg.module,
      format: 'esm',
      strict: true,
      exports: 'named',
      banner,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript(),
    resolve(),
    svgr(),
    sourceMaps(),
    terser({ format: { comments: false } }),
  ],
}

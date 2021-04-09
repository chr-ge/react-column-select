import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const banner = `/*
 * ${pkg.name}
 * ${pkg.description}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'umd',
      sourcemap: true,
      strict: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      banner
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      strict: true,
      banner
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript(),
    resolve(),
    sourceMaps(),
    terser({ format: { comments: false } }),
  ],
}

import typescript from 'rollup-plugin-typescript2';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

// delete old typings to avoid issues
require('fs').unlink('dist/index.d.ts', (err) => {});

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: pkg.browser,
      format: 'cjs'
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    terser()
  ]
},
{
  input: 'sample/src/index.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'sample',
    file: 'sample/dist/main.js'
  },
  plugins: [
    svelte({
      preprocess: autoPreprocess(),
      css: css => {
        css.write('sample/dist/main.css');
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    !production && livereload('sample/dist'),
    production && terser()
  ]
}];

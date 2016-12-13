// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const _env = process.env.npm_lifecycle_event || 'dev';
const _prod = _env.indexOf('prod') !== -1;


export default {
    entry: 'src/js/app.js',
    dest: 'build/js/app.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
            exclude: ['src/styles/**']
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(_env)
        }),
        _prod && uglify()
    ]
};

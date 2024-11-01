import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPlugin from 'eslint-plugin-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: globals.node,
      parser: typescriptParser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        { singleQuote: true, semi: true, trailingComma: 'es5' },
      ],
      semi: ['error', 'always'],
    },
    ignores: ['dist/**', 'node_modules/**'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

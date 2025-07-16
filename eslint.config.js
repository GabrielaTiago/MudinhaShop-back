import airbnbBase from 'eslint-config-airbnb-base';
import airbnbBaseRules from 'eslint-config-airbnb-base/rules/style';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import path from 'path';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
        tsconfigRootDir: __dirname,
      },
      globals: {
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...airbnbBase.rules,
      ...airbnbBaseRules.rules,
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
    },
  },
  prettier,
];

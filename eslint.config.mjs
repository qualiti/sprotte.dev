import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  eslintConfigPrettier,
);

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	{
		...js.configs.recommended,
		ignores: ['**/*.cjs', 'node_modules/**']
	},
	{
		ignores: ['node_modules/**', '**/*.cjs'],
		languageOptions: {
			ecmaVersion: 2025,
			sourceType: 'module',
			globals: {
				...globals.node
			}
		}
	},
	eslintConfigPrettier
];

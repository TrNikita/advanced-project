module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:i18next/recommended',
		'plugin:jsx-a11y/recommended',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'i18next',
		'jsx-a11y',
		'react-hooks',
	],
	'rules': {
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'always',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-filename-extension': [
			1,
			{ 'extensions': ['.js', '.jsx', '.tsx'] },
		],
		'no-unused-vars': 'warn',
		'react/react-in-jsx-scope': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react/button-has-type': 'warn',
		'no-undef': 'warn',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{ 'ts-ignore': 'allow-with-description' }],
		'@typescript-eslint/no-var-requires': 'off',
		'i18next/no-literal-string': ['error',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid', 'to'],
			},
		],
		'max-len': ['error', { ignoreComments: true, code: 90 }],
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/display-name': 'off',
		'jsx-a11y/no-autofocus': 'off'
	},
	globals: {
		'__IS_DEV__': true,
	},
	overrides: [
		{
			files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
				'max-len': 'off',
			},
		},
	],
};

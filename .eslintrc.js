module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:i18next/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
		'jsx-a11y',
		'react-hooks',
		'trn-plugin',
	],
	rules: {
		// 'indent': [
		// 	'error',
		// 	'tab',
		// ],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
		// 'react/jsx-indent': [2, 'tab'],
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'no-unused-vars': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react/button-has-type': 'warn',
		'no-undef': 'off',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{ 'ts-ignore': 'allow-with-description' },
		],
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: [
					'data-testid',
					'to',
					'target',
					'justify',
					'align',
					'direction',
					'gap',
					'role',
					'as',
					'border',
					'feature',
					'color',
					'variant'
				],
			},
		],
		'max-len': ['error', { ignoreComments: true, code: 120 }],
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/display-name': 'off',
		'jsx-a11y/no-autofocus': 'off',
		'react/no-array-index-key': 'off',
		'trn-plugin/path-checker': [
			'error',
			{
				alias: '@',
			},
		],
		'trn-plugin/layer-imports': [
			'error',
			{
				alias: '@',
				ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
			},
		],
		'trn-plugin/public-api-imports': [
			'error',
			{
				alias: '@',
				testFilesPatterns: [
					'**/*.test.*',
					'**/*.story.*',
					'**/StoreDecorator.tsx',
				],
			},
		],
		'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
		'import/order': [
			'error',
			{
				'newlines-between': 'never',
				groups: [
					'builtin',
					'external',
					'internal',
					'sibling',
					'parent',
					'index',
				],
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
					},
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/newline-after-import': ['error', { count: 1 }],
		'import/no-unresolved': 'off',
		'import/named': 'off',
		'import/default': 'off',
		'@typescript-eslint/no-namespace': [
			'error',
			{ allowDeclarations: true },
		],
		'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
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

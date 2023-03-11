import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;

	const babelLoader = buildBabelLoader(options);

	// Если не используем тайпскрипт - нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = buildCssLoader(isDev);

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader =
		{
			test: /\.(png|jpe?g|gif|woff2|woff)$/i,
			use: [
				{
					loader: 'file-loader',
				},
			],
		};

	return [
		babelLoader,
		typescriptLoader,
		cssLoader,
		svgLoader,
		fileLoader,
	];
}

import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import htmlWebpackPlugin from 'html-webpack-plugin';
// import webpack from 'webpack';
// import devServer from 'webpack-dev-server';
import pathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

export default function (): Configuration {
  return {
    entry: '/src/index.tsx',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(jsx?|tsx?)$/,
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [
        new pathsPlugin({ configFile: path.join(__dirname, 'tsconfig.json') }),
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        inject: 'head',
        scriptLoading: 'defer',
      }),
    ],
    devServer: {
      // publicPath: "/",
      historyApiFallback: true,
      open: true,
      port: 8000,
    },
  };
}

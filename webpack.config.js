/**
 * webpack2.0 配置文件 
 * @authors wuhongxu (wuhongxu1208@gmail.com)
 * @date    2017-03-10 01:52:00
 * @version 1.0.0
 * @link <link>https://zido.site/</link>
 * 
 */

'use strict'

const path = require('path')
const webpack = require('webpack')

//使用插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin('style/[name]-css-[hash:6].css')
const extractScss = new ExtractTextPlugin('style/[name]-scss-[hash:6].css')
const extractLess = new ExtractTextPlugin('style/[name]-less-[hash:6].css')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const rootPath = path.resolve(__dirname)
const srcPath = path.join(rootPath, 'src')
const env = process.env.NODE_ENV.trim()
const isDev = (env === 'development')

const common = {
  rootPath: rootPath,
  srcPath: srcPath,
  public: path.join(rootPath, 'dist'),
  indexHtml: path.join(srcPath, 'index.html'),
  staticDir: path.join(rootPath, 'static'),
}

if (isDev)
  common.entry = [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    path.join(common.srcPath, 'index.js')
]
else
  common.entry = {
    app: path.join(common.srcPath, 'index.js'),
    vendor: [
      'history',
      'react',
    ]
}


if (isDev)
  common.plugins = [
    new HtmlWebpackPlugin({
      template: common.indexHtml,
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR全局启用
    new webpack.NamedModulesPlugin(), // 在HMR更新的浏览器控制台中打印更易读的模块名称
]
else
  common.plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: common.indexHtml,
      inject: 'body'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // stataic目录下静态资源的复制
    new CopyWebpackPlugin([{
      context: commonPath.rootPath,
      from: 'static/*',
      ignore: ['*.md']
    }
    ])
]

const styleLoaders = {
  style: {
    loader: 'style-loader'
  },
  css: {
    loader: 'css-loader',
    options: {
      //将css进行hash编码，保证模块性，保证单独使用，而不会污染全局
      modules: true,
    }
  },
  postcss: {
    //css后处理器，这里主要是为了加载 autoprefixer 用来处理css前缀
    loader: 'postcss-loader'
  }
}

function handleStyle(plugin, list) {
  //如果是开发模式，删除数组中的第一个元素
  if (isDev)
    list.splice(0, 1)
  else {
    return plugin.extract(list)
  }
  return list
}

const webpackConfig = {
  entry: common.entry,
  output: {
    path: common.public,
    publicPath: '/', //让HMR知道在哪里加载热更新块所必需的
  },
  module: {
    //webpack1.0中可以省略 '-loader'，但是官方说法为了有明确的区分，在webpack2.0中，不能再省略
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      include: [
        path.join(common.rootPath, 'src'), //转换src路径下的代码
      ],
      exclude: /node_modules/, //忽略node_modules路径代码
    }, {
      test: /\.json$/,
      use: 'json-loader',
    }, {
      test: /.html$/,
      use: 'html-loader',
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name]-[hash:6].[ext]'
        },
      },
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name]-[hash:6].[ext]'
        },
      },
    }, {
      test: /\.css$/,
      use: (handleStyle(extractCss, [
        styleLoaders.style,
        styleLoaders.css,
        styleLoaders.postcss
      ]))
    }, {
      test: /\.scss$/,
      use: (handleStyle(extractScss, [
        styleLoaders.style,
        styleLoaders.css,
        styleLoaders.postcss,
        {
          loader: 'sass-loader'
        }
      ]))
    }, {
      test: /\.less$/,
      use: (handleStyle(extractLess, [
        styleLoaders.style,
        styleLoaders.css,
        styleLoaders.postcss,
        {
          loader: 'less-loader'
        }
      ]))
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {

    } //为某些路径设置别名
  },
  plugins: (function() {
    //如果是开发模式不将样式文件进行分离。tip:为了实现热加载
    if (!isDev)
      return common.plugins
    common.plugins.push(extractCss)
    common.plugins.push(extractLess)
    common.plugins.push(extractScss)
    //返回组装完成后的plugins
    return common.plugins
  })(),
}
if (isDev) {
  webpackConfig.context = path.resolve(__dirname, 'src')
  webpackConfig.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  }
}

module.exports = webpackConfig
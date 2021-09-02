const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const pagesObj = {
  devcreate: { entry: 'src/devtools/index.js', filename: 'devcreate.html' }
}
const chromeName = ['popup', 'devtools', 'options']
const plugins = [
  {
    from: path.resolve('src/manifest.json'),
    to: `${path.resolve('dist')}/manifest.json`
  },
  {
    from: path.resolve('src/assets/logo.png'),
    to: `${path.resolve('dist')}/img/logo.png`
  },
  {
    from: path.resolve('src/background/background.js'),
    to: `${path.resolve('dist')}/js/background.js`
  },
  {
    from: path.resolve('src/content/content.js'),
    to: `${path.resolve('dist')}/js/content.js`
  },
]

chromeName.forEach(name => {
  pagesObj[name] = {
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            // less vars，customize ant design theme
          },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true
        }
      }
    },
    entry: `src/${name}/main.js`,
    filename: `${name}.html`
  }
})

const vueConfig = {
  lintOnSave:false, //关闭eslint检查
  // chainWebpack: config => config.optimization.minimize(false),
  pages: pagesObj,
  configureWebpack: {
    entry: {
      // background: './src/background/background.js',
      // content: './src/content/content.js'
    },
    output: {
      filename: 'js/[name].js'
    },
    plugins: [new CopyWebpackPlugin(plugins)]
  },
  filenameHashing: false,
  productionSourceMap: false
}

module.exports = vueConfig

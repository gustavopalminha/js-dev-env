import path from 'path';

export default {
  debug: true,					// mostra alguma info de debug
  devtool: 'inline-source-map',			//util para usar na console do browser com codigo minimificado..
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',				// poderia ser alterado para node caso se queira construir uma lib...
  //Este bloco só vai simular a criação do ficheiro mas nada vai ser criado....
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}

module.exports={
entry:'./src/js/main.js',
output: {
    path: __dirname+'/dist',
    filename: 'bundle.js'
  },
  module:{
    rules:[
      { 
          test: /\.css$/, 
          use: [ 'style-loader', 'css-loader' ]
      }
  ]
}

}
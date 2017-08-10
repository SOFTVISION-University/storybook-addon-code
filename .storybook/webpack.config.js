
module.exports = {
  module: {
    rules: [
    {
      test: /\.tsx$/,
      loader: "raw-loader"
    },
    {
        test: /\.css?$/,
        loaders: ['style-loader', 'raw-loader']
    }],
  }
  
};